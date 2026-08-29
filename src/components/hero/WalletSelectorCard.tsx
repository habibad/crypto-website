"use client";

import React, { useState } from "react";
import { ArrowLeftRight, CreditCard, Wallet2 } from "lucide-react";

export default function WalletSelectorCard() {
  const [selectedMethod, setSelectedMethod] = useState<"cash" | "debit">("cash");

  return (
    <div className="rounded-2xl p-4 w-full flex flex-col justify-between border border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.6)] relative overflow-hidden bg-[#120f1c]/90 backdrop-blur-xl h-[160px]">
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-[13px] text-[#9ca3af] font-medium">My Wallet</span>
        <button className="text-xs text-[#9ca3af] hover:text-white transition-colors cursor-pointer">History</button>
      </div>

      {/* Main Balance */}
      <div className="text-[22px] font-bold text-white tracking-tight mt-0.5 font-mono">
        $10.840
      </div>

      {/* Interactive Switch Center Pill */}
      <div className="my-1 flex items-center justify-center">
        <button
          onClick={() => setSelectedMethod((prev) => (prev === "cash" ? "debit" : "cash"))}
          className="w-6 h-6 rounded-full bg-gradient-to-r from-[#7928CA] to-[#E03E99] p-0.5 shadow-[0_0_12px_rgba(224,62,153,0.5)] flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
          title="Switch Payment Source"
        >
          <ArrowLeftRight className="w-3 h-3 text-white" />
        </button>
      </div>

      {/* Dual Selector Badges */}
      <div className="grid grid-cols-2 gap-2">
        {/* Digital Cash */}
        <button
          onClick={() => setSelectedMethod("cash")}
          className={`p-2 rounded-xl border flex flex-col items-start gap-0.5 transition-all text-left cursor-pointer ${
            selectedMethod === "cash"
              ? "bg-[#E03E99]/15 border-[#E03E99]/60 shadow-[0_0_12px_rgba(224,62,153,0.25)]"
              : "bg-white/5 border-white/10 opacity-70 hover:opacity-100"
          }`}
        >
          <div className="flex items-center gap-1 text-[#9ca3af] text-[9.5px]">
            <Wallet2 className="w-2.5 h-2.5 text-pink-400" />
            <span>Digital Cash</span>
          </div>
          <span className="text-xs font-bold text-white font-mono">$5.500</span>
        </button>

        {/* Debit Card */}
        <button
          onClick={() => setSelectedMethod("debit")}
          className={`p-2 rounded-xl border flex flex-col items-start gap-0.5 transition-all text-left cursor-pointer ${
            selectedMethod === "debit"
              ? "bg-[#7928CA]/20 border-[#7928CA]/60 shadow-[0_0_12px_rgba(121,40,202,0.25)]"
              : "bg-white/5 border-white/10 opacity-70 hover:opacity-100"
          }`}
        >
          <div className="flex items-center gap-1 text-[#9ca3af] text-[9.5px]">
            <CreditCard className="w-2.5 h-2.5 text-purple-400" />
            <span>Debit Card</span>
          </div>
          <span className="text-xs font-bold text-white font-mono">$5.340</span>
        </button>
      </div>
    </div>
  );
}
