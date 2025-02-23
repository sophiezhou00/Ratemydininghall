"use client";

import { useState } from "react";
import { Eye, EyeOff, X } from "lucide-react"; // Import icons

interface LoginPopupProps {
  onClose: () => void;
  onOpenSignUp: () => void;
}

const LoginPopup: React.FC<LoginPopupProps> = ({ onClose, onOpenSignUp }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mock login validation
    if (!email || !password) {
      setErrorMessage("Email and password are required.");
      return;
    }

    setErrorMessage(null);
    
    // Simulate login process (Replace with actual authentication logic)
    console.log("Logging in with:", { email, password });
    alert("Login successful!");
    onClose(); // Close login popup on success
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={onClose} // Click outside to close
    >
      <div
        className="bg-[#EAF5FF] p-8 rounded-lg shadow-md w-96 relative"
        onClick={(e) => e.stopPropagation()} // Prevent accidental closure
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-600 hover:text-gray-900"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Login
        </h2>

        {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}

        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="mb-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#599CDF]"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-4 relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#599CDF]"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-[#599CDF] text-white p-3 rounded-lg hover:bg-[#2e7bae] transition"
          >
            Login
          </button>
        </form>

        {/* Sign Up Link - Open Sign Up Popup */}
        <p className="text-sm text-gray-500 text-center mt-4">
          Don't have an account?{" "}
          <button
            onClick={() => {
              onClose(); // Close login popup
              onOpenSignUp(); // Open signup popup
            }}
            className="text-[#599CDF] hover:underline"
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginPopup;
