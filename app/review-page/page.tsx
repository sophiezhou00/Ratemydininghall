"use client";

import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import UploadButton from "../frontend/components/upload-button";
import TagSection from "../frontend/components/tag-section";
import RatingSection from "../frontend/components/rating-section";
import DiningHallSelection from "../frontend/components/diningHallSelection";
import MealPeriod from "../frontend/components/MealPeriod";
import ReviewForm from "../frontend/components/comment-section";
import PhotoUpload from "../frontend/components/photo-upload";
import LandingBar from "@/app/frontend/components/landingbar";

export default function ReviewPage() {
  const router = useRouter();
  const { data: session } = useSession(); 
  const userId = session?.user?.id; 
  const [rating, setRating] = useState<number | null>(null);
  const [selectedHall, setSelectedHall] = useState<string | null>(null);
  const [mealPeriod, setMealPeriod] = useState<string | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [reviewText, setReviewText] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);

  // Handle review submission
  const handleSubmit = async () => {
    if (!userId) {
      console.error("User not logged in");
      return;
    }

    console.log("Submit button clicked!");

    const reviewData = {
      date: new Date(),
      diningHall: selectedHall,
      dislikes: 0,
      likes: 0,
      mealPeriod: mealPeriod || "",
      response: reviewText,
      tags: selectedTags,
      userId: userId, // ✅ Use the logged-in user's ID
      value: rating !== null ? rating.toString() : "",
      photo: image ? await convertFileToBase64(image) : null,
    };

    console.log("Submitting review data:", reviewData);

    try {
      const response = await fetch("/api/submit-review", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reviewData),
      });

      console.log("Response status:", response.status);

      if (response.ok) {
        console.log("Review submitted successfully!");
        router.push("/"); // ✅ Redirect to home page after success
      } else {
        console.error("Error submitting review.");
        const errorText = await response.text();
        console.error("Response error message:", errorText);
      }
    } catch (error) {
      console.error("Submission failed:", error);
    }
  };

  return (
    <div className="mt-40 min-h-screen bg-[#C9E6FF] flex flex-col items-center pb-20">
      <LandingBar />
      <h1 className="text-4xl font-bold mt-10">Write a Review!</h1>

      <RatingSection value={rating} onChange={setRating} />
      <DiningHallSelection value={selectedHall} onChange={setSelectedHall} />
      <MealPeriod value={mealPeriod} onChange={setMealPeriod} />
      <TagSection selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
      <ReviewForm setReviewText={setReviewText} setImage={setImage} />
      <PhotoUpload setImage={setImage} />

      <p className="mt-5">
        <UploadButton onSubmit={handleSubmit} />
      </p>
    </div>
  );
}

// Convert image file to Base64 for MongoDB storage
const convertFileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
};
