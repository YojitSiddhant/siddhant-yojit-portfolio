import { NextResponse } from "next/server";
import { saveContactMessage } from "@/lib/contact-messages";

export const runtime = "nodejs";

function asField(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  const body = (await request.json()) as Record<string, unknown>;

  const name = asField(body.name);
  const email = asField(body.email);
  const subject = asField(body.subject);
  const message = asField(body.message);

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  await saveContactMessage({
    name: name.slice(0, 120),
    email: email.slice(0, 160),
    subject: subject.slice(0, 160),
    message: message.slice(0, 2000),
  });

  return NextResponse.json({ ok: true });
}
