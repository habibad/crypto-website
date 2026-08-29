"use client";

import React, { useState } from "react";
import { TrendingUp, ChevronDown } from "lucide-react";

export default function WeeklyBalanceCard() {
  const [timeframe] = useState("Weekly");

  return (
    <div className="rounded-2xl p-4.5 w-full flex flex-col justify-between border border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.6)] relative overflow-hidden bg-[#120f1c]/90 backdrop-blur-xl h-[195px]">
      {/* Top Header */}
      <div className="flex items-center justify-between">
        <span className="text-[12.5px] text-[#9ca3af] font-medium">My Portfolio</span>
        <button className="flex items-center gap-1 px-2.5 py-0.5 rounded-lg bg-white/5 border border-white/10 text-[11px] text-[#9ca3af] hover:text-white transition-colors cursor-pointer">
          <span>{timeframe}</span>
          <ChevronDown className="w-3 h-3 opacity-60" />
        </button>
      </div>

      {/* Main Value */}
      <div className="text-[25px] font-bold text-white tracking-tight mt-0.5 font-mono">
        $1.948.121
      </div>

      {/* Delta Badge */}
      <div className="mt-0.5 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[11px] font-semibold self-start">
        <TrendingUp className="w-3 h-3" />
        <span>+2.537,12 (9,73%)</span>
      </div>

      {/* Glowing Neon Chart Curve */}
      <div className="mt-1 relative h-16 w-full flex items-end">
        <svg
          className="w-full h-full"
          viewBox="0 0 240 50"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="curveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7928CA" />
              <stop offset="100%" stopColor="#E03E99" />
            </linearGradient>
            <linearGradient id="fillArea" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#E03E99" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#E03E99" stopOpacity="0.0" />
            </linearGradient>
          </defs>
          <path
            d="M 0 45 Q 50 40, 90 30 T 160 35 T 210 12 T 240 8 L 240 50 L 0 50 Z"
            fill="url(#fillArea)"
          />
          <path
            d="M 0 45 Q 50 40, 90 30 T 160 35 T 210 12 T 240 8"
            fill="none"
            stroke="url(#curveGrad)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle cx="210" cy="12" r="3.5" fill="#ffffff" />
          <circle cx="210" cy="12" r="7" fill="#E03E99" fillOpacity="0.6" />
        </svg>
      </div>
    </div>
  );
}
