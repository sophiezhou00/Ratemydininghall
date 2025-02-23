"use client";

import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function RatingSection() {
  const [rating, setRating] = useState<number | null>(null);

  // Function to handle rating selection
  const handleRating = async (selectedRating: number) => {
    setRating(selectedRating);
    
    // Simulate sending the rating data to a database
    try {
      await fetch("/api/submit-rating", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ rating: selectedRating }),
      });
      console.log("Rating submitted:", selectedRating);
    } catch (error) {
      console.error("Error submitting rating:", error);
    }
  };

  return (
    <div className="p-6 bg-[#EAF5FF] shadow-md rounded-lg w-full max-w-3xl mx-auto mt-10">
      {/* Section Title */}
      <h2 className="text-black font-semibold mb-4 text-lg">Overall Rating</h2>

      {/* Gray Box Container */}
      <div className="w-full border-2 bg-white rounded-lg p-6 flex justify-center space-x-4">
        {[1, 2, 3, 4, 5].map((num) => (
          <button
            key={num}
            onClick={() => handleRating(num)}
            className={`text-5xl ${
              rating && rating >= num ? "text-yellow-500" : "text-gray-400"
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
