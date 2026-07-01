"use client";

import { Send, Globe } from "lucide-react";
import { useState, KeyboardEvent } from "react";
import { useTranslation } from "@/hooks/useTranslation";

interface DeepDiveInputProps {
  onSendMessage?: (message: string) => void;
  isLoading?: boolean;
}

export default function DeepDiveInput({ onSendMessage, isLoading }: DeepDiveInputProps) {
  const { t } = useTranslation();
  const [mode, setMode] = useState<"basic" | "depth">(
    "basic",
  );
  const [webSearch, setWebSearch] = useState(false);
  const [text, setText] = useState("");

  const handleSend = () => {
    if (text.trim() && !isLoading) {
      onSendMessage?.(text.trim());
      setText("");
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="pb-4 flex justify-center z-10 w-full">
      <div className="flex flex-col w-full max-w-5xl custom-bg">
        {/* Top: Modes */}
        <div className="flex items-center bg-slate-400 rounded-t-3xl px-3 pt-2">
          <button
            onClick={() => setMode("basic")}
            className={`px-4 py-1.5 rounded-t-2xl text-sm font-semibold ${
              mode === "basic" ? "custom-bg" : ""
            }`}
          >
            {t("1030")}
          </button>
          <button
            onClick={() => setMode("depth")}
            className={`px-4 py-1.5 rounded-t-2xl text-sm font-semibold  ${
              mode === "depth" ? "custom-bg" : ""
            }`}
          >
            {t("1031")}
          </button>
        </div>

        {/* Middle: Text Area */}
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={isLoading}
          className="p-3 border-x border-slate-400 w-full bg-transparent custom-text text-base outline-none placeholder:text-gray-400 dark:placeholder:text-gray-500 resize-none min-h-[72px]"
          rows={5}
          placeholder={t("1032")}
        />

        {/* Bottom: Toggles & Send */}
        <div className="flex items-center justify-between bg-slate-400 rounded-b-3xl px-3">
          <div
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => setWebSearch(!webSearch)}
          >
            <div
              className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors ${webSearch ? "bg-purple-500" : "bg-gray-300 dark:bg-gray-600"}`}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-200 ${webSearch ? "translate-x-5" : "translate-x-0"}`}
              />
            </div>
            <div className="flex items-center space-x-1.5 custom-text opacity-80 group-hover:opacity-100 transition-opacity">
              <Globe size={18} />
              <span className="text-sm font-medium">
                {t("1033")}
              </span>
            </div>
          </div>

          <button 
            onClick={handleSend}
            disabled={isLoading || !text.trim()}
            className={`flex items-center justify-center w-11 h-11 rounded-full transition-colors ${
              text.trim() && !isLoading ? "text-blue-500 hover:bg-slate-300 dark:hover:bg-slate-600" : "text-gray-400 cursor-not-allowed"
            }`}
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
