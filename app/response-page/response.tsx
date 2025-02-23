import React, { useState } from "react";

export default function ResponsePage() {
  return (
    <main>
      <h1>Submit your rating</h1>

      <h2>Overall Rating</h2>
      <StarRating />

      <h2>Tags</h2>
      <h2>Written comment</h2>
    </main>
  );
}

function StarRating() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="flex space-x-2 text-3xl mt-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`cursor-pointer ${
            (hover || rating) >= star ? "text-yellow-400" : "text-gray-300"
          }`}
          onClick={() => setRating(star)}
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(0)}
        >
          ★
        </span>
      ))}
    </div>
  );
}
