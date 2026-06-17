"use client";

import { useTranslation } from "@/hooks/useTranslation";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col h-full min-h-screen">
      {/* Header */}
      <header className="flex justify-center px-6 pt-4">
        <nav className="inline-flex items-center gap-1 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl px-2 py-2">
          <a
            href="#"
            className="px-4 py-2 rounded-xl text-sm font-medium text-zinc-900 dark:text-zinc-100 bg-white dark:bg-zinc-800 shadow-sm transition-colors"
          >
            {t("1014")}
          </a>
          <a
            href="#"
            className="px-4 py-2 rounded-xl text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-white dark:hover:bg-zinc-800 transition-colors"
          >
            {t("1015")}
          </a>
          <a
            href="#"
            className="px-4 py-2 rounded-xl text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-white dark:hover:bg-zinc-800 transition-colors"
          >
            {t("1016")}
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-6 py-8">
        <div className="flex flex-col items-center justify-center h-full text-center">
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
            {t("1013")}
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-lg max-w-md">
            Welcome to the playground.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-6 py-4 text-center">
        <p className="text-xs text-zinc-400 dark:text-zinc-600">
          {t("1017")}
        </p>
      </footer>
    </div>
  );
}
