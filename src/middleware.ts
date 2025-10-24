import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token_bookloop")?.value;
  const { pathname } = request.nextUrl;

  const isAuthRoute = pathname.startsWith("/auth");
  const isRootRoute = pathname === "/";
  const isDashboardRoute = pathname.startsWith("/dashboard");

  // Si está logueado y entra a / o /auth → redirigir a /dashboard
  if (token && (isAuthRoute || isRootRoute)) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // Si NO está logueado y entra a /dashboard → redirigir a /auth
  if (!token && isDashboardRoute) {
    return NextResponse.redirect(new URL("/auth", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
