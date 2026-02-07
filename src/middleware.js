import { NextResponse } from "next/server";

export function middleware(request) {
  const headers = new Headers(request.headers);

  const host =
    request.headers.get("x-forwarded-host") ||
    request.headers.get("host") ||
    "";

  const normalizedHost = host
    .split(",")[0]
    .trim()
    .replace(/:\d+$/, "")
    .replace(/^www\./, "");

  // 🔑 THIS IS THE IMPORTANT PART
  headers.set("x-site-host", normalizedHost);

  return NextResponse.next({
    request: {
      headers,
    },
  });
}

export const config = {
  matcher: ["/((?!_next|favicon.ico).*)"],
};