"use client";

import React from "react";
import { Gauge } from "lucide-react";

export default function InvestmentGaugeCard() {
  // 30 tick marks along 180 degrees
  const ticks = Array.from({ length: 25 });

  return (
    <div className="glass-card rounded-2xl p-5 w-full flex flex-col justify-between border border-white/10 shadow-2xl relative overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-400 font-medium tracking-wide">Investment Style</span>
        <span className="px-2.5 py-0.5 rounded-full bg-[#E03E99]/20 border border-[#E03E99]/40 text-[#E03E99] text-[10px] font-bold uppercase tracking-wider shadow-[0_0_10px_rgba(224,62,153,0.3)]">
          Aggressive
        </span>
      </div>

      {/* Radial Speedometer Gauge */}
      <div className="relative mt-2 flex flex-col items-center justify-center pt-2">
        {/* Semi-circle Gauge Canvas / SVG */}
        <div className="relative w-40 h-20 overflow-hidden flex items-end justify-center">
          {/* Arc Background Glow */}
          <div className="absolute inset-0 w-40 h-40 rounded-full border-8 border-transparent border-t-[#E03E99]/30 border-r-[#7928CA]/30 border-l-white/10 -rotate-45" />

          {/* Tick marks */}
          <div className="absolute inset-0 w-40 h-40 rounded-full">
            {ticks.map((_, i) => {
              const deg = 180 + (i / (ticks.length - 1)) * 180;
              const isHigh = i > 17;
              return (
                <div
                  key={i}
                  className="absolute top-0 left-1/2 -translate-x-1/2 origin-[center_80px]"
                  style={{ transform: `rotate(${deg}deg)` }}
                >
                  <div
                    className={`w-[1.5px] ${
                      isHigh ? "h-2.5 bg-[#E03E99]" : "h-1.5 bg-white/20"
                    }`}
                  />
                </div>
              );
            })}
          </div>

          {/* Glowing Dial Gradient Arc */}
          <svg className="w-40 h-20" viewBox="0 0 160 80">
            <defs>
              <linearGradient id="gaugeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="50%" stopColor="#7928CA" />
                <stop offset="100%" stopColor="#E03E99" />
              </linearGradient>
            </defs>
            <path
              d="M 15 75 A 65 65 0 0 1 145 75"
              fill="none"
              stroke="url(#gaugeGrad)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="210"
              strokeDashoffset="35"
            />
          </svg>

          {/* Needle Center & Pointer */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white shadow-[0_0_12px_#E03E99] flex items-center justify-center z-10">
            <div className="w-1.5 h-1.5 rounded-full bg-[#070709]" />
          </div>

          {/* Needle Line (pointing to aggressive zone ~ 40deg) */}
          <div
            className="absolute bottom-2 left-1/2 origin-bottom w-[2px] h-14 bg-gradient-to-t from-white to-[#E03E99] shadow-[0_0_8px_#E03E99] rounded-full transition-transform duration-1000"
            style={{ transform: "rotate(42deg) translateX(-50%)" }}
          />
        </div>

        {/* Min / Max Labels */}
        <div className="w-full flex justify-between px-2 text-[10px] text-gray-500 font-mono mt-1">
          <span>Safe</span>
          <span>Moderate</span>
          <span className="text-[#E03E99] font-bold">Aggressive</span>
        </div>
      </div>
    </div>
  );
}
