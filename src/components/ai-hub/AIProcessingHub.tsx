"use client";

import React, { useEffect, useRef } from "react";
import { Cpu, Globe2, Coins, CheckSquare, Users, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AIProcessingHub() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const chipRef = useRef<HTMLDivElement>(null);

  // 4 Orthogonal Path refs
  const pathLTRef = useRef<SVGPathElement>(null);
  const pathLBRef = useRef<SVGPathElement>(null);
  const pathRTRef = useRef<SVGPathElement>(null);
  const pathRBRef = useRef<SVGPathElement>(null);

  // 4 Metric Card refs
  const cardLTRef = useRef<HTMLDivElement>(null);
  const cardLBRef = useRef<HTMLDivElement>(null);
  const cardRTRef = useRef<HTMLDivElement>(null);
  const cardRBRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const paths = [
        pathLTRef.current,
        pathLBRef.current,
        pathRTRef.current,
        pathRBRef.current,
      ].filter(Boolean) as SVGPathElement[];

      const cards = [
        cardLTRef.current,
        cardLBRef.current,
        cardRTRef.current,
        cardRBRef.current,
      ].filter(Boolean) as HTMLDivElement[];

      // Initialize paths for stroke-draw animation
      paths.forEach((p) => {
        const len = p.getTotalLength() || 400;
        gsap.set(p, {
          strokeDasharray: len,
          strokeDashoffset: len,
          opacity: 0.8,
        });
      });

      // Initialize cards in hidden state
      gsap.set(cards, {
        opacity: 0,
        scale: 0.82,
        filter: "blur(12px)",
      });

      // Initialize chip scale
      if (chipRef.current) {
        gsap.set(chipRef.current, {
          scale: 0.88,
          opacity: 0.6,
        });
      }

      // GSAP ScrollTrigger timeline for 90-degree orthogonal circuit propagation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "center 45%",
          scrub: 1.2,
        },
      });

      // 1. Chip powers up
      if (chipRef.current) {
        tl.to(
          chipRef.current,
          {
            scale: 1.0,
            opacity: 1,
            ease: "power2.out",
            duration: 0.8,
          },
          0
        );
      }

      // 2. Draw circuit paths outward from chip
      tl.to(
        paths,
        {
          strokeDashoffset: 0,
          ease: "power1.inOut",
          duration: 1.2,
        },
        0.2
      );

      // 3. Metric cards reveal and unblur as circuits arrive
      tl.to(
        cards,
        {
          opacity: 1,
          scale: 1.0,
          filter: "blur(0px)",
          stagger: 0.1,
          ease: "power2.out",
          duration: 1.0,
        },
        0.5
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 md:py-32 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Top curved neon atmospheric lens flare */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[380px] bg-gradient-to-b from-[#7928CA]/30 via-[#E03E99]/20 to-transparent rounded-b-full blur-[130px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="max-w-3xl mx-auto px-4 text-center z-10 flex flex-col items-center">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-light text-white tracking-tight leading-tight">
          10k+ Crypto Assets <br />
          <span className="font-normal text-gradient-neon">Available To Trade</span>
        </h2>
        <p className="mt-4 text-sm sm:text-base text-gray-400 max-w-lg font-normal leading-relaxed">
          Explore every potential Crypto Assets with AI assistance, automated arbitrage scans, and
          neural sentiment modeling.
        </p>

        <div className="mt-7 flex items-center gap-4">
          <button className="px-5 py-2.5 rounded-full text-xs font-medium text-gray-300 hover:text-white transition-colors cursor-pointer">
            Learn More
          </button>
          <button className="px-6 py-2.5 rounded-full btn-gradient-neon text-xs font-semibold flex items-center gap-1.5 cursor-pointer">
            <span>Start Trading Now</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Microchip & Orthogonal PCB 90-Degree Circuit Diagram Container */}
      <div className="relative mt-16 w-full max-w-5xl h-[380px] flex items-center justify-center">
        {/* SVG Circuit Traces (Desktop & Tablet) */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none hidden md:block"
          viewBox="0 0 900 380"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="traceGradNeon" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7928CA" />
              <stop offset="50%" stopColor="#E03E99" />
              <stop offset="100%" stopColor="#7928CA" />
            </linearGradient>

            <filter id="circuitGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* 90-Degree Orthogonal PCB Traces connecting Central Chip (center ~ 450, 190) to 4 Nodes */}
          {/* 1. Left-Top Trace -> (180, 80) */}
          <path
            ref={pathLTRef}
            d="M 390 170 H 260 V 90 H 180"
            fill="none"
            stroke="url(#traceGradNeon)"
            strokeWidth="2.5"
            filter="url(#circuitGlow)"
          />
          {/* 2. Left-Bottom Trace -> (180, 300) */}
          <path
            ref={pathLBRef}
            d="M 390 210 H 260 V 290 H 180"
            fill="none"
            stroke="url(#traceGradNeon)"
            strokeWidth="2.5"
            filter="url(#circuitGlow)"
          />
          {/* 3. Right-Top Trace -> (720, 80) */}
          <path
            ref={pathRTRef}
            d="M 510 170 H 640 V 90 H 720"
            fill="none"
            stroke="url(#traceGradNeon)"
            strokeWidth="2.5"
            filter="url(#circuitGlow)"
          />
          {/* 4. Right-Bottom Trace -> (720, 300) */}
          <path
            ref={pathRBRef}
            d="M 510 210 H 640 V 290 H 720"
            fill="none"
            stroke="url(#traceGradNeon)"
            strokeWidth="2.5"
            filter="url(#circuitGlow)"
          />

          {/* Continuous Energetic Glowing Light Beads running along each path */}
          <circle r="4" fill="#ffffff" filter="url(#circuitGlow)">
            <animateMotion repeatCount="indefinite" dur="2.4s" path="M 390 170 H 260 V 90 H 180" />
          </circle>
          <circle r="4" fill="#E03E99" filter="url(#circuitGlow)">
            <animateMotion repeatCount="indefinite" dur="2.8s" path="M 390 210 H 260 V 290 H 180" />
          </circle>
          <circle r="4" fill="#ffffff" filter="url(#circuitGlow)">
            <animateMotion repeatCount="indefinite" dur="2.6s" path="M 510 170 H 640 V 90 H 720" />
          </circle>
          <circle r="4" fill="#38bdf8" filter="url(#circuitGlow)">
            <animateMotion repeatCount="indefinite" dur="3.0s" path="M 510 210 H 640 V 290 H 720" />
          </circle>
        </svg>

        {/* Central Glowing AI Microchip Processor */}
        <div ref={chipRef} className="relative z-20 flex flex-col items-center">
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-gradient-to-tr from-[#7928CA] via-[#E03E99] to-[#F43F5E] p-1 shadow-[0_0_60px_rgba(224,62,153,0.6)] flex items-center justify-center group cursor-pointer hover:scale-105 transition-transform duration-500">
            {/* Pulsating Microchip Glow Halo */}
            <div className="absolute -inset-4 rounded-3xl bg-[#E03E99]/35 blur-xl animate-pulse -z-10" />

            {/* Inner Dark Silicone Die */}
            <div className="w-full h-full rounded-[22px] bg-[#12111d] flex flex-col items-center justify-center border border-white/20 shadow-inner relative overflow-hidden">
              {/* Circuit Grid texture */}
              <div className="absolute inset-0 bg-[radial-gradient(#E03E99_1px,transparent_1px)] [background-size:8px_8px] opacity-25" />

              {/* Glowing CPU Icon */}
              <Cpu className="w-12 h-12 sm:w-14 sm:h-14 text-white stroke-[1.5] drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
              <span className="text-[9px] font-mono font-bold tracking-widest text-pink-300 uppercase mt-1">
                AI CORE
              </span>
            </div>
          </div>
        </div>

        {/* 4 Floating Metric Nodes */}
        {/* 1. Left Top: 50+ Countries */}
        <div ref={cardLTRef} className="absolute left-4 sm:left-10 top-4 md:top-8 z-20 will-change-transform">
          <div className="glass-card px-4 py-3 rounded-2xl border border-white/10 flex items-center gap-3 shadow-xl hover:border-[#E03E99]/50 transition-all">
            <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400">
              <Globe2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-lg font-bold text-white font-mono leading-none">
                50+
              </div>
              <div className="text-[11px] text-gray-400 font-medium mt-1">Countries</div>
            </div>
          </div>
        </div>

        {/* 2. Left Bottom: 10K+ Crypto Assets */}
        <div ref={cardLBRef} className="absolute left-4 sm:left-10 bottom-4 md:bottom-8 z-20 will-change-transform">
          <div className="glass-card px-4 py-3 rounded-2xl border border-white/10 flex items-center gap-3 shadow-xl hover:border-[#7928CA]/50 transition-all">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
              <Coins className="w-5 h-5" />
            </div>
            <div>
              <div className="text-lg font-bold text-white font-mono leading-none">
                10K+
              </div>
              <div className="text-[11px] text-gray-400 font-medium mt-1">Crypto Assets</div>
            </div>
          </div>
        </div>

        {/* 3. Right Top: 97.5% Success Rate */}
        <div ref={cardRTRef} className="absolute right-4 sm:right-10 top-4 md:top-8 z-20 will-change-transform">
          <div className="glass-card px-4 py-3 rounded-2xl border border-white/10 flex items-center gap-3 shadow-xl hover:border-emerald-500/50 transition-all">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <CheckSquare className="w-5 h-5" />
            </div>
            <div>
              <div className="text-lg font-bold text-emerald-400 font-mono leading-none">
                97.5%
              </div>
              <div className="text-[11px] text-gray-400 font-medium mt-1">Success Rate</div>
            </div>
          </div>
        </div>

        {/* 4. Right Bottom: 10,000+ Daily Traders */}
        <div ref={cardRBRef} className="absolute right-4 sm:right-10 bottom-4 md:bottom-8 z-20 will-change-transform">
          <div className="glass-card px-4 py-3 rounded-2xl border border-white/10 flex items-center gap-3 shadow-xl hover:border-pink-500/50 transition-all">
            <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-300">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <div className="text-lg font-bold text-white font-mono leading-none">
                10.000+
              </div>
              <div className="text-[11px] text-gray-400 font-medium mt-1">Daily Traders</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
