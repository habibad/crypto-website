"use client";

import React, { useEffect, useRef } from "react";
import { Rocket, Zap } from "lucide-react";
import gsap from "gsap";

interface TokenNode {
  symbol: string;
  name: string;
  color: string;
  bgColor: string;
  iconText: string;
  subColor: string;
}

export default function CryptoOrbitArc() {
  const containerRef = useRef<HTMLDivElement>(null);
  const arcPathRef = useRef<SVGPathElement>(null);
  const tokenListRef = useRef<HTMLDivElement>(null);

  const tokens: TokenNode[] = [
    {
      symbol: "XRP",
      name: "Ripple",
      color: "#23292f",
      bgColor: "rgba(255,255,255,0.08)",
      iconText: "✕",
      subColor: "#64748b",
    },
    {
      symbol: "SHIB",
      name: "Shiba Inu",
      color: "#FFA409",
      bgColor: "rgba(255,164,9,0.15)",
      iconText: "🐕",
      subColor: "#FFA409",
    },
    {
      symbol: "LINK",
      name: "Chainlink",
      color: "#375BD2",
      bgColor: "rgba(55,91,210,0.2)",
      iconText: "⬡",
      subColor: "#38bdf8",
    },
    {
      symbol: "USDT",
      name: "Tether",
      color: "#26A17B",
      bgColor: "rgba(38,161,123,0.2)",
      iconText: "₮",
      subColor: "#34d399",
    },
    {
      symbol: "LUNA",
      name: "Terra Luna",
      color: "#FFD83D",
      bgColor: "rgba(255,216,61,0.2)",
      iconText: "🌙",
      subColor: "#facc15",
    },
    {
      symbol: "BNB",
      name: "Binance Coin",
      color: "#F3BA2F",
      bgColor: "rgba(243,186,47,0.2)",
      iconText: "❖",
      subColor: "#fbbf24",
    },
    {
      symbol: "ETH",
      name: "Ethereum",
      color: "#627EEA",
      bgColor: "rgba(98,126,234,0.2)",
      iconText: "Ξ",
      subColor: "#a78bfa",
    },
  ];

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-5xl mx-auto py-16 px-4 flex flex-col items-center justify-center overflow-visible"
    >
      {/* Background Subtle Gradient Arch */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-gradient-to-t from-[#7928CA]/20 to-transparent rounded-full blur-[100px] pointer-events-none" />

      {/* Convex Curved Orbit Arc Area */}
      <div className="relative w-full max-w-4xl h-[280px] flex items-center justify-center">
        {/* SVG Curved Arc Path with Dashed Glow */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 800 280"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="orbitArcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7928CA" stopOpacity="0.2" />
              <stop offset="30%" stopColor="#E03E99" stopOpacity="0.8" />
              <stop offset="70%" stopColor="#E03E99" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#7928CA" stopOpacity="0.2" />
            </linearGradient>
            <filter id="arcGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Bottom-facing Convex Curved Orbit Track (Curving downward at center) */}
          <path
            ref={arcPathRef}
            d="M 60 170 C 220 230, 580 230, 740 170"
            fill="none"
            stroke="url(#orbitArcGrad)"
            strokeWidth="2.5"
            strokeDasharray="6 6"
            filter="url(#arcGlow)"
          />

          {/* Outer subtle guide arc */}
          <path
            d="M 120 180 C 260 250, 540 250, 680 180"
            fill="none"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="1"
          />

          {/* Orbiting Satellite Pulsing Nodes */}
          <circle cx="280" cy="205" r="4.5" fill="#E03E99" className="animate-pulse">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="520" cy="205" r="4.5" fill="#E03E99" className="animate-pulse">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" begin="1s" />
          </circle>
        </svg>

        {/* Central Bottom Focal Hub: Glowing Sphere with Rocket Icon */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
          <div className="relative w-20 h-20 rounded-full bg-gradient-to-tr from-[#161424] to-[#251e3e] border border-white/20 shadow-[0_0_40px_rgba(224,62,153,0.5)] flex items-center justify-center group cursor-pointer hover:scale-110 transition-transform">
            {/* Pulsating Radial Waves */}
            <div className="absolute -inset-2 rounded-full border border-[#E03E99]/40 animate-ping opacity-40" />
            <div className="absolute -inset-6 rounded-full border border-[#7928CA]/20 animate-pulse" />

            <div className="w-12 h-12 rounded-full bg-[#0d0c13] flex items-center justify-center border border-white/10 shadow-inner">
              <Rocket className="w-6 h-6 text-[#E03E99] group-hover:translate-y-[-2px] transition-transform" />
            </div>
          </div>
          <span className="text-[10px] text-gray-400 font-mono tracking-wider uppercase mt-2">
            AI Core Hub
          </span>
        </div>

        {/* Pinned Tokens along the Arc */}
        <div
          ref={tokenListRef}
          className="absolute inset-0 flex items-center justify-between px-4 sm:px-12 pointer-events-auto z-10"
        >
          {tokens.map((token, index) => {
            // Arc vertical offset based on position from ends towards middle
            const offsets = [20, 45, 65, 80, 65, 45, 20];
            const yOffset = offsets[index] || 40;

            return (
              <div
                key={token.symbol}
                style={{ transform: `translateY(${yOffset}px)` }}
                className="flex flex-col items-center gap-1 group cursor-pointer transition-transform hover:scale-125 duration-300"
              >
                {/* Token Badge */}
                <div
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-white/15 backdrop-blur-xl flex items-center justify-center text-lg sm:text-xl font-bold shadow-lg transition-all"
                  style={{
                    backgroundColor: token.bgColor,
                    boxShadow: `0 0 20px ${token.color}33`,
                    borderColor: `${token.subColor}44`,
                  }}
                >
                  <span style={{ color: token.subColor }}>{token.iconText}</span>
                </div>

                {/* Token Name Tooltip */}
                <span className="text-[10px] font-semibold text-gray-400 group-hover:text-white font-mono transition-colors">
                  {token.symbol}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
