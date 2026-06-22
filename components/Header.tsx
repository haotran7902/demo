import { useTranslation } from "@/hooks/useTranslation";
import { TabId } from "@/app/page";

interface HeaderProps {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
}

export default function Header({ activeTab, onTabChange }: HeaderProps) {
  const { t } = useTranslation();

  const tabs: { id: TabId; labelKey: string }[] = [
    { id: "docs", labelKey: "1014" },
    { id: "play", labelKey: "1015" },
    { id: "tools", labelKey: "1016" },
    { id: "about", labelKey: "1018" },
    { id: "settings", labelKey: "1019" },
  ];

  return (
    <header className="flex justify-center px-6 pt-4">
      <nav className="inline-flex items-center gap-1 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl px-2 py-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`px-4 py-2 cursor-pointer rounded-3xl text-sm font-medium transition-colors duration-300 ${
              activeTab === tab.id
                ? "text-zinc-900 dark:text-zinc-100 bg-white dark:bg-zinc-800 shadow-sm"
                : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-white dark:hover:bg-zinc-800"
            }`}
          >
            {t(tab.labelKey)}
          </button>
        ))}
      </nav>
    </header>
  );
}
