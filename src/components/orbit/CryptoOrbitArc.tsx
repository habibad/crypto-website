"use client";

import React, { useEffect, useRef, useState } from "react";
import { Rocket, Zap } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

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
  const tokenRefs = useRef<(HTMLDivElement | null)[]>([]);

  // 7 Token nodes in order: BTC, ETH, SHIB, LINK, USDT, LUNA, BNB
  const tokens: TokenNode[] = [
    {
      symbol: "BTC",
      name: "Bitcoin",
      color: "#F7931A",
      bgColor: "rgba(247, 147, 26, 0.15)",
      iconText: "₿",
      subColor: "#F7931A",
    },
    {
      symbol: "ETH",
      name: "Ethereum",
      color: "#627EEA",
      bgColor: "rgba(98, 126, 234, 0.2)",
      iconText: "Ξ",
      subColor: "#a78bfa",
    },
    {
      symbol: "SHIB",
      name: "Shiba Inu",
      color: "#FFA409",
      bgColor: "rgba(255, 164, 9, 0.15)",
      iconText: "🐕",
      subColor: "#FFA409",
    },
    {
      symbol: "LINK",
      name: "Chainlink",
      color: "#375BD2",
      bgColor: "rgba(55, 91, 210, 0.2)",
      iconText: "⬡",
      subColor: "#38bdf8",
    },
    {
      symbol: "USDT",
      name: "Tether",
      color: "#26A17B",
      bgColor: "rgba(38, 161, 123, 0.2)",
      iconText: "₮",
      subColor: "#34d399",
    },
    {
      symbol: "LUNA",
      name: "Terra Luna",
      color: "#FFD83D",
      bgColor: "rgba(255, 216, 61, 0.2)",
      iconText: "🌙",
      subColor: "#facc15",
    },
    {
      symbol: "BNB",
      name: "Binance Coin",
      color: "#F3BA2F",
      bgColor: "rgba(243, 186, 47, 0.2)",
      iconText: "❖",
      subColor: "#fbbf24",
    },
  ];

  // Base fractional positions along arc path (0.05 to 0.95)
  const baseT = [0.06, 0.20, 0.35, 0.50, 0.65, 0.80, 0.94];

  useEffect(() => {
    if (!containerRef.current || !arcPathRef.current) return;

    const path = arcPathRef.current;
    const totalLength = path.getTotalLength();

    const updateTokenPositions = (scrollProgress: number) => {
      // Shift tokens along arc based on scroll progress: shift range [-0.12, 0.12]
      const shift = (scrollProgress - 0.5) * 0.24;

      tokens.forEach((_, i) => {
        const el = tokenRefs.current[i];
        if (!el) return;

        // Calculate clamped normalized position along curve
        let t = baseT[i] + shift;
        t = Math.max(0.02, Math.min(0.98, t));

        const pt = path.getPointAtLength(t * totalLength);
        // SVG viewBox is 800 x 280, convert to percentages
        const pctX = (pt.x / 800) * 100;
        const pctY = (pt.y / 280) * 100;

        // Proximity to center gives slight scale boost
        const distFromCenter = Math.abs(t - 0.5);
        const scale = 1.0 + Math.max(0, 0.2 - distFromCenter * 0.4);

        gsap.set(el, {
          left: `${pctX}%`,
          top: `${pctY}%`,
          xPercent: -50,
          yPercent: -50,
          scale,
        });
      });
    };

    // Initial positioning
    updateTokenPositions(0);

    const ctx = gsap.context(() => {
      // Master ScrollTrigger timeline for orbit arc rotation
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 85%",
        end: "bottom 15%",
        scrub: 1.2,
        onUpdate: (self) => {
          updateTokenPositions(self.progress);
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-5xl mx-auto py-20 px-4 flex flex-col items-center justify-center overflow-visible select-none"
    >
      {/* Background Subtle Gradient Arch */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[340px] bg-gradient-to-t from-[#7928CA]/25 via-[#E03E99]/15 to-transparent rounded-full blur-[110px] pointer-events-none" />

      {/* Convex Curved Orbit Arc Area */}
      <div className="relative w-full max-w-4xl h-[300px] flex items-center justify-center">
        {/* SVG Curved Arc Path with Dashed Glow */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 800 280"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="orbitArcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7928CA" stopOpacity="0.2" />
              <stop offset="30%" stopColor="#E03E99" stopOpacity="0.85" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0.9" />
              <stop offset="70%" stopColor="#E03E99" stopOpacity="0.85" />
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
            d="M 50 160 C 220 250, 580 250, 750 160"
            fill="none"
            stroke="url(#orbitArcGrad)"
            strokeWidth="2.5"
            strokeDasharray="6 6"
            filter="url(#arcGlow)"
          />

          {/* Outer subtle guide arc */}
          <path
            d="M 100 175 C 260 265, 540 265, 700 175"
            fill="none"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="1"
          />

          {/* Orbiting Satellite Pulsing Nodes */}
          <circle cx="280" cy="225" r="4" fill="#E03E99" className="animate-pulse">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="520" cy="225" r="4" fill="#E03E99" className="animate-pulse">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" begin="1s" />
          </circle>
        </svg>

        {/* Central Bottom Focal Hub: Glowing Sphere with Rocket / Zap Icon */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
          <div className="relative w-20 h-20 rounded-full bg-gradient-to-tr from-[#161424] to-[#251e3e] border border-white/25 shadow-[0_0_45px_rgba(224,62,153,0.6)] flex items-center justify-center group cursor-pointer hover:scale-110 transition-transform">
            {/* Pulsating Radial Waves */}
            <div className="absolute -inset-2 rounded-full border border-[#E03E99]/40 animate-ping opacity-40" />
            <div className="absolute -inset-6 rounded-full border border-[#7928CA]/20 animate-pulse" />

            <div className="w-12 h-12 rounded-full bg-[#0d0c13] flex items-center justify-center border border-white/10 shadow-inner">
              <Rocket className="w-6 h-6 text-[#E03E99] group-hover:-translate-y-1 transition-transform" />
            </div>
          </div>
          <span className="text-[10px] text-gray-400 font-mono tracking-wider uppercase mt-2">
            AI Core Hub
          </span>
        </div>

        {/* Dynamically Positioned Tokens along the Convex Arc */}
        <div className="absolute inset-0 pointer-events-none">
          {tokens.map((token, index) => (
            <div
              key={token.symbol}
              ref={(el) => {
                tokenRefs.current[index] = el;
              }}
              className="absolute flex flex-col items-center gap-1 group cursor-pointer pointer-events-auto transition-transform duration-200 hover:scale-125 z-30"
              style={{ left: "50%", top: "50%" }}
            >
              {/* Token Badge */}
              <div
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-white/20 backdrop-blur-xl flex items-center justify-center text-lg sm:text-xl font-bold shadow-xl transition-all"
                style={{
                  backgroundColor: token.bgColor,
                  boxShadow: `0 0 25px ${token.color}44`,
                  borderColor: `${token.subColor}66`,
                }}
              >
                <span style={{ color: token.subColor }}>{token.iconText}</span>
              </div>

              {/* Token Name Tooltip */}
              <span className="text-[10px] font-semibold text-gray-300 group-hover:text-white font-mono transition-colors">
                {token.symbol}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
