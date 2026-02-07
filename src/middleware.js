// BCode Systems — deployment trigger (no functional change)
import { NextResponse } from "next/server";

export function middleware(request) {
  const headers = new Headers(request.headers);

  //  Most reliable: what domain the user actually hit
  const hostname = request.nextUrl.hostname
    .replace(/^www\./, "")
    .toLowerCase();

  headers.set("x-site-host", hostname);

  return NextResponse.next({
    request: { headers },
  });
}

export const config = {
  matcher: ["/((?!_next|favicon.ico).*)"],
};