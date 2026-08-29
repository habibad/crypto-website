"use client";

import React from "react";
import { ChevronUp } from "lucide-react";

export default function ProcessingStatusCard() {
  return (
    <div className="rounded-2xl p-4 w-full flex flex-col items-center justify-center text-center border border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.6)] relative overflow-hidden bg-[#120f1c]/90 backdrop-blur-xl h-[165px]">
      {/* Circular Progress Gauge with Center Indicator */}
      <div className="relative w-13 h-13 flex items-center justify-center mb-3">
        {/* Outer segmented tick ring */}
        <div className="absolute inset-0 rounded-full border-2 border-dashed border-white/20 animate-[spin_16s_linear_infinite]" />
        {/* Glowing Progress Arc */}
        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#E03E99] border-r-[#7928CA] animate-[spin_3.5s_linear_infinite]" />
        <div className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
          <ChevronUp className="w-3.5 h-3.5 text-gray-300" />
        </div>
      </div>

      {/* Main Status Text */}
      <span className="text-[13px] font-bold text-white tracking-tight">Please Wait</span>
      <span className="text-[10.5px] text-[#9ca3af] font-normal mt-0.5">Still On Progress</span>
    </div>
  );
}
