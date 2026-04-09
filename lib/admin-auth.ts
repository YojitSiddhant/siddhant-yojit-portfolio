import { createHash, timingSafeEqual } from "node:crypto";

export const adminCookieName = "portfolio_admin_session";

function hashValue(value: string) {
  return createHash("sha256").update(value).digest();
}

export function getAdminPassword() {
  return process.env.ADMIN_PASSWORD ?? "admin123";
}

export function getAdminSessionToken() {
  return createHash("sha256").update(getAdminPassword()).digest("hex");
}

export function isValidAdminPassword(password: string) {
  const expected = hashValue(getAdminPassword());
  const received = hashValue(password);
  return timingSafeEqual(expected, received);
}

export function isValidAdminSession(session: string | undefined) {
  if (!session) {
    return false;
  }

  const expected = Buffer.from(getAdminSessionToken(), "utf8");
  const received = Buffer.from(session, "utf8");

  if (expected.length !== received.length) {
    return false;
  }

  return timingSafeEqual(expected, received);
}
