import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const publicRoutes = ["/login", "/verification"];
const authenticatedRoutes = ["/dashboard/:path*"];
const onboardingRoutes = ["/onboarding/:path*"];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const privyToken = request.cookies.get("privy-token");
  const isAuthenticated = !!privyToken;
  const onboardedCookie = request.cookies.get("onboarded");
  const onboarded = onboardedCookie ? onboardedCookie.value === "true" : false;

  const redirectTo = (path: string) => {
    const url = request.nextUrl.clone();
    url.pathname = path;
    return NextResponse.redirect(url);
  };

  // Handle authenticated routes
  if (
    authenticatedRoutes.some((route) => {
      const routePath = route.replace(":path*", "");
      return pathname.startsWith(routePath);
    })
  ) {
    if (!isAuthenticated) {
      return redirectTo("/login");
    }
  }

  // Handle public routes
  if (
    publicRoutes.some((route) => {
      const routePath = route.replace(":path*", "");
      return pathname.startsWith(routePath);
    })
  ) {
    if (isAuthenticated  && onboarded) {
      return redirectTo("/dashboard/practice");
    }
  }

  // Handle onboarding routes
  if (
    onboardingRoutes.some((route) => {
      const routePath = route.replace(":path*", "");
      return pathname.startsWith(routePath);
    })
  ) {
    if (!isAuthenticated) {
      return redirectTo("/login");
    }
  }

  // Handle root path
  if (pathname === "/") {
    if (isAuthenticated) {
      if (onboarded) {
        return redirectTo("/dashboard/practice");
      } else {
        return redirectTo("/onboarding/username");
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|public).*)"],
};
