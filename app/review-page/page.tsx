"use client";

import React from "react";
import UploadButton from "../frontend/components/upload-button";
import TagSection from "../frontend/components/tag-section";
import RatingSection from "../frontend/components/rating-section";
import CommentSection from "../frontend/components/comment-section";
import PhotoUpload from "../frontend/components/photo-upload"; // Import the photo upload component
import LandingBar from "@/app/frontend/components/landingbar";
import MealPeriod from "@/app/frontend/components/MealPeriod";
import DiningHallSelection from "@/app/frontend/components/diningHallSelection";

export default function ReviewPage() {
  return (
    <div className="mt-40 min-h-screen bg-[#C9E6FF] flex flex-col items-center pb-20"> {/* Added padding-bottom */}
      <LandingBar /> {/* Rating section */}
      <h1 className="text-4xl font-bold mt-10">Write a Review!</h1>
      <RatingSection /> {/* Rating section */}
      <DiningHallSelection /> {/* Dining Hall Selection Dropdown section */}
      <MealPeriod /> {/* MealPeriod Dropdown section */}
      <TagSection /> {/* Tag section */}
      <CommentSection /> {/* Comment section */}
      <PhotoUpload /> {/* Integrated Photo Upload Component */}
      <p className="mt-5 justify-center"> <UploadButton /> </p>
      {/* <UploadButton /> Upload button */}
    </div>
  );
}
