"use client";

import React from "react";

export default function GoalsTelemetryCard() {
  const bars = [
    30, 45, 60, 40, 75, 90, 65, 80, 50, 70, 85, 95, 60, 40, 70, 85, 90, 75,
    60, 45, 80, 95, 70, 50, 85, 65, 40, 75, 90, 60, 80, 100, 70, 50, 85, 90, 65, 80
  ];

  return (
    <div className="rounded-2xl p-5 w-full flex flex-col justify-between border border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.6)] relative overflow-hidden bg-[#120f1c]/90 backdrop-blur-xl h-[135px] select-none">
      {/* Target Figures & Change Button */}
      <div className="flex items-center justify-between">
        <div>
          <span
            className="text-[12px] text-[#9ca3af] font-medium tracking-wide"
            style={{ fontFamily: "var(--font-outfit), sans-serif" }}
          >
            My Goals
          </span>
          <div className="flex items-baseline gap-1.5 mt-0.5">
            <span
              className="text-[17px] font-bold text-white tracking-tight"
              style={{ fontFamily: "var(--font-outfit), sans-serif" }}
            >
              $1.948.121
            </span>
            <span
              className="text-[11.5px] text-gray-500 font-mono"
            >
              /$2.500.000
            </span>
          </div>
        </div>

        <button
          type="button"
          className="px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-[11.5px] text-gray-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          style={{ fontFamily: "var(--font-outfit), sans-serif" }}
        >
          Change
        </button>
      </div>

      {/* Soundwave Bar Equalizer Visualizer */}
      <div className="mt-2 relative h-10 w-full flex items-end justify-between gap-[2px]">
        {bars.map((height, i) => (
          <div
            key={i}
            className="flex-1 rounded-full bg-gradient-to-t from-[#7928CA] to-[#E03E99] transition-all"
            style={{
              height: `${height}%`,
              opacity: i < 30 ? 0.95 : 0.35,
            }}
          />
        ))}
      </div>
    </div>
  );
}

