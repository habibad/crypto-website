"use client";

import React, { useState, useEffect } from "react";
import { useLiveCounter } from "@/hooks/useLiveCounter";

export default function GoalsTelemetryCard() {
  const initialBars = [
    30, 45, 60, 40, 75, 90, 65, 80, 50, 70, 85, 95, 60, 40, 70, 85, 90, 75,
    60, 45, 80, 95, 70, 50, 85, 65, 40, 75, 90, 60, 80, 100, 70, 50, 85, 90, 65, 80
  ];

  const [bars, setBars] = useState(initialBars);
  const [barsDrawn, setBarsDrawn] = useState(false);
  const animatedGoal = useLiveCounter({ end: 1948121, duration: 1800, delay: 450 });

  useEffect(() => {
    const timer = setTimeout(() => setBarsDrawn(true), 300);

    // Continuous subtle high-tech live telemetry equalizer rhythm
    const interval = setInterval(() => {
      setBars((prev) =>
        prev.map((val) => {
          const delta = (Math.random() - 0.5) * 16;
          return Math.min(Math.max(val + delta, 25), 100);
        })
      );
    }, 180);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="rounded-2xl p-5 w-full flex flex-col justify-between border border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.6)] relative overflow-hidden bg-[#120f1c]/90 backdrop-blur-xl h-[135px] select-none group transition-all duration-300 hover:border-white/15">
      {/* Target Figures & Change Button */}
      <div className="flex items-center justify-between">
        <div>
          <span
            className="text-[12px] text-[#9ca3af] font-medium tracking-wide flex items-center gap-1.5"
            style={{ fontFamily: "var(--font-outfit), sans-serif" }}
          >
            <span>My Goals</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#E03E99] animate-pulse" />
          </span>
          <div className="flex items-baseline gap-1.5 mt-0.5">
            <span
              className="text-[17px] font-bold text-white tracking-tight tabular-nums"
              style={{ fontFamily: "var(--font-outfit), sans-serif" }}
            >
              {animatedGoal}
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

      {/* Soundwave Bar Equalizer Visualizer with Live Telemetry Pulse */}
      <div className="mt-2 relative h-10 w-full flex items-end justify-between gap-[2px]">
        {bars.map((height, i) => (
          <div
            key={i}
            className="flex-1 rounded-full bg-gradient-to-t from-[#7928CA] to-[#E03E99] transition-all duration-200"
            style={{
              height: barsDrawn ? `${height}%` : "0%",
              opacity: i < 30 ? 0.95 : 0.35,
              transitionDelay: `${i * 12}ms`,
            }}
          />
        ))}
      </div>
    </div>
  );
}


