"use client";
import { useEffect, useState } from "react";
import ButtonBar from "@/app/frontend/components/ButtonBar";
import ResponseBox from "@/app/frontend/components/ResponseBox";

export default function DewickPage() {
  const [RatingMessage, setRatingMessage] = useState("Loading...");
  const [responses, setResponses] = useState<{ value: string; response: string }[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setRatingMessage("3.7");
      // Simulated data fetch (replace with real data from MongoDB in the future)
      setResponses([
        { value: "3", response: "The food was decent, but could be better." },
        { value: "4.2", response: "Really enjoyed my meal today!" },
        { value: "5", response: "Absolutely fantastic! Lorem ipsum dolor sit ametLorem ipsum dolor sit amet" },
        { value: "2.8", response: "Not great, but edible." },
        { value: "4.5", response: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, id est laborum.adipiscing elit, id est laborum.adipiscing elit, id est laborum.adipiscing elit, id est laborum.adipiscing elit, id est laborum.adipiscing elit, id est laborum.adipiscing elit, id est laborum.adipiscing elit, id est laborum.adipiscing elit, id est laborum.adipiscing elit, id est laborum. " },
      ]);
    }, 500);
  }, []);

  return (
    <main className="relative min-h-screen flex flex-col items-center">
      {/* Container for Text and ButtonBar */}
      <div className="flex w-full flex-col items-start mt-40">
        {/* Rating Message - Aligned Left */}
        <div className="flex items-center space-x-4 pl-16">
          <p className="text-5xl font-bold mb-4 pb-8">Dewick</p>
          <p className="text-3xl font-bold mb-4 pb-7 pl-4">{RatingMessage}/5</p>
        </div>

        {/* Button Bar - Automatically aligns under text */}
        <ButtonBar />

        <div className="flex w-full h-full flex-col items-start bg-[#EAF5FF] ">
          <p className="text-2xl mb-4 pt-6 pb-1 pl-14">Today's Rating:</p>
          <div className="border-l-4 border-[#599CDF] ml-16 w-full overflow-y pr-4">
          {/* Scrollable Content */}
          <div className="flex flex-col pl-6 gap-4">
            {responses.map((res, index) => (
              <ResponseBox key={index} value={res.value} response={res.response} />
            ))}
          </div>
        </div>
        <p className="text-2xl h-[100px] mb-4 pt-6 pb-1 pl-14"></p>
        </div>
      </div>
    </main>
  );
}
