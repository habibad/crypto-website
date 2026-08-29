"use client";

import React from "react";
import { TrendingUp, ArrowUpRight } from "lucide-react";

export default function CandlestickTrendsCard() {
  // Data for candlestick chart: { isBullish, wickTop, wickBottom, bodyTop, bodyHeight, isHighlighted }
  const candles = [
    { isBullish: true, wickTop: 20, wickBottom: 80, bodyTop: 35, bodyHeight: 30, isHighlighted: false },
    { isBullish: false, wickTop: 15, wickBottom: 85, bodyTop: 30, bodyHeight: 40, isHighlighted: false },
    { isBullish: true, wickTop: 10, wickBottom: 90, bodyTop: 25, bodyHeight: 45, isHighlighted: true, tooltip: "+2,537.12 (9.73%)" },
    { isBullish: false, wickTop: 30, wickBottom: 80, bodyTop: 40, bodyHeight: 25, isHighlighted: false },
    { isBullish: true, wickTop: 25, wickBottom: 75, bodyTop: 35, bodyHeight: 30, isHighlighted: false },
    { isBullish: false, wickTop: 20, wickBottom: 85, bodyTop: 30, bodyHeight: 35, isHighlighted: false },
    { isBullish: true, wickTop: 15, wickBottom: 95, bodyTop: 20, bodyHeight: 50, isHighlighted: false },
    { isBullish: true, wickTop: 5, wickBottom: 95, bodyTop: 15, bodyHeight: 60, isHighlighted: true, tooltip: "+1,329.24 (8.39%)" },
    { isBullish: false, wickTop: 35, wickBottom: 75, bodyTop: 45, bodyHeight: 20, isHighlighted: false },
  ];

  return (
    <div className="glass-card rounded-3xl p-7 flex flex-col justify-between border border-white/10 shadow-2xl relative overflow-hidden group min-h-[380px]">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-1/4 w-44 h-44 bg-[#E03E99]/20 rounded-full blur-3xl pointer-events-none" />

      {/* Visual: Candlestick Chart Area */}
      <div className="relative flex-1 flex items-center justify-center py-4 w-full">
        <div className="relative w-full h-44 flex items-center justify-between px-2 pt-6">
          {/* Subtle Grid Horizontal Lines */}
          <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-10">
            <div className="w-full h-[1px] bg-white" />
            <div className="w-full h-[1px] bg-white" />
            <div className="w-full h-[1px] bg-white" />
            <div className="w-full h-[1px] bg-white" />
          </div>

          {candles.map((c, i) => (
            <div key={i} className="relative flex-1 flex flex-col items-center justify-center h-full group/candle">
              {/* Floating Tooltip Badge if highlighted */}
              {c.isHighlighted && (
                <div className="absolute -top-3 z-20 flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#171424] border border-[#E03E99]/60 text-[10px] font-mono text-emerald-400 shadow-[0_0_15px_rgba(224,62,153,0.4)] whitespace-nowrap animate-pulse">
                  <TrendingUp className="w-3 h-3 text-emerald-400" />
                  <span>{c.tooltip}</span>
                </div>
              )}

              {/* Upper & Lower Wick Line */}
              <div
                className={`w-[1.5px] absolute ${
                  c.isHighlighted ? "bg-[#E03E99]" : "bg-white/20 group-hover/candle:bg-white/40"
                }`}
                style={{ top: `${c.wickTop}%`, bottom: `${100 - c.wickBottom}%` }}
              />

              {/* Candlestick Body */}
              <div
                className={`w-3.5 sm:w-4 rounded-sm absolute transition-all ${
                  c.isHighlighted
                    ? "bg-gradient-to-b from-[#E03E99] to-[#7928CA] border border-pink-300 shadow-[0_0_20px_rgba(224,62,153,0.8)] scale-110"
                    : c.isBullish
                    ? "bg-white/10 border border-white/15 group-hover/candle:bg-white/20"
                    : "bg-[#181822] border border-white/10"
                }`}
                style={{
                  top: `${c.bodyTop}%`,
                  height: `${c.bodyHeight}%`,
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Text Info */}
      <div className="mt-4 z-10">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-white tracking-tight">Predict Market Trends</h3>
          <span className="text-xs text-pink-400 font-medium flex items-center gap-1 hover:underline cursor-pointer">
            Details <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </div>
        <p className="mt-2 text-xs text-gray-400 leading-relaxed max-w-sm">
          Uncover AI-powered forecasts for token movement, volatility, and momentum shifts before
          they happen.
        </p>
      </div>
    </div>
  );
}
