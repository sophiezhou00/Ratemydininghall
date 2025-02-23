"use client";

import React, { useState } from "react";

export default function TagSection() {
  const tags = [
    "Good selection", "Bland", "Undercooked", "Overcooked",
    "Fresh", "Delicious", "Too salty", "Too sweet",
    "Spicy", "Greasy", "Must visit", "Long lines"
  ];

  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <div className="p-6 bg-[#EAF5FF] shadow-md rounded-lg w-full max-w-3xl mx-auto mt-10">
      {/* Section Title */}
      <h2 className="text-black font-semibold mb-4 text-lg">Select Tags</h2>

      {/* Tag Buttons */}
      <div className="flex flex-wrap gap-3">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => toggleTag(tag)}
            className={`px-4 py-2 rounded-full border-2 transition text-sm font-semibold ${
              selectedTags.includes(tag)
                ? "bg-gray-700 text-white border-gray-700"
                : "bg-gray-200 text-black border-gray-400 hover:bg-gray-300"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}
