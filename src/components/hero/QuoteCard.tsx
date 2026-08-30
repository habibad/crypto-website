"use client";

import React from "react";

export default function QuoteCard() {
  return (
    <div className="rounded-2xl p-5 w-full flex flex-col justify-between border border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.6)] relative overflow-hidden bg-[#120f1c]/90 backdrop-blur-xl h-[160px] select-none">
      {/* Top Author Icon */}
      <div className="flex items-center gap-2">
        <div className="w-5.5 h-5.5 rounded-full bg-gradient-to-tr from-[#7928CA] to-[#E03E99] p-0.5 flex items-center justify-center shadow-[0_0_10px_rgba(224,62,153,0.5)]">
          <div className="w-full h-full rounded-full bg-[#120f22] flex items-center justify-center text-[9px] font-bold text-pink-400">
            VA
          </div>
        </div>
      </div>

      {/* Quote text */}
      <p
        className="text-[13px] text-white/95 font-normal leading-relaxed my-auto"
        style={{ fontFamily: "var(--font-outfit), sans-serif" }}
      >
        Bitcoin will be number 1 asset in the next 10 years, beating gold & silver
      </p>

      {/* Author Name */}
      <div
        className="text-[11px] text-[#9ca3af] font-normal"
        style={{ fontFamily: "var(--font-outfit), sans-serif" }}
      >
        Valide Alexandria - CEO AXR Token
      </div>
    </div>
  );
}

