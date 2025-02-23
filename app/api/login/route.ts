import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();
    console.log("Received login request for:", email);

    const user = await prisma.user.findUnique({
      where: { email },
    });
    console.log("User found:", user);

    if (!user) {
      console.log("No account matches this email.");
      return NextResponse.json({ error: "No account matches this email" }, { status: 404 });
    }

    const passwordMatch = await bcrypt.compare(password, user.passwordHash);
    console.log("Password match:", passwordMatch);

    if (!passwordMatch) {
      return NextResponse.json({ error: "Incorrect password" }, { status: 401 });
    }

    return NextResponse.json({ success: "Login Successful!", user });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
