/**
 * Client-side stubs for content/data actions.
 * Replace these with CMS / database calls when a backend is connected.
 */

export function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim());
}

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function subscribeToNewsletter(email: string): Promise<{ ok: true }> {
  await delay(600);
  if (import.meta.env.DEV) console.info("[newsletter] subscribe", email);
  return { ok: true };
}

export type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export async function sendContactMessage(payload: ContactPayload): Promise<{ ok: true }> {
  await delay(800);
  if (import.meta.env.DEV) console.info("[contact] message", payload);
  return { ok: true };
}
