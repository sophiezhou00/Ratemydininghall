"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ButtonBar from "@/app/frontend/components/ButtonBar";
import ResponseBox from "@/app/frontend/components/ResponseBox";
import LandingBar from "@/app/frontend/components/landingbar";

export default function DewickPage() {
  const [RatingMessage, setRatingMessage] = useState("Loading...");
  const [responses, setResponses] = useState<{ value: string; response: string; likes: number}[]>([]);
  const router = useRouter(); // Next.js router
  
  useEffect(() => {
    setTimeout(() => {
      setRatingMessage("3.7");
      // Simulated data fetch (replace with real data from MongoDB in the future)
      setResponses([
        { value: "3", response: "The food was decent, but could be better.", likes: 10 },
        { value: "4.2", response: "Really enjoyed my meal today!", likes: 10  },
        { value: "5", response: "Absolutely fantastic! Lorem ipsum dolor sit ametLorem ipsum dolor sit amet" , likes: 10 },
        { value: "2.8", response: "Not great, but edible.", likes: 10  },
        { value: "4.5", response: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, id est laborum.adipiscing elit, id est laborum.adipiscing elit, id est laborum.adipiscing elit, id est laborum.adipiscing elit, id est laborum.adipiscing elit, id est laborum.adipiscing elit, id est laborum.adipiscing elit, id est laborum.adipiscing elit, id est laborum.adipiscing elit, id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, id est laborum.adipiscing elit, id est laborum.adipiscing elit, id est laborum.adipiscing elit, id est laborum.adipiscing elit, id est laborum.adipiscing elit, id est laborum.adipiscing elit, id est laborum.adipiscing elit, id est laborum.adipiscing elit, id est laborum.adipiscing elit, id est laborum." , likes: 10 },
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
              <ResponseBox key={index} value={res.value} response={res.response} initialLikes={res.likes} />
            ))}
          </div>
        </div>
        <p className="text-2xl h-[100px] mb-4 pt-6 pb-1 pl-14"></p>
        </div>
      </div>
    </main>
  );
}
