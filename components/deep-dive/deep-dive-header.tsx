import {
  ChevronDown,
  ChevronUp,
  MessageSquare,
  PieChart,
  Presentation,
} from "lucide-react";
import { useState } from "react";

export default function DeepDiveHeader() {
  const [chatDropdownOpen, setChatDropdownOpen] =
    useState(false);
  return (
    <div className="sticky top-[70px] z-40 bg-white dark:bg-zinc-950 py-2 text-[12px] text-zinc-700 dark:text-zinc-300">
      <div className="flex justify-between items-center py-2 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
        <div className="text-2xl font-bold flex-1 text-zinc-900 dark:text-white">
          Project Name
        </div>
        <div className="flex gap-4 flex-2 justify-center">
          <button className="flex items-center border bg-zinc-100 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 dark:hover:text-white transition-colors gap-2 px-2.5 py-px rounded-xl font-medium cursor-pointer">
            <MessageSquare size={12} />
            <span>Chat</span>
          </button>
          <button className="flex items-center border bg-zinc-100 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 dark:hover:text-white transition-colors gap-2 px-2.5 py-px rounded-xl font-medium cursor-pointer">
            <PieChart size={12} />
            <span>Report</span>
          </button>
          <button className="flex items-center border bg-zinc-100 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 dark:hover:text-white transition-colors gap-2 px-2.5 py-px rounded-xl font-medium cursor-pointer">
            <Presentation size={12} />
            <span>Slide</span>
          </button>
        </div>
        <div className="flex-1"></div>
      </div>
      <hr className="border-zinc-200 dark:border-zinc-800" />

      <div className="relative w-[180px] mx-auto z-20 pt-2">
        <button
          className="flex bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 transition-colors justify-between items-center w-full px-2 py-px rounded-xl"
          onClick={() =>
            setChatDropdownOpen(!chatDropdownOpen)
          }
        >
          <span>Chat history</span>
          {chatDropdownOpen ? (
            <ChevronUp size={20} />
          ) : (
            <ChevronDown size={20} />
          )}
        </button>

        <div
          className={`absolute top-[calc(100%+0.5rem)] left-0 w-full bg-gray-100 dark:bg-slate-800 shadow-2xl border border-white/10 rounded-xl overflow-hidden transition-all duration-200 ${chatDropdownOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0 border-none"}`}
        >
          <div className="flex justify-between items-center p-2 rounded-lg cursor-pointer transition-colors duration-200 hover:bg-white/5">
            23/06/2026 14:30
          </div>
          <div className="flex justify-between items-center p-2 rounded-lg cursor-pointer transition-colors duration-200 hover:bg-white/5">
            22/06/2026 09:15
          </div>
          <div className="flex justify-between items-center p-2 rounded-lg cursor-pointer transition-colors duration-200 hover:bg-white/5">
            20/06/2026 16:45
          </div>
        </div>
      </div>
    </div>
  );
}
