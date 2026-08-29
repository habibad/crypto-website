"use client";

import React from "react";
import { Shield, Layers, Users } from "lucide-react";

export default function SecuredEcosystemCard() {
  return (
    <div className="rounded-2xl p-5 w-full flex flex-col justify-center border border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.6)] relative overflow-hidden bg-[#120f1c]/90 backdrop-blur-xl h-[165px]">
      {/* 3-Point Radar Connection */}
      <div className="relative flex items-center justify-between py-2 px-1">
        {/* Dashed Connecting Line */}
        <div className="absolute left-7 right-7 top-1/2 -translate-y-1/2 border-b border-dashed border-white/20 z-0" />

        {/* Left: Assets */}
        <div className="relative z-10 flex flex-col items-center gap-1.5">
          <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 backdrop-blur-md">
            <Layers className="w-4 h-4" />
          </div>
          <span className="text-[10.5px] text-[#9ca3af] font-medium">Assets</span>
        </div>

        {/* Center: Glowing Secured Shield Emblem */}
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-13 h-13 rounded-full bg-gradient-to-tr from-[#7928CA] to-[#E03E99] p-0.5 shadow-[0_0_25px_rgba(224,62,153,0.6)] flex items-center justify-center">
            <div className="w-full h-full rounded-full bg-gradient-to-tr from-[#903aff] to-[#e03e99] flex flex-col items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
          </div>
          <span className="text-[9.5px] tracking-wider text-[#ff8ac8] font-bold mt-1.5">
            SECURED
          </span>
        </div>

        {/* Right: Investors */}
        <div className="relative z-10 flex flex-col items-center gap-1.5">
          <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 backdrop-blur-md">
            <Users className="w-4 h-4" />
          </div>
          <span className="text-[10.5px] text-[#9ca3af] font-medium">Investors</span>
        </div>
      </div>
    </div>
  );
}
