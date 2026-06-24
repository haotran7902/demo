"use client";

import { useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MainContent from "@/components/MainContent";

export type TabId = "docs" | "deep-dive" | "tools" | "about" | "settings";

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabId>("docs");

  return (
    <div className="flex flex-col min-h-screen">
      <Header activeTab={activeTab} onTabChange={setActiveTab} />
      <MainContent activeTab={activeTab} />
      <Footer />
    </div>
  );
}
