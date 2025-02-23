"use client";

import { useState, useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import LoginPopup from "@/app/frontend/components/log-in";
import SignupPopup from "@/app/frontend/components/sign-up";
import { User } from "lucide-react";

export default function LandingBar() {
  const { data: session, status } = useSession(); // Get session & status
  const isLoggedIn = status === "authenticated";


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
              <div className="flex items-center space-x-4">
                <a
                  href="/account-page"
                  className="w-14 h-14 flex items-center justify-center bg-yellow-400 rounded-full hover:bg-[#ECC400] transition"
                >
                  <User className="w-8 h-8 text-white" /> {/* Profile Icon */}
                </a>
                <button
                  onClick={async () => {
                    await signOut({ callbackUrl: "/" }); // Ensure session updates
                  }}
                  className="bg-[#599CDF] text-white px-4 py-2 rounded-lg"
                >
                  Logout
                </button>
              </div>
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

      {showLogin && (
        <LoginPopup 
          onClose={() => setShowLogin(false)} 
          onOpenSignUp={() => {
            setShowLogin(false);
            setShowSignup(true);
          }} 
          onLoginSuccess={() => setShowLogin(false)} // Close on success
        />
      )}

      {showSignup && (
        <SignupPopup 
          onClose={() => setShowSignup(false)} 
          onOpenLogin={() => {
            setShowSignup(false);
            setShowLogin(true);
          }} 
        />
      )}
    </nav>
  );
}
