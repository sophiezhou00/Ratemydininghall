"use client";
import { useState } from "react";

export default function LoginBox() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-col p-10 bg-white shadow-md w-[400px] h-[300px] items-center rounded-lg">
      {/* Title */}
      <h2 className="text-2xl font-bold text-gray-700 mb-6">Login</h2>

      {/* Username Input */}
      <input
        type="text"
        placeholder="Username"
        className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      {/* Password Input */}
      <input
        type="password"
        placeholder="Password"
        className="w-full p-2 mb-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {/* Login Button */}
      <button className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
        Login
      </button>
    </div>
  );
}
