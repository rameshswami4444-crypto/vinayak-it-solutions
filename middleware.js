import { NextResponse } from 'next/server';
import { ADMIN_SESSION_COOKIE, verifyAdminSessionToken } from '@/lib/auth';

const loginPath = '/admin/login';

export async function middleware(request) {
  const token = request.cookies.get(ADMIN_SESSION_COOKIE)?.value;
  const isAuthenticated = await verifyAdminSessionToken(token);
  const { pathname } = request.nextUrl;
  const isLoginRoute = pathname === loginPath;
  const isProtectedAdminRoute = pathname === '/admin' || pathname.startsWith('/admin/');

  if (isLoginRoute && isAuthenticated) {
    return NextResponse.redirect(new URL('/admin', request.url));
  }

  if (isLoginRoute) {
    return NextResponse.next();
  }

  if (!isAuthenticated && isProtectedAdminRoute) {
    return NextResponse.redirect(new URL(loginPath, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
