"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ButtonBar from "@/app/frontend/components/ButtonBar";
import ResponseBox from "@/app/frontend/components/ResponseBox";
import LandingBar from "@/app/frontend/components/landingbar";

export default function DewickPage() {
  const [overallRating, setOverallRating] = useState("Loading...");
  const [todaysRating, setTodaysRating] = useState("Loading...");
  const [responses, setResponses] = useState<
    { value: string; response: string; likes: number; dislikes: number; mealPeriod: string; tags: string[]; date: string; diningHall: string; photo: string;}[]
  >([]);
  const [selectedMeal, setSelectedMeal] = useState("All"); // Track selected meal period
  const router = useRouter();

  useEffect(() => {
    const fetchResponses = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/responses"); // Adjust URL to match your API endpoint
        if (!res.ok) {
          throw new Error("Failed to fetch responses");
        }
        const data = await res.json();

        // Filter responses where diningHall is "Dewick"
        const dewickResponses = data.filter((response: any) => response.diningHall === "Dewick");
        setResponses(dewickResponses);

        // Set overall rating (all-time, not date-dependent)
        updateOverallRating(dewickResponses);

        // Set today's rating initially
        updateTodaysRating(dewickResponses, selectedMeal);
      } catch (error) {
        console.error("Error fetching responses:", error);
        setOverallRating("Error");
        setTodaysRating("Error");
      }
    };

    fetchResponses();
  }, []);

  useEffect(() => {
    updateTodaysRating(responses, selectedMeal);
  }, [selectedMeal, responses]);

  // Get today's date in YYYY-MM-DD format
  const getTodayDate = () => new Date().toISOString().split("T")[0];

  // Function to update the all-time overall rating
  const updateOverallRating = (data: any[]) => {
    if (data.length > 0) {
      const totalRating = data.reduce((acc, curr) => acc + parseFloat(curr.value), 0);
      const avgRating = (totalRating / data.length).toFixed(1);
      setOverallRating(avgRating);
    } else {
      setOverallRating("No Ratings");
    }
  };

  // Function to update today's rating dynamically
  const updateTodaysRating = (data: any[], mealPeriod: string) => {
    const today = getTodayDate();

    // Filter responses for today
    let filteredData = data.filter((response) => response.date.startsWith(today));

    // Filter by selected meal period (if not "All")
    if (mealPeriod !== "All") {
      filteredData = filteredData.filter((response) => response.mealPeriod === mealPeriod);
    }

    // Calculate today's average rating for the selected meal period
    if (filteredData.length > 0) {
      const totalRating = filteredData.reduce((acc, curr) => acc + parseFloat(curr.value), 0);
      const avgRating = (totalRating / filteredData.length).toFixed(1);
      setTodaysRating(avgRating);
    } else {
      setTodaysRating("No Ratings");
    }
  };

  // Filter responses based on selected meal period for today's display
  const filteredResponses =
    selectedMeal === "All"
      ? responses.filter((response) => response.date.startsWith(getTodayDate()))
      : responses.filter((response) => response.mealPeriod === selectedMeal && response.date.startsWith(getTodayDate()));

  return (
    <main className="relative min-h-screen flex flex-col items-center">
      <LandingBar />
      <div className="flex w-full flex-col items-start mt-40">
        <div className="flex justify-between items-center w-full pb-12 px-16">
          <div className="flex items-center space-x-4">
            <p className="text-5xl font-spartan font-bold">Dewick</p>
            <p className="text-3xl font-bold">{overallRating} / 5.0</p> {/* All-time rating */}
          </div>
          <button
            onClick={() => router.push("/review-page")}
            className="bg-blue-900 text-white font-medium px-6 py-3 rounded-full transition"
          >
            Create Post
          </button>
        </div>

        <ButtonBar selectedMeal={selectedMeal} setSelectedMeal={setSelectedMeal} />

        <div className="flex w-full h-full flex-col items-start bg-[#EAF5FF]">
          <p className="text-2xl mb-4 pt-6 pb-1 pl-14">Today's Rating: {todaysRating} / 5.0</p>
          <div className="border-l-4 border-[#599CDF] ml-16 w-full overflow-y pr-4">
            <div className="flex flex-col pl-6 gap-4">
              {filteredResponses.length > 0 ? (
                filteredResponses.map((res, index) => (
                  <ResponseBox
                    key={index}
                    value={res.value}
                    response={res.response}
                    initialLikes={res.likes}
                    initialDislikes={res.dislikes}
                    mealPeriod={res.mealPeriod}
                    tags={res.tags}
                    date={res.date}
                    photo={res.photo}
                  />
                ))
              ) : (
                <p className="text-gray-500 pl-6">No reviews available.</p>
              )}
            </div>
          </div>
          <p className="text-2xl h-[100px] mb-4 pt-6 pb-1 pl-14"></p>
        </div>
      </div>
    </main>
  );
}
