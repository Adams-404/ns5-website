import { NextRequest, NextResponse } from 'next/server';

export function proxy(req: NextRequest) {
  const url = req.nextUrl;
  const hostname = req.headers.get('host') || '';

  // Check if the hostname starts with 'admin.'
  // In local dev, this would be admin.localhost:3000
  if (hostname.startsWith('admin.')) {
    // Rewrite to the /admin route
    const newUrl = new URL(`/admin${url.pathname}`, req.url);
    return NextResponse.rewrite(newUrl);
  }

  return NextResponse.next();
}

// Only run on non-api and non-static routes
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|logo.svg).*)',
  ],
};
