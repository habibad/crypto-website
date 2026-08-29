"use client";

import React, { useState } from "react";
import { TrendingUp, ChevronDown } from "lucide-react";

export default function WeeklyBalanceCard() {
  const [timeframe, setTimeframe] = useState("Weekly");

  const bars = [45, 68, 52, 85, 70, 95, 88, 62, 78, 100, 82, 92];

  return (
    <div className="glass-card rounded-2xl p-5 w-full flex flex-col justify-between border border-white/10 shadow-2xl relative overflow-hidden group">
      {/* Top Header */}
      <div className="flex items-center justify-between">
        <div>
          <span className="text-xs text-gray-400 font-medium tracking-wide">My Portfolio</span>
          <div className="text-2xl font-bold text-white tracking-tight mt-0.5">$948,121</div>
        </div>
        <button className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 hover:text-white hover:bg-white/10 transition-colors">
          <span>{timeframe}</span>
          <ChevronDown className="w-3 h-3 opacity-60" />
        </button>
      </div>

      {/* Delta Badge */}
      <div className="mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-semibold self-start">
        <TrendingUp className="w-3.5 h-3.5" />
        <span>+2,041.52 (7.91%)</span>
      </div>

      {/* Mini Equalizer & Neon Chart Line */}
      <div className="mt-5 relative h-20 w-full flex items-end justify-between gap-1 pt-2">
        {bars.map((height, idx) => (
          <div key={idx} className="flex-1 flex flex-col items-center gap-1 group/bar">
            <div
              className={`w-full rounded-t transition-all duration-500 ${
                idx === 9 || idx === 11
                  ? "bg-gradient-to-t from-[#7928CA] to-[#E03E99] shadow-[0_0_12px_rgba(224,62,153,0.5)]"
                  : "bg-white/10 group-hover/bar:bg-white/25"
              }`}
              style={{ height: `${height}%` }}
            />
          </div>
        ))}

        {/* Floating Neon Chart Curve SVG */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 200 80"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="chartGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7928CA" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#E03E99" stopOpacity="1" />
            </linearGradient>
            <linearGradient id="areaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#E03E99" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#E03E99" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M 0 60 Q 40 50, 70 35 T 140 20 T 200 10 L 200 80 L 0 80 Z"
            fill="url(#areaGrad)"
          />
          <path
            d="M 0 60 Q 40 50, 70 35 T 140 20 T 200 10"
            fill="none"
            stroke="url(#chartGrad)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle cx="200" cy="10" r="3.5" fill="#ffffff" className="animate-ping" />
          <circle cx="200" cy="10" r="3.5" fill="#E03E99" />
        </svg>
      </div>
    </div>
  );
}
