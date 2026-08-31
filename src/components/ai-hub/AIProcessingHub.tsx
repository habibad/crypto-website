"use client";

import React, { useRef, useEffect } from "react";
import { ArrowRight, Globe, Check, Users, Database, Cpu, Rocket } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// ══════════════════════════════════════════════════════════════════════════
// TOKEN ICONS & DATA (MATCHING IMAGE 1 EXACTLY)
// ══════════════════════════════════════════════════════════════════════════

interface TokenItem {
  symbol: string;
  bgColor: string;
  textColor: string;
  size: "sm" | "md" | "lg";
  yOffset: number; // Arch curvature offset (px)
  icon: React.ReactNode;
}

const tokensLeft: TokenItem[] = [
  {
    symbol: "ETH",
    bgColor: "#222a42",
    textColor: "#627eea",
    size: "sm",
    yOffset: 38,
    icon: (
      <svg viewBox="0 0 24 24" fill="#8da4f7" className="w-[55%] h-[55%]">
        <path d="M11.944 17.97L4.58 13.62 11.943 24l7.37-10.38-7.372 4.35h.003zM12.056 0L4.69 12.223l7.365 4.354 7.365-4.35L12.056 0z" />
      </svg>
    ),
  },
  {
    symbol: "BTC",
    bgColor: "#F7931A",
    textColor: "#ffffff",
    size: "md",
    yOffset: 24,
    icon: <span className="font-bold text-lg leading-none">₿</span>,
  },
  {
    symbol: "XRP",
    bgColor: "#000000",
    textColor: "#ffffff",
    size: "md",
    yOffset: 14,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" className="w-[50%] h-[50%]">
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
        <span className="text-xl">🐕</span>
      </div>
    ),
  },
  {
    symbol: "LINK",
    bgColor: "#2A5ADA",
    textColor: "#ffffff",
    size: "lg",
    yOffset: 2,
    icon: (
      <svg viewBox="0 0 32 32" fill="#ffffff" className="w-[58%] h-[58%]">
        <path d="M16 3l-4 2.3V12L8 9.7 4 12v8l4 2.3 4-2.3v6.7l4 2.3 4-2.3v-6.7l4 2.3 4-2.3v-8l-4-2.3L24 9.7V5.3z" />
      </svg>
    ),
  },
];

const tokensRight: TokenItem[] = [
  {
    symbol: "USDT",
    bgColor: "#26A17B",
    textColor: "#ffffff",
    size: "lg",
    yOffset: 2,
    icon: <span className="font-bold text-xl leading-none text-white">₮</span>,
  },
  {
    symbol: "LUNA",
    bgColor: "#172852",
    textColor: "#facc15",
    size: "lg",
    yOffset: 6,
    icon: (
      <div className="w-full h-full rounded-full bg-[#101B37] flex items-center justify-center border border-yellow-400/40">
        <span className="text-xl">🌙</span>
      </div>
    ),
  },
  {
    symbol: "BNB",
    bgColor: "#F3BA2F",
    textColor: "#000000",
    size: "md",
    yOffset: 14,
    icon: (
      <svg viewBox="0 0 24 24" fill="#000000" className="w-[60%] h-[60%]">
        <path d="M12 2l3.5 3.5-3.5 3.5-3.5-3.5L12 2zm0 13l3.5 3.5-3.5 3.5-3.5-3.5L12 15zm-6.5-6.5L9 12l-3.5 3.5L2 12l3.5-3.5zm13 0L22 12l-3.5 3.5L15 12l3.5-3.5zM12 9l3 3-3 3-3-3 3-3z" />
      </svg>
    ),
  },
  {
    symbol: "SEI",
    bgColor: "#131d36",
    textColor: "#38bdf8",
    size: "sm",
    yOffset: 24,
    icon: (
      <div className="w-full h-full rounded-full bg-[#0c1322] border border-cyan-500/40 flex items-center justify-center">
        <span className="text-sm font-bold text-cyan-400">🌊</span>
      </div>
    ),
  },
  {
    symbol: "HBAR",
    bgColor: "#111116",
    textColor: "#888888",
    size: "sm",
    yOffset: 38,
    icon: <span className="font-mono font-bold text-[#aaa] text-sm">Ħ</span>,
  },
];

const metrics = [
  { icon: <Globe className="w-5 h-5 text-white" />, value: "50+", label: "Countries" },
  { icon: <Database className="w-5 h-5 text-white" />, value: "10K+", label: "Crypto Assets" },
  { icon: <Check className="w-5 h-5 text-white stroke-[2.8]" />, value: "97,5%", label: "Success Rate" },
  { icon: <Users className="w-5 h-5 text-white" />, value: "10,000+", label: "Daily Traders" },
];

export default function AIProcessingHub() {
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitBarRef = useRef<HTMLDivElement>(null);
  const headerWrapRef = useRef<HTMLDivElement>(null);

  // Center Flares (Triggered strictly when curves collide in center)
  const centerFlareRef = useRef<HTMLDivElement>(null);
  const waterfallPillarRef = useRef<HTMLDivElement>(null);
  const centerAuroraBloomRef = useRef<HTMLDivElement>(null);

  // Left Crescent Path Layers (Glow follows stroke progression strictly)
  const crescentLeftGlowRef = useRef<SVGPathElement>(null);
  const crescentLeftBaseRef = useRef<SVGPathElement>(null);
  const crescentLeftLaserRef = useRef<SVGPathElement>(null);

  // Right Crescent Path Layers (Glow follows stroke progression strictly)
  const crescentRightGlowRef = useRef<SVGPathElement>(null);
  const crescentRightBaseRef = useRef<SVGPathElement>(null);
  const crescentRightLaserRef = useRef<SVGPathElement>(null);

  // Downward laser waterfall beam
  const waterfallLaserRef = useRef<SVGPathElement>(null);

  // 4 Circuit S-curve wires
  const wireTLRef = useRef<SVGPathElement>(null);
  const wireBLRef = useRef<SVGPathElement>(null);
  const wireTRRef = useRef<SVGPathElement>(null);
  const wireBRRef = useRef<SVGPathElement>(null);

  // Central AI CPU Chip
  const chipContainerRef = useRef<HTMLDivElement>(null);
  const chipAuraRef = useRef<HTMLDivElement>(null);
  const chipCoreRef = useRef<HTMLDivElement>(null);

  // 4 Metric Cards
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

  // ══════════════════════════════════════════════════════════════════════
  // GSAP SCROLL PINNING & CINEMATIC LIGHTING SCRUB
  // ══════════════════════════════════════════════════════════════════════
  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Calculate path stroke dasharrays
      const paths = [
        crescentLeftGlowRef.current,
        crescentLeftBaseRef.current,
        crescentLeftLaserRef.current,
        crescentRightGlowRef.current,
        crescentRightBaseRef.current,
        crescentRightLaserRef.current,
        waterfallLaserRef.current,
        wireTLRef.current,
        wireBLRef.current,
        wireTRRef.current,
        wireBRRef.current,
      ];

      paths.forEach((p) => {
        if (!p) return;
        const len = p.getTotalLength();
        gsap.set(p, { strokeDasharray: len, strokeDashoffset: len });
      });

      // 2. Initial dormant states
      gsap.set(orbitBarRef.current, { opacity: 1, y: 0 });
      gsap.set(headerWrapRef.current, { opacity: 1, y: 0 });

      // Keep crescent curves dormant/invisible until scroll starts (prevents corner glow bleed)
      gsap.set(
        [
          crescentLeftGlowRef.current,
          crescentLeftBaseRef.current,
          crescentLeftLaserRef.current,
          crescentRightGlowRef.current,
          crescentRightBaseRef.current,
          crescentRightLaserRef.current,
        ],
        { opacity: 0 }
      );

      // Keep center flares completely invisible while curves are traveling from edges
      gsap.set(centerFlareRef.current, { opacity: 0, scale: 0.2 });
      gsap.set(centerAuroraBloomRef.current, { opacity: 0, scale: 0.5 });
      gsap.set(waterfallPillarRef.current, { opacity: 0, scaleY: 0, transformOrigin: "50% 0%" });

      // Chip initial dormant state (completely hidden before scroll / beam arrival)
      gsap.set(chipContainerRef.current, { opacity: 0, scale: 0.7, y: 25 });
      gsap.set(chipAuraRef.current, { opacity: 0, scale: 0.3 });
      gsap.set(chipCoreRef.current, { opacity: 0.2, filter: "brightness(0.3) saturate(0.2)" });

      // Cards initial state (completely hidden before circuit wire activation)
      cardRefs.current.forEach((card) => {
        if (!card) return;
        gsap.set(card, { opacity: 0, y: 25, scale: 0.92, filter: "brightness(0.4)" });
      });

      // 3. Main Pinning Scroll Timeline
      const masterTL = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=2200",
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          scrub: 1,
        },
      });

      // ── STAGE 1: Left AND Right Curves Sweep Inward (0.00 -> 0.35) ──
      // Fade in smoothly right as scroll starts so corners are pitch black before scrolling
      masterTL.to(
        [
          crescentLeftGlowRef.current,
          crescentLeftBaseRef.current,
          crescentLeftLaserRef.current,
          crescentRightGlowRef.current,
          crescentRightBaseRef.current,
          crescentRightLaserRef.current,
        ],
        { opacity: 1, duration: 0.03, ease: "power1.out" },
        0
      );

      masterTL.to(
        [
          crescentLeftGlowRef.current,
          crescentLeftBaseRef.current,
          crescentLeftLaserRef.current,
          crescentRightGlowRef.current,
          crescentRightBaseRef.current,
          crescentRightLaserRef.current,
        ],
        { strokeDashoffset: 0, duration: 0.35, ease: "power1.inOut" },
        0
      );

      // ── STAGE 2: Curves Collide in Center -> White-Hot Flare, Bloom & Waterfall Beam Flows Down (0.33 -> 0.55) ──
      masterTL.to(
        centerFlareRef.current,
        { opacity: 1, scale: 1, duration: 0.12, ease: "power2.out" },
        0.33
      );
      masterTL.to(
        centerAuroraBloomRef.current,
        { opacity: 1, scale: 1, duration: 0.2, ease: "power1.out" },
        0.35
      );
      masterTL.to(
        waterfallPillarRef.current,
        { opacity: 1, scaleY: 1, duration: 0.2, ease: "power2.inOut" },
        0.35
      );
      if (waterfallLaserRef.current) {
        masterTL.to(
          waterfallLaserRef.current,
          { strokeDashoffset: 0, duration: 0.2, ease: "power2.inOut" },
          0.35
        );
      }

      // ── STAGE 3: Downward Flow Reaches CPU Chip -> Chip Materializes & Radiant Halo Ignites (0.52 -> 0.70) ──
      masterTL.to(
        chipContainerRef.current,
        { opacity: 1, scale: 1, y: 0, duration: 0.18, ease: "back.out(1.1)" },
        0.52
      );
      masterTL.to(
        chipCoreRef.current,
        { opacity: 1, filter: "brightness(1.15) saturate(1.15)", duration: 0.18, ease: "power2.out" },
        0.52
      );
      masterTL.to(
        chipAuraRef.current,
        { opacity: 1, scale: 1.25, duration: 0.2, ease: "power2.out" },
        0.52
      );

      // ── STAGE 4: 4 Wires Shoot Horizontally into the 4 Metric Cards (0.68 -> 0.88) ──
      const wires = [wireTLRef.current, wireBLRef.current, wireTRRef.current, wireBRRef.current];
      wires.forEach((w, i) => {
        if (w) masterTL.to(w, { strokeDashoffset: 0, duration: 0.18, ease: "power2.out" }, 0.68 + i * 0.02);
      });

      cardRefs.current.forEach((card, i) => {
        if (card) {
          masterTL.to(
            card,
            { opacity: 1, y: 0, scale: 1, filter: "brightness(1)", duration: 0.18, ease: "power2.out" },
            0.72 + i * 0.03
          );
        }
      });

      // ── STAGE 5: Hold fully-illuminated state before unpinning (0.90 -> 1.00) ──
      masterTL.to({}, { duration: 0.10 }, 0.90);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#000000] text-white overflow-hidden select-none min-h-screen flex flex-col justify-center items-center"
    >
      {/* ── CLEAN DEEP-SPACE BACKGROUND WITH SUBTLE VERTICAL MATRIX & STARS ── */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Crisp, subtle vertical grid matrix lines */}
        <div className="absolute inset-0 flex justify-around opacity-[0.04] px-16">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="h-full w-px bg-gradient-to-b from-transparent via-white to-transparent" />
          ))}
        </div>

        {/* Ambient star points matching reference */}
        {[
          { t: "12%", l: "12%", r: 2, o: 0.7 },
          { t: "16%", l: "28%", r: 1.5, o: 0.4 },
          { t: "14%", l: "74%", r: 2, o: 0.7 },
          { t: "18%", l: "88%", r: 1.5, o: 0.5 },
          { t: "42%", l: "8%", r: 1.5, o: 0.3 },
          { t: "45%", l: "92%", r: 2, o: 0.6 },
          { t: "75%", l: "14%", r: 1.5, o: 0.4 },
          { t: "78%", l: "86%", r: 2, o: 0.5 },
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
              animationDuration: `${3 + (i % 3)}s`,
            }}
          />
        ))}
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          UNIFIED DESKTOP STAGE (EXACT 1:1 WITH REFERENCE IMAGES)
      ══════════════════════════════════════════════════════════════════════ */}
      <div className="relative w-full hidden md:block" style={{ height: "920px", maxWidth: "1600px" }}>

        {/* 1. ATMOSPHERIC PINK-PURPLE AURA BENEATH CRESCENT (Strictly downwards, extended +80px) */}
        <div
          ref={centerAuroraBloomRef}
          className="absolute inset-x-0 pointer-events-none z-[2]"
          style={{
            top: "460px",
            height: "540px",
            background:
              "radial-gradient(ellipse 65% 100% at 50% 0%, rgba(219,39,119,0.38) 0%, rgba(168,85,247,0.2) 45%, transparent 85%)",
            filter: "blur(35px)",
          }}
        />

        {/* 2. WHITE-HOT HORIZONTAL FLARE BENEATH THE CTA BUTTON (Downward spread) */}
        <div
          ref={centerFlareRef}
          className="absolute pointer-events-none z-[8]"
          style={{
            left: "50%",
            top: "430px",
            width: "480px",
            height: "140px",
            transform: "translateX(-50%)",
            background:
              "radial-gradient(ellipse 70% 90% at 50% 0%, #ffffff 0%, rgba(255,255,255,0.95) 25%, rgba(244,114,182,0.8) 50%, rgba(219,39,119,0.4) 75%, transparent 100%)",
            filter: "blur(14px)",
          }}
        />

        {/* 3. VERTICAL LIGHT WATERFALL PILLAR (Thicker, wider & beautifully blended) */}
        <div
          ref={waterfallPillarRef}
          className="absolute pointer-events-none z-[6]"
          style={{
            left: "50%",
            top: "430px",
            width: "240px",
            height: "360px",
            transform: "translateX(-50%)",
            background:
              "radial-gradient(ellipse 60% 100% at 50% 0%, rgba(255,255,255,0.95) 0%, rgba(244,114,182,0.75) 30%, rgba(219,39,119,0.45) 60%, rgba(147,51,234,0.2) 85%, transparent 100%)",
            filter: "blur(16px)",
          }}
        />

        {/* 4. FULL-WIDTH SVG: PROGRESSIVE LEFT & RIGHT CONVERGING CURVES WITH CO-TRAVELING GLOW */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-[10]"
          viewBox="0 0 1600 920"
          preserveAspectRatio="none"
          fill="none"
        >
          <defs>
            {/* Left Crescent Gradient */}
            <linearGradient id="sharpCrescentGradLeft" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f472b6" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#ec4899" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#f472b6" stopOpacity="0.9" />
            </linearGradient>

            {/* Right Crescent Gradient */}
            <linearGradient id="sharpCrescentGradRight" x1="100%" y1="0%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#f472b6" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#ec4899" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#f472b6" stopOpacity="0.9" />
            </linearGradient>

            {/* Downward Waterfall Laser Gradient */}
            <linearGradient id="sharpWaterfallGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="25%" stopColor="#f472b6" stopOpacity="0.95" />
              <stop offset="70%" stopColor="#ec4899" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#db2777" stopOpacity="0.75" />
            </linearGradient>

            {/* Strict Downward Clip: Only allows glow to expand downwards beneath the crescent arch */}
            <clipPath id="crescentDownwardClip">
              <path d="M 0 160 C 400 400, 600 430, 800 430 C 1000 430, 1200 400, 1600 160 L 1600 920 L 0 920 Z" />
            </clipPath>
          </defs>

          {/* ── GLOW CONTAINER CLIPPED STRICTLY DOWNWARDS (NO UPWARD BLEED, 100% SMOOTH BLUR) ── */}
          <g clipPath="url(#crescentDownwardClip)">
            {/* ── LEFT CRESCENT (Deep downward radiant curtain following user marker) ── */}
            {/* Deep atmospheric underglow reaching ~190px+ downwards */}
            <path
              ref={crescentLeftGlowRef}
              d="M 0 160 C 400 400, 600 430, 800 430"
              stroke="rgba(219,39,119,0.32)"
              strokeWidth="280"
              strokeLinecap="butt"
              style={{ filter: "blur(54px)" }}
            />
            {/* Mid magenta-pink aura */}
            <path
              ref={crescentLeftBaseRef}
              d="M 0 160 C 400 400, 600 430, 800 430"
              stroke="rgba(236,72,153,0.55)"
              strokeWidth="150"
              strokeLinecap="butt"
              style={{ filter: "blur(28px)" }}
            />
            {/* Soft radiant core matching the pink/magenta glow without hard line */}
            <path
              ref={crescentLeftLaserRef}
              d="M 0 160 C 400 400, 600 430, 800 430"
              stroke="url(#sharpCrescentGradLeft)"
              strokeWidth="38"
              strokeLinecap="butt"
              style={{ filter: "blur(10px) drop-shadow(0 0 20px rgba(244,114,182,0.95))" }}
            />

            {/* ── RIGHT CRESCENT (Deep downward radiant curtain following user marker) ── */}
            {/* Deep atmospheric underglow reaching ~190px+ downwards */}
            <path
              ref={crescentRightGlowRef}
              d="M 1600 160 C 1200 400, 1000 430, 800 430"
              stroke="rgba(219,39,119,0.32)"
              strokeWidth="280"
              strokeLinecap="butt"
              style={{ filter: "blur(54px)" }}
            />
            {/* Mid magenta-pink aura */}
            <path
              ref={crescentRightBaseRef}
              d="M 1600 160 C 1200 400, 1000 430, 800 430"
              stroke="rgba(236,72,153,0.55)"
              strokeWidth="150"
              strokeLinecap="butt"
              style={{ filter: "blur(28px)" }}
            />
            {/* Soft radiant core matching the pink/magenta glow without hard line */}
            <path
              ref={crescentRightLaserRef}
              d="M 1600 160 C 1200 400, 1000 430, 800 430"
              stroke="url(#sharpCrescentGradRight)"
              strokeWidth="38"
              strokeLinecap="butt"
              style={{ filter: "blur(10px) drop-shadow(0 0 20px rgba(244,114,182,0.95))" }}
            />
          </g>

          {/* Downward Waterfall Core Laser (Thicker & deeply luminous) */}
          <path
            ref={waterfallLaserRef}
            d="M 800 430 L 800 680"
            stroke="url(#sharpWaterfallGrad)"
            strokeWidth="32"
            strokeLinecap="round"
            style={{ filter: "blur(8px) drop-shadow(0 0 20px rgba(255,255,255,0.85)) drop-shadow(0 0 36px rgba(236,72,153,0.95))" }}
          />
        </svg>

        {/* 5. TOP CURVED TOKEN ARCH & ROCKET SPEEDOMETER (MATCHING IMAGE 1) */}
        <div
          ref={orbitBarRef}
          className="absolute z-20 top-2 left-1/2 -translate-x-1/2 w-full max-w-[1280px] px-6 flex items-center justify-center gap-5"
        >
          {/* Left 5 Tokens with gentle arch curve alignment */}
          <div className="flex items-center gap-3.5 flex-1 justify-end">
            {tokensLeft.map((tk) => {
              const sizeClasses =
                tk.size === "sm"
                  ? "w-11 h-11"
                  : tk.size === "lg"
                    ? "w-15 h-15"
                    : "w-13 h-13";

              return (
                <div
                  key={tk.symbol}
                  className={`${sizeClasses} shrink-0 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-115 shadow-[0_4px_16px_rgba(0,0,0,0.6)]`}
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

          {/* Center Rocket Speedometer Badge with Layered Concentric Rings */}
          <div className="relative shrink-0 flex items-center justify-center w-28 h-28 lg:w-34 lg:h-34">
            {/* Outer dark stepped ring */}
            <div
              className="absolute inset-0 rounded-full bg-[#0a0c13] border border-white/10 shadow-[0_0_35px_rgba(219,39,119,0.25)] flex items-center justify-center"
            >
              {/* Spinning particle dots ring */}
              <div className="absolute inset-1 rounded-full border border-pink-500/20 animate-[spin_16s_linear_infinite]">
                <div className="absolute w-2 h-2 rounded-full bg-pink-400 top-1 right-3 shadow-[0_0_8px_#f472b6]" />
                <div className="absolute w-2 h-2 rounded-full bg-purple-400 bottom-1 left-3 shadow-[0_0_8px_#c084fc]" />
              </div>

              {/* Inner Speedometer core with neon arc gauge */}
              <div className="w-[76%] h-[76%] rounded-full bg-[#12141f] border border-white/15 flex items-center justify-center relative overflow-hidden shadow-inner">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                  <path
                    d="M 20 68 A 34 34 0 0 1 80 68"
                    fill="none"
                    stroke="url(#speedometerArcGrad)"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="speedometerArcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#7c3aed" />
                      <stop offset="50%" stopColor="#db2777" />
                      <stop offset="100%" stopColor="#f472b6" />
                    </linearGradient>
                  </defs>
                </svg>
                <Rocket className="relative z-10 w-9 h-9 text-white stroke-[2.2] drop-shadow-[0_0_12px_rgba(255,255,255,0.9)]" />
              </div>
            </div>
          </div>

          {/* Right 5 Tokens with gentle arch curve alignment */}
          <div className="flex items-center gap-3.5 flex-1 justify-start">
            {tokensRight.map((tk) => {
              const sizeClasses =
                tk.size === "sm"
                  ? "w-11 h-11"
                  : tk.size === "lg"
                    ? "w-15 h-15"
                    : "w-13 h-13";

              return (
                <div
                  key={tk.symbol}
                  className={`${sizeClasses} shrink-0 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-115 shadow-[0_4px_16px_rgba(0,0,0,0.6)]`}
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

        {/* 6. HEADLINE & BUTTONS (Framed inside the planetary crescent) */}
        <div
          ref={headerWrapRef}
          className="absolute z-20 left-1/2 -translate-x-1/2 flex flex-col items-center text-center w-full max-w-2xl"
          style={{ top: "155px" }}
        >
          <h2
            className="text-white text-4xl lg:text-[54px] font-light tracking-tight leading-[1.12]"
            style={{ fontFamily: "var(--font-outfit, sans-serif)" }}
          >
            10K+ Crypto Assets <br />
            <span className="font-normal text-white">
              Available To Trade
            </span>
          </h2>
          <p
            className="mt-3 text-sm lg:text-[15px] text-gray-400 font-light max-w-md leading-relaxed"
            style={{ fontFamily: "var(--font-outfit, sans-serif)" }}
          >
            Explore every potential Crypto Assets with AI assistance
          </p>

          {/* Buttons */}
          <div className="mt-5 flex items-center gap-5">
            <button
              type="button"
              className="text-sm text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer font-medium px-2 py-1"
            >
              Learn More
            </button>
            <button
              type="button"
              className="rounded-full px-6 py-2.5 text-sm font-medium text-white flex items-center gap-2 cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_24px_rgba(219,39,119,0.45)]"
              style={{
                background: "linear-gradient(90deg, #7c3aed 0%, #db2777 100%)",
              }}
            >
              <span>Start Trading Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════════════
            7. AI CPU CHIP & 4 METRIC CARDS WITH EXACT S-CURVE NODES
        ══════════════════════════════════════════════════════════════════════ */}
        <div
          className="absolute z-20 left-1/2 -translate-x-1/2 w-full max-w-[1040px]"
          style={{ top: "630px", height: "280px" }}
        >
          {/* Dedicated SVG for the 4 S-curve circuit wires */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-10"
            viewBox="0 0 1040 280"
            preserveAspectRatio="none"
            fill="none"
          >
            <defs>
              <linearGradient id="cleanWireGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
                <stop offset="50%" stopColor="#fdf2f8" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#f472b6" stopOpacity="0.8" />
              </linearGradient>
            </defs>

            {/* Top-Left Wire: Chip (440, 105) -> Card (240, 52) */}
            <path
              ref={wireTLRef}
              d="M 440 105 C 330 105, 340 52, 240 52"
              stroke="url(#cleanWireGrad)"
              strokeWidth="2"
              strokeLinecap="round"
              style={{ filter: "drop-shadow(0 0 3px rgba(255,255,255,0.9)) drop-shadow(0 0 6px rgba(244,114,182,0.6))" }}
            />

            {/* Bottom-Left Wire: Chip (440, 175) -> Card (240, 228) */}
            <path
              ref={wireBLRef}
              d="M 440 175 C 330 175, 340 228, 240 228"
              stroke="url(#cleanWireGrad)"
              strokeWidth="2"
              strokeLinecap="round"
              style={{ filter: "drop-shadow(0 0 3px rgba(255,255,255,0.9)) drop-shadow(0 0 6px rgba(244,114,182,0.6))" }}
            />

            {/* Top-Right Wire: Chip (600, 105) -> Card (800, 52) */}
            <path
              ref={wireTRRef}
              d="M 600 105 C 710 105, 700 52, 800 52"
              stroke="url(#cleanWireGrad)"
              strokeWidth="2"
              strokeLinecap="round"
              style={{ filter: "drop-shadow(0 0 3px rgba(255,255,255,0.9)) drop-shadow(0 0 6px rgba(244,114,182,0.6))" }}
            />

            {/* Bottom-Right Wire: Chip (600, 175) -> Card (800, 228) */}
            <path
              ref={wireBRRef}
              d="M 600 175 C 710 175, 700 228, 800 228"
              stroke="url(#cleanWireGrad)"
              strokeWidth="2"
              strokeLinecap="round"
              style={{ filter: "drop-shadow(0 0 3px rgba(255,255,255,0.9)) drop-shadow(0 0 6px rgba(244,114,182,0.6))" }}
            />
          </svg>

          {/* Central AI CPU Chip (Clean matte black chassis with vibrant coral/pink core) */}
          <div
            ref={chipContainerRef}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
          >
            <div className="relative w-38 h-38 flex items-center justify-center">
              {/* Soft pink-magenta backlight aura */}
              <div
                ref={chipAuraRef}
                className="absolute pointer-events-none"
                style={{
                  width: "200%",
                  height: "200%",
                  background:
                    "radial-gradient(circle, rgba(225,29,72,0.55) 0%, rgba(168,85,247,0.25) 45%, transparent 75%)",
                  filter: "blur(28px)",
                }}
              />

              {/* Matte black outer shell with corner screws */}
              <div className="relative w-full h-full rounded-[24px] bg-[#0c0d14] border border-white/15 p-3.5 flex items-center justify-center shadow-[0_12px_36px_rgba(0,0,0,0.9)]">
                <div className="absolute top-2 left-2 w-1.5 h-1.5 rounded-full bg-pink-400/80" />
                <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-pink-400/80" />
                <div className="absolute bottom-2 left-2 w-1.5 h-1.5 rounded-full bg-pink-400/80" />
                <div className="absolute bottom-2 right-2 w-1.5 h-1.5 rounded-full bg-pink-400/80" />

                {/* Inner Gradient Core */}
                <div
                  ref={chipCoreRef}
                  className="relative w-full h-full rounded-[16px] flex items-center justify-center shadow-inner overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, #ff3b5c 0%, #db2777 50%, #9333ea 100%)",
                  }}
                >
                  <Cpu className="relative z-10 text-white w-12 h-12 stroke-[2] drop-shadow-[0_0_12px_rgba(255,255,255,0.9)]" />
                </div>
              </div>
            </div>
          </div>

          {/* ── CARD 0: Top-Left (50+ Countries) ── */}
          <div
            ref={(el) => { cardRefs.current[0] = el; }}
            className="absolute left-0 top-[16px] z-20 bg-[#0c0d14] border border-white/[0.08] hover:border-pink-500/40 rounded-2xl shadow-[0_12px_30px_rgba(0,0,0,0.85)] flex items-center gap-4 px-5 py-3.5 transition-all duration-300 hover:scale-105"
            style={{ width: "240px", height: "72px" }}
          >
            <div className="shrink-0 w-11 h-11 rounded-xl bg-[#151722] border border-white/[0.06] flex items-center justify-center">
              {metrics[0].icon}
            </div>
            <div>
              <div className="font-bold text-white text-xl leading-tight" style={{ fontFamily: "var(--font-outfit, sans-serif)" }}>
                {metrics[0].value}
              </div>
              <div className="text-xs text-gray-400 font-normal tracking-wide mt-0.5">
                {metrics[0].label}
              </div>
            </div>
          </div>

          {/* ── CARD 1: Bottom-Left (10K+ Crypto Assets) ── */}
          <div
            ref={(el) => { cardRefs.current[1] = el; }}
            className="absolute left-0 top-[192px] z-20 bg-[#0c0d14] border border-white/[0.08] hover:border-pink-500/40 rounded-2xl shadow-[0_12px_30px_rgba(0,0,0,0.85)] flex items-center gap-4 px-5 py-3.5 transition-all duration-300 hover:scale-105"
            style={{ width: "240px", height: "72px" }}
          >
            <div className="shrink-0 w-11 h-11 rounded-xl bg-[#151722] border border-white/[0.06] flex items-center justify-center">
              {metrics[1].icon}
            </div>
            <div>
              <div className="font-bold text-white text-xl leading-tight" style={{ fontFamily: "var(--font-outfit, sans-serif)" }}>
                {metrics[1].value}
              </div>
              <div className="text-xs text-gray-400 font-normal tracking-wide mt-0.5">
                {metrics[1].label}
              </div>
            </div>
          </div>

          {/* ── CARD 2: Top-Right (97,5% Success Rate) ── */}
          <div
            ref={(el) => { cardRefs.current[2] = el; }}
            className="absolute right-0 top-[16px] z-20 bg-[#0c0d14] border border-white/[0.08] hover:border-pink-500/40 rounded-2xl shadow-[0_12px_30px_rgba(0,0,0,0.85)] flex items-center gap-4 px-5 py-3.5 transition-all duration-300 hover:scale-105"
            style={{ width: "240px", height: "72px" }}
          >
            <div className="shrink-0 w-11 h-11 rounded-xl bg-[#151722] border border-white/[0.06] flex items-center justify-center">
              {metrics[2].icon}
            </div>
            <div>
              <div className="font-bold text-white text-xl leading-tight" style={{ fontFamily: "var(--font-outfit, sans-serif)" }}>
                {metrics[2].value}
              </div>
              <div className="text-xs text-gray-400 font-normal tracking-wide mt-0.5">
                {metrics[2].label}
              </div>
            </div>
          </div>

          {/* ── CARD 3: Bottom-Right (10,000+ Daily Traders) ── */}
          <div
            ref={(el) => { cardRefs.current[3] = el; }}
            className="absolute right-0 top-[192px] z-20 bg-[#0c0d14] border border-white/[0.08] hover:border-pink-500/40 rounded-2xl shadow-[0_12px_30px_rgba(0,0,0,0.85)] flex items-center gap-4 px-5 py-3.5 transition-all duration-300 hover:scale-105"
            style={{ width: "240px", height: "72px" }}
          >
            <div className="shrink-0 w-11 h-11 rounded-xl bg-[#151722] border border-white/[0.06] flex items-center justify-center">
              {metrics[3].icon}
            </div>
            <div>
              <div className="font-bold text-white text-xl leading-tight" style={{ fontFamily: "var(--font-outfit, sans-serif)" }}>
                {metrics[3].value}
              </div>
              <div className="text-xs text-gray-400 font-normal tracking-wide mt-0.5">
                {metrics[3].label}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          MOBILE VIEW (< 768px)
      ══════════════════════════════════════════════════════════════════════ */}
      <div className="md:hidden flex flex-col items-center px-4 py-8">
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

        {/* Mobile Chip */}
        <div className="relative z-10 w-24 h-24 rounded-2xl bg-[#0c0d14] border border-white/20 p-2.5 flex items-center justify-center shadow-[0_0_30px_rgba(219,39,119,0.4)] mt-8">
          <div
            className="w-full h-full rounded-xl flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #ff3b5c 0%, #db2777 50%, #9333ea 100%)" }}
          >
            <Cpu className="w-8 h-8 text-white stroke-[1.8]" />
          </div>
        </div>

        {/* 2x2 Metric Cards Grid for Mobile */}
        <div className="grid grid-cols-2 gap-3 w-full max-w-[340px] mt-6">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="bg-[#0c0d14] border border-white/[0.08] rounded-xl p-3 flex items-center gap-2.5 shadow-[0_8px_20px_rgba(0,0,0,0.8)]"
            >
              <div className="w-8 h-8 shrink-0 rounded-lg bg-[#151722] border border-white/[0.06] flex items-center justify-center">
                {m.icon}
              </div>
              <div>
                <div className="text-base font-bold text-white tracking-tight" style={{ fontFamily: "var(--font-outfit, sans-serif)" }}>
                  {m.value}
                </div>
                <div className="text-[10px] text-gray-400 font-normal">{m.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}