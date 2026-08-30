"use client";

import React from "react";

export default function InvestmentGaugeCard() {
  const totalTicks = 28;
  const activeTicks = 21;

  return (
    <div className="rounded-2xl p-5 w-full flex flex-col justify-between border border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.6)] relative overflow-hidden bg-[#120f1c]/90 backdrop-blur-xl h-[200px] select-none">
      {/* Header & Style Badge */}
      <div className="flex items-center justify-between">
        <span
          className="text-[13.5px] font-medium text-white tracking-wide"
          style={{ fontFamily: "var(--font-outfit), sans-serif" }}
        >
          Investment Style
        </span>
        <span
          className="text-[11px] font-semibold text-[#ff70ba] bg-[#ff70ba]/10 border border-[#ff70ba]/20 px-2.5 py-0.5 rounded-full"
          style={{ fontFamily: "var(--font-outfit), sans-serif" }}
        >
          Aggresive
        </span>
      </div>

      {/* Radial Speedometer Gauge Visualization */}
      <div className="relative w-full flex items-end justify-center h-[120px] overflow-hidden -mb-1">
        <div className="relative w-44 h-22 overflow-hidden flex items-end justify-center">
          {/* Radial Ticks */}
          {Array.from({ length: totalTicks }).map((_, i) => {
            const angle = 180 + (i / (totalTicks - 1)) * 180;
            const isActive = i <= activeTicks;
            return (
              <div
                key={i}
                className={`absolute bottom-0 w-[2px] h-3.5 origin-bottom transition-all ${
                  isActive
                    ? "bg-gradient-to-t from-[#7928CA] to-[#E03E99] shadow-[0_0_8px_#E03E99]"
                    : "bg-white/10"
                }`}
                style={{
                  transform: `rotate(${angle - 270}deg) translateY(-52px)`,
                }}
              />
            );
          })}

          {/* Glowing Center Semi-Circle with Needle */}
          <div className="w-28 h-14 rounded-t-full bg-gradient-to-t from-[#E03E99]/35 to-[#7928CA]/20 border-t border-pink-500/60 flex items-end justify-center pb-1 relative shadow-[0_0_25px_rgba(224,62,153,0.35)]">
            <div className="w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_10px_#fff] z-10" />
            <div className="absolute bottom-1 left-1/2 w-[1.5px] h-11 bg-white origin-bottom rotate-[38deg] shadow-[0_0_8px_#fff]" />
          </div>
        </div>
      </div>
    </div>
  );
}

