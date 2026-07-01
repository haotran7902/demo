"use client";

import { useState } from "react";
import DeepDiveHeader from "./deep-dive-header";
import DeepDiveInput from "./deep-dive-input";
import DeepDiveIntro from "./deep-dive-intro";

export default function DeepDive() {
  const [chatDropdownOpen, setChatDropdownOpen] =
    useState(false);

  return (
    <div className="flex flex-col grow justify-between font-sans">
      <DeepDiveHeader />
      <DeepDiveIntro />
      <DeepDiveInput />

    </div>
  );
}
