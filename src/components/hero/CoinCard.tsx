"use client";

import React, { useState, useEffect } from "react";
import { Plus, TrendingDown } from "lucide-react";
import AlexandriaCoin3D from "../3d/AlexandriaCoin3D";
import { useLiveCounter } from "@/hooks/useLiveCounter";

export default function CoinCard() {
  const animatedPrice = useLiveCounter({
    end: 27942.65,
    duration: 1700,
    delay: 350,
    decimals: 2,
    separator: ".",
    decimalSeparator: ",",
  });

  const [livePrice, setLivePrice] = useState(animatedPrice);
  const [isTick, setIsTick] = useState(false);

  useEffect(() => {
    setLivePrice(animatedPrice);
  }, [animatedPrice]);

  // Periodic subtle crypto exchange live heartbeat ticker
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTick(true);
      setTimeout(() => setIsTick(false), 800);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="axr-coin-card"
      className="rounded-[26px] p-5.5 sm:p-6 w-full flex flex-col justify-between border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.7)] relative overflow-hidden group h-[305px] z-20 select-none transition-all duration-300 hover:border-white/[0.14]"
      style={{
        background: "linear-gradient(145deg, #150c20 0%, #24112c 45%, #0f0817 100%)",
      }}
    >
      {/* Warm Magenta/Purple Ambient Radial Glow (Matching Reference Image 2) */}
      <div
        id="axr-card-glow"
        className="absolute -top-6 right-0 w-72 h-72 rounded-full pointer-events-none blur-3xl opacity-85"
        style={{
          background:
            "radial-gradient(circle at 65% 35%, rgba(219, 39, 119, 0.42) 0%, rgba(147, 51, 234, 0.25) 45%, transparent 75%)",
        }}
      />

      {/* Header Info */}
      <div id="axr-card-header" className="relative flex items-start justify-between z-20 will-change-transform">
        <div>
          {/* Subtitle / Asset Name */}
          <div
            className="text-[13px] text-gray-400 font-normal tracking-wide"
            style={{ fontFamily: "var(--font-outfit), sans-serif" }}
          >
            Alexandria (AXR)
          </div>

          {/* Large Main Price */}
          <div
            id="axr-card-price"
            className={`text-[31px] sm:text-[33px] font-semibold text-white tracking-tight leading-none mt-1.5 tabular-nums transition-colors duration-500 ${
              isTick ? "text-emerald-300 drop-shadow-[0_0_10px_rgba(110,231,183,0.6)]" : ""
            }`}
            style={{ fontFamily: "var(--font-outfit), sans-serif" }}
          >
            ${livePrice}
          </div>

          {/* Change Indicator */}
          <div
            id="axr-card-change"
            className="flex items-center gap-1 text-[12px] text-[#f87171] font-normal mt-1.5"
            style={{ fontFamily: "var(--font-outfit), sans-serif" }}
          >
            <span id="axr-card-change-text">-1.521,06(1.27%)</span>
            <TrendingDown className="w-3.5 h-3.5 text-[#f87171]" />
          </div>
        </div>

        {/* Plus Action Button (Pure White Circular Button matching Reference) */}
        <button
          type="button"
          id="axr-plus-btn"
          className="w-9 h-9 rounded-full bg-white text-[#0f0b18] flex items-center justify-center font-bold shadow-[0_4px_14px_rgba(0,0,0,0.4)] hover:scale-105 active:scale-95 transition-all cursor-pointer flex-shrink-0"
          title="Add / Buy AXR"
        >
          <Plus className="w-4 h-4 stroke-[3] text-black" />
        </button>
      </div>

      {/* 3D Alexandria Coin Canvas (Slightly reduced size for optimal balance) */}
      <div
        id="axr-coin-3d-wrapper"
        className="absolute -right-5 -bottom-9 w-[275px] h-[275px] z-10 pointer-events-auto flex items-center justify-center will-change-transform"
      >
        <AlexandriaCoin3D size={275} className="w-full h-full" />
      </div>
    </div>
  );
}
