import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"; 
export async function GET() {
  try {
    const responses = await prisma.response.findMany({
      orderBy: { date: "desc" },
    });
    return NextResponse.json(responses);
  } catch (error) {
    console.error("Prisma Fetch Error:", error);
    return NextResponse.json({ error: "Failed to fetch responses" }, { status: 500 });
  }
}
