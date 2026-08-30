"use client";

import React, { useState } from "react";
import { ArrowLeftRight, CreditCard, Wallet2 } from "lucide-react";

export default function WalletSelectorCard() {
  const [selectedMethod, setSelectedMethod] = useState<"cash" | "debit">("cash");

  return (
    <div className="rounded-2xl p-5 w-full flex flex-col justify-between border border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.6)] relative overflow-hidden bg-[#120f1c]/90 backdrop-blur-xl h-[175px] select-none">
      {/* Header */}
      <div className="flex items-center justify-between">
        <span
          className="text-[13px] text-[#9ca3af] font-medium"
          style={{ fontFamily: "var(--font-outfit), sans-serif" }}
        >
          My Wallet
        </span>
        <button
          type="button"
          className="text-xs text-[#9ca3af] hover:text-white transition-colors cursor-pointer"
          style={{ fontFamily: "var(--font-outfit), sans-serif" }}
        >
          History
        </button>
      </div>

      {/* Main Balance */}
      <div
        className="text-[25px] font-bold text-white tracking-tight mt-0.5"
        style={{ fontFamily: "var(--font-outfit), sans-serif" }}
      >
        $10.840
      </div>

      {/* Interactive Switch Center Pill */}
      <div className="my-0.5 flex items-center justify-center">
        <button
          type="button"
          onClick={() => setSelectedMethod((prev) => (prev === "cash" ? "debit" : "cash"))}
          className="w-6.5 h-6.5 rounded-full bg-gradient-to-r from-[#7928CA] to-[#E03E99] p-0.5 shadow-[0_0_12px_rgba(224,62,153,0.55)] flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
          title="Switch Payment Source"
        >
          <ArrowLeftRight className="w-3.5 h-3.5 text-white" />
        </button>
      </div>

      {/* Dual Selector Badges */}
      <div className="grid grid-cols-2 gap-2.5">
        {/* Digital Cash */}
        <button
          type="button"
          onClick={() => setSelectedMethod("cash")}
          className={`p-2.5 rounded-xl border flex flex-col items-start gap-0.5 transition-all text-left cursor-pointer ${
            selectedMethod === "cash"
              ? "bg-[#E03E99]/15 border-[#E03E99]/60 shadow-[0_0_12px_rgba(224,62,153,0.25)]"
              : "bg-white/5 border-white/10 opacity-70 hover:opacity-100"
          }`}
        >
          <div className="flex items-center gap-1.5 text-[#9ca3af] text-[10px]">
            <Wallet2 className="w-3 h-3 text-pink-400" />
            <span style={{ fontFamily: "var(--font-outfit), sans-serif" }}>Digital Cash</span>
          </div>
          <span
            className="text-[13px] font-bold text-white"
            style={{ fontFamily: "var(--font-outfit), sans-serif" }}
          >
            $5.500
          </span>
        </button>

        {/* Debit Card */}
        <button
          type="button"
          onClick={() => setSelectedMethod("debit")}
          className={`p-2.5 rounded-xl border flex flex-col items-start gap-0.5 transition-all text-left cursor-pointer ${
            selectedMethod === "debit"
              ? "bg-[#7928CA]/20 border-[#7928CA]/60 shadow-[0_0_12px_rgba(121,40,202,0.25)]"
              : "bg-white/5 border-white/10 opacity-70 hover:opacity-100"
          }`}
        >
          <div className="flex items-center gap-1.5 text-[#9ca3af] text-[10px]">
            <CreditCard className="w-3 h-3 text-purple-400" />
            <span style={{ fontFamily: "var(--font-outfit), sans-serif" }}>Debit Card</span>
          </div>
          <span
            className="text-[13px] font-bold text-white"
            style={{ fontFamily: "var(--font-outfit), sans-serif" }}
          >
            $5.340
          </span>
        </button>
      </div>
    </div>
  );
}

