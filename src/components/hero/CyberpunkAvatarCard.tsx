"use client";

import React from "react";
import Image from "next/image";

export default function CyberpunkAvatarCard() {
  return (
    <div className="rounded-2xl p-3.5 w-full flex flex-col justify-between border border-[#E03E99]/35 shadow-[0_0_25px_rgba(224,62,153,0.25)] relative overflow-hidden bg-gradient-to-b from-[#1e0e28] to-[#100c1e] backdrop-blur-xl h-[200px]">
      {/* Cyberpunk Visor Portrait */}
      <div className="relative w-full h-[135px] rounded-xl overflow-hidden bg-[#180924] border border-[#E03E99]/30 shadow-inner">
        <Image
          src="/images/richard_avatar.jpg"
          alt="Cyberpunk Avatar with Neon Visor"
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      {/* Financial Metrics */}
      <div className="mt-2 space-y-1">
        <div className="flex items-center justify-between text-[11px]">
          <span className="text-[#9ca3af] font-medium">Cash</span>
          <span className="text-white font-mono font-semibold">$128.121</span>
        </div>
        <div className="flex items-center justify-between text-[11px]">
          <span className="text-[#9ca3af] font-medium">Portfolio</span>
          <span className="text-[#ff70ba] font-mono font-bold">$1.820.000</span>
        </div>
      </div>
    </div>
  );
}
