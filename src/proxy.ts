import { NextRequest, NextResponse } from 'next/server';

/**
 * Middleware to handle subdomain routing (e.g., admin.ns5.org)
 * and prevent infinite rewrite loops.
 */
export default function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const hostname = req.headers.get('host') || '';
  const pathname = url.pathname;

  // Handle 'admin.' subdomain
  if (hostname.startsWith('admin.')) {
    // 1. Prevent loop: if already at /admin, or requesting a static asset
    // the matcher should catch most of these, but we double-check here.
    if (pathname.startsWith('/admin')) {
      return NextResponse.next();
    }

    // 2. Rewrite root and other paths to the /admin route
    // Note: If you want admin.ns5.org/ventures to show the main ventures page,
    // you would add more conditions here. Currently, it rewrites to /admin/ventures.
    const newUrl = new URL(`/admin${pathname}`, req.url);
    return NextResponse.rewrite(newUrl);
  }

  return NextResponse.next();
}

// Improved matcher to exclude common static assets and Next.js internals
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - Common static files in public or app (favicon, logo, icon, manifest, etc.)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|logo.svg|icon.svg|favicon.svg|robots.txt|sitemap.xml|manifest.json|apple-icon.png).*)',
  ],
};
