"use client";

interface ButtonBarProps {
  selectedMeal: string;
  setSelectedMeal: (meal: string) => void;
}

export default function ButtonBar({ selectedMeal, setSelectedMeal }: ButtonBarProps) {
  const handleClick = (category: string) => {
    setSelectedMeal(category);
  };

  return (
    <div className="w-full">
      <nav className="flex justify-between items-center bg-[#599CDF] p-4 pl-12 pr-16 w-full shadow-md">
        <div className="flex space-x-6">
          {["All", "Breakfast", "Lunch", "Dinner"].map((category) => (
            <button
              key={category}
              onClick={() => handleClick(category)}
              className={`px-4 py-2 text-xl font-bold rounded-lg transition 
                ${selectedMeal === category ? "bg-blue-900 text-white" : "text-white hover:bg-blue-700"}
              `}
            >
              {category}
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}
