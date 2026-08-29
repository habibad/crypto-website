"use client";

import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

export default function HighImpactCTA() {
  return (
    <section className="relative w-full py-20 px-4 max-w-7xl mx-auto flex flex-col items-center">
      {/* High-Impact Nebula Glowing Card */}
      <div className="relative w-full rounded-[36px] overflow-hidden glass-panel-glow border border-[#E03E99]/30 p-10 sm:p-16 md:p-20 text-center flex flex-col items-center justify-center shadow-[0_0_80px_-20px_rgba(224,62,153,0.4)]">
        {/* Dynamic Nebula Ambient Background */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#7928CA]/30 via-[#E03E99]/25 to-[#F43F5E]/20 pointer-events-none" />
        <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#E03E99]/40 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-[#7928CA]/40 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-pink-200 mb-6 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#E03E99]" />
            <span>Join 10,000+ Active Traders Today</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-light text-white tracking-tight leading-[1.15]">
            Start Optimized Your <br />
            <span className="font-medium text-gradient-neon">Crypto Investment With Us</span>
          </h2>

          <p className="mt-5 text-sm sm:text-base text-gray-300 font-normal max-w-md">
            Hit your best portfolio performance easily with us.
          </p>

          <div className="mt-8">
            <button className="px-8 py-3.5 rounded-full btn-gradient-neon text-sm font-semibold flex items-center gap-2 shadow-[0_0_30px_rgba(224,62,153,0.6)] cursor-pointer">
              <span>Let&apos;s Talk Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
