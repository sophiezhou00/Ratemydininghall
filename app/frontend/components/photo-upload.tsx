"use client";

import React, { ChangeEvent, useState } from "react";
import { FaImage } from "react-icons/fa";



export default function PhotoUpload() {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files;
    setFile(selectedFiles ? selectedFiles[0] : null);
  };

  const handleRemoveFile = () => {
    setFile(null);
  };

  return (
    <div className="p-6 bg-[#EAF5FF] shadow-md rounded-lg w-full max-w-3xl mx-auto mt-10">

    
      {/* Content Input with Formatting Toolbar */}
      <div className="flex flex-col mb-4">
        <label className="text-black font-semibold">Insert Image</label>
      </div>

       {/* Gray Box Container */}
       <div className="w-full h-[150px] border-2 bg-white rounded-lg p-6 flex flex-col items-center justify-center">
        <label
          htmlFor="file-upload"
          className="flex items-center gap-2 bg-[#599CDF] text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-700 transition"
        >
          <FaImage /> Add a photo
        </label>
        <input id="file-upload" type="file" accept=".jpg,.jpeg,.png,.gif" className="hidden" onChange={handleFileChange} />

        {file && (
          <div className="mt-2 flex items-center space-x-4">
            <p className="text-gray-700">{file.name}</p>
            <button onClick={handleRemoveFile} className="text-red-500 text-sm">
              Remove
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
