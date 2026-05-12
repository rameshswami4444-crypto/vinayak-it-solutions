export const ADMIN_SESSION_COOKIE = 'vinayak_admin_session';

function getSessionSecret() {
  return (
    process.env.ADMIN_SESSION_SECRET ||
    `${process.env.ADMIN_USERNAME || 'admin'}:${process.env.ADMIN_PASSWORD || 'password'}:vinayak`
  );
}

function toHex(buffer) {
  return Array.from(new Uint8Array(buffer))
    .map((value) => value.toString(16).padStart(2, '0'))
    .join('');
}

async function signPayload(payload) {
  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(getSessionSecret()),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );

  const signature = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(payload));
  return toHex(signature);
}

export async function createAdminSessionToken(username) {
  const payload = `${username}:${Date.now()}`;
  const signature = await signPayload(payload);
  return `${payload}.${signature}`;
}

export async function verifyAdminSessionToken(token) {
  if (!token) {
    return false;
  }

  const separatorIndex = token.lastIndexOf('.');

  if (separatorIndex === -1) {
    return false;
  }

  const payload = token.slice(0, separatorIndex);
  const signature = token.slice(separatorIndex + 1);
  const expectedSignature = await signPayload(payload);

  if (signature !== expectedSignature) {
    return false;
  }

  const [username] = payload.split(':');
  return Boolean(username) && username === process.env.ADMIN_USERNAME;
}
