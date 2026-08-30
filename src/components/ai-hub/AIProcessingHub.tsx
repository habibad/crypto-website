"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Rocket, ArrowRight, Globe, Check, Users, Database, Cpu } from "lucide-react";

// ─── Token Definition ────────────────────────────────────────────────────────
interface Token {
  symbol: string;
  bgColor: string;
  textColor: string;
  size: "sm" | "md" | "lg";
  icon: React.ReactNode;
  glow: string;
}

export default function AIProcessingHub() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.15 });

  // Left Tokens
  const leftTokens: Token[] = [
    {
      symbol: "ETH",
      bgColor: "rgba(24, 32, 74, 0.95)",
      textColor: "#8da4f7",
      size: "sm",
      glow: "#627EEA",
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="#8da4f7">
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
      icon: <span className="font-bold text-xl sm:text-2xl leading-none">₿</span>,
    },
    {
      symbol: "XRP",
      bgColor: "#11111a",
      textColor: "#fff",
      size: "md",
      glow: "#888",
      icon: (
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fff"
          strokeWidth="2.4"
        >
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
      icon: (
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#fbbf24] flex items-center justify-center text-2xl sm:text-3xl shadow-inner">
          🐕
        </div>
      ),
    },
    {
      symbol: "LINK",
      bgColor: "#2563eb",
      textColor: "#ffffff",
      size: "lg",
      glow: "#375BD2",
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 32 32" fill="#ffffff">
          <path d="M16 3l-4 2.3V12L8 9.7 4 12v8l4 2.3 4-2.3v6.7l4 2.3 4-2.3v-6.7l4 2.3 4-2.3v-8l-4-2.3L24 9.7V5.3z" />
        </svg>
      ),
    },
  ];

  // Right Tokens
  const rightTokens: Token[] = [
    {
      symbol: "USDT",
      bgColor: "#26A17B",
      textColor: "#fff",
      size: "lg",
      glow: "#26A17B",
      icon: <span className="font-bold text-3xl sm:text-4xl leading-none">₮</span>,
    },
    {
      symbol: "LUNA",
      bgColor: "#0c1326",
      textColor: "#facc15",
      size: "lg",
      glow: "#FFD700",
      icon: (
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#0a0f1d] border border-white/10 flex items-center justify-center text-2xl sm:text-3xl">
          🌙
        </div>
      ),
    },
    {
      symbol: "BNB",
      bgColor: "#F3BA2F",
      textColor: "#000",
      size: "md",
      glow: "#F3BA2F",
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="#000">
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
        <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"
            fill="#c084fc"
          />
        </svg>
      ),
    },
    {
      symbol: "HBAR",
      bgColor: "#111116",
      textColor: "#aaa",
      size: "sm",
      glow: "#444",
      icon: (
        <span className="font-mono font-bold text-sm sm:text-base text-[#aaa]">Ħ</span>
      ),
    },
  ];

  const leftYOffsets = [68, 44, 24, 10, 4];
  const rightYOffsets = [4, 10, 24, 44, 68];

  const dimFor = (s: "sm" | "md" | "lg") =>
    s === "sm"
      ? "w-11 h-11 sm:w-14 sm:h-14"
      : s === "lg"
        ? "w-[4.2rem] h-[4.2rem] sm:w-[4.8rem] sm:h-[4.8rem]"
        : "w-14 h-14 sm:w-16 sm:h-16";

  return (
    <div ref={containerRef} className="relative w-full bg-[#000000] text-white">
      {/* ── BACKGROUND: Ambient Stars ── */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {[
          { t: "4%", l: "6%", r: 1.5, o: 0.7 },
          { t: "2%", l: "22%", r: 1, o: 0.5 },
          { t: "8%", l: "36%", r: 1.5, o: 0.4 },
          { t: "3%", l: "68%", r: 1.5, o: 0.6 },
          { t: "6%", l: "82%", r: 1, o: 0.5 },
          { t: "12%", l: "94%", r: 1.5, o: 0.7 },
          { t: "28%", l: "8%", r: 1, o: 0.4 },
          { t: "34%", l: "92%", r: 1.5, o: 0.5 },
          { t: "55%", l: "12%", r: 1.5, o: 0.4 },
          { t: "62%", l: "88%", r: 1.2, o: 0.5 },
          { t: "78%", l: "15%", r: 1, o: 0.4 },
          { t: "85%", l: "85%", r: 1.5, o: 0.4 },
        ].map((s, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              top: s.t,
              left: s.l,
              width: s.r,
              height: s.r,
              opacity: s.o,
            }}
          />
        ))}
      </div>

      {/* ════════════════════════════════════════════════════════
          PART 1: HERO TOKEN ORBIT + HEADLINE & BUTTONS
      ════════════════════════════════════════════════════════ */}
      <section className="relative z-10 w-full overflow-hidden pt-16 pb-0">
        <div className="relative w-full max-w-[1400px] mx-auto px-6 flex items-center justify-center">

          {/* Left tokens */}
          <div className="flex items-center gap-3 sm:gap-4.5 flex-1 justify-end pr-3 sm:pr-6">
            {leftTokens.map((tk, idx) => {
              const delay = 0.4 + (leftTokens.length - 1 - idx) * 0.07;
              const yOffset = leftYOffsets[idx];
              return (
                <motion.div
                  key={tk.symbol}
                  initial={{ opacity: 0, scale: 0.2, y: yOffset + 35, x: 40 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1, y: yOffset, x: 0 }
                      : { opacity: 0, scale: 0.2, y: yOffset + 35, x: 40 }
                  }
                  transition={{
                    duration: 0.7,
                    delay: delay,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="cursor-pointer transition-transform duration-300 hover:scale-115"
                >
                  <div
                    className={`${dimFor(tk.size)} rounded-full border border-white/12 flex items-center justify-center overflow-hidden`}
                    style={{
                      backgroundColor: tk.bgColor,
                      boxShadow: `0 0 24px ${tk.glow}45, 0 6px 20px rgba(0,0,0,0.85)`,
                    }}
                  >
                    <span style={{ color: tk.textColor }}>{tk.icon}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Center Rocket Hub */}
          <div className="relative flex-shrink-0 flex flex-col items-center z-30">
            <motion.div
              initial={{ opacity: 0, scale: 0.4 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.4 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex items-center justify-center"
              style={{ width: 176, height: 176 }}
            >
              {/* Rotating Orbital Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 8,
                  ease: "linear",
                }}
                className="absolute inset-0 rounded-full border border-pink-500/25"
                style={{
                  boxShadow: "0 0 30px rgba(219, 39, 119, 0.25)",
                }}
              >
                <div
                  className="absolute w-3.5 h-3.5 rounded-full bg-[#f472b6]"
                  style={{
                    top: 8,
                    right: 24,
                    boxShadow: "0 0 14px #f472b6, 0 0 28px rgba(244, 114, 182, 0.8)",
                  }}
                />
                <div
                  className="absolute w-3.5 h-3.5 rounded-full bg-[#c084fc]"
                  style={{
                    bottom: 8,
                    left: 24,
                    boxShadow: "0 0 14px #c084fc, 0 0 28px rgba(192, 132, 252, 0.8)",
                  }}
                />
              </motion.div>

              {/* Core Circle */}
              <motion.div
                initial={{ opacity: 0, scale: 0, rotate: -30 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1, rotate: 0 }
                    : { opacity: 0, scale: 0, rotate: -30 }
                }
                transition={{
                  duration: 0.7,
                  delay: 0.25,
                  type: "spring",
                  stiffness: 220,
                  damping: 18,
                }}
                className="w-[130px] h-[130px] rounded-full bg-[#120e20] border border-white/18 flex items-center justify-center relative overflow-hidden"
                style={{
                  boxShadow:
                    "0 0 50px rgba(219,39,119,0.45), 0 0 100px rgba(219,39,119,0.25), inset 0 0 24px rgba(0,0,0,0.7)",
                }}
              >
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 130 130">
                  <path
                    d="M 22 82 A 46 46 0 0 1 108 82"
                    fill="none"
                    stroke="url(#rocketSpeedometerArc)"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="rocketSpeedometerArc" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#7928CA" />
                      <stop offset="50%" stopColor="#db2777" />
                      <stop offset="100%" stopColor="#f472b6" />
                    </linearGradient>
                  </defs>
                </svg>
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                >
                  <Rocket className="relative z-10 w-10 h-10 text-white stroke-[2.2] drop-shadow-[0_0_16px_rgba(255,255,255,1)]" />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right tokens */}
          <div className="flex items-center gap-3 sm:gap-4.5 flex-1 justify-start pl-3 sm:pl-6">
            {rightTokens.map((tk, idx) => {
              const delay = 0.4 + idx * 0.07;
              const yOffset = rightYOffsets[idx];
              return (
                <motion.div
                  key={tk.symbol}
                  initial={{ opacity: 0, scale: 0.2, y: yOffset + 35, x: -40 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1, y: yOffset, x: 0 }
                      : { opacity: 0, scale: 0.2, y: yOffset + 35, x: -40 }
                  }
                  transition={{
                    duration: 0.7,
                    delay: delay,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="cursor-pointer transition-transform duration-300 hover:scale-115"
                >
                  <div
                    className={`${dimFor(tk.size)} rounded-full border border-white/12 flex items-center justify-center overflow-hidden`}
                    style={{
                      backgroundColor: tk.bgColor,
                      boxShadow: `0 0 24px ${tk.glow}45, 0 6px 20px rgba(0,0,0,0.85)`,
                    }}
                  >
                    <span style={{ color: tk.textColor }}>{tk.icon}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* Headline + Subtitle + CTA */}
        <div className="relative z-10 w-full flex flex-col items-center text-center px-4 pt-12 pb-0">
          <motion.h2
            initial={{ opacity: 0, y: 35, filter: "blur(8px)" }}
            animate={
              isInView
                ? { opacity: 1, y: 0, filter: "blur(0px)" }
                : { opacity: 0, y: 35, filter: "blur(8px)" }
            }
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl md:text-[4.2rem] lg:text-[4.75rem] text-white leading-[1.12]"
            style={{
              fontFamily: "var(--font-outfit, sans-serif)",
              fontWeight: 300,
              letterSpacing: "-0.02em",
            }}
          >
            10K+ Crypto Assets <br />
            <span style={{ fontWeight: 400 }}>Available To Trade</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
            transition={{ duration: 0.7, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 text-[15px] sm:text-[17px] md:text-[18px] text-[#9ca3af] max-w-xl leading-relaxed"
            style={{
              fontFamily: "var(--font-outfit, sans-serif)",
              fontWeight: 300,
            }}
          >
            Explore every potential Crypto Assets with AI assistance
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.7, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex items-center gap-7"
          >
            <button
              type="button"
              className="text-[14.5px] sm:text-[15.5px] text-[#9ca3af] hover:text-white transition-colors cursor-pointer"
              style={{ fontFamily: "var(--font-outfit, sans-serif)" }}
            >
              Learn More
            </button>
            <button
              type="button"
              className="px-7 py-3 rounded-full text-[14.5px] sm:text-[15.5px] font-medium text-white flex items-center gap-2.5 cursor-pointer transition-all hover:scale-105 active:scale-95"
              style={{
                background: "linear-gradient(90deg, #7c3aed 0%, #db2777 100%)",
                boxShadow: "0 0 28px rgba(219,39,119,0.5), 0 0 56px rgba(219,39,119,0.25)",
                fontFamily: "var(--font-outfit, sans-serif)",
              }}
            >
              <span>Start Trading Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          PART 2: ANIMATED CONVERGING CURVE LIGHTING + LIGHT WATERFALL
          - Left and Right white/pink light streams converge to center
          - Collide with upward smoke surge + downward funnel to the chip
      ════════════════════════════════════════════════════════ */}
      <div className="relative w-full overflow-hidden" style={{ height: 340, marginTop: -90 }}>
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 1440 340"
          preserveAspectRatio="none"
          fill="none"
        >
          <defs>
            {/* 1. Base Ambient Pink Atmosphere along the curve */}
            <linearGradient id="basePinkAtmosphere" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgb(219, 39, 119)" stopOpacity="0.85" />
              <stop offset="22%" stopColor="#f472b6" stopOpacity="0.7" />
              <stop offset="42%" stopColor="#fbcfe8" stopOpacity="0.35" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0.2" />
              <stop offset="58%" stopColor="#fbcfe8" stopOpacity="0.35" />
              <stop offset="78%" stopColor="#f472b6" stopOpacity="0.7" />
              <stop offset="100%" stopColor="rgb(219, 39, 119)" stopOpacity="0.85" />
            </linearGradient>

            {/* 2. White-Hot Center Flare Burst */}
            <radialGradient id="centerBurstGlow" cx="50%" cy="75%" r="50%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="25%" stopColor="#fdf2f8" stopOpacity="0.95" />
              <stop offset="55%" stopColor="#f472b6" stopOpacity="0.65" />
              <stop offset="85%" stopColor="rgb(219, 39, 119)" stopOpacity="0.25" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </radialGradient>

            {/* 3. Downward Light Funnel to Chip */}
            <linearGradient id="downwardChipBeam" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="25%" stopColor="#fdf2f8" stopOpacity="0.9" />
              <stop offset="65%" stopColor="#f472b6" stopOpacity="0.75" />
              <stop offset="100%" stopColor="rgb(219, 39, 119)" stopOpacity="0.15" />
            </linearGradient>

            {/* Gaussian Blur Filters */}
            <filter id="atmosphericFogBlur" x="-30%" y="-50%" width="160%" height="200%">
              <feGaussianBlur stdDeviation="35" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="sharpLaserBlur" x="-10%" y="-40%" width="120%" height="180%">
              <feGaussianBlur stdDeviation="4" result="glow" />
              <feMerge>
                <feMergeNode in="glow" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Background Vertical Matrix Lines */}
          {[160, 320, 480, 640, 800, 960, 1120, 1280].map((x) => (
            <line
              key={x}
              x1={x}
              y1="160"
              x2={x}
              y2="340"
              stroke="rgba(255, 255, 255, 0.04)"
              strokeWidth="1"
            />
          ))}

          {/* Under-Curve Gradient Fill */}
          <path
            d="M 0 0 C 380 250, 1060 250, 1440 0 L 1440 340 L 0 340 Z"
            fill="url(#basePinkAtmosphere)"
            opacity="0.85"
            filter="url(#atmosphericFogBlur)"
          />

          {/* Center Light Flare */}
          <motion.ellipse
            cx="720"
            cy="240"
            rx="360"
            ry="85"
            fill="url(#centerBurstGlow)"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.9, delay: 0.95, ease: [0.16, 1, 0.3, 1] }}
            filter="url(#atmosphericFogBlur)"
          />

          {/* Downward Light Waterfall funnel pouring towards the Chip */}
          <motion.polygon
            points="640,235 800,235 770,340 670,340"
            fill="url(#downwardChipBeam)"
            initial={{ opacity: 0, scaleY: 0 }}
            animate={isInView ? { opacity: 0.95, scaleY: 1 } : { opacity: 0, scaleY: 0 }}
            transition={{ duration: 0.9, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
            filter="url(#atmosphericFogBlur)"
          />

          {/* Core White Laser Line along the curve */}
          <path
            d="M 0 0 C 380 250, 1060 250, 1440 0"
            stroke="#ffffff"
            strokeWidth="2.8"
            strokeOpacity="0.95"
            filter="url(#sharpLaserBlur)"
          />
        </svg>
      </div>

      {/* ════════════════════════════════════════════════════════
          PART 3: CENTRAL AI PROCESSOR CHIP + CIRCUIT WIRES + 4 METRIC CARDS
          - Symmetrical curved circuit wires connecting to:
            Left: [50+ Countries], [10K+ Crypto Assets]
            Right: [97,5% Success Rate], [10,000+ Daily Traders]
      ════════════════════════════════════════════════════════ */}
      <section className="relative z-10 w-full max-w-[1360px] mx-auto px-6 pt-2 pb-32">
        {/* Subtle background matrix lines */}
        <div className="absolute inset-0 pointer-events-none flex justify-center gap-28 opacity-20">
          {[-450, -300, -150, 0, 150, 300, 450].map((offset) => (
            <div
              key={offset}
              className="h-full w-[1px] bg-gradient-to-b from-pink-500/30 via-white/10 to-transparent"
              style={{ transform: `translateX(${offset}px)` }}
            />
          ))}
        </div>

        {/* Diagram Layout */}
        <div className="relative w-full flex items-center justify-between min-h-[380px]">

          {/* ── LEFT 2 METRIC CARDS ── */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
            transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-12 z-20 w-[240px] sm:w-[270px]"
          >
            {/* Top Left: 50+ Countries */}
            <div className="relative group bg-[#0e1017]/95 hover:bg-[#131722] backdrop-blur-xl border border-white/10 hover:border-pink-500/50 rounded-2xl p-5 shadow-[0_12px_40px_rgba(0,0,0,0.85)] transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#161a26] border border-white/10 flex items-center justify-center text-white">
                  <Globe className="w-6 h-6 text-pink-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white tracking-tight" style={{ fontFamily: "var(--font-outfit, sans-serif)" }}>
                    50+
                  </div>
                  <div className="text-xs text-[#9ca3af] font-medium tracking-wide">
                    Countries
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Left: 10K+ Crypto Assets */}
            <div className="relative group bg-[#0e1017]/95 hover:bg-[#131722] backdrop-blur-xl border border-white/10 hover:border-pink-500/50 rounded-2xl p-5 shadow-[0_12px_40px_rgba(0,0,0,0.85)] transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#161a26] border border-white/10 flex items-center justify-center text-white">
                  <Database className="w-6 h-6 text-pink-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white tracking-tight" style={{ fontFamily: "var(--font-outfit, sans-serif)" }}>
                    10K+
                  </div>
                  <div className="text-xs text-[#9ca3af] font-medium tracking-wide">
                    Crypto Assets
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── CENTER AI PROCESSOR CHIP WITH CONNECTING CIRCUIT WIRES ── */}
          <div className="relative flex-1 flex items-center justify-center px-4">

            {/* Responsive SVG Connecting Circuit Wires */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 600 380"
              preserveAspectRatio="none"
              fill="none"
            >
              <defs>
                <linearGradient id="neonCircuitWireGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                  <stop offset="40%" stopColor="#f472b6" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="rgb(219, 39, 119)" stopOpacity="0.95" />
                </linearGradient>

                <filter id="circuitWireGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3.5" result="glow" />
                  <feMerge>
                    <feMergeNode in="glow" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Wire 1: Chip to Top Left Card */}
              <motion.path
                d="M 215 150 C 135 150, 75 75, 0 75"
                stroke="url(#neonCircuitWireGrad)"
                strokeWidth="2.4"
                filter="url(#circuitWireGlow)"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 1.1, delay: 1.3, ease: "easeInOut" }}
              />

              {/* Wire 2: Chip to Bottom Left Card */}
              <motion.path
                d="M 215 230 C 135 230, 75 305, 0 305"
                stroke="url(#neonCircuitWireGrad)"
                strokeWidth="2.4"
                filter="url(#circuitWireGlow)"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 1.1, delay: 1.3, ease: "easeInOut" }}
              />

              {/* Wire 3: Chip to Top Right Card */}
              <motion.path
                d="M 385 150 C 465 150, 525 75, 600 75"
                stroke="url(#neonCircuitWireGrad)"
                strokeWidth="2.4"
                filter="url(#circuitWireGlow)"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 1.1, delay: 1.3, ease: "easeInOut" }}
              />

              {/* Wire 4: Chip to Bottom Right Card */}
              <motion.path
                d="M 385 230 C 465 230, 525 305, 600 305"
                stroke="url(#neonCircuitWireGrad)"
                strokeWidth="2.4"
                filter="url(#circuitWireGlow)"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 1.1, delay: 1.3, ease: "easeInOut" }}
              />
            </svg>

            {/* The Central Chip Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.8, delay: 1.0, type: "spring", stiffness: 200, damping: 18 }}
              className="relative z-30 flex items-center justify-center"
            >
              {/* Outer Deep Radiant Magenta Backlight Ambient Aura */}
              <div
                className="absolute w-[260px] h-[260px] rounded-3xl pointer-events-none"
                style={{
                  background: "radial-gradient(circle, rgba(219,39,119,0.7) 0%, rgba(219,39,119,0.2) 50%, transparent 75%)",
                  filter: "blur(28px)",
                }}
              />

              {/* Black Outer Casing with Rounded Corners & Subtle Screws/Pins */}
              <div className="relative w-[190px] h-[190px] sm:w-[210px] sm:h-[210px] rounded-[34px] bg-[#090b10] border-2 border-white/20 p-4 flex items-center justify-center shadow-[0_0_60px_rgba(219,39,119,0.55),inset_0_0_20px_rgba(0,0,0,0.9)]">
                {/* 4 Corner Hardware Alignment Marks */}
                <div className="absolute top-3 left-3 w-1.5 h-1.5 rounded-full bg-white/40" />
                <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-white/40" />
                <div className="absolute bottom-3 left-3 w-1.5 h-1.5 rounded-full bg-white/40" />
                <div className="absolute bottom-3 right-3 w-1.5 h-1.5 rounded-full bg-white/40" />

                {/* Inner Glowing Gradient Core with Chip Icon */}
                <div
                  className="relative w-full h-full rounded-[24px] flex items-center justify-center shadow-inner overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, #ef4444 0%, #db2777 50%, #9333ea 100%)",
                  }}
                >
                  {/* Inner Circuit Grid Pattern */}
                  <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:12px_12px]" />

                  {/* CPU / AI Chip Icon */}
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                    className="relative z-10 text-white"
                  >
                    <Cpu className="w-18 h-18 sm:w-22 sm:h-22 stroke-[1.8] drop-shadow-[0_0_18px_rgba(255,255,255,0.95)]" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ── RIGHT 2 METRIC CARDS ── */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
            transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-12 z-20 w-[240px] sm:w-[270px]"
          >
            {/* Top Right: 97.5% Success Rate */}
            <div className="relative group bg-[#0e1017]/95 hover:bg-[#131722] backdrop-blur-xl border border-white/10 hover:border-pink-500/50 rounded-2xl p-5 shadow-[0_12px_40px_rgba(0,0,0,0.85)] transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#161a26] border border-white/10 flex items-center justify-center text-white">
                  <Check className="w-6 h-6 text-pink-400 stroke-[2.5]" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white tracking-tight" style={{ fontFamily: "var(--font-outfit, sans-serif)" }}>
                    97,5%
                  </div>
                  <div className="text-xs text-[#9ca3af] font-medium tracking-wide">
                    Success Rate
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Right: 10,000+ Daily Traders */}
            <div className="relative group bg-[#0e1017]/95 hover:bg-[#131722] backdrop-blur-xl border border-white/10 hover:border-pink-500/50 rounded-2xl p-5 shadow-[0_12px_40px_rgba(0,0,0,0.85)] transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#161a26] border border-white/10 flex items-center justify-center text-white">
                  <Users className="w-6 h-6 text-pink-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white tracking-tight" style={{ fontFamily: "var(--font-outfit, sans-serif)" }}>
                    10,000+
                  </div>
                  <div className="text-xs text-[#9ca3af] font-medium tracking-wide">
                    Daily Traders
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
