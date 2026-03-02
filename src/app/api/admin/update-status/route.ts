import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { ADMIN_EMAILS } from "@/lib/admin-emails";

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session || !ADMIN_EMAILS.includes(session.user.email ?? "")) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const { id, status } = await req.json();

  if (!id || !["PENDING", "APPROVED", "REJECTED"].includes(status)) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  await prisma.application.update({
    where: { id },
    data: { status },
  });

  return NextResponse.json({ ok: true });
}
