"use client";

import React, { useRef, useEffect } from "react";
import { ArrowRight, Rocket } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// ══════════════════════════════════════════════════════════════════════════
// TOKEN ICONS & DATA (MATCHING REFERENCE EXACTLY)
// ══════════════════════════════════════════════════════════════════════════

export interface TokenItem {
  symbol: string;
  bgColor: string;
  textColor: string;
  size: "sm" | "md" | "lg";
  yOffset: number; // Arch curvature offset (px)
  icon: React.ReactNode;
}

export const tokensLeft: TokenItem[] = [
  {
    symbol: "ETH",
    bgColor: "#222a42",
    textColor: "#627eea",
    size: "sm",
    yOffset: 46,
    icon: (
      <svg viewBox="0 0 24 24" fill="#8da4f7" className="w-[58%] h-[58%]">
        <path d="M11.944 17.97L4.58 13.62 11.943 24l7.37-10.38-7.372 4.35h.003zM12.056 0L4.69 12.223l7.365 4.354 7.365-4.35L12.056 0z" />
      </svg>
    ),
  },
  {
    symbol: "BTC",
    bgColor: "#F7931A",
    textColor: "#ffffff",
    size: "md",
    yOffset: 30,
    icon: <span className="font-bold text-xl leading-none">₿</span>,
  },
  {
    symbol: "XRP",
    bgColor: "#000000",
    textColor: "#ffffff",
    size: "md",
    yOffset: 16,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" className="w-[52%] h-[52%]">
        <path d="M4 4l5 5-5 5M20 4l-5 5 5 5" />
      </svg>
    ),
  },
  {
    symbol: "SHIB",
    bgColor: "#ffffff",
    textColor: "#000000",
    size: "lg",
    yOffset: 6,
    icon: (
      <div className="w-full h-full rounded-full bg-[#FFA409] flex items-center justify-center p-1 border-2 border-white">
        <span className="text-2xl">🐕</span>
      </div>
    ),
  },
  {
    symbol: "LINK",
    bgColor: "#2A5ADA",
    textColor: "#ffffff",
    size: "lg",
    yOffset: 0,
    icon: (
      <svg viewBox="0 0 32 32" fill="#ffffff" className="w-[60%] h-[60%]">
        <path d="M16 3l-4 2.3V12L8 9.7 4 12v8l4 2.3 4-2.3v6.7l4 2.3 4-2.3v-6.7l4 2.3 4-2.3v-8l-4-2.3L24 9.7V5.3z" />
      </svg>
    ),
  },
];

export const tokensRight: TokenItem[] = [
  {
    symbol: "USDT",
    bgColor: "#26A17B",
    textColor: "#ffffff",
    size: "lg",
    yOffset: 0,
    icon: <span className="font-bold text-2xl leading-none text-white">₮</span>,
  },
  {
    symbol: "LUNA",
    bgColor: "#172852",
    textColor: "#facc15",
    size: "lg",
    yOffset: 6,
    icon: (
      <div className="w-full h-full rounded-full bg-[#101B37] flex items-center justify-center border border-yellow-400/40">
        <span className="text-2xl">🌙</span>
      </div>
    ),
  },
  {
    symbol: "BNB",
    bgColor: "#F3BA2F",
    textColor: "#000000",
    size: "md",
    yOffset: 16,
    icon: (
      <svg viewBox="0 0 24 24" fill="#000000" className="w-[62%] h-[62%]">
        <path d="M12 2l3.5 3.5-3.5 3.5-3.5-3.5L12 2zm0 13l3.5 3.5-3.5 3.5-3.5-3.5L12 15zm-6.5-6.5L9 12l-3.5 3.5L2 12l3.5-3.5zm13 0L22 12l-3.5 3.5L15 12l3.5-3.5zM12 9l3 3-3 3-3-3 3-3z" />
      </svg>
    ),
  },
  {
    symbol: "SEI",
    bgColor: "#131d36",
    textColor: "#38bdf8",
    size: "sm",
    yOffset: 30,
    icon: (
      <div className="w-full h-full rounded-full bg-[#0c1322] border border-cyan-500/40 flex items-center justify-center">
        <span className="text-base font-bold text-cyan-400">🌊</span>
      </div>
    ),
  },
  {
    symbol: "HBAR",
    bgColor: "#111116",
    textColor: "#888888",
    size: "sm",
    yOffset: 46,
    icon: <span className="font-mono font-bold text-[#aaa] text-base">Ħ</span>,
  },
];

export default function TokenOrbitBar() {
  const rootRef = useRef<HTMLDivElement>(null);
  const orbitRingRef = useRef<HTMLDivElement>(null);
  const centerBadgeRef = useRef<HTMLDivElement>(null);
  const headerWrapRef = useRef<HTMLDivElement>(null);

  // Individual token element refs for kinetic entrance animation
  const leftTokenRefs = useRef<Array<HTMLDivElement | null>>([]);
  const rightTokenRefs = useRef<Array<HTMLDivElement | null>>([]);

  // ══════════════════════════════════════════════════════════════════════
  // KINETIC ENTRANCE ANIMATION (IMAGE 1 -> IMAGE 2 -> IMAGE 3)
  // ══════════════════════════════════════════════════════════════════════
  useEffect(() => {
    if (!rootRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Initial dormant states
      // Orbit circle is visible and spinning continuously (Image 1)
      if (orbitRingRef.current) {
        gsap.set(orbitRingRef.current, { opacity: 1, scale: 1 });
      }

      // Center rocket speedometer badge is initially submerged/hidden
      if (centerBadgeRef.current) {
        gsap.set(centerBadgeRef.current, { opacity: 0, scale: 0.35, y: 70, filter: "blur(12px)" });
      }

      // Tokens initially submerged / invisible
      leftTokenRefs.current.forEach((el, i) => {
        if (el) {
          gsap.set(el, {
            opacity: 0,
            scale: 0.3,
            y: tokensLeft[i].yOffset + 65,
            filter: "blur(10px)",
          });
        }
      });

      rightTokenRefs.current.forEach((el, i) => {
        if (el) {
          gsap.set(el, {
            opacity: 0,
            scale: 0.3,
            y: tokensRight[i].yOffset + 65,
            filter: "blur(10px)",
          });
        }
      });

      // Headline and CTA buttons initially hidden
      if (headerWrapRef.current) {
        gsap.set(headerWrapRef.current, { opacity: 0, y: 35, filter: "blur(6px)" });
      }

      // 2. Entrance Timeline
      const entranceTL = gsap.timeline({
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Stage 2.1: Center Rocket Badge rises up out of the website plane with spring physics (t = 0.2s)
      if (centerBadgeRef.current) {
        entranceTL.to(
          centerBadgeRef.current,
          {
            opacity: 1,
            scale: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.8,
            ease: "back.out(1.5)",
          },
          0.2
        );
      }

      // Stage 2.2: Big inner tokens LINK (left[4]) & USDT (right[0]) emerge with 3D elevation (t = 0.52s)
      const pair1 = [leftTokenRefs.current[4], rightTokenRefs.current[0]].filter(Boolean);
      if (pair1.length) {
        entranceTL.to(
          pair1,
          {
            opacity: 1,
            scale: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.7,
            ease: "back.out(1.6)",
          },
          0.52
        );
      }

      // Stage 2.3: Large tokens SHIB (left[3]) & LUNA (right[1]) emerge (t = 0.72s)
      const pair2 = [leftTokenRefs.current[3], rightTokenRefs.current[1]].filter(Boolean);
      if (pair2.length) {
        entranceTL.to(
          pair2,
          {
            opacity: 1,
            scale: 1,
            y: 6,
            filter: "blur(0px)",
            duration: 0.7,
            ease: "back.out(1.5)",
          },
          0.72
        );
      }

      // Stage 2.4: Medium tokens XRP (left[2]) & BNB (right[2]) emerge (t = 0.92s)
      const pair3 = [leftTokenRefs.current[2], rightTokenRefs.current[2]].filter(Boolean);
      if (pair3.length) {
        entranceTL.to(
          pair3,
          {
            opacity: 1,
            scale: 1,
            y: 16,
            filter: "blur(0px)",
            duration: 0.7,
            ease: "back.out(1.4)",
          },
          0.92
        );
      }

      // Stage 2.5: Medium/Small tokens BTC (left[1]) & SEI (right[3]) emerge (t = 1.12s)
      const pair4 = [leftTokenRefs.current[1], rightTokenRefs.current[3]].filter(Boolean);
      if (pair4.length) {
        entranceTL.to(
          pair4,
          {
            opacity: 1,
            scale: 1,
            y: 30,
            filter: "blur(0px)",
            duration: 0.7,
            ease: "back.out(1.3)",
          },
          1.12
        );
      }

      // Stage 2.6: Outermost small tokens ETH (left[0]) & HBAR (right[4]) emerge (t = 1.32s)
      const pair5 = [leftTokenRefs.current[0], rightTokenRefs.current[4]].filter(Boolean);
      if (pair5.length) {
        entranceTL.to(
          pair5,
          {
            opacity: 1,
            scale: 1,
            y: 46,
            filter: "blur(0px)",
            duration: 0.7,
            ease: "back.out(1.2)",
          },
          1.32
        );
      }

      // Stage 2.7: Headline & Buttons glide up and fade in smoothly (t = 1.55s)
      if (headerWrapRef.current) {
        entranceTL.to(
          headerWrapRef.current,
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.85,
            ease: "power2.out",
          },
          1.55
        );
      }
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="w-full flex flex-col items-center">
      {/* ══════════════════════════════════════════════════════════════════════
          DESKTOP TOKEN ARCH & CONTINUOUS ORBITING SATELLITE RING
      ══════════════════════════════════════════════════════════════════════ */}
      <div className="relative w-full hidden md:block">
        {/* Token Arch Bar */}
        <div className="absolute z-20 top-3 left-1/2 -translate-x-1/2 w-full max-w-[1380px] px-6 flex items-center justify-center gap-6 lg:gap-10">
          
          {/* Left 5 Tokens with gentle arch curve alignment */}
          <div className="flex items-center gap-4 lg:gap-5 flex-1 justify-end">
            {tokensLeft.map((tk, idx) => {
              const sizeClasses =
                tk.size === "sm"
                  ? "w-13 h-13 lg:w-14 lg:h-14"
                  : tk.size === "lg"
                    ? "w-17 h-17 lg:w-20 lg:h-20"
                    : "w-15 h-15 lg:w-17 lg:h-17";

              return (
                <div
                  key={tk.symbol}
                  ref={(el) => { leftTokenRefs.current[idx] = el; }}
                  className={`${sizeClasses} shrink-0 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-115 shadow-[0_6px_20px_rgba(0,0,0,0.65)]`}
                  style={{
                    backgroundColor: tk.bgColor,
                    transform: `translateY(${tk.yOffset}px)`,
                  }}
                >
                  <span style={{ color: tk.textColor }} className="flex items-center justify-center w-full h-full">
                    {tk.icon}
                  </span>
                </div>
              );
            })}
          </div>

          {/* ── CENTER BADGE & ROTATING ORBITAL SATELLITE RING CONTAINER ── */}
          <div className="relative shrink-0 flex items-center justify-center w-36 h-36 lg:w-40 lg:h-40">
            
            {/* CONTINUOUS ROTATING ORBITAL SATELLITE RING (MATCHING IMAGE 1, 2, 3) */}
            <div
              ref={orbitRingRef}
              className="absolute inset-0 pointer-events-none flex items-center justify-center z-10"
            >
              <div className="relative w-[236px] h-[236px] lg:w-[252px] lg:h-[252px] flex items-center justify-center animate-[spin_14s_linear_infinite]">
                
                {/* Glowing neon orbit track ring */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 252 252" fill="none">
                  <circle
                    cx="126"
                    cy="126"
                    r="118"
                    stroke="url(#orbitPathGradient)"
                    strokeWidth="1.6"
                    style={{
                      filter: "drop-shadow(0 0 6px rgba(236,72,153,0.6)) drop-shadow(0 0 12px rgba(168,85,247,0.35))",
                    }}
                  />
                  <defs>
                    <linearGradient id="orbitPathGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#f472b6" stopOpacity="0.9" />
                      <stop offset="35%" stopColor="#ec4899" stopOpacity="0.75" />
                      <stop offset="70%" stopColor="#a855f7" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#f472b6" stopOpacity="0.85" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Top Satellite Orb with hot neon halo */}
                <div
                  className="absolute top-[0px] left-1/2 -translate-x-1/2 flex items-center justify-center"
                  style={{ width: "16px", height: "16px" }}
                >
                  <div className="absolute w-4 h-4 rounded-full bg-[#f472b6] shadow-[0_0_12px_#f472b6,0_0_24px_#ec4899,0_0_4px_#ffffff]" />
                  <div className="relative z-10 w-2 h-2 rounded-full bg-white shadow-[0_0_4px_#ffffff]" />
                </div>

                {/* Bottom Satellite Orb with hot neon halo */}
                <div
                  className="absolute bottom-[0px] left-1/2 -translate-x-1/2 flex items-center justify-center"
                  style={{ width: "16px", height: "16px" }}
                >
                  <div className="absolute w-4 h-4 rounded-full bg-[#f472b6] shadow-[0_0_12px_#f472b6,0_0_24px_#c084fc,0_0_4px_#ffffff]" />
                  <div className="relative z-10 w-2 h-2 rounded-full bg-white shadow-[0_0_4px_#ffffff]" />
                </div>
              </div>
            </div>

            {/* ── CENTER ROCKET SPEEDOMETER BADGE ── */}
            <div
              ref={centerBadgeRef}
              className="relative z-20 w-32 h-32 lg:w-36 lg:h-36 rounded-full bg-[#0a0c14] border border-white/10 shadow-[0_15px_35px_rgba(0,0,0,0.9),0_0_30px_rgba(219,39,119,0.22)] flex items-center justify-center"
            >
              {/* Stepped recessed dark ring */}
              <div className="w-[84%] h-[84%] rounded-full bg-[#121420] border border-white/10 flex items-center justify-center shadow-inner">
                
                {/* Core dial with Speedometer Gauge & Rocket */}
                <div className="w-[74%] h-[74%] rounded-full bg-[#080910] border border-white/15 relative overflow-hidden flex items-center justify-center shadow-inner">
                  
                  {/* Speedometer Arc Gauge */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
                    <defs>
                      <linearGradient id="speedoNeonArc" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#8b5cf6" />
                        <stop offset="45%" stopColor="#ec4899" />
                        <stop offset="100%" stopColor="#f43f5e" />
                      </linearGradient>
                    </defs>

                    {/* Faint gauge track */}
                    <path
                      d="M 22 62 A 30 30 0 0 1 78 62"
                      fill="none"
                      stroke="rgba(255,255,255,0.12)"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />

                    {/* Glowing neon speedometer arc */}
                    <path
                      d="M 22 62 A 30 30 0 0 1 78 62"
                      fill="none"
                      stroke="url(#speedoNeonArc)"
                      strokeWidth="5.5"
                      strokeLinecap="round"
                      style={{
                        filter: "drop-shadow(0 0 6px #ec4899) drop-shadow(0 0 12px rgba(236,72,153,0.85))",
                      }}
                    />
                  </svg>

                  {/* Rocket Icon */}
                  <Rocket className="relative z-10 w-9 h-9 lg:w-10 lg:h-10 text-white stroke-[2.2] drop-shadow-[0_0_10px_rgba(255,255,255,0.95)] translate-y-0.5" />
                </div>
              </div>
            </div>
          </div>

          {/* Right 5 Tokens with gentle arch curve alignment */}
          <div className="flex items-center gap-4 lg:gap-5 flex-1 justify-start">
            {tokensRight.map((tk, idx) => {
              const sizeClasses =
                tk.size === "sm"
                  ? "w-13 h-13 lg:w-14 lg:h-14"
                  : tk.size === "lg"
                    ? "w-17 h-17 lg:w-20 lg:h-20"
                    : "w-15 h-15 lg:w-17 lg:h-17";

              return (
                <div
                  key={tk.symbol}
                  ref={(el) => { rightTokenRefs.current[idx] = el; }}
                  className={`${sizeClasses} shrink-0 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-115 shadow-[0_6px_20px_rgba(0,0,0,0.65)]`}
                  style={{
                    backgroundColor: tk.bgColor,
                    transform: `translateY(${tk.yOffset}px)`,
                  }}
                >
                  <span style={{ color: tk.textColor }} className="flex items-center justify-center w-full h-full">
                    {tk.icon}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Headline & Buttons */}
        <div
          ref={headerWrapRef}
          className="absolute z-20 left-1/2 -translate-x-1/2 flex flex-col items-center text-center w-full max-w-2xl"
          style={{ top: "165px" }}
        >
          <h2
            className="text-white text-4xl lg:text-[54px] font-light tracking-tight leading-[1.14]"
            style={{ fontFamily: "var(--font-outfit, sans-serif)" }}
          >
            10K+ Crypto Assets <br />
            <span className="font-normal text-white">
              Available To Trade
            </span>
          </h2>
          <p
            className="mt-3.5 text-sm lg:text-[15px] text-gray-300 font-light max-w-lg leading-relaxed"
            style={{ fontFamily: "var(--font-outfit, sans-serif)" }}
          >
            Explore every potential Crypto Assets with AI assistance
          </p>

          {/* Buttons */}
          <div className="mt-6 flex items-center gap-6">
            <button
              type="button"
              className="text-sm text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer font-medium px-3 py-1.5"
            >
              Learn More
            </button>
            <button
              type="button"
              className="rounded-full px-7 py-3 text-sm font-medium text-white flex items-center gap-2.5 cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_28px_rgba(219,39,119,0.5)]"
              style={{
                background: "linear-gradient(90deg, #7c3aed 0%, #db2777 100%)",
              }}
            >
              <span>Start Trading Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          MOBILE VIEW (< 768px)
      ══════════════════════════════════════════════════════════════════════ */}
      <div className="md:hidden flex flex-col items-center px-4 py-8">
        {/* Mobile Orbit Ring with Rocket */}
        <div className="relative w-28 h-28 flex items-center justify-center mb-6">
          <div className="absolute inset-0 rounded-full border border-pink-500/30 animate-[spin_12s_linear_infinite]">
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-pink-400 shadow-[0_0_8px_#f472b6]" />
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-purple-400 shadow-[0_0_8px_#c084fc]" />
          </div>
          <div className="w-20 h-20 rounded-full bg-[#0a0c14] border border-white/15 flex items-center justify-center shadow-[0_0_20px_rgba(219,39,119,0.3)]">
            <Rocket className="w-7 h-7 text-white" />
          </div>
        </div>

        {/* Mobile Token Row */}
        <div className="flex items-center gap-2 flex-wrap justify-center mb-6">
          {[...tokensLeft.slice(-2), ...tokensRight.slice(0, 2)].map((tk) => (
            <div
              key={tk.symbol}
              className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center"
              style={{ backgroundColor: tk.bgColor }}
            >
              <span style={{ color: tk.textColor, fontSize: "11px" }}>{tk.icon}</span>
            </div>
          ))}
        </div>

        <div className="text-center max-w-sm">
          <h2
            className="text-white text-2xl font-light tracking-tight leading-tight"
            style={{ fontFamily: "var(--font-outfit, sans-serif)" }}
          >
            10K+ Crypto Assets <br />
            <span className="font-normal">Available To Trade</span>
          </h2>
          <p className="mt-2 text-xs text-gray-400 font-light">
            Explore every potential Crypto Assets with AI assistance
          </p>
          <div className="mt-4 flex items-center justify-center gap-3">
            <button type="button" className="text-xs text-gray-400 font-medium">Learn More</button>
            <button
              type="button"
              className="rounded-full px-4 py-2 text-xs font-medium text-white flex items-center gap-1.5"
              style={{ background: "linear-gradient(90deg, #7c3aed 0%, #db2777 100%)" }}
            >
              <span>Start Trading Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
