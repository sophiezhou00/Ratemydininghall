"use client";

import Image from "next/image";

// Button component to allow dynamic scores
const DiningHallButton = ({ name, score }: { name: string; score: number }) => {
  return (
    <button className="w-[800px] h-32 text-4xl font-bold text-white bg-[#599CDF] rounded-lg shadow-lg hover:bg-blue-800 flex items-center space-x-10">
      {/* Dynamic Score Box */}
      <div className="w-16 h-16 bg-gray-300 text-black text-2xl flex items-center justify-center ml-10 mr-6">
        {score}
      </div>
      <span>{name}</span>
    </button>
  );
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#C9E6FF] flex flex-col">
      {/* Logo and "Tufts University" text next to each other */}
      <div className="flex items-center space-x-4 mb-12 ml-6 mt-10">
        <Image src="/images/Elephant.png" width={120} height={100} alt="Tufts Logo" />
        <p className="text-6xl font-bold text-black">Tufts University</p>
      </div>

      {/* Two Large Wide Buttons */}
      <div className="flex flex-col items-center space-y-10 w-full px-8">
        <DiningHallButton name="Carmichael" score={4.5} />
        <DiningHallButton name="Dewick" score={3.8} />
      </div>
    </div>
  );
}
