"use client";

export default function ResponseBox({ value, response }: { value: string; response: string }) {
  return (
    <div className="flex p-10 bg-white shadow-md w-[1300px] h-[300px] items-start justify-between">
      {/* Fixed-size Value Box */}
      <div className="flex items-center justify-center w-[60px] h-[60px] bg-gray-200 text-gray-800 text-2xl font-bold shadow-sm mr-4 flex-shrink-0">
        {value}
      </div>
      
      {/* Response Text (Prevents Overflow) */}
      <p className="pt-2 text-gray-600 flex-grow pr-4">
        {response}
      </p>

      {/* Reserved Space for Photo */}
      <div className="w-[200px] h-[200px] bg-gray-300 flex items-center flex-shrink-0 justify-center">
        {/* Placeholder for Image */}
        <span className="text-gray-500">Photo</span>
      </div>
    </div>
  );
}
