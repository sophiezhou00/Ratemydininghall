"use client";

import { useState } from "react";
import { Eye, EyeOff, X } from "lucide-react"; // Import icons

interface SignUp {
  email: string;
  password: string;
  confirmPassword: string;
}

interface SignUpPopupProps {
  onClose: () => void;
  onOpenLogin: () => void;
}

const SignUpPopup: React.FC<SignUpPopupProps> = ({ onClose, onOpenLogin }) => {
  const [formData, setFormData] = useState<SignUp>({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }
    setErrorMessage(null);
    
    // Simulate sign-up process (Replace with actual API call)
    console.log("Signing up:", formData);
    alert("Sign-up successful!");
    onClose();
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
          Sign Up
        </h2>

        {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}

        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="mb-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#599CDF]"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-4 relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
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

          {/* Confirm Password Input */}
          <div className="mb-4">
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#599CDF]"
              required
            />
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full bg-[#599CDF] text-white p-3 rounded-lg hover:bg-[#2e7bae] transition"
          >
            Sign Up
          </button>
        </form>

        {/* Switch to Login */}
        <p className="text-sm text-gray-500 text-center mt-4">
          Already have an account?{" "}
          <button
            onClick={() => {
              onClose();
              onOpenLogin();
            }}
            className="text-[#599CDF] hover:underline"
          >
            Log in
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignUpPopup;
