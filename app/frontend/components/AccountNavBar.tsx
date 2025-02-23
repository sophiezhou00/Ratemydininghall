"use client";

import { useState } from "react";
import AllPrevPosts from "@/app/frontend/components/AllPrevPosts";

export default function AccountNavBar() {
  const [selected, setSelected] = useState("All Posts");

  return (
    <div className="w-full">
      {/* Navbar */}
      <nav className="flex mt-28 justify-between items-center bg-[#599CDF] p-4 pl-16 pr-16 w-full shadow-md fixed top-0 left-0 z-50">
        <div className="flex space-x-6">
          {["All Posts", "Top Posts", "Liked Posts", "All-Time Stats"].map((tab) => (
            <button
              key={tab}
              onClick={() => setSelected(tab)}
              className={`px-4 py-2 text-xl font-bold rounded-lg transition 
                ${selected === tab ? "bg-blue-900 text-white" : "text-white hover:bg-blue-700"}
              `}
            >
              {tab}
            </button>
          ))}
        </div>
      </nav>

      {/* Dynamic Subpage Content */}
      <div className="mt-40 pt-6 pb-6">
        {selected === "All Posts" && <AllPrevPosts sortBy="recent" />}
        {selected === "Top Posts" && <AllPrevPosts sortBy="liked" />}
        {selected === "Liked Posts" && <LikedPosts />}
        {selected === "All-Time Stats" && <AllTimeStats />}
      </div>
    </div>
  );
}

function LikedPosts() {
  return (
    <div className="text-xl bg-[#EAF5FF] p-6 rounded-lg">
      <p className="text-2xl font-bold">Your Liked Posts</p>
      <p className="text-lg text-gray-700 mt-2">This section will display posts that you've liked.</p>
    </div>
  );
}

// Dummy function for "All-Time Stats"
function AllTimeStats() {
  return (
    <div className="text-xl bg-[#EAF5FF] p-6 rounded-lg">
      <p className="text-2xl font-bold">Your All-Time Stats</p>
      <p className="text-lg text-gray-700 mt-2">This section will show your total engagement, most liked posts, and other analytics.</p>
    </div>
  );
}