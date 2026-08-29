"use client";

import React from "react";
import { Loader2, Sparkles } from "lucide-react";

export default function ProcessingStatusCard() {
  return (
    <div className="glass-card rounded-2xl p-4.5 w-full flex flex-col items-center justify-center text-center border border-white/10 shadow-2xl relative overflow-hidden group">
      {/* Background ambient glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#7928CA]/10 to-transparent pointer-events-none" />

      {/* Rotating Neon Spinner */}
      <div className="relative my-2">
        <div className="w-12 h-12 rounded-full border-2 border-white/10 border-t-[#E03E99] border-r-[#7928CA] animate-spin flex items-center justify-center">
          <Sparkles className="w-4 h-4 text-pink-300 animate-pulse" />
        </div>
      </div>

      <div className="text-xs font-semibold text-white mt-1">Please Wait</div>
      <div className="text-[10px] text-pink-400/80 font-mono mt-0.5 tracking-wide">
        2/4 On Progress
      </div>
    </div>
  );
}
