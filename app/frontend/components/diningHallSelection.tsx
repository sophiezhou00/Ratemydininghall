"use client";

import React from "react";

interface DiningHallSelectionProps {
  value: string | null;
  onChange: (hall: string) => void;
}

export default function DiningHallSelection({ value, onChange }: DiningHallSelectionProps) {
  return (
    <div className="p-6 bg-[#EAF5FF] shadow-md rounded-lg w-full max-w-3xl mx-auto mt-10">
      {/* Section Title */}
      <h2 className="text-black font-semibold mb-4 text-lg">Dining Hall</h2>

      {/* Dropdown Container */}
      <select
        className="text-lg p-2 border rounded-lg shadow-md bg-white w-full"
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
        aria-label="Select a dining hall"
      >
        <option value="" disabled>
          Select dining hall...
        </option>
        <option value="Carmichael">Carmichael</option>
        <option value="Dewick">Dewick</option>
      </select>
    </div>
  );
}
