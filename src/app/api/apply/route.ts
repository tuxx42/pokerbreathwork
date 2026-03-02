import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { name, email, stakes, message } = await req.json();

  if (!name || !email || !stakes || !message) {
    return NextResponse.json({ error: "All fields are required" }, { status: 400 });
  }

  // Prevent duplicate applications
  const existing = await prisma.application.findUnique({
    where: { userId: session.user.id },
  });
  if (existing) {
    return NextResponse.json(
      { error: "You have already submitted an application" },
      { status: 409 }
    );
  }

  await prisma.application.create({
    data: {
      userId: session.user.id,
      name: String(name).trim(),
      email: String(email).trim(),
      stakes: String(stakes).trim(),
      message: String(message).trim(),
    },
  });

  return NextResponse.json({ ok: true });
}
