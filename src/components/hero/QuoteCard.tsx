"use client";

import React from "react";
import { Quote } from "lucide-react";

export default function QuoteCard() {
  return (
    <div className="glass-card rounded-2xl p-4.5 w-full flex flex-col justify-between border border-white/10 shadow-2xl relative overflow-hidden group">
      {/* Subtle Quote icon in background */}
      <Quote className="absolute right-3 top-3 w-10 h-10 text-white/5 pointer-events-none" />

      {/* Quote Body */}
      <p className="text-xs text-gray-200 font-medium leading-relaxed z-10">
        &ldquo;Bitcoin will be number 1 asset in the next 10 years, beating gold &amp; silver&rdquo;
      </p>

      {/* Author & Avatar */}
      <div className="mt-4 flex items-center gap-2.5 z-10 pt-2 border-t border-white/5">
        <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#7928CA] to-[#E03E99] p-0.5 flex items-center justify-center shadow-[0_0_10px_rgba(224,62,153,0.4)]">
          <div className="w-full h-full rounded-full bg-[#161424] flex items-center justify-center text-[10px] font-bold text-white">
            VA
          </div>
        </div>
        <div>
          <div className="text-[11px] font-semibold text-white">Valide Alexandria</div>
          <div className="text-[10px] text-gray-400">CEO AXR Token</div>
        </div>
      </div>
    </div>
  );
}
