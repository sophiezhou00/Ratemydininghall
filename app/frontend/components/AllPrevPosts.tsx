"use client";

import { useEffect, useState } from "react";
import ResponseBox from "@/app/frontend/components/ResponseBox";

export default function AllPrevPosts({ sortBy }: { sortBy: "recent" | "liked" }) {
  const [responses, setResponses] = useState<{ value: string; response: string; likes: number; dislikes: number; mealPeriod: string; tags: string[], date: string }[]>([]);
  const holdertags = ["Healthy", "Vegetarian", "Spicy"]

  useEffect(() => {
    setTimeout(() => {
      setResponses([
          { value: "1", response: "Worst meal I've had.", likes: 2, dislikes: 20, mealPeriod: "Breakfast", tags: holdertags, date: "2024-02-21T08:15:00.000Z" },
          { value: "4", response: "Delicious, would eat again!", likes: 40, dislikes: 3, mealPeriod: "Lunch", tags: holdertags, date: "2024-02-21T12:30:00.000Z" },
          { value: "5", response: "Absolutely amazing!", likes: 50, dislikes: 1, mealPeriod: "Dinner", tags: holdertags, date: "2024-02-21T18:45:00.000Z" },
          { value: "2", response: "Too salty, but still edible.", likes: 15, dislikes: 10, mealPeriod: "Breakfast", tags: holdertags, date: "2024-02-22T09:00:00.000Z" },
          { value: "3", response: "Pretty average.", likes: 18, dislikes: 8, mealPeriod: "Lunch", tags: holdertags, date: "2024-02-22T13:20:00.000Z" }
      ]);
    });
  }, []);

  // Sort responses based on sortBy prop
  const sortedResponses = [...responses].sort((a, b) => {
    return sortBy === "liked" 
      ? b.likes - a.likes 
      : new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  const title = sortBy === "liked" ? "Most Liked Posts" : "All Previous Posts";

  return (
    <div className="flex w-full h-full flex-col items-start bg-[#EAF5FF]">
      <p className="text-2xl mb-4 pt-6 pb-1 pl-14">{title}</p>
      <div className="border-l-4 border-[#599CDF] ml-16 w-full overflow-y pr-4">
        <div className="flex flex-col pl-6 gap-4">
          {sortedResponses.map((res, index) => (
            <ResponseBox key={index} value={res.value} response={res.response} initialLikes={res.likes} initialDislikes={res.dislikes} mealPeriod={res.mealPeriod} tags={res.tags} date={res.date} />
          ))}
        </div>
      </div>
      <p className="text-2xl h-[100px] mb-4 pt-6 pb-1 pl-14"></p>

    </div>
  );
}
