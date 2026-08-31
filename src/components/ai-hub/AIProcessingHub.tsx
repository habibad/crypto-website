"use client";

import React, { useRef, useEffect } from "react";
import { ArrowRight, Globe, Check, Users, Database, Cpu, Rocket } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// ══════════════════════════════════════════════════════════════════════════
// TOKEN DATA & METRICS
// ══════════════════════════════════════════════════════════════════════════

interface Token {
  symbol: string;
  bgColor: string;
  textColor: string;
  size: "sm" | "md" | "lg";
  icon: React.ReactNode;
  glow: string;
}

interface Metric {
  icon: React.ReactNode;
  value: string;
  label: string;
}

const leftTokens: Token[] = [
  {
    symbol: "ETH",
    bgColor: "rgba(24, 32, 74, 0.95)",
    textColor: "#8da4f7",
    size: "sm",
    glow: "#627EEA",
    icon: (
      <svg viewBox="0 0 24 24" fill="#8da4f7" className="w-[45%] h-[45%]">
        <path d="M11.944 17.97L4.58 13.62 11.943 24l7.37-10.38-7.372 4.35h.003zM12.056 0L4.69 12.223l7.365 4.354 7.365-4.35L12.056 0z" />
      </svg>
    ),
  },
  {
    symbol: "BTC",
    bgColor: "#F7931A",
    textColor: "#fff",
    size: "md",
    glow: "#F7931A",
    icon: <span className="font-bold leading-none" style={{ fontSize: "45%" }}>₿</span>,
  },
  {
    symbol: "XRP",
    bgColor: "#11111a",
    textColor: "#fff",
    size: "md",
    glow: "#888",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" className="w-[45%] h-[45%]">
        <path d="M4 4l5 5-5 5M20 4l-5 5 5 5" />
      </svg>
    ),
  },
  {
    symbol: "SHIB",
    bgColor: "#e11d48",
    textColor: "#fff",
    size: "lg",
    glow: "#FFA409",
    icon: <span className="text-xl">🐕</span>,
  },
  {
    symbol: "LINK",
    bgColor: "#2563eb",
    textColor: "#ffffff",
    size: "lg",
    glow: "#375BD2",
    icon: (
      <svg viewBox="0 0 32 32" fill="#ffffff" className="w-[55%] h-[55%]">
        <path d="M16 3l-4 2.3V12L8 9.7 4 12v8l4 2.3 4-2.3v6.7l4 2.3 4-2.3v-6.7l4 2.3 4-2.3v-8l-4-2.3L24 9.7V5.3z" />
      </svg>
    ),
  },
];

const rightTokens: Token[] = [
  {
    symbol: "USDT",
    bgColor: "#26A17B",
    textColor: "#fff",
    size: "lg",
    glow: "#26A17B",
    icon: <span className="font-bold leading-none" style={{ fontSize: "55%" }}>₮</span>,
  },
  {
    symbol: "LUNA",
    bgColor: "#0c1326",
    textColor: "#facc15",
    size: "lg",
    glow: "#FFD700",
    icon: <span className="text-xl">🌙</span>,
  },
  {
    symbol: "BNB",
    bgColor: "#F3BA2F",
    textColor: "#000",
    size: "md",
    glow: "#F3BA2F",
    icon: (
      <svg viewBox="0 0 24 24" fill="#000" className="w-[55%] h-[55%]">
        <path d="M12 2l3.5 3.5-3.5 3.5-3.5-3.5L12 2zm0 13l3.5 3.5-3.5 3.5-3.5-3.5L12 15zm-6.5-6.5L9 12l-3.5 3.5L2 12l3.5-3.5zm13 0L22 12l-3.5 3.5L15 12l3.5-3.5zM12 9l3 3-3 3-3-3 3-3z" />
      </svg>
    ),
  },
  {
    symbol: "SEI",
    bgColor: "rgba(120, 50, 220, 0.25)",
    textColor: "#c084fc",
    size: "sm",
    glow: "#9945FF",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-[45%] h-[45%]">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" fill="#c084fc" />
      </svg>
    ),
  },
  {
    symbol: "HBAR",
    bgColor: "#111116",
    textColor: "#aaa",
    size: "sm",
    glow: "#444",
    icon: <span className="font-mono font-bold text-[#aaa]" style={{ fontSize: "38%" }}>Ħ</span>,
  },
];

const metrics: Metric[] = [
  { icon: <Globe className="w-5 h-5 text-white" />, value: "50+", label: "Countries" },
  { icon: <Database className="w-5 h-5 text-white" />, value: "10K+", label: "Crypto Assets" },
  { icon: <Check className="w-5 h-5 text-white stroke-[2.5]" />, value: "97,5%", label: "Success Rate" },
  { icon: <Users className="w-5 h-5 text-white" />, value: "10,000+", label: "Daily Traders" },
];

const dimFor = (s: "sm" | "md" | "lg") =>
  s === "sm" ? "w-9 h-9 sm:w-11 sm:h-11" : s === "lg" ? "w-13 h-13 sm:w-16 sm:h-16" : "w-11 h-11 sm:w-13 sm:h-13";

export default function AIProcessingHub() {
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const headerWrapRef = useRef<HTMLDivElement>(null);

  // Background purple atmospheric horizon underglow
  const auroraUnderglowRef = useRef<HTMLDivElement>(null);
  const centerBloomRef = useRef<HTMLDivElement>(null);
  const centerVFillRef = useRef<SVGPolygonElement>(null);

  // Full-width angled V-funnel horizon laser paths (Left & Right)
  const leftCurveGlowRef = useRef<SVGPathElement>(null);
  const leftCurveMidRef = useRef<SVGPathElement>(null);
  const leftCurveLaserRef = useRef<SVGPathElement>(null);

  const rightCurveGlowRef = useRef<SVGPathElement>(null);
  const rightCurveMidRef = useRef<SVGPathElement>(null);
  const rightCurveLaserRef = useRef<SVGPathElement>(null);

  // Vertical light stream / beam pouring from V-vertex into chip
  const verticalBeamDivRef = useRef<HTMLDivElement>(null);
  const verticalBeamLaserRef = useRef<SVGPathElement>(null);
  const verticalBeamGlowRef = useRef<SVGPathElement>(null);

  // Circuit wires from Chip -> 4 Metric Cards
  const wireTLRef = useRef<SVGPathElement>(null);
  const wireBLRef = useRef<SVGPathElement>(null);
  const wireTRRef = useRef<SVGPathElement>(null);
  const wireBRRef = useRef<SVGPathElement>(null);

  // Central Chip elements
  const chipContainerRef = useRef<HTMLDivElement>(null);
  const chipAuraRef = useRef<HTMLDivElement>(null);
  const chipCoreRef = useRef<HTMLDivElement>(null);
  const chipIconGlowRef = useRef<HTMLDivElement>(null);

  // Metric Cards
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

  // Mobile elements
  const mobileSweepLeftRef = useRef<SVGPathElement>(null);
  const mobileSweepRightRef = useRef<SVGPathElement>(null);
  const mobileWireRefs = useRef<Array<SVGPathElement | null>>([]);
  const mobileChipCoreRef = useRef<HTMLDivElement>(null);
  const mobileCardRefs = useRef<Array<HTMLDivElement | null>>([]);

  // ══════════════════════════════════════════════════════════════════════
  // GSAP 5-STAGE CINEMATIC TIMELINE WITH ANGLED V-CONVERGENCE
  // ══════════════════════════════════════════════════════════════════════
  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Prepare SVG stroke lengths
      const animatedSvgElements = [
        leftCurveGlowRef.current,
        leftCurveMidRef.current,
        leftCurveLaserRef.current,
        rightCurveGlowRef.current,
        rightCurveMidRef.current,
        rightCurveLaserRef.current,
        verticalBeamLaserRef.current,
        verticalBeamGlowRef.current,
        wireTLRef.current,
        wireBLRef.current,
        wireTRRef.current,
        wireBRRef.current,
        mobileSweepLeftRef.current,
        mobileSweepRightRef.current,
        ...mobileWireRefs.current,
      ];

      animatedSvgElements.forEach((el) => {
        if (!el) return;
        const len = el.getTotalLength();
        gsap.set(el, { strokeDasharray: len, strokeDashoffset: len });
      });

      // 2. Initial dormant states
      gsap.set(orbitRef.current, { opacity: 0, y: 30, scale: 0.96 });
      gsap.set(headerWrapRef.current, { opacity: 0, y: 35 });
      gsap.set(auroraUnderglowRef.current, { opacity: 0, scaleY: 0.7 });
      gsap.set(centerBloomRef.current, { opacity: 0, scale: 0.2, transformOrigin: "50% 50%" });
      gsap.set(centerVFillRef.current, { opacity: 0 });
      gsap.set(verticalBeamDivRef.current, { opacity: 0, scaleY: 0, transformOrigin: "50% 0%" });

      // Chip initial dormant state
      gsap.set(chipAuraRef.current, { opacity: 0, scale: 0.7, transformOrigin: "50% 50%" });
      gsap.set(chipCoreRef.current, { opacity: 0.35, filter: "saturate(0.3) brightness(0.7)" });
      gsap.set(chipIconGlowRef.current, { opacity: 0.1 });
      gsap.set(mobileChipCoreRef.current, { opacity: 0.35, filter: "saturate(0.3) brightness(0.7)" });

      // Cards initial hidden state
      [...cardRefs.current, ...mobileCardRefs.current].forEach((card) => {
        if (!card) return;
        gsap.set(card, { opacity: 0.25, y: 18, filter: "grayscale(0.8) brightness(0.7)" });
      });

      // 3. ScrollTrigger timeline scrub
      const masterTL = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1.1,
        },
      });

      // ── STAGE 1: Top Tokens & Header Fade In (0.00 -> 0.18) ──
      masterTL.to(orbitRef.current, { opacity: 1, y: 0, scale: 1, duration: 0.18, ease: "power2.out" }, 0);
      masterTL.to(headerWrapRef.current, { opacity: 1, y: 0, duration: 0.18, ease: "power2.out" }, 0.04);
      masterTL.to(auroraUnderglowRef.current, { opacity: 0.45, scaleY: 0.9, duration: 0.2, ease: "power1.out" }, 0.08);

      // ── STAGE 2: Angled Horizon Curves Draw Inward and Dip at Center (0.10 -> 0.50) ──
      const leftCurve = [leftCurveGlowRef.current, leftCurveMidRef.current, leftCurveLaserRef.current];
      const rightCurve = [rightCurveGlowRef.current, rightCurveMidRef.current, rightCurveLaserRef.current];

      leftCurve.forEach((path) => {
        if (path) masterTL.to(path, { strokeDashoffset: 0, duration: 0.4, ease: "power1.inOut" }, 0.1);
      });
      rightCurve.forEach((path) => {
        if (path) masterTL.to(path, { strokeDashoffset: 0, duration: 0.4, ease: "power1.inOut" }, 0.1);
      });

      // Mobile curve
      [mobileSweepLeftRef.current, mobileSweepRightRef.current].forEach((path) => {
        if (path) masterTL.to(path, { strokeDashoffset: 0, duration: 0.4, ease: "power1.inOut" }, 0.1);
      });

      // Aurora underglow deepens to full purple intensity as curve converges
      masterTL.to(auroraUnderglowRef.current, { opacity: 1, scaleY: 1, duration: 0.3, ease: "power1.inOut" }, 0.22);

      // ── STAGE 3: Collision at Angled V-Dip & Downward Light Waterfall (0.44 -> 0.68) ──
      // Brilliant V-trough fill and collision bloom at the angled V-vertex (960, 330)
      masterTL.to(centerVFillRef.current, { opacity: 1, duration: 0.12, ease: "power2.out" }, 0.44);
      masterTL.to(centerBloomRef.current, { opacity: 1, scale: 1.25, duration: 0.12, ease: "power2.out" }, 0.45);

      // Downward light stream pouring into the chip
      masterTL.to(verticalBeamDivRef.current, { opacity: 1, scaleY: 1, duration: 0.18, ease: "power2.inOut" }, 0.48);
      [verticalBeamGlowRef.current, verticalBeamLaserRef.current].forEach((path) => {
        if (path) masterTL.to(path, { strokeDashoffset: 0, duration: 0.18, ease: "power2.in" }, 0.48);
      });

      // ── STAGE 4: CPU Chip Power Up & Ignition (0.62 -> 0.78) ──
      masterTL.to(chipCoreRef.current, {
        opacity: 1,
        filter: "saturate(1.25) brightness(1.25)",
        duration: 0.14,
        ease: "power3.out",
      }, 0.62);

      masterTL.to(mobileChipCoreRef.current, {
        opacity: 1,
        filter: "saturate(1.25) brightness(1.25)",
        duration: 0.14,
        ease: "power3.out",
      }, 0.62);

      masterTL.to(chipAuraRef.current, {
        opacity: 1,
        scale: 1.3,
        duration: 0.16,
        ease: "power3.out",
      }, 0.62);

      masterTL.to(chipIconGlowRef.current, {
        opacity: 1,
        duration: 0.12,
        ease: "power2.out",
      }, 0.64);

      // ── STAGE 5: 4 Circuit Wires Shoot Out & 4 Cards Illuminate (0.74 -> 1.00) ──
      const circuitWires = [wireTLRef.current, wireBLRef.current, wireTRRef.current, wireBRRef.current];
      circuitWires.forEach((wire, idx) => {
        if (wire) masterTL.to(wire, { strokeDashoffset: 0, duration: 0.18, ease: "power2.out" }, 0.74 + idx * 0.02);
      });

      mobileWireRefs.current.forEach((wire, idx) => {
        if (wire) masterTL.to(wire, { strokeDashoffset: 0, duration: 0.18, ease: "power2.out" }, 0.74 + idx * 0.02);
      });

      cardRefs.current.forEach((card, idx) => {
        if (card) {
          masterTL.to(card, {
            opacity: 1,
            y: 0,
            filter: "grayscale(0) brightness(1)",
            duration: 0.18,
            ease: "power2.out",
          }, 0.78 + idx * 0.03);
        }
      });

      mobileCardRefs.current.forEach((card, idx) => {
        if (card) {
          masterTL.to(card, {
            opacity: 1,
            y: 0,
            filter: "grayscale(0) brightness(1)",
            duration: 0.18,
            ease: "power2.out",
          }, 0.78 + idx * 0.03);
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full bg-[#000000] text-white overflow-hidden select-none pt-12 pb-20 lg:pt-20 lg:pb-32">
      {/* ── BACKGROUND VERTICAL MATRIX LINES (MATCHING REFERENCE) ── */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Subtle vertical grid matrix lines */}
        <div className="absolute inset-0 flex justify-around opacity-[0.06] px-12">
          {[...Array(14)].map((_, i) => (
            <div key={i} className="h-full w-px bg-gradient-to-b from-transparent via-purple-300 to-transparent" />
          ))}
        </div>

        {/* Ambient star points */}
        {[
          { t: "8%", l: "12%", r: 2, o: 0.6 },
          { t: "12%", l: "28%", r: 1.5, o: 0.4 },
          { t: "9%", l: "74%", r: 2, o: 0.7 },
          { t: "16%", l: "88%", r: 1.5, o: 0.5 },
          { t: "32%", l: "6%", r: 1.5, o: 0.3 },
          { t: "36%", l: "94%", r: 2, o: 0.6 },
          { t: "68%", l: "15%", r: 1.5, o: 0.4 },
          { t: "72%", l: "85%", r: 2, o: 0.5 },
        ].map((s, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              top: s.t,
              left: s.l,
              width: s.r,
              height: s.r,
              opacity: s.o,
              animationDuration: `${2.8 + (i % 3)}s`,
            }}
          />
        ))}
      </div>

      {/* ── TOP SECTION: TOKEN ORBIT & HEADLINE ── */}
      <div className="relative z-20 max-w-[1400px] mx-auto px-4 sm:px-6 flex flex-col items-center">
        {/* Token Orbit Row */}
        <div
          ref={orbitRef}
          className="w-full flex items-center justify-center gap-2 sm:gap-4 md:gap-6 mb-8 md:mb-12"
        >
          {/* Left Token Cluster */}
          <div className="hidden sm:flex items-center gap-2 md:gap-3.5 flex-1 justify-end">
            {leftTokens.map((tk) => (
              <div
                key={tk.symbol}
                className={`${dimFor(tk.size)} shrink-0 rounded-full border border-white/15 flex items-center justify-center transition-all duration-300 hover:scale-115 hover:border-pink-400`}
                style={{
                  backgroundColor: tk.bgColor,
                  boxShadow: `0 0 24px ${tk.glow}35, inset 0 0 10px rgba(255,255,255,0.15)`,
                }}
              >
                <span style={{ color: tk.textColor }} className="flex items-center justify-center w-full h-full">
                  {tk.icon}
                </span>
              </div>
            ))}
          </div>

          {/* Central Speedometer Rocket Badge */}
          <div className="relative shrink-0 flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36">
            {/* Pulsing ring aura */}
            <div
              className="absolute inset-0 rounded-full border border-pink-500/30 animate-[spin_14s_linear_infinite]"
              style={{ boxShadow: "0 0 35px rgba(219,39,119,0.35)" }}
            >
              <div className="absolute w-2.5 h-2.5 rounded-full bg-[#f472b6] top-1 right-3 shadow-[0_0_12px_#f472b6]" />
              <div className="absolute w-2.5 h-2.5 rounded-full bg-[#c084fc] bottom-1 left-3 shadow-[0_0_12px_#c084fc]" />
            </div>

            <div
              className="w-[78%] h-[78%] rounded-full bg-[#100c1d] border-2 border-white/20 flex items-center justify-center relative overflow-hidden shadow-[0_0_50px_rgba(219,39,119,0.5),inset_0_0_24px_rgba(0,0,0,0.8)]"
            >
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 130 130">
                <path
                  d="M 24 86 A 44 44 0 0 1 106 86"
                  fill="none"
                  stroke="url(#rocketMeterGradExact)"
                  strokeWidth="5.5"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="rocketMeterGradExact" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#7928CA" />
                    <stop offset="50%" stopColor="#db2777" />
                    <stop offset="100%" stopColor="#f472b6" />
                  </linearGradient>
                </defs>
              </svg>
              <Rocket
                className="relative z-10 w-[44%] h-[44%] text-white stroke-[2.2] drop-shadow-[0_0_18px_rgba(255,255,255,1)]"
              />
            </div>
          </div>

          {/* Right Token Cluster */}
          <div className="hidden sm:flex items-center gap-2 md:gap-3.5 flex-1 justify-start">
            {rightTokens.map((tk) => (
              <div
                key={tk.symbol}
                className={`${dimFor(tk.size)} shrink-0 rounded-full border border-white/15 flex items-center justify-center transition-all duration-300 hover:scale-115 hover:border-pink-400`}
                style={{
                  backgroundColor: tk.bgColor,
                  boxShadow: `0 0 24px ${tk.glow}35, inset 0 0 10px rgba(255,255,255,0.15)`,
                }}
              >
                <span style={{ color: tk.textColor }} className="flex items-center justify-center w-full h-full">
                  {tk.icon}
                </span>
              </div>
            ))}
          </div>

          {/* Mobile Tokens */}
          <div className="flex sm:hidden items-center gap-1.5 flex-wrap justify-center">
            {[...leftTokens.slice(-2), ...rightTokens.slice(0, 2)].map((tk) => (
              <div
                key={tk.symbol}
                className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center"
                style={{ backgroundColor: tk.bgColor }}
              >
                <span style={{ color: tk.textColor, fontSize: "11px" }}>{tk.icon}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Section Headline */}
        <div ref={headerWrapRef} className="text-center max-w-3xl mx-auto flex flex-col items-center">
          <h2
            className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[58px] font-light tracking-tight leading-[1.12]"
            style={{ fontFamily: "var(--font-outfit, sans-serif)" }}
          >
            10K+ Crypto Assets <br />
            <span className="font-normal">
              Available To Trade
            </span>
          </h2>
          <p
            className="mt-3 text-sm sm:text-base text-gray-400 max-w-lg font-light leading-relaxed"
            style={{ fontFamily: "var(--font-outfit, sans-serif)" }}
          >
            Explore every potential Crypto Assets with AI assistance
          </p>

          {/* Action Buttons */}
          <div className="mt-6 flex items-center gap-5">
            <button
              type="button"
              className="text-sm text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer font-medium px-2 py-1"
            >
              Learn More
            </button>
            <button
              type="button"
              className="rounded-full px-6 py-2.5 text-sm font-medium text-white flex items-center gap-2 cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(219,39,119,0.5)]"
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
          CINEMATIC FULL-WIDTH LIGHTING & CPU HUB STAGE (DESKTOP & TABLET)
          EXACT ANGLED V-SHAPED DIP COLLISION MATCHING USER SCREENSHOT
      ══════════════════════════════════════════════════════════════════════ */}
      <div className="relative w-full mt-10 md:mt-16 hidden md:block" style={{ height: "680px" }}>
        {/* 1. Purple Plasma Horizon Atmosphere Underneath the Curve */}
        <div
          ref={auroraUnderglowRef}
          className="absolute inset-x-0 bottom-0 pointer-events-none z-[2]"
          style={{
            height: "85%",
            background:
              "radial-gradient(ellipse 70% 55% at 50% 50%, rgba(147,51,234,0.6) 0%, rgba(219,39,119,0.4) 35%, rgba(124,58,237,0.18) 60%, transparent 80%)",
            filter: "blur(50px)",
          }}
        />

        {/* 2. Brilliant Collision Bloom at Angled V-Vertex (x=50%, y=330px) */}
        <div
          ref={centerBloomRef}
          className="absolute pointer-events-none z-[8]"
          style={{
            left: "50%",
            top: "330px",
            width: "360px",
            height: "180px",
            transform: "translate(-50%, -50%)",
            background:
              "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(255,255,255,1) 0%, rgba(253,242,248,0.92) 25%, rgba(244,114,182,0.7) 55%, rgba(147,51,234,0.25) 75%, transparent 92%)",
            filter: "blur(20px)",
          }}
        />

        {/* 3. Downward Light Stream Column (Waterfall effect from V-tip into chip) */}
        <div
          ref={verticalBeamDivRef}
          className="absolute pointer-events-none z-[6]"
          style={{
            left: "50%",
            top: "330px",
            width: "100px",
            height: "140px",
            transform: "translateX(-50%)",
            background:
              "radial-gradient(ellipse 50% 100% at 50% 50%, rgba(255,255,255,0.95) 0%, rgba(244,114,182,0.6) 45%, rgba(147,51,234,0.2) 75%, transparent 100%)",
            filter: "blur(14px)",
          }}
        />

        {/* 4. Full-Width Vector Canvas (Angled V-Curve + Downward Beam + Circuit Wires) */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-[10]"
          viewBox="0 0 1920 680"
          preserveAspectRatio="none"
          fill="none"
        >
          <defs>
            {/* Gradient for left sweeping angled curve */}
            <linearGradient id="horizonCurveGradLeft" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.75" />
              <stop offset="65%" stopColor="#ec4899" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
            </linearGradient>

            {/* Gradient for right sweeping angled curve */}
            <linearGradient id="horizonCurveGradRight" x1="100%" y1="0%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.75" />
              <stop offset="65%" stopColor="#ec4899" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
            </linearGradient>

            {/* Gradient for central V-trough luminous fill */}
            <linearGradient id="centerVFillGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
              <stop offset="50%" stopColor="#fdf2f8" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#f472b6" stopOpacity="0.7" />
            </linearGradient>

            {/* Gradient for circuit wires */}
            <linearGradient id="exactCircuitWireGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
              <stop offset="50%" stopColor="#f472b6" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0.8" />
            </linearGradient>

            {/* Gradient for vertical laser beam */}
            <linearGradient id="exactVerticalLaserGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="50%" stopColor="#fdf2f8" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#db2777" stopOpacity="0.85" />
            </linearGradient>
          </defs>

          {/* ── CENTRAL V-POCKET LUMINOUS FILL (The glowing V shape right at the dip) ── */}
          <polygon
            ref={centerVFillRef}
            points="780,200 960,330 1140,200 960,250"
            fill="url(#centerVFillGrad)"
            style={{ filter: "blur(10px)" }}
          />

          {/* ── LEFT ANGLED HORIZON CURVE (Edge 0,50 -> Angled Dip to 960,330) ── */}
          {/* Outer diffuse glow */}
          <path
            ref={leftCurveGlowRef}
            d="M 0 50 C 450 170, 680 195, 780 200 C 850 205, 920 255, 960 330"
            stroke="rgba(147,51,234,0.5)"
            strokeWidth="56"
            strokeLinecap="round"
            style={{ filter: "blur(26px)" }}
          />
          {/* Mid magenta beam */}
          <path
            ref={leftCurveMidRef}
            d="M 0 50 C 450 170, 680 195, 780 200 C 850 205, 920 255, 960 330"
            stroke="rgba(244,114,182,0.9)"
            strokeWidth="16"
            strokeLinecap="round"
            style={{ filter: "blur(8px)" }}
          />
          {/* Sharp core white-hot laser */}
          <path
            ref={leftCurveLaserRef}
            d="M 0 50 C 450 170, 680 195, 780 200 C 850 205, 920 255, 960 330"
            stroke="url(#horizonCurveGradLeft)"
            strokeWidth="3.4"
            strokeLinecap="round"
            style={{ filter: "drop-shadow(0 0 6px #ffffff) drop-shadow(0 0 16px rgba(244,114,182,1))" }}
          />

          {/* ── RIGHT ANGLED HORIZON CURVE (Edge 1920,50 -> Angled Dip to 960,330) ── */}
          {/* Outer diffuse glow */}
          <path
            ref={rightCurveGlowRef}
            d="M 1920 50 C 1470 170, 1240 195, 1140 200 C 1070 205, 1000 255, 960 330"
            stroke="rgba(147,51,234,0.5)"
            strokeWidth="56"
            strokeLinecap="round"
            style={{ filter: "blur(26px)" }}
          />
          {/* Mid magenta beam */}
          <path
            ref={rightCurveMidRef}
            d="M 1920 50 C 1470 170, 1240 195, 1140 200 C 1070 205, 1000 255, 960 330"
            stroke="rgba(244,114,182,0.9)"
            strokeWidth="16"
            strokeLinecap="round"
            style={{ filter: "blur(8px)" }}
          />
          {/* Sharp core white-hot laser */}
          <path
            ref={rightCurveLaserRef}
            d="M 1920 50 C 1470 170, 1240 195, 1140 200 C 1070 205, 1000 255, 960 330"
            stroke="url(#horizonCurveGradRight)"
            strokeWidth="3.4"
            strokeLinecap="round"
            style={{ filter: "drop-shadow(0 0 6px #ffffff) drop-shadow(0 0 16px rgba(244,114,182,1))" }}
          />

          {/* ── DOWNWARD VERTICAL BEAM (V-Vertex 960,330 -> Chip 960,440) ── */}
          <path
            ref={verticalBeamGlowRef}
            d="M 960 330 L 960 440"
            stroke="rgba(244,114,182,0.85)"
            strokeWidth="34"
            strokeLinecap="round"
            style={{ filter: "blur(12px)" }}
          />
          <path
            ref={verticalBeamLaserRef}
            d="M 960 330 L 960 440"
            stroke="url(#exactVerticalLaserGrad)"
            strokeWidth="5.2"
            strokeLinecap="round"
            style={{ filter: "drop-shadow(0 0 10px #ffffff) drop-shadow(0 0 20px rgba(219,39,119,1))" }}
          />

          {/* ── CIRCUIT OUTPUT WIRES (Chip -> 4 Metric Cards) ── */}
          {/* Top-Left Card (Chip 880,480 -> Card 380,440) */}
          <path
            ref={wireTLRef}
            d="M 880 480 C 680 480, 520 440, 390 440"
            stroke="url(#exactCircuitWireGrad)"
            strokeWidth="2.2"
            strokeLinecap="round"
            style={{ filter: "drop-shadow(0 0 4px rgba(244,114,182,0.9))" }}
          />
          {/* Bottom-Left Card (Chip 880,560 -> Card 380,580) */}
          <path
            ref={wireBLRef}
            d="M 880 560 C 680 560, 520 580, 390 580"
            stroke="url(#exactCircuitWireGrad)"
            strokeWidth="2.2"
            strokeLinecap="round"
            style={{ filter: "drop-shadow(0 0 4px rgba(244,114,182,0.9))" }}
          />
          {/* Top-Right Card (Chip 1040,480 -> Card 1530,440) */}
          <path
            ref={wireTRRef}
            d="M 1040 480 C 1240 480, 1400 440, 1530 440"
            stroke="url(#exactCircuitWireGrad)"
            strokeWidth="2.2"
            strokeLinecap="round"
            style={{ filter: "drop-shadow(0 0 4px rgba(244,114,182,0.9))" }}
          />
          {/* Bottom-Right Card (Chip 1040,560 -> Card 1530,580) */}
          <path
            ref={wireBRRef}
            d="M 1040 560 C 1240 560, 1400 580, 1530 580"
            stroke="url(#exactCircuitWireGrad)"
            strokeWidth="2.2"
            strokeLinecap="round"
            style={{ filter: "drop-shadow(0 0 4px rgba(244,114,182,0.9))" }}
          />
        </svg>

        {/* 5. CENTRAL CPU CHIP (Positioned below the V-dip) */}
        <div
          ref={chipContainerRef}
          className="absolute z-20 left-1/2"
          style={{ top: "430px", transform: "translateX(-50%)" }}
        >
          <div className="relative w-40 h-40 flex items-center justify-center">
            {/* Ambient radiating aura */}
            <div
              ref={chipAuraRef}
              className="absolute pointer-events-none"
              style={{
                width: "230%",
                height: "230%",
                background:
                  "radial-gradient(circle, rgba(219,39,119,0.75) 0%, rgba(147,51,234,0.4) 45%, transparent 75%)",
                filter: "blur(30px)",
              }}
            />

            {/* Chip Outer Black Shell with Subtle Chamfer Bezel */}
            <div className="relative w-full h-full rounded-[28px] bg-[#0b0d13] border-2 border-white/20 p-3.5 flex items-center justify-center shadow-[0_0_70px_rgba(219,39,119,0.7),inset_0_0_24px_rgba(0,0,0,0.95)]">
              {/* Corner LED accents */}
              <div className="absolute top-2.5 left-2.5 w-1.5 h-1.5 rounded-full bg-pink-400 shadow-[0_0_8px_#f472b6]" />
              <div className="absolute top-2.5 right-2.5 w-1.5 h-1.5 rounded-full bg-pink-400 shadow-[0_0_8px_#f472b6]" />
              <div className="absolute bottom-2.5 left-2.5 w-1.5 h-1.5 rounded-full bg-pink-400 shadow-[0_0_8px_#f472b6]" />
              <div className="absolute bottom-2.5 right-2.5 w-1.5 h-1.5 rounded-full bg-pink-400 shadow-[0_0_8px_#f472b6]" />

              {/* Glowing Gradient Core */}
              <div
                ref={chipCoreRef}
                className="relative w-full h-full rounded-[20px] flex items-center justify-center shadow-inner overflow-hidden"
                style={{ background: "linear-gradient(135deg, #ff3b69 0%, #db2777 48%, #9333ea 100%)" }}
              >
                {/* Circuit Grid Pattern */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px),
                                      linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
                    backgroundSize: "11px 11px",
                  }}
                />

                {/* Central CPU Icon */}
                <div className="relative z-10 text-white w-14 h-14 flex items-center justify-center">
                  <Cpu className="w-full h-full stroke-[2]" />
                  <div
                    ref={chipIconGlowRef}
                    className="absolute inset-0 pointer-events-none"
                    style={{ filter: "drop-shadow(0 0 18px rgba(255,255,255,1))" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 6. 4 METRIC CARDS */}
        <div className="relative z-20 max-w-[1400px] h-full mx-auto px-6 pointer-events-none">
          {/* Card 0: Top-Left (50+ Countries) */}
          <div
            ref={(el) => { cardRefs.current[0] = el; }}
            className="absolute left-6 pointer-events-auto bg-[#0a0c13]/95 border border-white/10 hover:border-pink-500/50 rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.9)] flex items-center gap-4 px-5 py-4 transition-all duration-300 hover:scale-105"
            style={{ top: "415px", width: "235px" }}
          >
            <div className="shrink-0 w-11 h-11 rounded-xl bg-[#141722] border border-white/10 flex items-center justify-center">
              {metrics[0].icon}
            </div>
            <div>
              <div className="font-bold text-white text-xl leading-tight" style={{ fontFamily: "var(--font-outfit, sans-serif)" }}>
                {metrics[0].value}
              </div>
              <div className="text-xs text-gray-400 font-medium tracking-wide mt-0.5">
                {metrics[0].label}
              </div>
            </div>
          </div>

          {/* Card 1: Bottom-Left (10K+ Crypto Assets) */}
          <div
            ref={(el) => { cardRefs.current[1] = el; }}
            className="absolute left-6 pointer-events-auto bg-[#0a0c13]/95 border border-white/10 hover:border-pink-500/50 rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.9)] flex items-center gap-4 px-5 py-4 transition-all duration-300 hover:scale-105"
            style={{ top: "555px", width: "235px" }}
          >
            <div className="shrink-0 w-11 h-11 rounded-xl bg-[#141722] border border-white/10 flex items-center justify-center">
              {metrics[1].icon}
            </div>
            <div>
              <div className="font-bold text-white text-xl leading-tight" style={{ fontFamily: "var(--font-outfit, sans-serif)" }}>
                {metrics[1].value}
              </div>
              <div className="text-xs text-gray-400 font-medium tracking-wide mt-0.5">
                {metrics[1].label}
              </div>
            </div>
          </div>

          {/* Card 2: Top-Right (97.5% Success Rate) */}
          <div
            ref={(el) => { cardRefs.current[2] = el; }}
            className="absolute right-6 pointer-events-auto bg-[#0a0c13]/95 border border-white/10 hover:border-pink-500/50 rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.9)] flex items-center gap-4 px-5 py-4 transition-all duration-300 hover:scale-105"
            style={{ top: "415px", width: "235px" }}
          >
            <div className="shrink-0 w-11 h-11 rounded-xl bg-[#141722] border border-white/10 flex items-center justify-center">
              {metrics[2].icon}
            </div>
            <div>
              <div className="font-bold text-white text-xl leading-tight" style={{ fontFamily: "var(--font-outfit, sans-serif)" }}>
                {metrics[2].value}
              </div>
              <div className="text-xs text-gray-400 font-medium tracking-wide mt-0.5">
                {metrics[2].label}
              </div>
            </div>
          </div>

          {/* Card 3: Bottom-Right (10,000+ Daily Traders) */}
          <div
            ref={(el) => { cardRefs.current[3] = el; }}
            className="absolute right-6 pointer-events-auto bg-[#0a0c13]/95 border border-white/10 hover:border-pink-500/50 rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.9)] flex items-center gap-4 px-5 py-4 transition-all duration-300 hover:scale-105"
            style={{ top: "555px", width: "235px" }}
          >
            <div className="shrink-0 w-11 h-11 rounded-xl bg-[#141722] border border-white/10 flex items-center justify-center">
              {metrics[3].icon}
            </div>
            <div>
              <div className="font-bold text-white text-xl leading-tight" style={{ fontFamily: "var(--font-outfit, sans-serif)" }}>
                {metrics[3].value}
              </div>
              <div className="text-xs text-gray-400 font-medium tracking-wide mt-0.5">
                {metrics[3].label}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          MOBILE VIEW (< 768px)
      ══════════════════════════════════════════════════════════════════════ */}
      <div className="md:hidden flex flex-col items-center px-4 mt-8">
        {/* Converging V sweep above chip */}
        <div className="relative w-full flex justify-center" style={{ height: "140px" }}>
          <svg viewBox="0 0 320 140" className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
            <path
              ref={mobileSweepLeftRef}
              d="M 10 10 C 80 25, 120 35, 135 40 C 145 45, 155 70, 160 115"
              stroke="#ffffff"
              strokeWidth="2.8"
              strokeLinecap="round"
              style={{ filter: "drop-shadow(0 0 6px #ffffff) drop-shadow(0 0 14px rgba(244,114,182,0.9))" }}
            />
            <path
              ref={mobileSweepRightRef}
              d="M 310 10 C 240 25, 200 35, 185 40 C 175 45, 165 70, 160 115"
              stroke="#ffffff"
              strokeWidth="2.8"
              strokeLinecap="round"
              style={{ filter: "drop-shadow(0 0 6px #ffffff) drop-shadow(0 0 14px rgba(244,114,182,0.9))" }}
            />
          </svg>
          <div
            className="absolute pointer-events-none"
            style={{
              left: "50%",
              bottom: 0,
              width: "110px",
              height: "110px",
              transform: "translateX(-50%)",
              background: "radial-gradient(ellipse 60% 60% at 50% 100%, rgba(244,114,182,0.8) 0%, rgba(147,51,234,0.35) 50%, transparent 80%)",
              filter: "blur(18px)",
            }}
          />
        </div>

        {/* Mobile Chip + Wires */}
        <div className="relative flex items-center justify-center mt-2" style={{ width: "100%", maxWidth: "320px" }}>
          <svg viewBox="0 0 320 160" className="absolute inset-0 w-full pointer-events-none" style={{ height: "160px" }}>
            <defs>
              <linearGradient id="mobileWireGradExact" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#f9a8d4" stopOpacity="0.85" />
              </linearGradient>
            </defs>
            <path ref={(el) => { mobileWireRefs.current[0] = el; }} d="M 130 60 C 90 60, 60 30, 20 30" stroke="url(#mobileWireGradExact)" strokeWidth="1.8" strokeLinecap="round" />
            <path ref={(el) => { mobileWireRefs.current[1] = el; }} d="M 130 100 C 90 100, 60 140, 20 140" stroke="url(#mobileWireGradExact)" strokeWidth="1.8" strokeLinecap="round" />
            <path ref={(el) => { mobileWireRefs.current[2] = el; }} d="M 190 60 C 230 60, 260 30, 300 30" stroke="url(#mobileWireGradExact)" strokeWidth="1.8" strokeLinecap="round" />
            <path ref={(el) => { mobileWireRefs.current[3] = el; }} d="M 190 100 C 230 100, 260 140, 300 140" stroke="url(#mobileWireGradExact)" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
          <div className="relative z-10 w-24 h-24 rounded-2xl bg-[#0a0c12] border-2 border-white/20 p-2.5 flex items-center justify-center shadow-[0_0_40px_rgba(219,39,119,0.55)]">
            <div
              ref={mobileChipCoreRef}
              className="w-full h-full rounded-xl flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #ff3b69 0%, #db2777 50%, #9333ea 100%)" }}
            >
              <Cpu className="w-8 h-8 text-white stroke-[1.8]" />
            </div>
          </div>
        </div>

        {/* 2x2 Metric Cards Grid for Mobile */}
        <div className="grid grid-cols-2 gap-3 w-full max-w-[340px] mt-6">
          {metrics.map((m, i) => (
            <div
              key={m.label}
              ref={(el) => { mobileCardRefs.current[i] = el; }}
              className="bg-[#0a0c13]/95 border border-white/10 rounded-xl p-3 flex items-center gap-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.85)]"
            >
              <div className="w-8 h-8 shrink-0 rounded-lg bg-[#141722] border border-white/10 flex items-center justify-center">
                {m.icon}
              </div>
              <div>
                <div className="text-base font-bold text-white tracking-tight" style={{ fontFamily: "var(--font-outfit, sans-serif)" }}>
                  {m.value}
                </div>
                <div className="text-[10px] text-gray-400 font-medium">{m.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}