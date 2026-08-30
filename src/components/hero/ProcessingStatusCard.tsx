"use client";

import React from "react";
import { ChevronUp } from "lucide-react";

export default function ProcessingStatusCard() {
  return (
    <div className="rounded-2xl p-5 w-full flex flex-col items-center justify-center text-center border border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.6)] relative overflow-hidden bg-[#120f1c]/90 backdrop-blur-xl h-[185px] select-none">
      {/* Circular Progress Gauge with Center Indicator */}
      <div className="relative w-14 h-14 flex items-center justify-center mb-3">
        {/* Outer segmented tick ring */}
        <div className="absolute inset-0 rounded-full border-2 border-dashed border-white/20 animate-[spin_16s_linear_infinite]" />
        {/* Glowing Progress Arc */}
        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#E03E99] border-r-[#7928CA] animate-[spin_3s_linear_infinite] shadow-[0_0_15px_rgba(224,62,153,0.55)]" />
        <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shadow-inner">
          <ChevronUp className="w-4 h-4 text-gray-300 stroke-[2.5]" />
        </div>
      </div>

      {/* Main Status Text */}
      <span
        className="text-[15px] font-bold text-white tracking-tight"
        style={{ fontFamily: "var(--font-outfit), sans-serif" }}
      >
        Please Wait
      </span>
      <span
        className="text-[12px] text-[#9ca3af] font-normal mt-0.5"
        style={{ fontFamily: "var(--font-outfit), sans-serif" }}
      >
        Still On Progress
      </span>
    </div>
  );
}

