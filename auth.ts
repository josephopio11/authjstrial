import db from "@/lib/database";
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import { Adapter } from "next-auth/adapters";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  trustHost: true,
  theme: {
    logo: "/vercel.svg",
  },
  adapter: PrismaAdapter(db) as Adapter,
  callbacks: {
    session({ session, user }) {
      session.user.role = user.role;
      return session;
    },
  },
  providers: [
    Google,
    GitHub,
    // Credentials({
    //   credentials: {
    //     email: {},
    //     password: {},
    //   },
    //   authorize: async (credentials) => {
    //     let user = null;

    //     if (!credentials.email) return;
    //     if (!credentials.password) return;

    //     const pwHash = hashPassword(credentials.password);
    //     user = await db.user.findUnique({
    //       where: {
    //         email: credentials.email,
    //       },
    //     });
    //     if (user.)
    //   },
    // }),
  ],
});
