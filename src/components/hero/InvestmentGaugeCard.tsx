"use client";

import React, { useState, useEffect } from "react";

export default function InvestmentGaugeCard() {
  const totalTicks = 32;
  const targetActiveTicks = 24;
  const [currentActiveTicks, setCurrentActiveTicks] = useState(0);
  const [needleAngle, setNeedleAngle] = useState(-80); // Start at rest

  useEffect(() => {
    // 1. Staggered needle sweep with spring settling
    const timer = setTimeout(() => {
      setNeedleAngle(40); // Target angle (Aggressive zone)
    }, 500);

    // 2. Progressive tick illumination
    let tickCount = 0;
    const interval = setInterval(() => {
      tickCount++;
      setCurrentActiveTicks(tickCount);
      if (tickCount >= targetActiveTicks) {
        clearInterval(interval);
      }
    }, 40);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="rounded-[24px] p-5 w-full flex flex-col justify-between border border-white/[0.08] shadow-[0_15px_40px_rgba(0,0,0,0.65)] relative overflow-hidden bg-[#120f1c]/95 backdrop-blur-xl h-[200px] select-none group transition-all duration-300 hover:border-white/15">
      {/* Header & Style Badge */}
      <div className="flex items-center justify-between z-10">
        <span
          className="text-[14px] font-medium text-white tracking-wide"
          style={{ fontFamily: "var(--font-outfit), sans-serif" }}
        >
          Investment Style
        </span>
        <span
          className="text-[11.5px] font-semibold text-[#ff70ba] bg-[#ff70ba]/15 border border-[#ff70ba]/30 px-3 py-0.5 rounded-full shadow-[0_0_12px_rgba(255,112,186,0.25)]"
          style={{ fontFamily: "var(--font-outfit), sans-serif" }}
        >
          Aggressive
        </span>
      </div>

      {/* Prominent Large Radial Speedometer Gauge Visualization */}
      <div className="relative w-full flex items-end justify-center h-[135px] overflow-hidden -mb-2">
        {/* Soft Ambient Radial Bloom behind the Gauge */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[260px] h-[130px] rounded-t-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 90% 100% at 50% 100%, rgba(224,62,153,0.35) 0%, rgba(121,40,202,0.18) 50%, transparent 80%)",
            filter: "blur(20px)",
          }}
        />

        {/* Large Semi-Circular Gauge Chassis */}
        <div className="relative w-[230px] h-[115px] overflow-hidden flex items-end justify-center">
          {/* Radial Ticks */}
          {Array.from({ length: totalTicks }).map((_, i) => {
            const angle = 180 + (i / (totalTicks - 1)) * 180;
            const isActive = i <= currentActiveTicks;
            return (
              <div
                key={i}
                className={`absolute bottom-0 w-[2.5px] h-[16px] origin-bottom rounded-full transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-t from-[#9333ea] to-[#ec4899] shadow-[0_0_10px_#ec4899]"
                    : "bg-white/[0.08]"
                }`}
                style={{
                  transform: `rotate(${angle - 270}deg) translateY(-84px)`,
                }}
              />
            );
          })}

          {/* Inner Glowing Semi-Circle with Sweeping Needle */}
          <div className="w-[140px] h-[70px] rounded-t-full bg-gradient-to-t from-[#E03E99]/35 via-[#9333ea]/20 to-transparent border-t border-pink-400/60 flex items-end justify-center pb-1 relative shadow-[0_0_30px_rgba(224,62,153,0.3)]">
            {/* Center Pivot Dot */}
            <div className="w-3.5 h-3.5 rounded-full bg-white shadow-[0_0_12px_#ffffff] z-10" />

            {/* Glowing Sweeping Needle */}
            <div
              className="absolute bottom-1 left-1/2 w-[2.5px] h-[64px] bg-gradient-to-t from-white via-white to-pink-200 rounded-full origin-bottom shadow-[0_0_10px_#ffffff,0_0_20px_rgba(236,72,153,0.8)]"
              style={{
                transform: `translateX(-50%) rotate(${needleAngle}deg)`,
                transition: "transform 1.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
