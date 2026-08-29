"use client";

import React from "react";

export default function InvestmentGaugeCard() {
  const totalTicks = 28;
  const activeTicks = 21;

  return (
    <div className="rounded-2xl p-5 w-full flex flex-col justify-between border border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.6)] relative overflow-hidden bg-[#120f1c]/90 backdrop-blur-xl h-[205px]">
      {/* Header & Style Badge */}
      <div className="flex items-center justify-between">
        <span className="text-[13px] text-white font-medium">Investment Style</span>
        <span className="px-2.5 py-0.5 rounded-full bg-[#E03E99]/15 border border-[#E03E99]/50 text-[#ff70ba] text-[11px] font-semibold">
          Aggresive
        </span>
      </div>

      {/* Radial Speedometer Arc Gauge */}
      <div className="relative h-24 w-full flex items-center justify-center">
        <div className="relative w-40 h-20 overflow-hidden flex items-end justify-center">
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
                  transform: `rotate(${angle - 270}deg) translateY(-46px)`,
                }}
              />
            );
          })}

          {/* Glowing Center Semi-Circle with Needle */}
          <div className="w-24 h-12 rounded-t-full bg-gradient-to-t from-[#E03E99]/35 to-[#7928CA]/20 border-t border-pink-500/60 flex items-end justify-center pb-1 relative shadow-[0_0_20px_rgba(224,62,153,0.3)]">
            <div className="w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_10px_#fff] z-10" />
            <div className="absolute bottom-1.5 left-1/2 w-[1.5px] h-9 bg-white origin-bottom rotate-[40deg] shadow-[0_0_8px_#fff]" />
          </div>
        </div>
      </div>
    </div>
  );
}
