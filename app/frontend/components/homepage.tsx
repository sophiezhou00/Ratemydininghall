export default function HomePage() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#C9E6FF]">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Tufts University</h1>
        <div className="flex flex-col space-y-4">
          <button className="px-6 py-3 text-lg font-semibold text-white bg-[#599CDF] rounded-lg shadow-md hover:bg-[#599CDF]">
            Button 1
          </button>
          <button className="px-6 py-3 text-lg font-semibold text-white bg-[#599CDF] rounded-lg shadow-md hover:bg-blue-600">
            Button 2
          </button>
        </div>
      </div>
    );
  }
  