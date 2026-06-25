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

export default function DeepDive() {
  const [chatDropdownOpen, setChatDropdownOpen] =
    useState(false);

  return (
    <div className="flex flex-col min-h-screen text-slate-50 font-sans">
      <DeepDiveHeader />

      <DeepDiveIntro />

      {/* Giao diện 4: Action Buttons */}
      <div className="flex justify-center gap-6 my-8 flex-wrap z-10">
        <button className="group flex flex-col items-center justify-center gap-3 w-[160px] h-[120px] bg-slate-800/60 border border-white/10 rounded-2xl text-slate-50 font-semibold cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-slate-800/90 hover:border-pink-500 hover:shadow-[0_10px_25px_rgba(236,72,153,0.2)] hover:text-pink-200">
          <FileText
            size={24}
            className="text-purple-500 transition-all duration-300 group-hover:scale-110 group-hover:text-pink-500"
          />
          <span>Tạo Báo Cáo Mới</span>
        </button>
        <button className="group flex flex-col items-center justify-center gap-3 w-[160px] h-[120px] bg-slate-800/60 border border-white/10 rounded-2xl text-slate-50 font-semibold cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-slate-800/90 hover:border-pink-500 hover:shadow-[0_10px_25px_rgba(236,72,153,0.2)] hover:text-pink-200">
          <PieChart
            size={24}
            className="text-purple-500 transition-all duration-300 group-hover:scale-110 group-hover:text-pink-500"
          />
          <span>Phân Tích Chi Tiết</span>
        </button>
        <button className="group flex flex-col items-center justify-center gap-3 w-[160px] h-[120px] bg-slate-800/60 border border-white/10 rounded-2xl text-slate-50 font-semibold cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-slate-800/90 hover:border-pink-500 hover:shadow-[0_10px_25px_rgba(236,72,153,0.2)] hover:text-pink-200">
          <Settings
            size={24}
            className="text-purple-500 transition-all duration-300 group-hover:scale-110 group-hover:text-pink-500"
          />
          <span>Cấu Hình Nguồn</span>
        </button>
        <button className="group flex flex-col items-center justify-center gap-3 w-[160px] h-[120px] bg-slate-800/60 border border-white/10 rounded-2xl text-slate-50 font-semibold cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-slate-800/90 hover:border-pink-500 hover:shadow-[0_10px_25px_rgba(236,72,153,0.2)] hover:text-pink-200">
          <HelpCircle
            size={24}
            className="text-purple-500 transition-all duration-300 group-hover:scale-110 group-hover:text-pink-500"
          />
          <span>Hướng Dẫn</span>
        </button>
      </div>

      {/* Giao diện 5: Chat Input */}
      <div className="mt-auto py-8 pb-4 flex justify-center z-10">
        <div className="flex items-center w-full max-w-[800px] bg-slate-900/80 border border-purple-500/30 rounded-full p-2 pl-6 shadow-[0_0_20px_rgba(168,85,247,0.15)] transition-all duration-300 focus-within:border-purple-500 focus-within:shadow-[0_0_30px_rgba(168,85,247,0.3)] focus-within:bg-slate-900/95">
          <input
            type="text"
            className="flex-1 bg-transparent border-none text-slate-50 text-lg outline-none placeholder:text-slate-500"
            placeholder="Nhập câu hỏi hoặc yêu cầu phân tích của bạn..."
          />
          <button className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 border-none rounded-full text-white cursor-pointer transition-all duration-300 hover:scale-105 hover:rotate-6 hover:shadow-[0_0_15px_rgba(236,72,153,0.5)] ml-2">
            <Send size={20} />
          </button>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
      `,
        }}
      />
    </div>
  );
}
