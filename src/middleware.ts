import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Force HTTPS redirect with proper 301 status
  if (request.nextUrl.protocol === 'http:' && process.env.NODE_ENV === 'production') {
    return NextResponse.redirect(
      `https://${request.nextUrl.host}${request.nextUrl.pathname}${request.nextUrl.search}`,
      301
    );
  }

  const response = NextResponse.next();
  
  // Add security headers for all pages
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'origin-when-cross-origin');
  
  return response;
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ]
}; 