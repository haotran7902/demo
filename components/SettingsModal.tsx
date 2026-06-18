"use client";

import { useState } from "react";
import { useTheme } from "@/components/ThemeProvider";
import { useTranslation } from "@/hooks/useTranslation";
import {
  X,
  Palette,
  Languages,
  LogOut,
  Sun,
  Moon,
  Monitor,
  Check,
} from "lucide-react";
import { SettingTab, SettingTabItem } from "./common/type";
import { LANGUAGES } from "./common/const";

export default function SettingsModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [activeTab, setActiveTab] =
    useState<SettingTab>("theme");
  const {
    theme: selectedTheme,
    setTheme: setSelectedTheme,
  } = useTheme();
  const { t, i18n } = useTranslation();

  if (!isOpen) return null;

  const settingTabs: SettingTabItem[] = [
    {
      id: "theme",
      label: t("1005"),
      icon: <Palette size={18} />,
    },
    {
      id: "language",
      label: t("1006"),
      icon: <Languages size={18} />,
    },
  ];

  const themes = [
    {
      id: "light",
      label: t("1008"),
      icon: <Sun size={20} />,
    },
    {
      id: "dark",
      label: t("1009"),
      icon: <Moon size={20} />,
    },
    {
      id: "system",
      label: t("1010"),
      icon: <Monitor size={20} />,
    },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 animate-fade-in" />

      {/* Modal */}
      <div
        className="relative z-10 flex w-[720px] h-[480px] bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left Section */}
        <div className="w-[220px] shrink-0 bg-zinc-50 dark:bg-zinc-950 border-r border-zinc-200 dark:border-zinc-800 flex flex-col">
          {/* Header */}
          <div className="px-5 pt-5 pb-3">
            <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
              {t("1004")}
            </h2>
          </div>

          {/* Nav Items */}
          <nav className="flex-1 px-3 space-y-1">
            {settingTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150 ${
                  activeTab === tab.id
                    ? "bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50"
                    : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800/50 hover:text-zinc-900 dark:hover:text-zinc-200"
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </nav>

          {/* User Info + Logout */}
          <div className="p-3 border-t border-zinc-200 dark:border-zinc-800">
            <div className="flex items-center gap-3 px-3 py-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-linear-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-white text-xs font-bold shrink-0">
                H
              </div>
              <div className="min-w-0">
                <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100 truncate">
                  Hao
                </p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 truncate">
                  hao@example.com
                </p>
              </div>
            </div>
            <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors">
              <LogOut size={18} />
              {t("1012")}
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Right Header */}
          <div className="flex items-center justify-between px-6 pt-5 pb-4">
            <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
              {
                settingTabs.find(
                  (tab) => tab.id === activeTab,
                )?.label
              }
            </h3>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          {/* Right Content */}
          <div className="flex-1 overflow-y-auto px-6 pb-6">
            {activeTab === "theme" && (
              <ThemeSettings
                selected={selectedTheme}
                onSelect={(id) =>
                  setSelectedTheme(
                    id as "light" | "dark" | "system",
                  )
                }
                themes={themes}
                description={t("1007")}
              />
            )}
            {activeTab === "language" && (
              <LanguageSettings
                selected={i18n.language}
                onSelect={(lang) =>
                  i18n.changeLanguage(lang)
                }
                description={t("1011")}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function ThemeSettings({
  selected,
  onSelect,
  themes,
  description,
}: {
  selected: string;
  onSelect: (id: string) => void;
  themes: {
    id: string;
    label: string;
    icon: React.ReactNode;
  }[];
  description: string;
}) {
  return (
    <div className="space-y-4">
      <p className="text-sm text-zinc-500 dark:text-zinc-400">
        {description}
      </p>
      <div className="grid grid-cols-3 gap-3">
        {themes.map((theme) => (
          <button
            key={theme.id}
            onClick={() => onSelect(theme.id)}
            className={`relative flex flex-col items-center gap-3 p-4 rounded-xl border-2 transition-all duration-200 ${
              selected === theme.id
                ? "border-violet-500 bg-violet-50 dark:bg-violet-950/20"
                : "border-zinc-200 dark:border-zinc-700 hover:border-zinc-300 dark:hover:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-800/50"
            }`}
          >
            {selected === theme.id && (
              <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-violet-500 flex items-center justify-center">
                <Check size={12} className="text-white" />
              </div>
            )}
            <div
              className={`p-3 rounded-xl ${
                selected === theme.id
                  ? "bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400"
                  : "bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400"
              }`}
            >
              {theme.icon}
            </div>
            <span
              className={`text-sm font-medium ${
                selected === theme.id
                  ? "text-violet-700 dark:text-violet-300"
                  : "text-zinc-700 dark:text-zinc-300"
              }`}
            >
              {theme.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

function LanguageSettings({
  selected,
  onSelect,
  description,
}: {
  selected: string;
  onSelect: (id: string) => void;
  description: string;
}) {
  return (
    <div className="space-y-4">
      <p className="text-sm text-zinc-500 dark:text-zinc-400">
        {description}
      </p>
      <div className="space-y-1.5">
        {LANGUAGES.map((lang) => (
          <button
            key={lang.id}
            onClick={() => onSelect(lang.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-150 ${
              selected === lang.id
                ? "bg-violet-50 dark:bg-violet-950/20 border border-violet-200 dark:border-violet-800"
                : "hover:bg-zinc-50 dark:hover:bg-zinc-800/50 border border-transparent"
            }`}
          >
            <span className="text-xl">{lang.flag}</span>
            <span
              className={`text-sm font-medium flex-1 ${
                selected === lang.id
                  ? "text-violet-700 dark:text-violet-300"
                  : "text-zinc-700 dark:text-zinc-300"
              }`}
            >
              {lang.label}
            </span>
            {selected === lang.id && (
              <div className="w-5 h-5 rounded-full bg-violet-500 flex items-center justify-center">
                <Check size={12} className="text-white" />
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
