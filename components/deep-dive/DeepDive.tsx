"use client";

import {
  FileText,
  HelpCircle,
  PieChart,
  Send,
  Settings,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import DeepDiveHeader from "./deep-dive-header";
import DeepDiveIntro from "./deep-dive-intro";
import DeepDiveInput from "./deep-dive-input";

export default function DeepDive() {
  const [chatDropdownOpen, setChatDropdownOpen] =
    useState(false);

  return (
    <div className="flex flex-col  min-h-screen font-sans">
      <DeepDiveHeader />
      <DeepDiveIntro />
      <DeepDiveInput />

    </div>
  );
}
