"use client";

import { useState } from "react";

import LoginPopup from "@/app/frontend/components/log-in";
import SignupPopup from "@/app/frontend/components/sign-up";
import { User } from "lucide-react";

export default function LandingBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="px-4 lg:px-8">
        <div className="flex justify-between items-center h-28">
          <a href="/" className="text-4xl font-bold text-gray-800">
            RateMyDiningHall
          </a>

          <div className="flex items-center space-x-6">
            {isLoggedIn ? (
              <a
                href="/account-page"
                className="w-14 h-14 flex items-center justify-center bg-yellow-400 rounded-full hover:bg-[#ECC400] transition"
              >
                <User className="w-8 h-8 text-white" />
              </a>
            ) : (
              <button
                onClick={() => setShowLogin(true)}
                className="bg-yellow-400 text-gray-900 font-medium px-6 py-3 rounded-lg hover:bg-[#ECC400] transition"
              >
                Login / Signup
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Login Popup */}
      {showLogin && (
        <LoginPopup onClose={() => setShowLogin(false)} onOpenSignUp={() => {
          setShowLogin(false);
          setShowSignup(true);
        }} />
      )}

      {/* Signup Popup */}
      {showSignup && (
        <SignupPopup onClose={() => setShowSignup(false)} onOpenLogin={() => {
          setShowSignup(false);
          setShowLogin(true);
        }} />
      )}
    </nav>
  );
}
