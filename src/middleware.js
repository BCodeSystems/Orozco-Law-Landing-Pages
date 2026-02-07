import { NextResponse } from "next/server";

export function middleware(request) {
  const requestHeaders = new Headers(request.headers);

  // Capture host from the incoming request and pass it along explicitly
  const host = requestHeaders.get("x-forwarded-host") || requestHeaders.get("host") || "";
  requestHeaders.set("x-site-host", host);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

// Run middleware on all pages (exclude static assets)
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|gif|svg|webp|ico)$).*)"],
};