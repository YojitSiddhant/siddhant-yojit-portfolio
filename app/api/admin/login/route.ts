import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { adminCookieName, getAdminSessionToken, isValidAdminPassword } from "@/lib/admin-auth";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const body = (await request.json()) as Record<string, unknown>;
  const password = typeof body.password === "string" ? body.password : "";

  if (!isValidAdminPassword(password)) {
    return NextResponse.json({ error: "Incorrect admin password." }, { status: 401 });
  }

  const cookieStore = await cookies();
  cookieStore.set(adminCookieName, getAdminSessionToken(), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  return NextResponse.json({ ok: true });
}
