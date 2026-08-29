"use client";

import React from "react";
import { Layers, Sparkles } from "lucide-react";

export default function PortfolioOptimizerCard() {
  return (
    <div className="glass-card rounded-3xl p-7 flex flex-col justify-between border border-white/10 shadow-2xl relative overflow-hidden group min-h-[380px]">
      {/* Background Ambient Nebula */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#E03E99]/25 rounded-full blur-3xl pointer-events-none" />

      {/* Visual: Isometric Layered 3D Microchip Diagram */}
      <div className="relative flex-1 flex items-center justify-center py-6">
        {/* Isometric Container */}
        <div className="relative w-64 h-48 flex items-center justify-center [perspective:800px]">
          {/* Bottom Peripheral Layer 1 (Top-Left) */}
          <div className="absolute top-4 left-4 w-14 h-14 rounded-xl bg-[#1a1727] border border-white/15 shadow-xl [transform:rotateX(55deg)_rotateZ(-45deg)] flex items-center justify-center">
            <div className="w-5 h-5 rounded-md bg-[#7928CA]/40" />
          </div>

          {/* Bottom Peripheral Layer 2 (Top-Right) */}
          <div className="absolute top-4 right-4 w-14 h-14 rounded-xl bg-[#1a1727] border border-white/15 shadow-xl [transform:rotateX(55deg)_rotateZ(-45deg)] flex items-center justify-center">
            <div className="w-5 h-5 rounded-md bg-[#E03E99]/40" />
          </div>

          {/* Bottom Peripheral Layer 3 (Bottom-Left) */}
          <div className="absolute bottom-4 left-4 w-14 h-14 rounded-xl bg-[#1a1727] border border-white/15 shadow-xl [transform:rotateX(55deg)_rotateZ(-45deg)] flex items-center justify-center">
            <div className="w-5 h-5 rounded-md bg-pink-500/40" />
          </div>

          {/* Bottom Peripheral Layer 4 (Bottom-Right) */}
          <div className="absolute bottom-4 right-4 w-14 h-14 rounded-xl bg-[#1a1727] border border-white/15 shadow-xl [transform:rotateX(55deg)_rotateZ(-45deg)] flex items-center justify-center">
            <div className="w-5 h-5 rounded-md bg-purple-500/40" />
          </div>

          {/* Central Main Layer Base */}
          <div className="absolute w-28 h-28 rounded-2xl bg-gradient-to-tr from-[#1f1b33] to-[#2d264a] border border-white/25 shadow-2xl [transform:rotateX(55deg)_rotateZ(-45deg)] flex items-center justify-center group-hover:[transform:rotateX(55deg)_rotateZ(-45deg)_translateZ(10px)] transition-transform duration-500">
            {/* Intermediate Middle Plate */}
            <div className="w-20 h-20 rounded-xl bg-[#12101c] border border-[#E03E99]/40 flex items-center justify-center shadow-inner">
              {/* Floating Top Die with Glowing Brain/Layers Icon */}
              <div className="w-12 h-12 rounded-lg bg-gradient-to-tr from-[#E03E99] to-[#7928CA] p-0.5 shadow-[0_0_20px_rgba(224,62,153,0.8)] flex items-center justify-center animate-bounce duration-1000">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          {/* Dotted Isometric Connector Lines SVG */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 256 192">
            <path
              d="M 40 40 L 128 96 L 216 40 M 40 152 L 128 96 L 216 152"
              fill="none"
              stroke="rgba(224, 62, 153, 0.3)"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />
          </svg>
        </div>
      </div>

      {/* Text Info */}
      <div className="mt-4 z-10">
        <h3 className="text-xl font-bold text-white tracking-tight">Smart Portfolio Optimizer</h3>
        <p className="mt-2 text-xs text-gray-400 leading-relaxed max-w-sm">
          AI rebalance your crypto portfolio real-time based on risk appetite, goals, and market data.
        </p>
      </div>
    </div>
  );
}
