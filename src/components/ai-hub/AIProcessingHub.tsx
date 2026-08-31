"use client";

import React, { useRef, useLayoutEffect } from "react";
import { ArrowRight, Globe, Check, Users, Database, Cpu, Rocket } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// ══════════════════════════════════════════════════════════════════════════
// All positions below are derived directly from the reference screenshot
// (939 × 933 reference frame). The composition is built as ONE aspect-ratio
// locked box; every element is positioned as a percentage of that box, so
// the end-of-scroll state always reproduces the reference 1:1 regardless of
// viewport width, and the curve / energy / wires (drawn in a single SVG
// sharing the same 939×933 coordinate space) line up exactly with the HTML
// chip and card elements.
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
    icon: (
      <div className="w-[80%] h-[80%] rounded-full bg-[#fbbf24] flex items-center justify-center text-2xl shadow-inner">
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
    icon: (
      <div className="w-[80%] h-[80%] rounded-full bg-[#0a0f1d] border border-white/10 flex items-center justify-center text-2xl">
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
    icon: <span className="font-mono font-bold text-[#aaa]" style={{ fontSize: "38%" }}>Ħ</span>,
  },
];

const metrics: Metric[] = [
  { icon: <Globe className="w-[45%] h-[45%] text-pink-400" />, value: "50+", label: "Countries" },
  { icon: <Database className="w-[45%] h-[45%] text-pink-400" />, value: "10K+", label: "Crypto Assets" },
  { icon: <Check className="w-[45%] h-[45%] text-pink-400 stroke-[2.5]" />, value: "97,5%", label: "Success Rate" },
  { icon: <Users className="w-[45%] h-[45%] text-pink-400" />, value: "10,000+", label: "Daily Traders" },
];

const dimFor = (s: "sm" | "md" | "lg") =>
  s === "sm" ? "w-[9%]" : s === "lg" ? "w-[13%]" : "w-[10.5%]";

function MetricCard({
  metric,
  cardRef,
}: {
  metric: Metric;
  cardRef: (el: HTMLDivElement | null) => void;
}) {
  return (
    <div
      ref={cardRef}
      className="absolute bg-[#0e1017]/95 border border-white/10 rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.85)] flex items-center gap-[10%] px-[8%] py-[10%]"
    >
      <div className="shrink-0 aspect-square w-[34%] rounded-xl bg-[#161a26] border border-white/10 flex items-center justify-center">
        {metric.icon}
      </div>
      <div>
        <div
          className="font-bold text-white tracking-tight leading-tight"
          style={{ fontFamily: "var(--font-outfit, sans-serif)", fontSize: "clamp(14px, 1.7vw, 24px)" }}
        >
          {metric.value}
        </div>
        <div className="text-[#9ca3af] font-medium tracking-wide leading-tight" style={{ fontSize: "clamp(9px, 0.85vw, 12px)" }}>
          {metric.label}
        </div>
      </div>
    </div>
  );
}

export default function AIProcessingHub() {
  const hubRef = useRef<HTMLDivElement>(null);
  const headerWrapRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);

  // CSS-based glow layers (predictable soft blur, unlike large filled SVG
  // shapes run through feGaussianBlur, which clip/flatten unpredictably).
  const wideGlowRef = useRef<HTMLDivElement>(null);
  const coreGlowRef = useRef<HTMLDivElement>(null);
  const beamRef = useRef<HTMLDivElement>(null);
  const leftEnergyRef = useRef<SVGPathElement>(null);
  const rightEnergyRef = useRef<SVGPathElement>(null);

  const chipAuraRef = useRef<HTMLDivElement>(null);
  const chipCoreRef = useRef<HTMLDivElement>(null);
  const chipIconGlowRef = useRef<HTMLDivElement>(null);

  const wireTopLeftRef = useRef<SVGPathElement>(null);
  const wireBottomLeftRef = useRef<SVGPathElement>(null);
  const wireTopRightRef = useRef<SVGPathElement>(null);
  const wireBottomRightRef = useRef<SVGPathElement>(null);

  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const mobileCardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const mobileWireRefs = useRef<Array<SVGPathElement | null>>([]);
  const mobileChipCoreRef = useRef<HTMLDivElement>(null);
  const mobileBeamRef = useRef<HTMLDivElement>(null);

  // ══════════════════════════════════════════════════════════════════════
  // MASTER SCROLL PROGRESS — one GSAP timeline (0 → 1), scrubbed against
  // the hub's transit through the viewport. No pinning; natural page flow.
  // ══════════════════════════════════════════════════════════════════════
  useLayoutEffect(() => {
    if (!hubRef.current) return;

    const ctx = gsap.context(() => {
      const energyPaths = [leftEnergyRef.current, rightEnergyRef.current];
      const wirePaths = [
        wireTopLeftRef.current,
        wireBottomLeftRef.current,
        wireTopRightRef.current,
        wireBottomRightRef.current,
      ];

      [...energyPaths, ...wirePaths, ...mobileWireRefs.current].forEach((el) => {
        if (!el) return;
        const len = el.getTotalLength();
        gsap.set(el, { strokeDasharray: len, strokeDashoffset: len });
      });

      gsap.set(coreGlowRef.current, { opacity: 0, scale: 0.6, transformOrigin: "50% 50%" });
      gsap.set(beamRef.current, { opacity: 0, scaleY: 0, transformOrigin: "50% 0%" });
      gsap.set(wideGlowRef.current, { opacity: 0.1 });
      gsap.set(chipCoreRef.current, { opacity: 0.6, filter: "saturate(0.55) brightness(0.85)" });
      gsap.set(chipAuraRef.current, { opacity: 0.15, scale: 0.85, transformOrigin: "50% 50%" });
      gsap.set(chipIconGlowRef.current, { opacity: 0.25 });
      gsap.set(headerWrapRef.current, { opacity: 0, y: 30 });
      gsap.set(orbitRef.current, { opacity: 0, y: 20 });

      gsap.set(mobileBeamRef.current, { opacity: 0, scaleY: 0, transformOrigin: "50% 0%" });
      gsap.set(mobileChipCoreRef.current, { opacity: 0.6, filter: "saturate(0.55) brightness(0.85)" });

      [...cardRefs.current, ...mobileCardRefs.current].forEach((card) => {
        if (!card) return;
        gsap.set(card, { opacity: 0.55, y: 10 });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: hubRef.current,
          start: "top 90%",
          end: "bottom 30%",
          scrub: 1,
        },
      });

      // PHASE 1 — 0.00 → 0.12 — section enters
      tl.to(orbitRef.current, { opacity: 1, y: 0, duration: 0.1, ease: "power2.out" }, 0);
      tl.to(headerWrapRef.current, { opacity: 1, y: 0, duration: 0.12, ease: "power2.out" }, 0.02);
      tl.to(wideGlowRef.current, { opacity: 0.3, duration: 0.12, ease: "power1.out" }, 0);

      // PHASE 2 — 0.12 → 0.48 — energy emerges from under the curve
      if (leftEnergyRef.current) {
        tl.to(leftEnergyRef.current, { strokeDashoffset: 0, duration: 0.36, ease: "power1.inOut" }, 0.12);
      }
      if (rightEnergyRef.current) {
        tl.to(rightEnergyRef.current, { strokeDashoffset: 0, duration: 0.36, ease: "power1.inOut" }, 0.12);
      }
      tl.to(wideGlowRef.current, { opacity: 0.65, duration: 0.36, ease: "power1.inOut" }, 0.12);

      // PHASE 3 — 0.48 → 0.60 — streams travel toward the center dip
      tl.to(wideGlowRef.current, { opacity: 0.9, duration: 0.12, ease: "power1.inOut" }, 0.48);

      // PHASE 4 — 0.60 → 0.68 — center collision bloom
      tl.to(coreGlowRef.current, { opacity: 1, scale: 1, duration: 0.08, ease: "power2.out" }, 0.6);

      // PHASE 5 — 0.68 → 0.82 — downward light waterfall into the chip
      tl.to(beamRef.current, { opacity: 0.95, scaleY: 1, duration: 0.14, ease: "power2.out" }, 0.68);
      tl.to(mobileBeamRef.current, { opacity: 0.95, scaleY: 1, duration: 0.14, ease: "power2.out" }, 0.68);

      // PHASE 6 — 0.82 → 0.90 — chip activation
      tl.to(chipCoreRef.current, { opacity: 1, filter: "saturate(1) brightness(1)", duration: 0.08, ease: "power2.out" }, 0.82);
      tl.to(mobileChipCoreRef.current, { opacity: 1, filter: "saturate(1) brightness(1)", duration: 0.08, ease: "power2.out" }, 0.82);
      tl.to(chipAuraRef.current, { opacity: 1, scale: 1, duration: 0.08, ease: "power2.out" }, 0.82);
      tl.to(chipIconGlowRef.current, { opacity: 1, duration: 0.08, ease: "power2.out" }, 0.82);

      // PHASE 7 — 0.90 → 1.00 — circuit wires draw, cards illuminate
      const wireStarts = [0.9, 0.91, 0.9, 0.91];
      wirePaths.forEach((el, i) => {
        if (!el) return;
        tl.to(el, { strokeDashoffset: 0, duration: 0.08, ease: "power1.inOut" }, wireStarts[i]);
      });
      mobileWireRefs.current.forEach((el, i) => {
        if (!el) return;
        tl.to(el, { strokeDashoffset: 0, duration: 0.08, ease: "power1.inOut" }, wireStarts[i % wireStarts.length]);
      });
      [...cardRefs.current, ...mobileCardRefs.current].forEach((card, i) => {
        if (!card) return;
        tl.to(card, { opacity: 1, y: 0, duration: 0.08, ease: "power2.out" }, 0.94 + (i % 4) * 0.005);
      });
    }, hubRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative w-full bg-black text-white">
      {/* Ambient stars */}
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
        ].map((s, i) => (
          <div key={i} className="absolute rounded-full bg-white" style={{ top: s.t, left: s.l, width: s.r, height: s.r, opacity: s.o }} />
        ))}
      </div>

      <div ref={hubRef} className="relative z-10 w-full">
        {/* ══════════════════════════════════════════════════════════════
            DESKTOP / TABLET — precise aspect-locked recreation of the
            reference composition (939 × 933 coordinate space).
        ══════════════════════════════════════════════════════════════ */}
        <div className="relative w-full max-w-[1400px] mx-auto hidden sm:block" style={{ aspectRatio: "939 / 933" }}>
          {/* Vertical matrix lines, behind everything */}
          <div className="absolute inset-x-0 top-[42%] bottom-0 pointer-events-none flex justify-center gap-[8%] opacity-20 z-0">
            {[0, 1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-full w-px bg-gradient-to-b from-pink-500/30 via-white/10 to-transparent" />
            ))}
          </div>

          {/* ── SYSTEM A: soft photographic glow, built from CSS radial
              gradients + CSS blur (predictable, unlike large filled SVG
              shapes pushed through feGaussianBlur, which tends to clip
              into hard flat edges instead of a soft falloff). ── */}

          {/* Wide ambient magenta atmosphere under the curve (Phase 1-3) */}
          <div
            ref={wideGlowRef}
            className="absolute pointer-events-none z-[6]"
            style={{
              left: "50%",
              top: "62%",
              width: "160%",
              height: "58%",
              transform: "translate(-50%, -48%)",
              background:
                "radial-gradient(ellipse 55% 60% at 50% 40%, rgba(219,39,119,0.55) 0%, rgba(219,39,119,0.32) 30%, rgba(219,39,119,0.14) 52%, rgba(219,39,119,0.04) 70%, transparent 82%)",
              filter: "blur(4.5vw)",
            }}
          />

          {/* Bright core bloom at the center dip / collision point (Phase 4) */}
          <div
            ref={coreGlowRef}
            className="absolute pointer-events-none z-[7]"
            style={{
              left: "50%",
              top: "64.3%",
              width: "58%",
              height: "24%",
              transform: "translate(-50%, -50%)",
              background:
                "radial-gradient(ellipse 50% 55% at 50% 50%, rgba(255,255,255,0.95) 0%, rgba(253,242,248,0.75) 22%, rgba(244,114,182,0.5) 48%, rgba(219,39,119,0.18) 68%, transparent 82%)",
              filter: "blur(2.4vw)",
            }}
          />

          {/* Downward light waterfall into the chip (Phase 5) */}
          <div
            ref={beamRef}
            className="absolute pointer-events-none z-[8]"
            style={{
              left: "50%",
              top: "61%",
              width: "9%",
              height: "19%",
              transform: "translateX(-50%)",
              background: "linear-gradient(to bottom, #ffffff 0%, #fdf2f8 22%, rgba(244,114,182,0.85) 55%, rgba(219,39,119,0.1) 100%)",
              clipPath: "polygon(18% 0%, 82% 0%, 64% 100%, 36% 100%)",
              filter: "blur(1vw)",
            }}
          />

          {/* Thin luminous rim tracing the horizon + energy streams (Phase 2-3),
              and the chip → card circuit wires (Phase 7) — crisp SVG lines,
              glowed with a pixel-based CSS drop-shadow (not object-bounding-
              box relative, so it never clips or flattens unpredictably). */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-10"
            viewBox="0 0 939 933"
            preserveAspectRatio="none"
            fill="none"
          >
            <defs>
              <linearGradient id="neonCircuitWireGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
                <stop offset="40%" stopColor="#fdf2f8" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#f9a8d4" stopOpacity="0.85" />
              </linearGradient>
            </defs>

            {/* Faint horizon rim, always visible, for the "edge of light" line */}
            <path
              d="M 0 397 C 300 620, 639 620, 939 397"
              stroke="rgba(255,255,255,0.35)"
              strokeWidth="1.2"
              strokeLinecap="round"
              style={{ filter: "drop-shadow(0 0 3px rgba(255,255,255,0.5))" }}
            />

            {/* SYSTEM A — energy streams from under the curve to the center dip */}
            <path
              ref={leftEnergyRef}
              d="M 0 397 C 300 600, 420 610, 469 600"
              stroke="#ffffff"
              strokeWidth="1.6"
              strokeLinecap="round"
              style={{ filter: "drop-shadow(0 0 3px rgba(255,255,255,0.95)) drop-shadow(0 0 10px rgba(244,114,182,0.7))" }}
            />
            <path
              ref={rightEnergyRef}
              d="M 939 397 C 639 600, 519 610, 470 600"
              stroke="#ffffff"
              strokeWidth="1.6"
              strokeLinecap="round"
              style={{ filter: "drop-shadow(0 0 3px rgba(255,255,255,0.95)) drop-shadow(0 0 10px rgba(244,114,182,0.7))" }}
            />

            {/* SYSTEM B — chip → card circuit wires (Phase 7) */}
            <path ref={wireTopLeftRef} d="M 385 788 C 300 788, 260 742, 215 742" stroke="url(#neonCircuitWireGrad)" strokeWidth="1.6" strokeLinecap="round" style={{ filter: "drop-shadow(0 0 2px rgba(255,255,255,0.8))" }} />
            <path ref={wireBottomLeftRef} d="M 385 842 C 300 842, 260 887, 215 887" stroke="url(#neonCircuitWireGrad)" strokeWidth="1.6" strokeLinecap="round" style={{ filter: "drop-shadow(0 0 2px rgba(255,255,255,0.8))" }} />
            <path ref={wireTopRightRef} d="M 555 788 C 640 788, 680 742, 730 742" stroke="url(#neonCircuitWireGrad)" strokeWidth="1.6" strokeLinecap="round" style={{ filter: "drop-shadow(0 0 2px rgba(255,255,255,0.8))" }} />
            <path ref={wireBottomRightRef} d="M 555 842 C 640 842, 680 887, 730 887" stroke="url(#neonCircuitWireGrad)" strokeWidth="1.6" strokeLinecap="round" style={{ filter: "drop-shadow(0 0 2px rgba(255,255,255,0.8))" }} />
          </svg>

          {/* Token orbit — vertical center pinned at 18.6% */}
          <div
            ref={orbitRef}
            className="absolute left-1/2 z-20 flex items-center justify-center w-[92%]"
            style={{ top: "18.6%", transform: "translate(-50%, -50%)" }}
          >
            <div className="flex items-center gap-[1.2%] flex-1 justify-end pr-[1%]">
              {leftTokens.map((tk) => (
                <div key={tk.symbol} className={`${dimFor(tk.size)} aspect-square rounded-full border border-white/12 flex items-center justify-center overflow-hidden`}
                  style={{ backgroundColor: tk.bgColor, boxShadow: `0 0 24px ${tk.glow}45, 0 6px 20px rgba(0,0,0,0.85)` }}>
                  <span style={{ color: tk.textColor }} className="flex items-center justify-center w-full h-full">{tk.icon}</span>
                </div>
              ))}
            </div>

            <div className="relative shrink-0 flex items-center justify-center w-[23.4%] aspect-square mx-[1%]">
              <div className="absolute inset-0 rounded-full border border-pink-500/25" style={{ boxShadow: "0 0 30px rgba(219,39,119,0.25)" }}>
                <div className="absolute w-[7%] h-[7%] rounded-full bg-[#f472b6]" style={{ top: "5%", right: "14%", boxShadow: "0 0 14px #f472b6, 0 0 28px rgba(244,114,182,0.8)" }} />
                <div className="absolute w-[7%] h-[7%] rounded-full bg-[#c084fc]" style={{ bottom: "5%", left: "14%", boxShadow: "0 0 14px #c084fc, 0 0 28px rgba(192,132,252,0.8)" }} />
              </div>
              <div
                className="w-[74%] h-[74%] rounded-full bg-[#120e20] border border-white/18 flex items-center justify-center relative overflow-hidden"
                style={{ boxShadow: "0 0 50px rgba(219,39,119,0.45), 0 0 100px rgba(219,39,119,0.25), inset 0 0 24px rgba(0,0,0,0.7)" }}
              >
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 130 130">
                  <path d="M 22 82 A 46 46 0 0 1 108 82" fill="none" stroke="url(#rocketSpeedometerArc)" strokeWidth="5" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="rocketSpeedometerArc" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#7928CA" />
                      <stop offset="50%" stopColor="#db2777" />
                      <stop offset="100%" stopColor="#f472b6" />
                    </linearGradient>
                  </defs>
                </svg>
                <Rocket
                  className="relative z-10 w-[42%] h-[42%] text-white stroke-[2]"
                  style={{ filter: "drop-shadow(0 0 16px rgba(255,255,255,1))" }}
                />
              </div>
            </div>

            <div className="flex items-center gap-[1.2%] flex-1 justify-start pl-[1%]">
              {rightTokens.map((tk) => (
                <div key={tk.symbol} className={`${dimFor(tk.size)} aspect-square rounded-full border border-white/12 flex items-center justify-center overflow-hidden`}
                  style={{ backgroundColor: tk.bgColor, boxShadow: `0 0 24px ${tk.glow}45, 0 6px 20px rgba(0,0,0,0.85)` }}>
                  <span style={{ color: tk.textColor }} className="flex items-center justify-center w-full h-full">{tk.icon}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Headline block — top anchored at 36.4% */}
          <div ref={headerWrapRef} className="absolute left-1/2 z-20 flex flex-col items-center text-center w-[90%]" style={{ top: "36.4%", transform: "translateX(-50%)" }}>
            <h2
              className="text-white leading-[1.12]"
              style={{ fontFamily: "var(--font-outfit, sans-serif)", fontWeight: 300, letterSpacing: "-0.02em", fontSize: "clamp(22px, 4.6vw, 60px)" }}
            >
              10K+ Crypto Assets <br />
              <span style={{ fontWeight: 400 }}>Available To Trade</span>
            </h2>
            <p
              className="text-[#9ca3af] max-w-xl leading-relaxed"
              style={{ fontFamily: "var(--font-outfit, sans-serif)", fontWeight: 300, fontSize: "clamp(11px, 1.3vw, 16px)", marginTop: "2.2%" }}
            >
              Explore every potential Crypto Assets with AI assistance
            </p>
            <div className="flex items-center" style={{ gap: "3%", marginTop: "3.2%" }}>
              <button type="button" className="text-[#9ca3af] hover:text-white transition-colors cursor-pointer" style={{ fontFamily: "var(--font-outfit, sans-serif)", fontSize: "clamp(11px, 1.3vw, 15px)" }}>
                Learn More
              </button>
              <button
                type="button"
                className="rounded-full font-medium text-white flex items-center gap-2 cursor-pointer transition-transform hover:scale-105 active:scale-95"
                style={{
                  background: "linear-gradient(90deg, #7c3aed 0%, #db2777 100%)",
                  boxShadow: "0 0 28px rgba(219,39,119,0.5), 0 0 56px rgba(219,39,119,0.25)",
                  fontFamily: "var(--font-outfit, sans-serif)",
                  fontSize: "clamp(11px, 1.3vw, 15px)",
                  padding: "2.4% 5.5%",
                }}
              >
                <span>Start Trading Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Chip */}
          <div className="absolute z-30" style={{ left: "41%", top: "78.78%", width: "18.1%" }}>
            <div className="relative w-full aspect-square flex items-center justify-center">
              <div ref={chipAuraRef} className="absolute pointer-events-none" style={{ width: "140%", height: "140%", background: "radial-gradient(circle, rgba(219,39,119,0.7) 0%, rgba(219,39,119,0.2) 50%, transparent 75%)", filter: "blur(24px)" }} />
              <div className="relative w-full h-full rounded-[18%] bg-[#090b10] border-2 border-white/20 p-[8%] flex items-center justify-center shadow-[0_0_60px_rgba(219,39,119,0.55),inset_0_0_20px_rgba(0,0,0,0.9)]">
                <div className="absolute top-[6%] left-[6%] w-[3%] h-[3%] rounded-full bg-white/40" />
                <div className="absolute top-[6%] right-[6%] w-[3%] h-[3%] rounded-full bg-white/40" />
                <div className="absolute bottom-[6%] left-[6%] w-[3%] h-[3%] rounded-full bg-white/40" />
                <div className="absolute bottom-[6%] right-[6%] w-[3%] h-[3%] rounded-full bg-white/40" />
                <div
                  ref={chipCoreRef}
                  className="relative w-full h-full rounded-[13%] flex items-center justify-center shadow-inner overflow-hidden"
                  style={{ background: "linear-gradient(135deg, #ff4365 0%, #db2777 50%, #9333ea 100%)" }}
                >
                  <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:12px_12px]" />
                  <div className="relative z-10 text-white w-[46%] h-[46%]">
                    <Cpu className="w-full h-full stroke-[1.6]" />
                    <div ref={chipIconGlowRef} className="absolute inset-0 pointer-events-none" style={{ filter: "drop-shadow(0 0 16px rgba(255,255,255,0.95))" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Metric cards, positioned to match reference exactly */}
          <div className="absolute z-20" style={{ left: "4.79%", top: "76.63%", width: "18.1%" }}>
            <MetricCard metric={metrics[0]} cardRef={(el) => (cardRefs.current[0] = el)} />
          </div>
          <div className="absolute z-20" style={{ left: "4.79%", top: "92.18%", width: "18.1%" }}>
            <MetricCard metric={metrics[1]} cardRef={(el) => (cardRefs.current[1] = el)} />
          </div>
          <div className="absolute z-20" style={{ left: "77.74%", top: "76.63%", width: "18.1%" }}>
            <MetricCard metric={metrics[2]} cardRef={(el) => (cardRefs.current[2] = el)} />
          </div>
          <div className="absolute z-20" style={{ left: "77.74%", top: "92.18%", width: "18.1%" }}>
            <MetricCard metric={metrics[3]} cardRef={(el) => (cardRefs.current[3] = el)} />
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════
            MOBILE — simplified stacked layout. Same visual language
            (curve glow, chip, wires, cards) with lighter geometry/blur.
        ══════════════════════════════════════════════════════════════ */}
        <div className="sm:hidden flex flex-col items-center px-4 pt-10">
          <div ref={orbitRef} className="flex items-center justify-center gap-1.5 mb-8 flex-wrap max-w-full">
            {[...leftTokens.slice(-3), ...rightTokens.slice(0, 3)].map((tk) => (
              <div key={tk.symbol} className="w-8 h-8 rounded-full border border-white/12 flex items-center justify-center overflow-hidden" style={{ backgroundColor: tk.bgColor, boxShadow: `0 0 14px ${tk.glow}45` }}>
                <span style={{ color: tk.textColor, fontSize: "12px" }} className="flex items-center justify-center w-full h-full">{tk.icon}</span>
              </div>
            ))}
          </div>

          <div ref={headerWrapRef} className="flex flex-col items-center text-center">
            <h2 className="text-white leading-[1.15] text-[28px]" style={{ fontFamily: "var(--font-outfit, sans-serif)", fontWeight: 300, letterSpacing: "-0.02em" }}>
              10K+ Crypto Assets <br />
              <span style={{ fontWeight: 400 }}>Available To Trade</span>
            </h2>
            <p className="mt-3 text-[13px] text-[#9ca3af] max-w-xs leading-relaxed" style={{ fontFamily: "var(--font-outfit, sans-serif)", fontWeight: 300 }}>
              Explore every potential Crypto Assets with AI assistance
            </p>
            <div className="mt-5 flex items-center gap-5">
              <button type="button" className="text-[13px] text-[#9ca3af]">Learn More</button>
              <button type="button" className="px-5 py-2.5 rounded-full text-[13px] font-medium text-white flex items-center gap-2" style={{ background: "linear-gradient(90deg, #7c3aed 0%, #db2777 100%)", boxShadow: "0 0 24px rgba(219,39,119,0.5)" }}>
                Start Trading Now <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Simplified glow + beam */}
          <div className="relative w-full flex justify-center mt-10" style={{ height: 140 }}>
            <div className="absolute inset-0" style={{ background: "radial-gradient(60% 100% at 50% 0%, rgba(219,39,119,0.55), transparent 70%)", filter: "blur(20px)" }} />
            <div ref={mobileBeamRef} className="absolute bottom-0 w-16 h-full" style={{ background: "linear-gradient(180deg, #ffffff 0%, #f9a8d4 40%, rgba(219,39,119,0.1) 100%)", filter: "blur(6px)", transformOrigin: "50% 0%" }} />
          </div>

          {/* Chip + wires */}
          <div className="relative flex items-center justify-center" style={{ width: "100%", maxWidth: 320 }}>
            <svg viewBox="0 0 320 180" className="absolute inset-0 w-full pointer-events-none" style={{ height: 180 }}>
              <defs>
                <linearGradient id="mobileWireGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#f9a8d4" stopOpacity="0.85" />
                </linearGradient>
              </defs>
              <path ref={(el) => (mobileWireRefs.current[0] = el)} d="M 130 70 C 90 70, 60 40, 20 40" stroke="url(#mobileWireGrad)" strokeWidth="1.6" strokeLinecap="round" />
              <path ref={(el) => (mobileWireRefs.current[1] = el)} d="M 130 110 C 90 110, 60 150, 20 150" stroke="url(#mobileWireGrad)" strokeWidth="1.6" strokeLinecap="round" />
              <path ref={(el) => (mobileWireRefs.current[2] = el)} d="M 190 70 C 230 70, 260 40, 300 40" stroke="url(#mobileWireGrad)" strokeWidth="1.6" strokeLinecap="round" />
              <path ref={(el) => (mobileWireRefs.current[3] = el)} d="M 190 110 C 230 110, 260 150, 300 150" stroke="url(#mobileWireGrad)" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
            <div className="relative z-10 w-[112px] aspect-square rounded-[20px] bg-[#090b10] border-2 border-white/20 p-3 flex items-center justify-center shadow-[0_0_40px_rgba(219,39,119,0.55)]">
              <div ref={mobileChipCoreRef} className="w-full h-full rounded-2xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #ff4365 0%, #db2777 50%, #9333ea 100%)" }}>
                <Cpu className="w-9 h-9 text-white stroke-[1.6]" />
              </div>
            </div>
          </div>

          {/* Cards, 2×2 grid */}
          <div className="grid grid-cols-2 gap-3 w-full max-w-[340px] mt-6">
            {metrics.map((m, i) => (
              <div
                key={m.label}
                ref={(el) => (mobileCardRefs.current[i] = el)}
                className="bg-[#0e1017]/95 border border-white/10 rounded-xl p-3 flex items-center gap-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.85)]"
              >
                <div className="w-8 h-8 shrink-0 rounded-lg bg-[#161a26] border border-white/10 flex items-center justify-center">
                  <div className="w-4 h-4">{m.icon}</div>
                </div>
                <div>
                  <div className="text-base font-bold text-white tracking-tight" style={{ fontFamily: "var(--font-outfit, sans-serif)" }}>{m.value}</div>
                  <div className="text-[10px] text-[#9ca3af] font-medium">{m.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}