"use client";

import { useState } from "react";
import {
  ArrowLeftFromLine,
  ArrowLeftToLine,
  ArrowRightFromLine,
  ArrowRightToLine,
  Settings,
} from "lucide-react";
import SettingsModal from "@/components/SettingsModal";
import { useTranslation } from "@/hooks/useTranslation";

export default function AppSidebar({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(true);
  const [isSettingsOpen, setIsSettingsOpen] =
    useState(false);
  const { t } = useTranslation();

  return (
    <div className="flex h-screen w-full bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 overflow-hidden">
      <aside
        className={`bg-zinc-50 dark:bg-zinc-900 border-r border-zinc-200 dark:border-zinc-800 relative flex flex-col shrink-0 ${
          isOpen ? "w-[320px]" : "w-[48px]"
        }`}
      >
        <div
          className={`flex items-center h-16 border-b border-zinc-200 dark:border-zinc-800 ${isOpen ? "justify-between px-4" : "justify-center"}`}
        >
          {isOpen && (
            <span className="font-semibold text-lg whitespace-nowrap overflow-hidden">
              {t("1000")}
            </span>
          )}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1.5 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors shrink-0"
            title={isOpen ? t("1001") : t("1002")}
          >
            {isOpen ? (
              <ArrowLeftToLine size={18} className="transition"/>
            ) : (
              <ArrowRightToLine size={18}  className="transition"/>
            )}
          </button>
        </div>
        <div className="flex-1 overflow-y-auto overflow-x-hidden p-4">
          {isOpen ? (
            <div className="space-y-4">
              <div className="h-8 bg-zinc-200 dark:bg-zinc-800 rounded-md w-full opacity-50"></div>
              <div className="h-8 bg-zinc-200 dark:bg-zinc-800 rounded-md w-3/4 opacity-50"></div>
              <div className="h-8 bg-zinc-200 dark:bg-zinc-800 rounded-md w-5/6 opacity-50"></div>
            </div>
          ) : (
            <div className="space-y-4 flex flex-col items-center">
              <div className="h-8 w-8 bg-zinc-200 dark:bg-zinc-800 rounded-md opacity-50"></div>
              <div className="h-8 w-8 bg-zinc-200 dark:bg-zinc-800 rounded-md opacity-50"></div>
              <div className="h-8 w-8 bg-zinc-200 dark:bg-zinc-800 rounded-md opacity-50"></div>
            </div>
          )}
        </div>
        <div className="h-[256px] shrink-0 border-t border-zinc-200 dark:border-zinc-800 p-4 flex flex-col justify-end">
          <button
            onClick={() => setIsSettingsOpen(true)}
            className={`flex items-center gap-3 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors ${
              isOpen
                ? "px-3 py-2.5"
                : "p-2.5 justify-center"
            }`}
          >
            <Settings size={20} className="shrink-0" />
            {isOpen && (
              <span className="text-sm font-medium whitespace-nowrap">
                {t("1003")}
              </span>
            )}
          </button>
        </div>
      </aside>
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
      />
    </div>
  );
}
