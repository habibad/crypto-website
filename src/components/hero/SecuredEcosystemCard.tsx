"use client";

import React from "react";
import { Shield, Lock, Users, Layers } from "lucide-react";

export default function SecuredEcosystemCard() {
  return (
    <div className="glass-card rounded-2xl p-5 w-full flex flex-col justify-between border border-white/10 shadow-2xl relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-[#E03E99]/20 rounded-full blur-2xl pointer-events-none" />

      {/* Main Interactive Diagram */}
      <div className="relative flex items-center justify-between py-2">
        {/* Left Node: Assets */}
        <div className="flex flex-col items-center gap-1.5 z-10">
          <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 shadow-inner">
            <Layers className="w-4 h-4 text-purple-300" />
          </div>
          <span className="text-[11px] text-gray-400 font-medium">Assets</span>
        </div>

        {/* Central Shield Radar */}
        <div className="relative z-10 flex flex-col items-center">
          <div className="relative w-16 h-16 rounded-full bg-gradient-to-tr from-[#7928CA] to-[#E03E99] p-0.5 shadow-[0_0_25px_rgba(224,62,153,0.5)] flex items-center justify-center">
            {/* Animated Radar Pulse */}
            <div className="absolute inset-0 rounded-full border border-white/40 animate-ping opacity-30" />
            <div className="w-full h-full rounded-full bg-[#12111a] flex flex-col items-center justify-center">
              <Shield className="w-6 h-6 text-[#E03E99]" />
              <span className="text-[9px] font-bold tracking-wider text-pink-300 uppercase mt-0.5">
                Secured
              </span>
            </div>
          </div>
        </div>

        {/* Right Node: Investors */}
        <div className="flex flex-col items-center gap-1.5 z-10">
          <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 shadow-inner">
            <Users className="w-4 h-4 text-pink-300" />
          </div>
          <span className="text-[11px] text-gray-400 font-medium">Investors</span>
        </div>

        {/* Connection circuit line SVG */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 240 80"
          preserveAspectRatio="none"
        >
          <path
            d="M 30 40 L 120 40 L 210 40"
            fill="none"
            stroke="rgba(255,255,255,0.12)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
        </svg>
      </div>

      {/* Footer Note */}
      <div className="mt-3 pt-2.5 border-t border-white/5 flex items-center justify-between text-[11px] text-gray-400">
        <span className="flex items-center gap-1 text-emerald-400 font-medium">
          <Lock className="w-3 h-3" /> Tier-1 Custody
        </span>
        <span className="text-gray-500">Zero-Knowledge Proof</span>
      </div>
    </div>
  );
}
