import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token_bookloop")?.value;
  const { pathname } = request.nextUrl;

  const isAuthRoute = pathname === "/auth" || pathname.startsWith("/auth/");
  const isRootRoute = pathname === "/";
  const isProtectedRoute = ["/dashboard", "/upload"].some((route) =>
    pathname === route || pathname.startsWith(`${route}/`)
  );

  // Si tiene token y entra a / o /auth → redirigir a /dashboard
  if (token && (isRootRoute || isAuthRoute)) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // Si NO tiene token y entra a /dashboard o /upload → redirigir a /auth
  if (!token && isProtectedRoute) {
    return NextResponse.redirect(new URL("/auth", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/auth/:path*", "/dashboard/:path*", "/upload/:path*"],
};
