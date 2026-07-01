"use client";

import { Send, Globe } from "lucide-react";
import { useState } from "react";

export default function DeepDiveInput() {
  const [mode, setMode] = useState<"basic" | "depth">("basic");
  const [webSearch, setWebSearch] = useState(false);

  return (
    <div className="mt-auto pb-4 flex justify-center z-10 w-full">
      <div className="flex flex-col w-full max-w-5xl custom-bg custom-border rounded-2xl p-4 shadow-[0_0_20px_rgba(168,85,247,0.15)] transition-all duration-300 focus-within:border-purple-500 focus-within:shadow-[0_0_30px_rgba(168,85,247,0.3)]">
        
        {/* Top: Modes */}
        <div className="flex items-center space-x-2 mb-3 border-b border-gray-200 dark:border-gray-700 pb-3">
          <button
            onClick={() => setMode("basic")}
            className={`px-4 py-1.5 rounded-lg text-sm font-semibold transition-all ${
              mode === "basic"
                ? "bg-purple-500/20 text-purple-600 dark:text-purple-400"
                : "custom-text opacity-60 hover:opacity-100 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
          >
            Basic Mode
          </button>
          <button
            onClick={() => setMode("depth")}
            className={`px-4 py-1.5 rounded-lg text-sm font-semibold transition-all ${
              mode === "depth"
                ? "bg-purple-500/20 text-purple-600 dark:text-purple-400"
                : "custom-text opacity-60 hover:opacity-100 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
          >
            Depth Mode
          </button>
        </div>

        {/* Middle: Text Area */}
        <textarea
          className="w-full bg-transparent border-none custom-text text-base outline-none placeholder:text-gray-400 dark:placeholder:text-gray-500 resize-none min-h-[72px]"
          rows={3}
          placeholder="Nhập câu hỏi hoặc yêu cầu phân tích của bạn..."
        />

        {/* Bottom: Toggles & Send */}
        <div className="flex items-center justify-between mt-2 pt-2">
          <div 
            className="flex items-center space-x-3 cursor-pointer group" 
            onClick={() => setWebSearch(!webSearch)}
          >
            <div className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors ${webSearch ? 'bg-purple-500' : 'bg-gray-300 dark:bg-gray-600'}`}>
              <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-200 ${webSearch ? 'translate-x-5' : 'translate-x-0'}`} />
            </div>
            <div className="flex items-center space-x-1.5 custom-text opacity-80 group-hover:opacity-100 transition-opacity">
              <Globe size={18} />
              <span className="text-sm font-medium">Search Web</span>
            </div>
          </div>

          <button className="flex items-center justify-center w-11 h-11 bg-linear-to from-purple-500 to-pink-500 border-none rounded-full text-white cursor-pointer transition-all duration-300 hover:scale-105 hover:rotate-6 hover:shadow-[0_0_15px_rgba(236,72,153,0.5)]">
            <Send size={18} />
          </button>
        </div>

      </div>
    </div>
  );
}
