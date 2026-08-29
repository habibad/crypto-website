"use client";

import React, { useState } from "react";

export default function GoalsTelemetryCard() {
  const [activeTab, setActiveTab] = useState<"wallet" | "portfolio">("wallet");

  const bars = [
    30, 45, 60, 40, 75, 90, 65, 80, 50, 70, 85, 95, 60, 40, 70, 85, 90, 75,
    60, 45, 80, 95, 70, 50, 85, 65, 40, 75, 90, 60, 80, 100, 70, 50, 85, 90, 65, 80
  ];

  return (
    <div className="rounded-2xl p-4.5 w-full flex flex-col justify-between border border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.6)] relative overflow-hidden bg-[#120f1c]/90 backdrop-blur-xl h-[205px]">
      {/* Top Tabs */}
      <div className="flex items-center gap-3 text-[11px] font-medium text-[#9ca3af]">
        <button
          onClick={() => setActiveTab("wallet")}
          className={`pb-0.5 transition-colors cursor-pointer ${
            activeTab === "wallet" ? "text-white border-b border-[#E03E99] font-semibold" : "hover:text-gray-200"
          }`}
        >
          My Wallet
        </button>
        <button
          onClick={() => setActiveTab("portfolio")}
          className={`pb-0.5 transition-colors cursor-pointer ${
            activeTab === "portfolio" ? "text-white border-b border-[#E03E99] font-semibold" : "hover:text-gray-200"
          }`}
        >
          My Portfolio
        </button>
      </div>

      {/* Target Figures & Change Button */}
      <div className="flex items-center justify-between mt-1">
        <div>
          <span className="text-[10px] text-[#9ca3af] font-medium">My Goals</span>
          <div className="flex items-baseline gap-1.5 mt-0.5">
            <span className="text-[15px] font-bold text-white font-mono tracking-tight">
              $1.948.121
            </span>
            <span className="text-[10.5px] text-gray-500 font-mono">/ $2.500.000</span>
          </div>
        </div>

        <button className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10.5px] text-gray-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer">
          Change
        </button>
      </div>

      {/* Soundwave Bar Equalizer */}
      <div className="mt-1 relative h-8 w-full flex items-end justify-between gap-[1.5px]">
        {bars.map((height, i) => (
          <div
            key={i}
            className="flex-1 rounded-full bg-gradient-to-t from-[#7928CA] to-[#E03E99]"
            style={{
              height: `${height}%`,
              opacity: i < 30 ? 0.95 : 0.3,
            }}
          />
        ))}
      </div>
    </div>
  );
}
