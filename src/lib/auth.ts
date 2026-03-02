import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/db";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      isPaid: boolean;
      applicationStatus: string | null;
    };
  }
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      const app = await prisma.application.findUnique({
        where: { userId: user.id },
        select: { isPaid: true, status: true },
      });
      session.user.id = user.id;
      session.user.isPaid = app?.isPaid ?? false;
      session.user.applicationStatus = app?.status ?? null;
      return session;
    },
  },
  pages: {
    signIn: "/apply",
  },
});
