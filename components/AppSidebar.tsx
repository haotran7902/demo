"use client";

import SettingsModal from "@/components/SettingsModal";
import { useTranslation } from "@/hooks/useTranslation";
import { useState } from "react";
import LeftSideBar from "./LeftSideBar";

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
    <div className="flex h-screen w-full overflow-hidden custom-bg custom-text">
      <LeftSideBar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setIsSettingsOpen={setIsSettingsOpen}
      />
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
