"use client";

import { useEffect, useState } from "react";
import ResponseBox from "@/app/frontend/components/ResponseBox";

export default function AllPrevPosts({ sortBy }: { sortBy: "recent" | "liked" }) {
  const [responses, setResponses] = useState<{ value: string; response: string; likes: number; date: number }[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setResponses([
        { value: "3", response: "MID AF, but could be better.", likes: 10, date: 1700000000 },
        { value: "4", response: "Really enjoyed my meal today! sooo yummy", likes: 25, date: 1700000100 },
        { value: "5", response: "Peepoo!", likes: 5, date: 1700000200 },
        { value: "2", response: "Not great, but edible.", likes: 30, date: 1700000300 },
        { value: "3", response: "Amazing food, best experience yet!", likes: 20, date: 1700000400 },
      ]);
    });
  }, []);

  // Sort responses based on sortBy prop
  const sortedResponses = [...responses].sort((a, b) => {
    return sortBy === "liked" ? b.likes - a.likes : b.date - a.date;
  });

  const title = sortBy === "liked" ? "Most Liked Posts" : "All Previous Posts";

  return (
    <div className="flex w-full h-full flex-col items-start bg-[#EAF5FF]">
      <p className="text-2xl mb-4 pt-6 pb-1 pl-14">{title}</p>
      <div className="border-l-4 border-[#599CDF] ml-16 w-full overflow-y pr-4">
        <div className="flex flex-col pl-6 gap-4">
          {sortedResponses.map((res, index) => (
            <ResponseBox key={index} value={res.value} response={res.response} initialLikes={res.likes} />
          ))}
        </div>
      </div>
      <p className="text-2xl h-[100px] mb-4 pt-6 pb-1 pl-14"></p>

    </div>
  );
}
