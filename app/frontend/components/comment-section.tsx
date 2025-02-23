"use client";

import React, { ChangeEvent, useState } from "react";
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight } from "lucide-react";
import { FaImage, FaTrash } from "react-icons/fa";

type FormattingCommand = "bold" | "italic" | "underline" | "justifyLeft" | "justifyCenter" | "justifyRight";

const applyFormatting = (command: FormattingCommand): void => {
  document.execCommand(command, false, "");
};

interface ReviewFormProps {
  setReviewText: (text: string) => void;
  setImage: (file: File | null) => void;
}

export default function ReviewForm({ setReviewText, setImage }: ReviewFormProps) {
  const [file, setFile] = useState<File | null>(null);
  const [text, setText] = useState<string>("");

  // Handle text input changes and update reviewText state in ReviewPage
  const handleTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value;
    setText(newText);
    setReviewText(newText);
  };

  // Handle file selection
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setImage(selectedFile);
    }
  };

  // Remove selected file
  const handleRemoveFile = () => {
    setFile(null);
    setImage(null);
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

        {/* Textarea for review input */}
        <textarea
          className="w-full border rounded-md p-3 min-h-[150px] bg-white shadow-sm"
          placeholder="Write your review..."
          value={text}
          onChange={handleTextChange} // ✅ Captures input text
        ></textarea>
      </div>

      {/* Image Upload Section */}
      <div className="mt-4">
        {/* <label className="cursor-pointer flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
          <FaImage />
          <span>Upload Image</span>
          <input type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
        </label> */}

        {file && (
          <div className="mt-3 flex items-center gap-3 border p-2 rounded-lg bg-white shadow">
            <img src={URL.createObjectURL(file)} alt="Preview" className="w-24 h-24 object-cover rounded-lg" />
            <button onClick={handleRemoveFile} className="text-red-600 hover:text-red-800">
              <FaTrash size={18} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
