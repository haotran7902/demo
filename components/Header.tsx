import { TabId } from "@/app/page";
import { useTranslation } from "@/hooks/useTranslation";
import {
  ArrowDownToLine,
  ArrowUpToLine
} from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
}

export default function Header({
  activeTab,
  onTabChange,
}: HeaderProps) {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(true);

  const tabs: { id: TabId; labelKey: string }[] = [
    { id: "docs", labelKey: "1014" },
    { id: "deep-dive", labelKey: "1015" },
    { id: "tools", labelKey: "1016" },
    { id: "about", labelKey: "1018" },
    { id: "settings", labelKey: "1019" },
  ];

  return (
    <header id="main-header" className="sticky custom-bg top-0 z-50 flex justify-center px-6">
      <div
        className={`transition-all duration-300 overflow-hidden ${
          isVisible
            ? "py-3 max-h-[100px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <nav className="inline-flex items-center gap-1 custom-bg-content custom-border custom-text rounded-3xl px-2 py-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`px-4 py-2 cursor-pointer rounded-3xl text-sm font-medium transition-colors duration-300 ${
                activeTab === tab.id
                  ? "bg-white dark:bg-zinc-800 shadow-sm"
                  : "dark:hover:text-zinc-100 hover:bg-white dark:hover:bg-zinc-800"
              }`}
            >
              {t(tab.labelKey)}
            </button>
          ))}
        </nav>
      </div>

      <div className="absolute right-3 top-3 z-50">
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="p-1.5 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors shrink-0"
          title={isVisible ? "Hide Header" : "Show Header"}
        >
          {isVisible ? (
            <ArrowUpToLine size={16} />
          ) : (
            <ArrowDownToLine size={16} />
          )}
        </button>
      </div>
    </header>
  );
}
