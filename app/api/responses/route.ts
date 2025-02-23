import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"; 

export async function GET() {
  try {
    console.log("DATABASE_URL:", process.env.DATABASE_URL);
    const responses = await prisma.response.findMany(); // No sorting, just fetch all
    return NextResponse.json(responses);
  } catch (error) {
    console.error("Prisma Fetch Error:", error.message, error);
    return NextResponse.json({ error: "Failed to fetch responses" }, { status: 500 });
  }
}
