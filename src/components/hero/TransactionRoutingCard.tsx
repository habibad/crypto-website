"use client";

import React from "react";
import { ArrowDown } from "lucide-react";

export default function TransactionRoutingCard() {
  return (
    <div className="rounded-2xl p-3 w-full flex flex-col justify-between border border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.6)] relative overflow-hidden bg-[#120f1c]/90 backdrop-blur-xl h-[120px]">
      {/* Sender Row */}
      <div className="flex items-center justify-between text-[11px] bg-white/[0.04] p-1.5 rounded-lg border border-white/5">
        <div className="flex items-center gap-1.5">
          <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-[#7928CA] to-[#E03E99] flex items-center justify-center text-[8px] font-bold text-white shadow-sm">
            A
          </div>
          <div>
            <div className="text-[10.5px] font-semibold text-white leading-tight">Alexandria</div>
            <div className="text-[8.5px] text-[#9ca3af]">Sender (BTC)</div>
          </div>
        </div>
        <span className="font-mono text-[10.5px] font-semibold text-white">$1.200</span>
      </div>

      {/* Center Arrow Indicator */}
      <div className="flex justify-center -my-1.5 z-10">
        <div className="w-4 h-4 rounded-full bg-[#E03E99] flex items-center justify-center shadow-[0_0_8px_#E03E99]">
          <ArrowDown className="w-2.5 h-2.5 text-white" />
        </div>
      </div>

      {/* Receiver Row */}
      <div className="flex items-center justify-between text-[11px] bg-white/[0.04] p-1.5 rounded-lg border border-white/5">
        <div className="flex items-center gap-1.5">
          <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-[#E03E99] to-[#7928CA] flex items-center justify-center text-[8px] font-bold text-white shadow-sm">
            R
          </div>
          <div>
            <div className="text-[10.5px] font-semibold text-white leading-tight">Richard</div>
            <div className="text-[8.5px] text-[#9ca3af]">Receiver (ETH)</div>
          </div>
        </div>
        <span className="font-mono text-[10.5px] font-semibold text-[#ff8ac8]">$700</span>
      </div>
    </div>
  );
}
