import { NextResponse } from 'next/server';
import { ADMIN_SESSION_COOKIE, createAdminSessionToken } from '@/lib/auth';

export async function POST(request) {
  const { username, password } = await request.json();
  const adminUsername = process.env.ADMIN_USERNAME;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminUsername || !adminPassword) {
    return NextResponse.json(
      { error: 'Admin credentials are not configured.' },
      { status: 500 }
    );
  }

  if (username !== adminUsername || password !== adminPassword) {
    return NextResponse.json({ error: 'Invalid username or password.' }, { status: 401 });
  }

  const token = await createAdminSessionToken(username);
  const response = NextResponse.json({ success: true });

  response.cookies.set({
    name: ADMIN_SESSION_COOKIE,
    value: token,
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 60 * 60 * 8,
  });

  return response;
}
