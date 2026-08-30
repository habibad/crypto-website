"use client";

import React from "react";
import { Shield, Diamond, Users } from "lucide-react";

export default function SecuredEcosystemCard() {
  return (
    <div className="rounded-2xl p-5 w-full flex flex-col justify-center border border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.6)] relative overflow-hidden bg-[#120f1c]/90 backdrop-blur-xl h-[145px] select-none">
      {/* 3-Point Radar Connection */}
      <div className="relative flex items-center justify-between px-2">
        {/* Dashed Connecting Line */}
        <div className="absolute left-8 right-8 top-1/2 -translate-y-1/2 border-b border-dashed border-white/20 z-0" />

        {/* Left: Assets */}
        <div className="relative z-10 flex flex-col items-center gap-1.5">
          <div className="w-8.5 h-8.5 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 backdrop-blur-md shadow-sm">
            <Diamond className="w-4.5 h-4.5 text-gray-300 stroke-[1.8]" />
          </div>
          <span
            className="text-[12px] text-[#9ca3af] font-medium"
            style={{ fontFamily: "var(--font-outfit), sans-serif" }}
          >
            Assets
          </span>
        </div>

        {/* Center: Glowing Secured Shield Emblem */}
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#7928CA] to-[#E03E99] p-0.5 shadow-[0_0_28px_rgba(224,62,153,0.7)] flex items-center justify-center">
            <div className="w-full h-full rounded-full bg-gradient-to-tr from-[#903aff] to-[#e03e99] flex flex-col items-center justify-center shadow-inner">
              <Shield className="w-5.5 h-5.5 text-white stroke-[2.2]" />
            </div>
          </div>
          <span
            className="text-[10.5px] tracking-wider text-[#ff8ac8] font-bold mt-1.5"
            style={{ fontFamily: "var(--font-outfit), sans-serif" }}
          >
            Secured
          </span>
        </div>

        {/* Right: Investors */}
        <div className="relative z-10 flex flex-col items-center gap-1.5">
          <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 backdrop-blur-md shadow-sm">
            <Users className="w-4 h-4 text-gray-300 stroke-[1.8]" />
          </div>
          <span
            className="text-[11px] text-[#9ca3af] font-medium"
            style={{ fontFamily: "var(--font-outfit), sans-serif" }}
          >
            Investors
          </span>
        </div>
      </div>
    </div>
  );
}

