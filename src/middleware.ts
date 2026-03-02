import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";
import { ADMIN_EMAILS } from "@/lib/admin-emails";

export default auth((req) => {
  const { pathname } = req.nextUrl;
  const session = req.auth;

  if (pathname.startsWith("/dashboard")) {
    if (!session) {
      return NextResponse.redirect(new URL("/", req.url));
    }
    if (!session.user.isPaid) {
      return NextResponse.redirect(new URL("/apply", req.url));
    }
  }

  if (pathname.startsWith("/admin")) {
    if (!session || !ADMIN_EMAILS.includes(session.user.email ?? "")) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }
});

export const config = {
  matcher: ["/dashboard/:path*", "/admin/:path*"],
};
