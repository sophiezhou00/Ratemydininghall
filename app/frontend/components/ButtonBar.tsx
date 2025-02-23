"use client";

export default function ButtonBar() {
  return (
     <div className="flex justify-between items-center bg-[#599CDF] p-4 pl-10 pr-10 w-full mt-[-20px]">
      <button className="mx-2 px-4 py-2 text-2xl font-bold text-white rounded-lg hover:bg-blue-700">
        All
      </button>
      <button className="mx-2 px-4 py-2 text-2xl font-bold text-white rounded-lg hover:bg-blue-700">
        Breakfast
      </button>
      <button className="mx-2 px-4 py-2 text-2xl font-bold text-white rounded-lg hover:bg-blue-700">
        Lunch
      </button>
      <button className="mx-2 px-4 py-2 text-2xl font-bold text-white rounded-lg hover:bg-blue-700 pr-10">
        Dinner
      </button>
    </div>
  );
}
