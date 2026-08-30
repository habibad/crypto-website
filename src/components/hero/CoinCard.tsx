"use client";

import React, { useState } from "react";
import { Plus, TrendingDown } from "lucide-react";
import AlexandriaCoin3D from "../3d/AlexandriaCoin3D";

export default function CoinCard() {
  const [displayPrice] = useState("27.942,65");

  return (
    <div
      id="axr-coin-card"
      className="rounded-2xl p-5 w-full flex flex-col justify-between border border-[#7558ec]/45 shadow-[0_15px_40px_rgba(117,88,236,0.25)] relative overflow-hidden group h-[305px] bg-gradient-to-b from-[#1b1335]/95 to-[#0e0a1c]/95 backdrop-blur-2xl will-change-transform z-20 select-none"
    >
      {/* Top Ambient Glow */}
      <div
        id="axr-card-glow"
        className="absolute -top-12 -right-12 w-48 h-48 bg-gradient-to-br from-[#7558ec]/40 to-[#e03e99]/30 rounded-full blur-2xl pointer-events-none"
      />

      {/* Header Info */}
      <div id="axr-card-header" className="flex items-start justify-between z-10 will-change-transform">
        <div>
          <div
            className="text-[13px] text-[#9ca3af] font-medium tracking-wide"
            style={{ fontFamily: "var(--font-outfit), sans-serif" }}
          >
            <span id="axr-card-title">Alexandria (AXR)</span>
          </div>
          <div
            id="axr-card-price"
            className="text-[30px] font-bold text-white tracking-tight mt-0.5"
            style={{ fontFamily: "var(--font-outfit), sans-serif" }}
          >
            ${displayPrice}
          </div>
          <div
            id="axr-card-change"
            className="flex items-center gap-1 text-[12px] text-[#f43f5e] font-medium mt-0.5"
            style={{ fontFamily: "var(--font-outfit), sans-serif" }}
          >
            <span id="axr-card-change-text">-1.521,06(1.27%)</span>
            <TrendingDown className="w-3.5 h-3.5 text-[#f43f5e]" />
          </div>
        </div>

        {/* Plus Action Button */}
        <button
          type="button"
          id="axr-plus-btn"
          className="w-8.5 h-8.5 rounded-full bg-white text-[#070709] flex items-center justify-center font-bold shadow-[0_0_15px_rgba(255,255,255,0.75)] hover:scale-110 active:scale-95 transition-all cursor-pointer flex-shrink-0"
          title="Add / Buy AXR"
        >
          <Plus className="w-4 h-4 stroke-[2.5]" />
        </button>
      </div>

      {/* Center 3D WebGL Holographic Coin Canvas */}
      <div
        id="axr-coin-3d-wrapper"
        className="relative flex-1 w-full h-[195px] flex items-center justify-center -mt-2 z-10 overflow-hidden will-change-transform"
      >
        <AlexandriaCoin3D size={260} className="w-full h-full" />
      </div>
    </div>
  );
}

