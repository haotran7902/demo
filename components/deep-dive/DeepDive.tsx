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

export default function DeepDive() {
  const [chatDropdownOpen, setChatDropdownOpen] =
    useState(false);

  return (
    <div className="flex flex-col min-h-screen text-slate-50 font-sans">
      <DeepDiveHeader />

      <div className="flex justify-center items-center my-12 p-8 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.15)_0%,transparent_70%)] relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center w-full max-w-[1200px] bg-white/5 p-12 rounded-[24px] border border-white/5 shadow-[0_20px_40px_rgba(0,0,0,0.2)] gap-8">
          <div className="md:col-start-2 flex flex-col items-center text-center max-w-[500px]">
            <h2 className="text-6xl font-extrabold mb-4 bg-linear-to-br from-indigo-100 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(168,85,247,0.4)]">
              Deepdive
            </h2>
            <p className="text-xl text-slate-300 mb-4 leading-relaxed">
              Khám phá sâu hơn vào dữ liệu của bạn để tìm ra
              những insight giá trị ẩn giấu bên trong.
            </p>
            <p className="text-base text-slate-400 leading-relaxed">
              Sử dụng các công cụ phân tích nâng cao để đưa
              ra quyết định chính xác.
            </p>
          </div>
          <div className="md:col-start-3 flex justify-center md:justify-end">
            <Image
              src="/deepdive_illustration.png"
              alt="Deepdive Illustration"
              width={350}
              height={350}
              className="rounded-[20px] shadow-[0_10px_30px_rgba(168,85,247,0.3)] object-cover animate-[float_6s_ease-in-out_infinite]"
            />
          </div>
        </div>
      </div>

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
