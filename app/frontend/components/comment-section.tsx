"use client";

import React, { ChangeEvent, useState } from "react";
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight } from "lucide-react";
import { FaImage } from "react-icons/fa";

type FormattingCommand = "bold" | "italic" | "underline" | "justifyLeft" | "justifyCenter" | "justifyRight";

const applyFormatting = (command: FormattingCommand): void => {
  document.execCommand(command, false, "");
};

export default function ReviewForm() {
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
        <label className="text-black font-semibold mb-3">Comment</label>

        {/* Toolbar for text formatting */}
        <div className="border flex gap-4 mb-2 p-3 rounded-lg bg-white">
          <button onClick={() => applyFormatting("bold")} title="Bold">
            <Bold size={20} />
          </button>
          <button onClick={() => applyFormatting("italic")} title="Italic">
            <Italic size={20} />
          </button>
          <button onClick={() => applyFormatting("underline")} title="Underline">
            <Underline size={20} />
          </button>
          <button onClick={() => applyFormatting("justifyLeft")} title="Align Left">
            <AlignLeft size={20} />
          </button>
          <button onClick={() => applyFormatting("justifyCenter")} title="Center Align">
            <AlignCenter size={20} />
          </button>
          <button onClick={() => applyFormatting("justifyRight")} title="Align Right">
            <AlignRight size={20} />
          </button>
        </div>

        <textarea
          className="w-full border rounded-md p-3 min-h-[150px]"
          placeholder="Write your review..."
        ></textarea>
      </div>

    

    </div>
  );
}
