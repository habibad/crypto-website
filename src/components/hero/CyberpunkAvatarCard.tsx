"use client";

import React from "react";
import Image from "next/image";

export default function CyberpunkAvatarCard() {
  return (
    <div className="rounded-2xl p-3.5 w-full flex flex-col justify-between border border-[#E03E99]/35 shadow-[0_0_25px_rgba(224,62,153,0.25)] relative overflow-hidden bg-gradient-to-b from-[#250d2c] to-[#110b1d] backdrop-blur-xl h-[195px] select-none">
      {/* Cyberpunk Visor Portrait */}
      <div className="relative w-full h-[135px] rounded-xl overflow-hidden bg-[#180924] border border-[#E03E99]/30 shadow-inner">
        <Image
          src="/images/cyberpunk_avatar_neon.jpg"
          alt="Cyberpunk Avatar with Neon Visor"
          fill
          className="object-cover object-top scale-105"
          priority
        />
        {/* Subtle magenta tint overlay matching Image 2 */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#e03e99]/20 via-transparent to-[#903aff]/25 mix-blend-screen pointer-events-none" />
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
            className="text-white font-semibold"
            style={{ fontFamily: "var(--font-outfit), sans-serif" }}
          >
            $128.121
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
            className="text-[#ff70ba] font-bold"
            style={{ fontFamily: "var(--font-outfit), sans-serif" }}
          >
            $1.820.000
          </span>
        </div>
      </div>
    </div>
  );
}

