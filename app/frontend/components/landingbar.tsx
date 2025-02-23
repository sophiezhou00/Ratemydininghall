"use client";

import { useState } from "react";
import LoginBox from "@/app/frontend/components/LandingBar";
import { User } from "lucide-react"; // Import account icon

export default function LandingBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Toggle to test behavior

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="px-4 lg:px-8">
        <div className="flex justify-between items-center h-28 pl-0">
          {/* Left Side - Title */}
          <div className="flex items-center">
            <a href="/" className="text-4xl font-bold text-gray-800">
              RateMyDiningHall
            </a>
          </div>

          {/* Right Side - Login Button OR Enlarged Account Icon */}
          <div className="flex items-center space-x-6">
            {isLoggedIn ? (
              // Show Enlarged Account Icon when logged in
              <a
                href="/account"
                className="w-14 h-14 flex items-center justify-center bg-yellow-400 rounded-full hover:bg-[#ECC400] transition"
              >
                <User className="w-8 h-8 text-white" />
              </a>
            ) : (
              // Show Login Button when NOT logged in
              <button className="bg-yellow-400 text-gray-900 font-medium px-6 py-3 rounded-lg hover:bg-[#ECC400] transition">
                Login / Signup
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
