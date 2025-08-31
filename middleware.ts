import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  console.log("Middleware running for:", request.nextUrl.pathname);

  // Always redirect to add locale parameter for testing
  const url = request.nextUrl.clone();
  url.searchParams.set("locale", "en");
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/"],
};
