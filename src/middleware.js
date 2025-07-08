// src/middleware.js
import { NextResponse } from 'next/server';

export async function middleware(request) {
  // Example: Log the request path
  console.log('Request path:', request.nextUrl.pathname);

  // You can add your logic here, e.g., authentication, redirects, header modifications

  // Continue to the next middleware or the requested page
  return NextResponse.next();
}

// Optional: Configure the matcher to run middleware on specific paths
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - any files in the public folder (e.g., images, fonts)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)',
  ],
};