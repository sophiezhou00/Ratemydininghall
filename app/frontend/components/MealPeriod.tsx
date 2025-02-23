"use client";

import React from "react";

interface MealPeriodProps {
  value: string | null;
  onChange: (meal: string) => void;
}

export default function MealPeriod({ value, onChange }: MealPeriodProps) {
  return (
    <div className="p-6 bg-[#EAF5FF] shadow-md rounded-lg w-full max-w-3xl mx-auto mt-10">
      {/* Section Title */}
      <h2 className="text-black font-semibold mb-4 text-lg">Meal Period</h2>

      {/* Dropdown Container */}
      <select
        className="text-lg p-2 border rounded-lg shadow-md bg-white w-full"
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
        aria-label="Select a meal period"
      >
        <option value="" disabled>
          Select meal period...
        </option>
        <option value="Breakfast">Breakfast</option>
        <option value="Lunch">Lunch</option>
        <option value="Dinner">Dinner</option>
      </select>
    </div>
  );
}
