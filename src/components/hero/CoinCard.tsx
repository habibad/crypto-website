"use client";

import React, { useState, useEffect } from "react";
import { Plus, TrendingDown, Sparkles } from "lucide-react";
import AlexandriaCoin3D from "../3d/AlexandriaCoin3D";

interface CoinCardProps {
  isZoomed?: boolean;
}

export default function CoinCard({ isZoomed = false }: CoinCardProps) {
  const [price, setPrice] = useState(27942.65);
  const [change, setChange] = useState(-1521.06);

  // Subtle real-time dynamic ticking for live crypto feel
  useEffect(() => {
    const interval = setInterval(() => {
      const delta = (Math.random() - 0.48) * 4.2;
      setPrice((prev) => +(prev + delta).toFixed(2));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="axr-coin-card"
      className="glass-panel-glow rounded-3xl p-6 w-full flex flex-col justify-between border border-[#E03E99]/40 shadow-[0_0_50px_-10px_rgba(224,62,153,0.4)] relative overflow-hidden group min-h-[360px]"
    >
      {/* Top Ambient Glow */}
      <div className="absolute -top-12 -right-12 w-44 h-44 bg-[#E03E99]/30 rounded-full blur-3xl pointer-events-none" />

      {/* Header Info */}
      <div className="flex items-start justify-between z-10">
        <div>
          <div className="flex items-center gap-1.5 text-xs text-pink-300 font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#E03E99]" />
            <span>Alexandria (AXR)</span>
          </div>
          <div className="text-3xl font-extrabold text-white tracking-tight mt-1 font-mono">
            ${price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </div>
          <div className="flex items-center gap-1 text-xs text-rose-400 font-medium mt-1">
            <TrendingDown className="w-3 h-3" />
            <span>
              {change.toFixed(2)} (-4.18%)
            </span>
          </div>
        </div>

        {/* Plus Action Button */}
        <button
          className="w-9 h-9 rounded-full bg-white text-[#070709] flex items-center justify-center font-bold shadow-[0_0_20px_rgba(255,255,255,0.6)] hover:scale-110 active:scale-95 transition-all"
          title="Buy / Add AXR"
        >
          <Plus className="w-5 h-5 stroke-[2.5]" />
        </button>
      </div>

      {/* Center 3D WebGL Holographic Coin Canvas */}
      <div className="relative flex-1 flex items-center justify-center py-2 z-10 min-h-[190px]">
        <AlexandriaCoin3D size={240} className="scale-110" />
      </div>

      {/* Bottom Progress Telemetry */}
      <div className="z-10 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-gray-300">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[11px] font-medium text-gray-400">Live Telemetry</span>
        </div>
        <span className="text-[11px] font-mono text-pink-300">Target: $32,000.00</span>
      </div>
    </div>
  );
}
