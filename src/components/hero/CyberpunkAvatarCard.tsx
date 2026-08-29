"use client";

import React from "react";
import { ArrowDown, CheckCircle2 } from "lucide-react";

export default function CyberpunkAvatarCard() {
  return (
    <div className="glass-card rounded-2xl p-5 w-full flex flex-col justify-between border border-white/10 shadow-2xl relative overflow-hidden">
      {/* Top Profile Header with Neon Cyber Visor Portrait */}
      <div className="flex items-center gap-3.5">
        {/* Cyberpunk VR Visor Avatar */}
        <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#7928CA] to-[#E03E99] p-0.5 shadow-[0_0_20px_rgba(224,62,153,0.4)] flex-shrink-0">
          <div className="w-full h-full rounded-2xl bg-[#14121f] overflow-hidden relative flex items-center justify-center">
            {/* Styled Silhouette with Neon Cyan/Magenta Visor */}
            <div className="w-8 h-10 bg-gray-700 rounded-t-full relative mt-2">
              <div className="absolute top-2 left-0 right-0 h-2 bg-cyan-400 rounded-sm shadow-[0_0_8px_#38bdf8]" />
            </div>
            <div className="absolute top-1 right-1 w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5">
            <span className="text-sm font-bold text-white truncate">Richard.eth</span>
            <CheckCircle2 className="w-3.5 h-3.5 text-pink-400 flex-shrink-0" />
          </div>
          <div className="flex items-center justify-between text-[11px] mt-1">
            <span className="text-gray-400">Cash</span>
            <span className="text-white font-mono font-medium">$52.315</span>
          </div>
          <div className="flex items-center justify-between text-[11px]">
            <span className="text-gray-400">Portfolio</span>
            <span className="text-pink-300 font-mono font-medium">$743.167</span>
          </div>
        </div>
      </div>

      {/* Transaction Routing Box */}
      <div className="mt-4 pt-3 border-t border-white/5 space-y-2">
        {/* Sender */}
        <div className="flex items-center justify-between text-xs bg-white/5 p-2 rounded-xl border border-white/5">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-300 flex items-center justify-center text-[10px] font-bold">
              A
            </div>
            <div>
              <div className="text-[11px] font-medium text-white">Alexandria</div>
              <div className="text-[9px] text-gray-400">Sender (BTC)</div>
            </div>
          </div>
          <span className="font-mono text-xs font-semibold text-white">$1,200</span>
        </div>

        {/* Transfer Arrow Indicator */}
        <div className="flex justify-center -my-1">
          <div className="w-5 h-5 rounded-full bg-[#E03E99] flex items-center justify-center shadow-[0_0_10px_#E03E99]">
            <ArrowDown className="w-3 h-3 text-white" />
          </div>
        </div>

        {/* Receiver */}
        <div className="flex items-center justify-between text-xs bg-white/5 p-2 rounded-xl border border-white/5">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-pink-500/20 text-pink-300 flex items-center justify-center text-[10px] font-bold">
              R
            </div>
            <div>
              <div className="text-[11px] font-medium text-white">Richard</div>
              <div className="text-[9px] text-gray-400">Receiver (ETH)</div>
            </div>
          </div>
          <span className="font-mono text-xs font-semibold text-pink-300">$700</span>
        </div>
      </div>
    </div>
  );
}
