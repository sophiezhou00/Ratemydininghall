"use client";

import { useState } from "react";
import { ThumbsUp, ThumbsDown } from "lucide-react"; // Using Lucide icons

export default function ResponseBox({ value, response }: { value: string; response: string }) {
  // State for likes and dislikes
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  // Handle Thumbs Up
  const handleThumbsUp = () => {
    setLikes(likes + 1);
    // Future: Save to database
  };

  // Handle Thumbs Down
  const handleThumbsDown = () => {
    setDislikes(dislikes + 1);
    // Future: Save to database
  };

  return (
    <div className="flex flex-col p-10 bg-white shadow-md w-[1300px] h-[350px] items-start justify-between">
      {/* Top Section */}
      <div className="flex w-full justify-between">
        {/* Fixed-size Value Box */}
        <div className="flex items-center justify-center w-[60px] h-[60px] bg-gray-200 text-gray-800 text-2xl font-bold shadow-sm mr-4 flex-shrink-0">
          {value}
        </div>

        {/* Response Text (Prevents Overflow) */}
        <p className="pt-2 text-gray-600 flex-grow pr-4">
          {response}
        </p>

        {/* Reserved Space for Photo */}
        <div className="w-[200px] h-[200px] bg-gray-300 flex items-center flex-shrink-0 justify-center">
          <span className="text-gray-500">Photo</span>
        </div>
      </div>

      {/* Bottom Section - Like/Dislike Buttons */}
      <div className="flex items-center space-x-6 mt-4">
        {/* Thumbs Up */}
        <button 
          onClick={handleThumbsUp} 
          className="flex items-center space-x-2 text-gray-600 hover:text-green-500 transition"
        >
          <ThumbsUp className="w-6 h-6" />
          <span>{likes}</span>
        </button>

        {/* Thumbs Down */}
        <button 
          onClick={handleThumbsDown} 
          className="flex items-center space-x-2 text-gray-600 hover:text-red-500 transition"
        >
          <ThumbsDown className="w-6 h-6" />
          <span>{dislikes}</span>
        </button>
      </div>
    </div>
  );
}
