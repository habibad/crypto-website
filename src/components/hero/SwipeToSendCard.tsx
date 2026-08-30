"use client";

import React, { useState } from "react";
import { ChevronsRight, Check } from "lucide-react";

export default function SwipeToSendCard() {
  const [swiped, setSwiped] = useState(false);

  const handleSwipe = () => {
    setSwiped(true);
    setTimeout(() => setSwiped(false), 2500);
  };

  return (
    <div className="w-full">
      <div
        onClick={handleSwipe}
        className="w-full h-11 rounded-full bg-[#120f1c]/90 border border-white/[0.08] p-0.5 flex items-center justify-between shadow-[0_8px_20px_rgba(0,0,0,0.6)] cursor-pointer hover:border-[#E03E99]/50 transition-all select-none group backdrop-blur-xl"
      >
        <span
          className="pl-4 text-[12.5px] font-normal text-[#cbd5e1] group-hover:text-white transition-colors"
          style={{ fontFamily: "var(--font-outfit), sans-serif" }}
        >
          {swiped ? "Transaction Initiated!" : "Swipe to Start Send"}
        </span>

        <div className="w-9 h-9 rounded-full bg-gradient-to-r from-[#903aff] to-[#e03e99] flex items-center justify-center shadow-[0_0_15px_rgba(224,62,153,0.6)] group-hover:scale-105 active:scale-95 transition-transform flex-shrink-0">
          {swiped ? (
            <Check className="w-4 h-4 text-white stroke-[2.5]" />
          ) : (
            <ChevronsRight className="w-4 h-4 text-white stroke-[2.5]" />
          )}
        </div>
      </div>
    </div>
  );
}

