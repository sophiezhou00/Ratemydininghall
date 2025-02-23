"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ButtonBar from "@/app/frontend/components/ButtonBar";
import ResponseBox from "@/app/frontend/components/ResponseBox";
import LandingBar from "@/app/frontend/components/landingbar";

export default function DewickPage() {
  const [RatingMessage, setRatingMessage] = useState("Loading...");
  const [responses, setResponses] = useState<{ value: string; response: string; likes: number; dislikes: number; mealPeriod: string; tags: string[], date: string}[]>([]);
  const router = useRouter(); // Next.js router
  const holdertags = ["Gross", "Weird", "Bland"];
  
  useEffect(() => {
    setTimeout(() => {
      setRatingMessage("3.7");
      // Simulated data fetch (replace with real data from MongoDB in the future)
      setResponses([
        { value: "1", response: "Worst meal I've had.", likes: 2, dislikes: 20, mealPeriod: "Breakfast", tags: holdertags, date: "2024-02-21T08:15:00.000Z" },
        { value: "4", response: "Delicious, would eat again!", likes: 40, dislikes: 3, mealPeriod: "Lunch", tags: holdertags, date: "2024-02-21T12:30:00.000Z" },
        { value: "5", response: "Absolutely amazing!", likes: 50, dislikes: 1, mealPeriod: "Dinner", tags: holdertags, date: "2024-02-21T18:45:00.000Z" },
        { value: "2", response: "Too salty, but still edible.", likes: 15, dislikes: 10, mealPeriod: "Breakfast", tags: holdertags, date: "2024-02-22T09:00:00.000Z" },
        { value: "3", response: "Pretty average.", likes: 18, dislikes: 8, mealPeriod: "Lunch", tags: holdertags, date: "2024-02-22T13:20:00.000Z" }
      ]);
    }, 500);
  }, []);

  return (
    <main className="relative min-h-screen flex flex-col items-center">
      {/* Container for Text and ButtonBar */}
      <LandingBar />
      <div className="flex w-full flex-col items-start mt-40">
        {/* Rating Message - Aligned Left */}
        <div className="flex justify-between items-center w-full pb-12 px-16">
          {/* Left Side - Title & Rating (kept together) */}
          <div className="flex items-center space-x-4">
            <p className="text-5xl font-spartan font-bold">Dewick</p>
            <p className="text-3xl font-bold">{RatingMessage}/5</p>
          </div>

          {/* Right Side - Create Post Button (aligned right) */}
          <button 
            onClick={() => router.push("/review-page")} 
            className="bg-blue-900 text-white font-medium px-6 py-3 rounded-full transition">
            Create Post
          </button>
        </div>

        {/* Button Bar - Automatically aligns under text */}
        <ButtonBar />

        <div className="flex w-full h-full flex-col items-start bg-[#EAF5FF] ">
          <p className="text-2xl mb-4 pt-6 pb-1 pl-14">Today's Rating:</p>
          <div className="border-l-4 border-[#599CDF] ml-16 w-full overflow-y pr-4">
          {/* Scrollable Content */}
          <div className="flex flex-col pl-6 gap-4">
            {responses.map((res, index) => (
              <ResponseBox key={index} value={res.value} response={res.response} initialLikes={res.likes} initialDislikes={res.dislikes} mealPeriod={res.mealPeriod} tags={res.tags} date={res.date}/>
            ))}
          </div>
        </div>
        <p className="text-2xl h-[100px] mb-4 pt-6 pb-1 pl-14"></p>
        </div>
      </div>
    </main>
  );
}
