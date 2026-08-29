"use client";

import React from "react";
import { Target } from "lucide-react";

export default function GoalsTelemetryCard() {
  const bars = [
    30, 45, 60, 40, 75, 90, 65, 80, 50, 70, 85, 95, 60, 40, 70, 85, 90, 75,
    60, 45, 80, 95, 70, 50, 85, 65, 40, 75, 90, 60, 80, 100, 70, 50, 85,
  ];

  return (
    <div className="glass-card rounded-2xl p-5 w-full flex flex-col justify-between border border-white/10 shadow-2xl relative overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-xs text-gray-400 font-medium">
          <Target className="w-3.5 h-3.5 text-pink-400" />
          <span>My Goals</span>
        </div>
        <button className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[11px] text-gray-300 hover:text-white hover:bg-white/10 transition-colors">
          Change
        </button>
      </div>

      {/* Target Figures */}
      <div className="mt-2 flex items-baseline gap-1.5">
        <span className="text-xl font-bold text-white font-mono tracking-tight">
          $1.948.120
        </span>
        <span className="text-xs text-gray-500 font-mono">/ $2.500.000</span>
      </div>

      {/* Soundwave Bar Equalizer */}
      <div className="mt-4 relative h-10 w-full flex items-end justify-between gap-[2px]">
        {bars.map((height, i) => (
          <div
            key={i}
            className="flex-1 rounded-full bg-gradient-to-t from-[#7928CA]/60 to-[#E03E99] transition-all duration-300 hover:scale-y-110"
            style={{
              height: `${height}%`,
              opacity: i < 28 ? 0.9 : 0.25,
            }}
          />
        ))}
      </div>
    </div>
  );
}
