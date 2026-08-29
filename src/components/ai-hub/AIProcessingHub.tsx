"use client";

import React, { useRef } from "react";
import { Cpu, Globe2, Coins, CheckSquare, Users, ArrowRight } from "lucide-react";

export default function AIProcessingHub() {
  const containerRef = useRef<HTMLDivElement>(null);

  const metrics = [
    {
      id: "countries",
      label: "Countries",
      value: "50+",
      icon: Globe2,
      position: "left-top",
    },
    {
      id: "assets",
      label: "Crypto Assets",
      value: "10K+",
      icon: Coins,
      position: "left-bottom",
    },
    {
      id: "success",
      label: "Success Rate",
      value: "97.5%",
      icon: CheckSquare,
      position: "right-top",
    },
    {
      id: "traders",
      label: "Daily Traders",
      value: "10.000+",
      icon: Users,
      position: "right-bottom",
    },
  ];

  return (
    <section
      ref={containerRef}
      className="relative w-full py-24 md:py-32 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Top curved neon atmospheric arc */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[350px] bg-gradient-to-b from-[#7928CA]/30 via-[#E03E99]/20 to-transparent rounded-b-full blur-[120px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="max-w-3xl mx-auto px-4 text-center z-10 flex flex-col items-center">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-light text-white tracking-tight leading-tight">
          10k+ Crypto Assets <br />
          <span className="font-normal text-gradient-neon">Available To Trade</span>
        </h2>
        <p className="mt-4 text-sm sm:text-base text-gray-400 max-w-lg font-normal">
          Explore every potential Crypto Assets with AI assistance, automated arbitrage scans, and
          neural sentiment modeling.
        </p>

        <div className="mt-7 flex items-center gap-4">
          <button className="px-5 py-2.5 rounded-full text-xs font-medium text-gray-300 hover:text-white transition-colors">
            Learn More
          </button>
          <button className="px-6 py-2.5 rounded-full btn-gradient-neon text-xs font-semibold flex items-center gap-1.5 cursor-pointer">
            <span>Start Trading Now</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Microchip & Orthogonal PCB 90-Degree Circuit Diagram Container */}
      <div className="relative mt-16 w-full max-w-5xl h-[360px] flex items-center justify-center">
        {/* SVG Circuit Traces (Desktop & Tablet) */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none hidden md:block"
          viewBox="0 0 900 360"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="traceGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7928CA" />
              <stop offset="50%" stopColor="#E03E99" />
              <stop offset="100%" stopColor="#7928CA" />
            </linearGradient>

            <filter id="particleGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* 90-Degree Orthogonal PCB Traces connecting Central Chip (center ~ 450, 180) to 4 Nodes */}
          {/* 1. Left-Top Trace -> (180, 100) */}
          <path
            id="path-lt"
            d="M 400 160 H 260 V 100 H 200"
            fill="none"
            stroke="rgba(224, 62, 153, 0.3)"
            strokeWidth="2"
            strokeDasharray="4 4"
          />
          {/* 2. Left-Bottom Trace -> (180, 260) */}
          <path
            id="path-lb"
            d="M 400 200 H 260 V 260 H 200"
            fill="none"
            stroke="rgba(121, 40, 202, 0.3)"
            strokeWidth="2"
            strokeDasharray="4 4"
          />
          {/* 3. Right-Top Trace -> (720, 100) */}
          <path
            id="path-rt"
            d="M 500 160 H 640 V 100 H 700"
            fill="none"
            stroke="rgba(224, 62, 153, 0.3)"
            strokeWidth="2"
            strokeDasharray="4 4"
          />
          {/* 4. Right-Bottom Trace -> (720, 260) */}
          <path
            id="path-rb"
            d="M 500 200 H 640 V 260 H 700"
            fill="none"
            stroke="rgba(121, 40, 202, 0.3)"
            strokeWidth="2"
            strokeDasharray="4 4"
          />

          {/* Continuous Energetic Glowing Light Beads running along each path */}
          <circle r="4" fill="#ffffff" filter="url(#particleGlow)">
            <animateMotion repeatCount="indefinite" dur="2.5s" path="M 400 160 H 260 V 100 H 200" />
          </circle>
          <circle r="4" fill="#E03E99" filter="url(#particleGlow)">
            <animateMotion repeatCount="indefinite" dur="3s" path="M 400 200 H 260 V 260 H 200" />
          </circle>
          <circle r="4" fill="#ffffff" filter="url(#particleGlow)">
            <animateMotion repeatCount="indefinite" dur="2.7s" path="M 500 160 H 640 V 100 H 700" />
          </circle>
          <circle r="4" fill="#38bdf8" filter="url(#particleGlow)">
            <animateMotion repeatCount="indefinite" dur="3.2s" path="M 500 200 H 640 V 260 H 700" />
          </circle>
        </svg>

        {/* Central Glowing AI Microchip Processor */}
        <div className="relative z-20 flex flex-col items-center">
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-gradient-to-tr from-[#7928CA] via-[#E03E99] to-[#F43F5E] p-1 shadow-[0_0_60px_rgba(224,62,153,0.6)] flex items-center justify-center group cursor-pointer hover:scale-105 transition-transform duration-500">
            {/* Pulsating Microchip Glow Halo */}
            <div className="absolute -inset-4 rounded-3xl bg-[#E03E99]/30 blur-xl animate-pulse -z-10" />

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

        {/* 4 Floating Metric Nodes (Positioned around chip) */}
        {/* 1. Left Top: 50+ Countries */}
        <div className="absolute left-4 sm:left-12 top-6 md:top-12 z-20">
          <div className="glass-card px-4 py-3 rounded-2xl border border-white/10 flex items-center gap-3 shadow-xl hover:border-[#E03E99]/40 transition-all">
            <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-pink-400">
              <Globe2 className="w-4 h-4" />
            </div>
            <div>
              <div className="text-base sm:text-lg font-bold text-white font-mono leading-none">
                50+
              </div>
              <div className="text-[11px] text-gray-400 font-medium mt-0.5">Countries</div>
            </div>
          </div>
        </div>

        {/* 2. Left Bottom: 10K+ Crypto Assets */}
        <div className="absolute left-4 sm:left-12 bottom-6 md:bottom-12 z-20">
          <div className="glass-card px-4 py-3 rounded-2xl border border-white/10 flex items-center gap-3 shadow-xl hover:border-[#7928CA]/40 transition-all">
            <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-purple-400">
              <Coins className="w-4 h-4" />
            </div>
            <div>
              <div className="text-base sm:text-lg font-bold text-white font-mono leading-none">
                10K+
              </div>
              <div className="text-[11px] text-gray-400 font-medium mt-0.5">Crypto Assets</div>
            </div>
          </div>
        </div>

        {/* 3. Right Top: 97.5% Success Rate */}
        <div className="absolute right-4 sm:right-12 top-6 md:top-12 z-20">
          <div className="glass-card px-4 py-3 rounded-2xl border border-white/10 flex items-center gap-3 shadow-xl hover:border-emerald-500/40 transition-all">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <CheckSquare className="w-4 h-4" />
            </div>
            <div>
              <div className="text-base sm:text-lg font-bold text-emerald-400 font-mono leading-none">
                97.5%
              </div>
              <div className="text-[11px] text-gray-400 font-medium mt-0.5">Success Rate</div>
            </div>
          </div>
        </div>

        {/* 4. Right Bottom: 10,000+ Daily Traders */}
        <div className="absolute right-4 sm:right-12 bottom-6 md:bottom-12 z-20">
          <div className="glass-card px-4 py-3 rounded-2xl border border-white/10 flex items-center gap-3 shadow-xl hover:border-pink-500/40 transition-all">
            <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-pink-300">
              <Users className="w-4 h-4" />
            </div>
            <div>
              <div className="text-base sm:text-lg font-bold text-white font-mono leading-none">
                10.000+
              </div>
              <div className="text-[11px] text-gray-400 font-medium mt-0.5">Daily Traders</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
