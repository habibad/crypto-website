"use client";

import React from "react";
import { ArrowDown } from "lucide-react";
import { useLiveCounter } from "@/hooks/useLiveCounter";

export default function TransactionRoutingCard() {
  const animatedSender = useLiveCounter({ end: 1200, duration: 1400, delay: 500 });
  const animatedReceiver = useLiveCounter({ end: 700, duration: 1400, delay: 600 });

  return (
    <div className="rounded-2xl p-3.5 w-full flex flex-col justify-between border border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.6)] relative overflow-hidden bg-[#120f1c]/90 backdrop-blur-xl h-[130px] select-none group transition-all duration-300 hover:border-white/15">
      {/* Sender Row */}
      <div className="flex items-center justify-between text-[12px] bg-white/[0.04] p-1.5 px-2.5 rounded-lg border border-white/5 group-hover:bg-white/[0.06] transition-colors">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-[#7928CA] to-[#E03E99] flex items-center justify-center text-[9px] font-bold text-white shadow-sm">
            A
          </div>
          <div>
            <div
              className="text-[11.5px] font-semibold text-white leading-tight"
              style={{ fontFamily: "var(--font-outfit), sans-serif" }}
            >
              Alexandria
            </div>
            <div
              className="text-[9px] text-[#9ca3af]"
              style={{ fontFamily: "var(--font-outfit), sans-serif" }}
            >
              Sender (BTC)
            </div>
          </div>
        </div>
        <span
          className="text-[12px] font-semibold text-white tabular-nums"
          style={{ fontFamily: "var(--font-outfit), sans-serif" }}
        >
          {animatedSender}
        </span>
      </div>

      {/* Center Arrow Indicator with continuous pulse */}
      <div className="flex justify-center -my-1.5 z-10">
        <div className="w-4.5 h-4.5 rounded-full bg-[#E03E99] flex items-center justify-center shadow-[0_0_8px_#E03E99] animate-bounce">
          <ArrowDown className="w-2.5 h-2.5 text-white stroke-[2.5]" />
        </div>
      </div>

      {/* Receiver Row */}
      <div className="flex items-center justify-between text-[12px] bg-white/[0.04] p-1.5 px-2.5 rounded-lg border border-white/5 group-hover:bg-white/[0.06] transition-colors">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-[#E03E99] to-[#7928CA] flex items-center justify-center text-[9px] font-bold text-white shadow-sm">
            R
          </div>
          <div>
            <div
              className="text-[11.5px] font-semibold text-white leading-tight"
              style={{ fontFamily: "var(--font-outfit), sans-serif" }}
            >
              Richard
            </div>
            <div
              className="text-[9px] text-[#9ca3af]"
              style={{ fontFamily: "var(--font-outfit), sans-serif" }}
            >
              Receiver (ETH)
            </div>
          </div>
        </div>
        <span
          className="text-[12px] font-semibold text-[#ff8ac8] tabular-nums"
          style={{ fontFamily: "var(--font-outfit), sans-serif" }}
        >
          {animatedReceiver}
        </span>
      </div>
    </div>
  );
}


