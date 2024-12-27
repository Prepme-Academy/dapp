import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const publicRoutes = ["/login", "/verification", "/onboarding/:path*"];
const authenticatedRoutes = ["/dashboard/:path*"];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const privyToken = request.cookies.get("privy-token");
  const isAuthenticated = !!privyToken;

  const redirectTo = (path: string) => {
    const url = request.nextUrl.clone();
    url.pathname = path;
    return NextResponse.redirect(url);
  };

  // Handle authenticated routes
  if (authenticatedRoutes.some((route) => {
    const routePath = route.replace(":path*", "");
    return pathname.startsWith(routePath);
  })) {
    if (!isAuthenticated) {
      return redirectTo("/login");
    }
  }

  // Handle public routes
  if (publicRoutes.some((route) => {
    const routePath = route.replace(":path*", "");
    return pathname.startsWith(routePath);
  })) {
    if (isAuthenticated) {
      return redirectTo("/dashboard/practice");
    }
  }

  // Handle root path
  if (pathname === "/") {
    if (isAuthenticated) {
      return redirectTo("/dashboard/practice");
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|public).*)",
  ],
};