"use client";

import React, { useState } from "react";

export default function MealPeriod() {
  const [meal, setMeal] = useState<string | null>(null);

  // Function to handle meal selection
  const handleMealSelection = async (selectedMeal: string) => {
    setMeal(selectedMeal);

    // Simulate sending the meal period data to a database
    try {
      await fetch("/api/submit-meal", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ meal: selectedMeal }),
      });
      console.log("Meal period submitted:", selectedMeal);
    } catch (error) {
      console.error("Error submitting meal period:", error);
    }
  };

  return (
    <div className="p-6 bg-[#EAF5FF] shadow-md rounded-lg w-full max-w-3xl mx-auto mt-10">
      {/* Section Title */}
      <h2 className="text-black font-semibold mb-4 text-lg">Meal Period</h2>

      {/* Dropdown Container */}
      {/* <div className="w-full border-2 bg-white rounded-lg p-6 flex"> */}
        <select
          className="text-lg p-2 border rounded-lg shadow-md bg-white"
          value={meal || ""}
          onChange={(e) => handleMealSelection(e.target.value)}
        >
          <option value="" disabled>
            Select meal period...
          </option>
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
        </select>
      {/* </div> */}
    </div>
  );
}
