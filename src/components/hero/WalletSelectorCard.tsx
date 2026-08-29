"use client";

import React, { useState } from "react";
import { ArrowLeftRight, CreditCard, Wallet2 } from "lucide-react";

export default function WalletSelectorCard() {
  const [selectedMethod, setSelectedMethod] = useState<"cash" | "debit">("cash");

  return (
    <div className="glass-card rounded-2xl p-5 w-full flex flex-col justify-between border border-white/10 shadow-2xl relative overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <span className="text-xs text-gray-400 font-medium">My Wallet</span>
          <div className="text-xl font-bold text-white tracking-tight mt-0.5">$10.840</div>
        </div>
        <button className="text-xs text-gray-400 hover:text-white transition-colors">History</button>
      </div>

      {/* Interactive Switch Center Pill */}
      <div className="my-3 flex items-center justify-center">
        <button
          onClick={() => setSelectedMethod((prev) => (prev === "cash" ? "debit" : "cash"))}
          className="w-8 h-8 rounded-full bg-gradient-to-r from-[#7928CA] to-[#E03E99] p-0.5 shadow-[0_0_15px_rgba(224,62,153,0.5)] flex items-center justify-center hover:scale-110 transition-transform"
          title="Switch Payment Source"
        >
          <ArrowLeftRight className="w-3.5 h-3.5 text-white" />
        </button>
      </div>

      {/* Dual Selector Badges */}
      <div className="grid grid-cols-2 gap-2">
        {/* Digital Cash */}
        <button
          onClick={() => setSelectedMethod("cash")}
          className={`p-2.5 rounded-xl border flex flex-col items-start gap-1 transition-all text-left ${
            selectedMethod === "cash"
              ? "bg-[#E03E99]/15 border-[#E03E99]/60 shadow-[0_0_15px_rgba(224,62,153,0.2)]"
              : "bg-white/5 border-white/10 opacity-70 hover:opacity-100"
          }`}
        >
          <div className="flex items-center gap-1.5 text-gray-400 text-[10px]">
            <Wallet2 className="w-3 h-3 text-pink-400" />
            <span>Digital Cash</span>
          </div>
          <span className="text-xs font-bold text-white font-mono">$5.500</span>
        </button>

        {/* Debit Card */}
        <button
          onClick={() => setSelectedMethod("debit")}
          className={`p-2.5 rounded-xl border flex flex-col items-start gap-1 transition-all text-left ${
            selectedMethod === "debit"
              ? "bg-[#7928CA]/20 border-[#7928CA]/60 shadow-[0_0_15px_rgba(121,40,202,0.2)]"
              : "bg-white/5 border-white/10 opacity-70 hover:opacity-100"
          }`}
        >
          <div className="flex items-center gap-1.5 text-gray-400 text-[10px]">
            <CreditCard className="w-3 h-3 text-purple-400" />
            <span>Debit Card</span>
          </div>
          <span className="text-xs font-bold text-white font-mono">$5.340</span>
        </button>
      </div>
    </div>
  );
}
