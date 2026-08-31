"use client";

import React, { useRef, useEffect } from "react";
import { Globe, Check, Users, Database, Cpu } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TokenOrbitBar from "./TokenOrbitBar";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const metrics = [
  { icon: <Globe className="w-5 h-5 text-white" />, value: "50+", label: "Countries" },
  { icon: <Database className="w-5 h-5 text-white" />, value: "10K+", label: "Crypto Assets" },
  { icon: <Check className="w-5 h-5 text-white stroke-[2.8]" />, value: "97,5%", label: "Success Rate" },
  { icon: <Users className="w-5 h-5 text-white" />, value: "10,000+", label: "Daily Traders" },
];

export default function AIProcessingHub() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stageMotionRef = useRef<HTMLDivElement>(null);

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
  // GSAP SCROLL PINNING & SYNCHRONIZED CAMERA TRACKING SCRUB
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
      // Stage motion starts at y: +270px (bringing Token Orbit Arch + Headline to exact viewport middle)
      if (stageMotionRef.current) {
        gsap.set(stageMotionRef.current, { y: 270 });
      }

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

      // Keep center flares completely invisible while curves travel from edges
      gsap.set(centerFlareRef.current, { opacity: 0, scale: 0.2 });
      gsap.set(centerAuroraBloomRef.current, { opacity: 0, scale: 0.5 });
      gsap.set(waterfallPillarRef.current, { opacity: 0, scaleY: 0, transformOrigin: "50% 0%" });

      // Chip initial dormant state (hidden before waterfall beam arrives)
      gsap.set(chipContainerRef.current, { opacity: 0, scale: 0.7, y: 25 });
      gsap.set(chipAuraRef.current, { opacity: 0, scale: 0.3 });
      gsap.set(chipCoreRef.current, { opacity: 0.2, filter: "brightness(0.3) saturate(0.2)" });

      // Cards initial state (hidden before circuit wire activation)
      cardRefs.current.forEach((card) => {
        if (!card) return;
        gsap.set(card, { opacity: 0, y: 25, scale: 0.92, filter: "brightness(0.4)" });
      });

      // 3. Main Pinning Scroll Timeline
      const masterTL = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=2600",
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          scrub: 1,
        },
      });

      // ── STAGE 1: Left AND Right Curves Sweep Inward to Center (0.00 -> 0.35) ──
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

      // ── STAGE 2: Curves Collide in Center Flare & Waterfall Laser Shoots Down (0.30 -> 0.65) ──
      masterTL.to(
        centerFlareRef.current,
        { opacity: 1, scale: 1, duration: 0.12, ease: "power2.out" },
        0.30
      );
      masterTL.to(
        centerAuroraBloomRef.current,
        { opacity: 1, scale: 1, duration: 0.22, ease: "power1.out" },
        0.32
      );
      masterTL.to(
        waterfallPillarRef.current,
        { opacity: 1, scaleY: 1, duration: 0.25, ease: "power2.inOut" },
        0.32
      );
      if (waterfallLaserRef.current) {
        masterTL.to(
          waterfallLaserRef.current,
          { strokeDashoffset: 0, duration: 0.25, ease: "power2.inOut" },
          0.32
        );
      }

      // ── STAGE 3: SYNCHRONIZED CAMERA TRACKING: STAGE GLIDES UPWARD (y: 270px -> 0px) (0.28 -> 0.65) ──
      // Top content glides from middle to top margin, while CPU chip & cards rise into the lower/middle half of screen
      if (stageMotionRef.current) {
        masterTL.to(
          stageMotionRef.current,
          { y: 0, duration: 0.37, ease: "power1.inOut" },
          0.28
        );
      }

      // ── STAGE 4: Downward Flow Reaches CPU Chip In Center -> Chip Materializes & Halo Ignites (0.55 -> 0.75) ──
      masterTL.to(
        chipContainerRef.current,
        { opacity: 1, scale: 1, y: 0, duration: 0.18, ease: "back.out(1.2)" },
        0.55
      );
      masterTL.to(
        chipCoreRef.current,
        { opacity: 1, filter: "brightness(1.2) saturate(1.2)", duration: 0.18, ease: "power2.out" },
        0.55
      );
      masterTL.to(
        chipAuraRef.current,
        { opacity: 1, scale: 1.35, duration: 0.22, ease: "power2.out" },
        0.55
      );

      // ── STAGE 5: 4 Wires Shoot Horizontally into the 4 Metric Cards (0.68 -> 0.88) ──
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

      // ── STAGE 6: Full-Screen Locked Freeze Before Seamless Unpin (0.88 -> 1.00) ──
      masterTL.to({}, { duration: 0.12 }, 0.88);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#000000] text-white overflow-hidden select-none h-screen flex flex-col justify-center items-center"
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
          UNIFIED DESKTOP STAGE WITH DYNAMIC CAMERA / UPWARD MOTION
      ══════════════════════════════════════════════════════════════════════ */}
      <div
        ref={stageMotionRef}
        className="relative w-full hidden md:block transition-transform will-change-transform"
        style={{ height: "980px", maxWidth: "1600px" }}
      >
        {/* 1. ATMOSPHERIC PINK-PURPLE AURA BENEATH CRESCENT */}
        <div
          ref={centerAuroraBloomRef}
          className="absolute inset-x-0 pointer-events-none z-[2]"
          style={{
            top: "500px",
            height: "480px",
            background:
              "radial-gradient(ellipse 65% 100% at 50% 0%, rgba(219,39,119,0.38) 0%, rgba(168,85,247,0.2) 45%, transparent 85%)",
            filter: "blur(35px)",
          }}
        />

        {/* 2. WHITE-HOT HORIZONTAL FLARE BENEATH THE CTA BUTTON */}
        <div
          ref={centerFlareRef}
          className="absolute pointer-events-none z-[8]"
          style={{
            left: "50%",
            top: "480px",
            width: "500px",
            height: "140px",
            transform: "translateX(-50%)",
            background:
              "radial-gradient(ellipse 70% 90% at 50% 0%, #ffffff 0%, rgba(255,255,255,0.95) 25%, rgba(244,114,182,0.8) 50%, rgba(219,39,119,0.4) 75%, transparent 100%)",
            filter: "blur(14px)",
          }}
        />

        {/* 3. VERTICAL LIGHT WATERFALL PILLAR */}
        <div
          ref={waterfallPillarRef}
          className="absolute pointer-events-none z-[6]"
          style={{
            left: "50%",
            top: "480px",
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
          viewBox="0 0 1600 980"
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

            {/* Strict Downward Clip */}
            <clipPath id="crescentDownwardClip">
              <path d="M 0 170 C 400 420, 600 480, 800 480 C 1000 480, 1200 420, 1600 170 L 1600 980 L 0 980 Z" />
            </clipPath>
          </defs>

          {/* ── GLOW CONTAINER CLIPPED STRICTLY DOWNWARDS ── */}
          <g clipPath="url(#crescentDownwardClip)">
            {/* ── LEFT CRESCENT (Deep downward radiant curtain) ── */}
            <path
              ref={crescentLeftGlowRef}
              d="M 0 170 C 400 420, 600 480, 800 480"
              stroke="rgba(219,39,119,0.32)"
              strokeWidth="280"
              strokeLinecap="butt"
              style={{ filter: "blur(54px)" }}
            />
            <path
              ref={crescentLeftBaseRef}
              d="M 0 170 C 400 420, 600 480, 800 480"
              stroke="rgba(236,72,153,0.55)"
              strokeWidth="150"
              strokeLinecap="butt"
              style={{ filter: "blur(28px)" }}
            />
            <path
              ref={crescentLeftLaserRef}
              d="M 0 170 C 400 420, 600 480, 800 480"
              stroke="url(#sharpCrescentGradLeft)"
              strokeWidth="38"
              strokeLinecap="butt"
              style={{ filter: "blur(10px) drop-shadow(0 0 20px rgba(244,114,182,0.95))" }}
            />

            {/* ── RIGHT CRESCENT (Deep downward radiant curtain) ── */}
            <path
              ref={crescentRightGlowRef}
              d="M 1600 170 C 1200 420, 1000 480, 800 480"
              stroke="rgba(219,39,119,0.32)"
              strokeWidth="280"
              strokeLinecap="butt"
              style={{ filter: "blur(54px)" }}
            />
            <path
              ref={crescentRightBaseRef}
              d="M 1600 170 C 1200 420, 1000 480, 800 480"
              stroke="rgba(236,72,153,0.55)"
              strokeWidth="150"
              strokeLinecap="butt"
              style={{ filter: "blur(28px)" }}
            />
            <path
              ref={crescentRightLaserRef}
              d="M 1600 170 C 1200 420, 1000 480, 800 480"
              stroke="url(#sharpCrescentGradRight)"
              strokeWidth="38"
              strokeLinecap="butt"
              style={{ filter: "blur(10px) drop-shadow(0 0 20px rgba(244,114,182,0.95))" }}
            />
          </g>

          {/* Downward Waterfall Core Laser */}
          <path
            ref={waterfallLaserRef}
            d="M 800 480 L 800 705"
            stroke="url(#sharpWaterfallGrad)"
            strokeWidth="32"
            strokeLinecap="round"
            style={{ filter: "blur(8px) drop-shadow(0 0 20px rgba(255,255,255,0.85)) drop-shadow(0 0 36px rgba(236,72,153,0.95))" }}
          />
        </svg>

        {/* 5. MODULAR TOKEN ORBIT BAR */}
        <div className="relative z-20">
          <TokenOrbitBar />
        </div>

        {/* ══════════════════════════════════════════════════════════════════════
            6. AI CPU CHIP & 4 METRIC CARDS WITH EXACT S-CURVE NODES
        ══════════════════════════════════════════════════════════════════════ */}
        <div
          className="absolute z-20 left-1/2 -translate-x-1/2 w-full max-w-[1040px]"
          style={{ top: "670px", height: "280px" }}
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

          {/* Central AI CPU Chip */}
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
        <TokenOrbitBar />

        <div className="relative z-10 w-24 h-24 rounded-2xl bg-[#0c0d14] border border-white/20 p-2.5 flex items-center justify-center shadow-[0_0_30px_rgba(219,39,119,0.4)] mt-8">
          <div
            className="w-full h-full rounded-xl flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #ff3b5c 0%, #db2777 50%, #9333ea 100%)" }}
          >
            <Cpu className="w-8 h-8 text-white stroke-[1.8]" />
          </div>
        </div>
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