"use client";

import { useState } from "react";

interface UploadButtonProps {
  onSubmit: () => void; // Function to handle submission
}

export default function UploadButton({ onSubmit }: UploadButtonProps) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    onSubmit(); // Calls function to gather data and submit
    setTimeout(() => setIsClicked(false), 300); // Reset button color after click
  };

  return (
    <button
      onClick={handleClick}
      className={`w-[300px] max-w-3xl mx-auto mt-6 px-6 py-3 text-white font-bold rounded-lg transition ${
        isClicked ? "bg-gray-700" : "bg-[#4588cc] hover:bg-blue-700"
      }`}
    >
      Publish
    </button>
  );
}
