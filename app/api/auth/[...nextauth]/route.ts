
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

import { JWT } from "next-auth/jwt";
import { Session } from "next-auth";
import NextAuth, { type NextAuthOptions } from "next-auth";
import type { DefaultSession } from "next-auth";


// Extend NextAuth's Session type to include `id`
declare module "next-auth" {
    interface Session {
      user: {
        id: string; // Add user ID
        email: string;
      } & DefaultSession["user"];
    }
  }
  
  declare module "next-auth/jwt" {
    interface JWT {
      sub: string; // Ensure sub contains user ID
      email: string;
    }
  }

export const authOptions: NextAuthOptions= {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "user@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user) throw new Error("No account matches this email.");

        const isValid = await bcrypt.compare(credentials.password, user.passwordHash);
        if (!isValid) throw new Error("Incorrect password.");

        return { id: user.id, email: user.email };
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: "jwt"  },

  callbacks: {
    async jwt({ token, user }: { token: JWT; user?: any}) {
      if (user) {
        token.sub = user.id;// Ensure user ID is included
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      if (session.user) {
        session.user.id = token.sub as string; // Ensure user ID is included
        session.user.email = token.email as string;
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
