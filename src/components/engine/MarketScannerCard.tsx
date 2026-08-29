"use client";

import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";

export default function MarketScannerCard() {
  const [scanPercentage, setScanPercentage] = useState(37.9);

  // Dynamic percentage ramp-up loop: 37.9% -> 82.8% -> 96.7%
  useEffect(() => {
    const targets = [37.9, 64.2, 83.9, 96.7];
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % targets.length;
      setScanPercentage(targets[index]);
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  const bars = [25, 45, 80, 55, 95, 70, 40, 85, 60, 90, 50, 75];

  return (
    <div className="glass-card rounded-3xl p-7 flex flex-col justify-between border border-white/10 shadow-2xl relative overflow-hidden group min-h-[380px]">
      {/* Visual: Bar Chart with Magnifying Reticle Scanner */}
      <div className="relative flex-1 flex items-center justify-center py-4 w-full">
        {/* Bar Chart Foundation */}
        <div className="relative w-full h-44 flex items-end justify-between gap-2 px-2">
          {bars.map((h, i) => {
            const isNeon = i === 4 || i === 8;
            return (
              <div key={i} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                <div
                  className={`w-full rounded-t transition-all duration-500 ${
                    isNeon
                      ? "bg-gradient-to-t from-[#7928CA] to-[#E03E99] shadow-[0_0_20px_rgba(224,62,153,0.7)]"
                      : "bg-[#181622] border-t border-white/10"
                  }`}
                  style={{ height: `${h}%` }}
                />
              </div>
            );
          })}

          {/* Floating Neon Magnifier Reticle (Centered over main scan bar) */}
          <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-2 border-pink-400/80 backdrop-blur-md bg-[#161226]/80 shadow-[0_0_35px_rgba(224,62,153,0.5)] flex flex-col items-center justify-center z-20 animate-pulse">
            <div className="text-2xl font-bold font-mono text-white tracking-tight">
              {scanPercentage.toFixed(1)}%
            </div>
            <div className="text-[9px] font-medium text-pink-300 tracking-wider uppercase mt-0.5">
              Scanning Process...
            </div>
          </div>
        </div>
      </div>

      {/* Text Info */}
      <div className="mt-4 z-10">
        <h3 className="text-xl font-bold text-white tracking-tight">Scan the Market</h3>
        <p className="mt-2 text-xs text-gray-400 leading-relaxed max-w-sm">
          Explore tokenomics, sentiment scores, liquidity health, and chain activity across 500+
          crypto assets.
        </p>
      </div>
    </div>
  );
}
