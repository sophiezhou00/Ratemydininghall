"use client";

import React from "react";
import { FaStar } from "react-icons/fa";

interface RatingSectionProps {
  value: number;
  onChange: (rating: number) => void;
}

export default function RatingSection({ value, onChange }: RatingSectionProps) {
  return (
    <div className="p-6 bg-[#EAF5FF] shadow-md rounded-lg w-full max-w-3xl mx-auto mt-10">
      {/* Section Title */}
      <h2 className="text-black font-semibold mb-4 text-lg">Overall Rating</h2>

      {/* Gray Box Container */}
      <div className="w-full border-2 bg-white rounded-lg p-6 flex justify-center space-x-4">
        {[1, 2, 3, 4, 5].map((num) => (
          <button
            key={num}
            onClick={() => onChange(num)} // Uses parent function instead of setting local state
            className={`text-5xl ${
              value && value >= num ? "text-yellow-500" : "text-gray-400"
            } transition hover:text-yellow-500`}
          >
            <FaStar /> {/* Star icon */}
            <span className="text-sm block">{num}</span> {/* Number under the star */}
          </button>
        ))}
      </div>
    </div>
  );
}
