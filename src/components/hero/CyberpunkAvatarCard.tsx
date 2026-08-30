"use client";

import React from "react";
import Image from "next/image";
import { useLiveCounter } from "@/hooks/useLiveCounter";

export default function CyberpunkAvatarCard() {
  const animatedCash = useLiveCounter({ end: 128121, duration: 1500, delay: 500 });
  const animatedPortfolio = useLiveCounter({ end: 1820000, duration: 1800, delay: 550 });

  return (
    <div className="rounded-2xl p-3.5 w-full flex flex-col justify-between border border-[#E03E99]/35 shadow-[0_0_25px_rgba(224,62,153,0.25)] relative overflow-hidden bg-gradient-to-b from-[#250d2c] to-[#110b1d] backdrop-blur-xl h-[195px] select-none group transition-all duration-300 hover:border-[#E03E99]/60 hover:shadow-[0_0_35px_rgba(224,62,153,0.4)]">
      {/* Cyberpunk Visor Portrait */}
      <div className="relative w-full h-[135px] rounded-xl overflow-hidden bg-[#180924] border border-[#E03E99]/30 shadow-inner group-hover:border-[#E03E99]/50 transition-colors">
        <Image
          src="/images/cyberpunk_avatar_neon.jpg"
          alt="Cyberpunk Avatar with Neon Visor"
          fill
          className="object-cover object-top scale-105 transition-transform duration-700 group-hover:scale-110"
          priority
        />
        {/* Subtle magenta tint overlay matching Image 2 */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#e03e99]/20 via-transparent to-[#903aff]/25 mix-blend-screen pointer-events-none" />

        {/* Live Futuristic AR Scanner Light Sweep */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent -translate-y-full animate-[scan_4s_ease-in-out_infinite] pointer-events-none" />
      </div>

      {/* Financial Metrics */}
      <div className="mt-1 space-y-0.5 px-1">
        <div className="flex items-center justify-between text-[12px]">
          <span
            className="text-[#9ca3af] font-medium"
            style={{ fontFamily: "var(--font-outfit), sans-serif" }}
          >
            Cash
          </span>
          <span
            className="text-white font-semibold tabular-nums"
            style={{ fontFamily: "var(--font-outfit), sans-serif" }}
          >
            {animatedCash}
          </span>
        </div>
        <div className="flex items-center justify-between text-[12px]">
          <span
            className="text-[#9ca3af] font-medium"
            style={{ fontFamily: "var(--font-outfit), sans-serif" }}
          >
            Portfolio
          </span>
          <span
            className="text-[#ff70ba] font-bold tabular-nums drop-shadow-[0_0_8px_rgba(255,112,186,0.4)]"
            style={{ fontFamily: "var(--font-outfit), sans-serif" }}
          >
            {animatedPortfolio}
          </span>
        </div>
      </div>
    </div>
  );
}


