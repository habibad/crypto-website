"use client";

import React, { useState } from "react";

export default function WalletPortfolioTabsCard() {
  const [activeTab, setActiveTab] = useState<"wallet" | "portfolio">("wallet");

  return (
    <div className="w-full rounded-xl px-4 py-1.5 flex items-center justify-around border border-white/[0.08] shadow-[0_8px_20px_rgba(0,0,0,0.5)] bg-[#110d1c]/90 backdrop-blur-xl h-[40px] select-none">
      <button
        type="button"
        onClick={() => setActiveTab("wallet")}
        className={`text-[12.5px] font-medium transition-all cursor-pointer ${
          activeTab === "wallet"
            ? "text-[#c084fc] font-semibold drop-shadow-[0_0_8px_rgba(192,132,252,0.55)]"
            : "text-[#9ca3af] hover:text-gray-300"
        }`}
        style={{ fontFamily: "var(--font-outfit), sans-serif" }}
      >
        My Wallet
      </button>

      <div className="w-[1px] h-4 bg-white/10" />

      <button
        type="button"
        onClick={() => setActiveTab("portfolio")}
        className={`text-[12.5px] font-medium transition-all cursor-pointer ${
          activeTab === "portfolio"
            ? "text-[#c084fc] font-semibold drop-shadow-[0_0_8px_rgba(192,132,252,0.55)]"
            : "text-[#9ca3af] hover:text-gray-300"
        }`}
        style={{ fontFamily: "var(--font-outfit), sans-serif" }}
      >
        My Portfolio
      </button>
    </div>
  );
}
