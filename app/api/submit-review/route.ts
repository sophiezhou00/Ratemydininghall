import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      date,
      diningHall,
      dislikes,
      likes,
      mealPeriod,
      response,
      tags,
      userId,
      value,
      photo,
    } = body;

    // Validate required fields
    if (!diningHall || !mealPeriod || !response || !userId || !value) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Store review in database
    const newReview = await prisma.response.create({
      data: {
        date: new Date(date),
        diningHall,
        dislikes,
        likes,
        mealPeriod,
        response,
        tags,
        userId,
        value,
        photo,
      },
    });

    return NextResponse.json(
      { message: "Review submitted successfully!", review: newReview },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error submitting review:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
    
  }
}
