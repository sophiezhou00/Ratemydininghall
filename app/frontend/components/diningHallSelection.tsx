"use client";

import React, { useState } from "react";

export default function DiningHallSelection() {
  const [selectedHall, setDiningHall] = useState<string | null>(null);

  // Function to handle meal selection
  const handleDiningHallSelection = async (selectedHall: string) => {
    setDiningHall(selectedHall);

    // Simulate sending the meal period data to a database
    try {
      await fetch("/api/submit-meal", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ hall: selectedHall }),
      });
      console.log("Hall submitted:", selectedHall);
    } catch (error) {
      console.error("Error submitting hall:", error);
    }
  };

  return (
    <div className="p-6 bg-[#EAF5FF] shadow-md rounded-lg w-full max-w-3xl mx-auto mt-10">
      {/* Section Title */}
      <h2 className="text-black font-semibold mb-4 text-lg">Dining Hall</h2>

      {/* Dropdown Container */}
      {/* <div className="w-full border-2 bg-white rounded-lg p-6 flex"> */}
        <select
          className="text-lg p-2 border rounded-lg shadow-md bg-white"
          value={selectedHall || ""}
          onChange={(e) => handleDiningHallSelection(e.target.value)}
        >
          <option value="" disabled>
            Select dining hall...
          </option>
          <option value="Carmichael">Carmichael</option>
          <option value="Dewick">Dewick</option>
        </select>
      {/* </div> */}
    </div>
  );
}
