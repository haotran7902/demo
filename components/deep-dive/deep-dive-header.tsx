import {
  ChevronDown,
  ChevronUp,
  MessageSquare,
  PieChart,
  Presentation,
} from "lucide-react";
import { useState, useEffect } from "react";

export default function DeepDiveHeader() {
  const [chatDropdownOpen, setChatDropdownOpen] =
    useState(false);
  const [headerHeight, setHeaderHeight] = useState(70);

  useEffect(() => {
    const header = document.getElementById("main-header");
    if (!header) return;

    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setHeaderHeight(
          entry.borderBoxSize?.[0]?.blockSize ??
            entry.contentRect.height,
        );
      }
    });

    observer.observe(header);
    setHeaderHeight(header.getBoundingClientRect().height);

    return () => observer.disconnect();
  }, []);

  const buttonClass =
    "flex items-center custom-bg-content custom-bg-content-hover rounded-2xl gap-2 px-2.5 py-px  cursor-pointer";

  return (
    <div
      className="sticky z-40 custom-bg text-[12px] text-zinc-700 dark:text-zinc-300"
      style={{ top: headerHeight }}
    >
      <div className="flex justify-between items-center py-2">
        <div className="flex-1 text-2xl font-bold text-zinc-900 dark:text-white">
          Project Name
        </div>
        <div className="p-0.5 flex custom-bg-content custom-border gap-2 w-fit justify-center custom-text">
          <button className={buttonClass}>
            <MessageSquare size={12} />
            <span>Chat</span>
          </button>
          <button className={buttonClass}>
            <PieChart size={12} />
            <span>Report</span>
          </button>
          <button className={buttonClass}>
            <Presentation size={12} />
            <span>Slide</span>
          </button>
        </div>
        <div className="flex-1"></div>
      </div>
      <hr className="border-b border-gray-500 dark:border-slate-500" />

      <div className="relative w-[180px] mx-auto z-20 pt-2">
        <button
          className="flex custom-bg-content custom-border custom-text justify-between items-center w-full px-2 py-px rounded-xl"
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
          className={`absolute top-[calc(100%+0.25rem)] left-0 w-full custom-bg-content custom-text shadow-2xl border border-white/10 rounded-xl overflow-hidden transition-all duration-200 ${chatDropdownOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0 border-none"}`}
        >
          <div className="flex justify-between items-center p-2 rounded-lg cursor-pointer custom-bg-content-hover">
            23/06/2026 14:30
          </div>
          <div className="flex justify-between items-center p-2 rounded-lg cursor-pointer custom-bg-content-hover">
            22/06/2026 09:15
          </div>
          <div className="flex justify-between items-center p-2 rounded-lg cursor-pointer custom-bg-content-hover">
            20/06/2026 16:45
          </div>
        </div>
      </div>
    </div>
  );
}
