import { randomUUID } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { get, list, put } from "@vercel/blob";

export type ContactMessage = {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  submittedAt: string;
};

const dataDirectory = path.join(process.cwd(), "data");
const messagesFile = path.join(dataDirectory, "contact-messages.json");
const blobPrefix = "contact-messages/";

function useBlobStorage() {
  return Boolean(process.env.BLOB_READ_WRITE_TOKEN);
}

async function ensureMessagesFile() {
  await mkdir(dataDirectory, { recursive: true });

  try {
    await readFile(messagesFile, "utf8");
  } catch {
    await writeFile(messagesFile, "[]", "utf8");
  }
}

async function streamToText(stream: ReadableStream<Uint8Array>) {
  const reader = stream.getReader();
  const chunks: Uint8Array[] = [];

  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }

    if (value) {
      chunks.push(value);
    }
  }

  const totalLength = chunks.reduce((sum, chunk) => sum + chunk.length, 0);
  const merged = new Uint8Array(totalLength);
  let offset = 0;

  for (const chunk of chunks) {
    merged.set(chunk, offset);
    offset += chunk.length;
  }

  return new TextDecoder().decode(merged);
}

async function readBlobMessages() {
  const { blobs } = await list({
    prefix: blobPrefix,
    limit: 1000,
  });

  const parsed = await Promise.all(
    blobs.map(async (blob) => {
      const response = await get(blob.pathname, { access: "private" });

      if (!response || response.statusCode !== 200) {
        return null;
      }

      try {
        const text = await streamToText(response.stream);
        return JSON.parse(text) as ContactMessage;
      } catch {
        return null;
      }
    }),
  );

  return parsed
    .filter((message): message is ContactMessage => Boolean(message))
    .sort((left, right) => new Date(right.submittedAt).getTime() - new Date(left.submittedAt).getTime());
}

async function saveBlobMessage(message: ContactMessage) {
  const pathname = `${blobPrefix}${message.submittedAt}-${message.id}.json`;

  await put(pathname, JSON.stringify(message, null, 2), {
    access: "private",
    allowOverwrite: false,
    contentType: "application/json",
    addRandomSuffix: false,
  });
}

export async function readContactMessages() {
  if (useBlobStorage()) {
    return readBlobMessages();
  }

  await ensureMessagesFile();
  const raw = await readFile(messagesFile, "utf8");

  try {
    const parsed = JSON.parse(raw) as ContactMessage[];
    return parsed.sort((left, right) => {
      return new Date(right.submittedAt).getTime() - new Date(left.submittedAt).getTime();
    });
  } catch {
    return [];
  }
}

export async function saveContactMessage(input: Omit<ContactMessage, "id" | "submittedAt">) {
  const nextMessage: ContactMessage = {
    id: randomUUID(),
    submittedAt: new Date().toISOString(),
    ...input,
  };

  if (useBlobStorage()) {
    await saveBlobMessage(nextMessage);
    return nextMessage;
  }

  const messages = await readContactMessages();
  messages.unshift(nextMessage);
  await writeFile(messagesFile, JSON.stringify(messages, null, 2), "utf8");

  return nextMessage;
}
