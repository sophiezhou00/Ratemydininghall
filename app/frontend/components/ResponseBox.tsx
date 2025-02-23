"use client";

import { useState } from "react";
import { ThumbsUp, ThumbsDown } from "lucide-react";

export default function ResponseBox({ value, response, initialLikes, initialDislikes, mealPeriod, tags, date }: 
                                    { value: string; response: string; initialLikes: number; initialDislikes: number; mealPeriod: string; tags: string[], date: string }) {
  // Set the initial likes from props
  const [likes, setLikes] = useState(initialLikes);
  const [dislikes, setDislikes] = useState(initialDislikes);

  const handleThumbsUp = () => {
    setLikes(likes + 1);
    // Future: Save to database
  };

  const handleThumbsDown = () => {
    setDislikes(dislikes + 1);
    // Future: Save to database
  };

  return (
    <div className="flex flex-col p-10 bg-white shadow-md w-[1300px] h-[350px] items-start">
      {/* Top Section */}
      <div className="flex w-full items-start">
        {/* Left Section: Value and Response */}
        <div className="flex flex-col flex-grow">
          <div className="flex items-center">
            {/* Fixed-size Value Box */}
            <div className="flex items-center justify-center w-[60px] h-[60px] bg-gray-200 text-gray-800 text-2xl font-bold shadow-sm mr-4">
              {value}
            </div>
            {/* Response Text */}
            <p className="text-gray-600 pr-4">{response}</p>
          </div>
        </div>

        {/* Right Section: Photo */}
        <div className="flex flex-col flex-shrink-0">
          <div className="w-[200px] h-[200px] self-end bg-gray-300 flex items-center justify-center">
            <span className="text-gray-500">Photo</span>
          </div>
        </div>
      </div>

      {/* Bottom Section: Like/Dislike & Date Aligned */}
      <div className="flex w-full justify-between items-end ">
        <div className="flex flex-col items-start space-y-2">

          {/* Tags - Positioned Above Buttons */}
          <div className="flex space-x-2">
            <span className="px-3 py-1 mb-2 bg-blue-200 text-blue-800 text-sm font-semibold rounded-full">{tags[0]}</span>
            <span className="px-3 py-1 mb-2 bg-green-200 text-green-800 text-sm font-semibold rounded-full">{tags[1]}</span>
            <span className="px-3 py-1 mb-2 bg-purple-200 text-purple-800 text-sm font-semibold rounded-full">{tags[2]}</span>
          </div>

        {/* Buttons */}
        <div className="flex space-x-4">
          <button onClick={handleThumbsUp} className="flex items-center space-x-2 text-gray-600 hover:text-green-500 transition">
            <ThumbsUp className="w-6 h-6" />
            <span>{likes}</span>
          </button>
          <button onClick={handleThumbsDown} className="flex items-center space-x-2 text-gray-600 hover:text-red-500 transition">
            <ThumbsDown className="w-6 h-6" />
            <span>{dislikes}</span>
          </button>
        </div>
      </div>

        {/* Meal Period & Date - Aligned to Right */}
        <div className="text-right">
          <p className="text-gray-400 text-sm">{mealPeriod}</p>
          <p className="text-gray-500 text-sm">{date}</p>
        </div>
      </div>
    </div>
  );
}
