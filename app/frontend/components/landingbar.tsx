"use client";

export default function LandingBar() {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="px-4 lg:px-8"> {/* Removed max-width container */}
        <div className="flex justify-between items-center h-28 pl-0">
          {/* Left Side - Title (Fully Left-Aligned) */}
          <div className="flex items-center">
            <a href="/" className="text-4xl font-bold text-gray-800">
              RateMyDiningHall
            </a>
          </div>

          {/* Right Side - Yellow Login/Signup Button */}
          <button className="bg-yellow-400 text-gray-900 font-medium px-6 py-3 rounded-lg hover:bg-[#ECC400] transition">
            Login / Signup
          </button>
        </div>
      </div>
    </nav>
  );
}
