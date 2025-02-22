'use client';

import Link from 'next/link';
import { useState } from 'react';

const LandingBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-black">RateMyDiningHall</h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/dining-halls" className="text-black hover:text-gray-700 px-3 py-2 rounded-md">
              Dining Halls
            </Link>
            <Link href="/reviews" className="text-black hover:text-gray-700 px-3 py-2 rounded-md">
              Reviews
            </Link>
            <Link href="/about" className="text-black hover:text-gray-700 px-3 py-2 rounded-md">
              About
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/dining-halls" className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md">
                Dining Halls
              </Link>
              <Link href="/reviews" className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md">
                Reviews
              </Link>
              <Link href="/about" className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md">
                About
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default LandingBar;
