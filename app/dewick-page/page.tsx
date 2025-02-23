"use client";
import { useEffect, useState } from "react";
import ButtonBar from "@/app/frontend/components/ButtonBar"; // Import the ButtonBar component

export default function DewickPage() {
  const [RatingMessage, setRatingMessage] = useState("Loading...");

  useEffect(() => {
    setTimeout(() => {
      setRatingMessage("3.7");
    }, 500);
  }, []);

  return (
        <main className="relative min-h-screen flex flex-col items-center ">
          {/* Container for Text and ButtonBar */}
          <div className="flex w-[1246px] flex-col items-start mt-40"> 
            {/* Rating Message - Aligned Left */}
            <div className="flex items-center space-x-4">
                <p className="text-5xl font-bold mb-4 pb-8">
                Dewick 
                </p>
                <p className="text-3xl font-bold mb-4 pb-7 pl-4">
                        {RatingMessage}/5
                </p>
            </div>

            {/* Button Bar - Automatically aligns under text */}
            <ButtonBar />

            <div className="flex w-[1246px] h-[430px] flex-col items-start bg-[#EAF5FF]" > 
              <p className="text-2xl mb-4 pt-6 pb-1 pl-10">
                Average Rating: 
              </p>
              <div className="border-l-4 border-[#599CDF] ml-16 h-[310px]">
                <div className="text-2xl pl-4 pt-4">
                  5 Stars: 10%
                </div>
              </div>
            </div>

          </div>
        </main>
      );
}
