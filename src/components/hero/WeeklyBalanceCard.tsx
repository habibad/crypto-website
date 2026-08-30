"use client";

import React, { useState } from "react";
import { TrendingUp, ChevronDown } from "lucide-react";

export default function WeeklyBalanceCard() {
  const [timeframe] = useState("Weekly");

  return (
    <div
      id="weekly-balance-card"
      className="rounded-2xl p-5 w-full flex flex-col justify-between border border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.6)] relative overflow-hidden bg-[#120f1c]/90 backdrop-blur-xl h-[205px] select-none"
    >
      {/* Header Row */}
      <div className="flex items-start justify-between">
        <div>
          <span
            className="text-[13px] text-[#9ca3af] font-medium tracking-wide"
            style={{ fontFamily: "var(--font-outfit), sans-serif" }}
          >
            My Portfolio
          </span>
          <div
            className="text-[28px] font-bold text-white tracking-tight mt-0.5"
            style={{ fontFamily: "var(--font-outfit), sans-serif" }}
          >
            $1.948.121
          </div>
        </div>

        {/* Weekly Dropdown Pill */}
        <button
          type="button"
          className="flex items-center gap-1 px-3 py-1 rounded-lg bg-white/[0.06] border border-white/[0.08] text-[12px] text-gray-300 hover:text-white transition-colors cursor-pointer"
          style={{ fontFamily: "var(--font-outfit), sans-serif" }}
        >
          <span>{timeframe}</span>
          <ChevronDown className="w-3.5 h-3.5 opacity-70" />
        </button>
      </div>

      {/* Floating Positive Delta Badge */}
      <div className="flex justify-end -mt-1 mr-3 z-10">
        <div
          className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[11.5px] font-semibold shadow-[0_0_12px_rgba(16,185,129,0.2)]"
          style={{ fontFamily: "var(--font-outfit), sans-serif" }}
        >
          <TrendingUp className="w-3.5 h-3.5 stroke-[2.5]" />
          <span>+2.537,12 (9,73%)</span>
        </div>
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

