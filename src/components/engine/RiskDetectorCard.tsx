"use client";

import React, { useState, useEffect, useRef } from "react";
import { AlertTriangle, ShieldAlert } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function RiskDetectorCard() {
  const [needleAngle, setNeedleAngle] = useState(48); // degrees (in red zone)
  const cardRef = useRef<HTMLDivElement>(null);
  const needleRef = useRef({ angle: -30 });

  useEffect(() => {
    if (!cardRef.current) return;

    // GSAP ScrollTrigger: as the card scrolls into view, needle dynamically revs into red danger zone
    const ctx = gsap.context(() => {
      gsap.to(needleRef.current, {
        angle: 48,
        ease: "elastic.out(1, 0.5)",
        duration: 1.8,
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 75%",
          onEnter: () => {
            gsap.to(needleRef.current, {
              angle: 48,
              duration: 1.6,
              ease: "back.out(1.7)",
              onUpdate: () => setNeedleAngle(needleRef.current.angle),
            });
          },
        },
        onUpdate: () => setNeedleAngle(needleRef.current.angle),
      });
    }, cardRef);

    // Continuous dynamic revving between high alert and caution
    const interval = setInterval(() => {
      const targetAngle = 38 + Math.random() * 18; // Revving inside 38deg to 56deg (red zone)
      gsap.to(needleRef.current, {
        angle: targetAngle,
        duration: 1.2,
        ease: "power2.out",
        onUpdate: () => setNeedleAngle(needleRef.current.angle),
      });
    }, 2500);

    return () => {
      clearInterval(interval);
      ctx.revert();
    };
  }, []);

  const ticks = Array.from({ length: 24 });

  return (
    <div
      ref={cardRef}
      className="glass-card rounded-3xl p-7 flex flex-col justify-between border border-white/10 shadow-2xl relative overflow-hidden group min-h-[380px]"
    >
      {/* Background Warning Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-52 h-52 bg-[#F43F5E]/20 rounded-full blur-3xl pointer-events-none" />

      {/* Top Badges */}
      <div className="flex items-center justify-between z-10">
        <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-gray-300 font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span>Fraud: 11%</span>
        </div>

        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/20 border border-rose-500/40 text-[10px] text-rose-400 font-bold font-mono shadow-[0_0_15px_rgba(244,63,94,0.4)] animate-pulse">
          <ShieldAlert className="w-3.5 h-3.5 text-rose-400" />
          <span>Rugpull: 97% High</span>
        </div>
      </div>

      {/* Visual: Speedometer Gauge with Revving Needle & Warning Badge */}
      <div className="relative flex-1 flex flex-col items-center justify-center py-2">
        <div className="relative w-56 h-28 overflow-hidden flex items-end justify-center">
          {/* Gauge Arc SVG */}
          <svg className="w-56 h-28" viewBox="0 0 220 110">
            <defs>
              <linearGradient id="riskGradNeon" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#10B981" />
                <stop offset="45%" stopColor="#f59e0b" />
                <stop offset="75%" stopColor="#E03E99" />
                <stop offset="100%" stopColor="#F43F5E" />
              </linearGradient>
            </defs>
            <path
              d="M 20 100 A 90 90 0 0 1 200 100"
              fill="none"
              stroke="url(#riskGradNeon)"
              strokeWidth="6"
              strokeLinecap="round"
            />
          </svg>

          {/* Ticks around circumference */}
          <div className="absolute inset-0 w-56 h-56 rounded-full">
            {ticks.map((_, i) => {
              const deg = 180 + (i / (ticks.length - 1)) * 180;
              const isDanger = i > 15;
              return (
                <div
                  key={i}
                  className="absolute top-0 left-1/2 -translate-x-1/2 origin-[center_112px]"
                  style={{ transform: `rotate(${deg}deg)` }}
                >
                  <div
                    className={`w-[1.5px] ${
                      isDanger ? "h-3 bg-rose-500 shadow-[0_0_8px_#F43F5E]" : "h-2 bg-white/20"
                    }`}
                  />
                </div>
              );
            })}
          </div>

          {/* Center Needle Base */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white shadow-[0_0_18px_#F43F5E] flex items-center justify-center z-10">
            <div className="w-2 h-2 rounded-full bg-[#070709]" />
          </div>

          {/* Dynamic Needle */}
          <div
            className="absolute bottom-3 left-1/2 origin-bottom w-[2.5px] h-20 bg-gradient-to-t from-white to-rose-500 shadow-[0_0_14px_#F43F5E] rounded-full will-change-transform"
            style={{ transform: `rotate(${needleAngle}deg) translateX(-50%)` }}
          />
        </div>

        {/* Warning Alert Badge Below Gauge */}
        <div className="mt-3 flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-rose-500/20 border border-rose-500/60 text-rose-300 text-xs font-bold font-mono shadow-[0_0_20px_rgba(244,63,94,0.5)] animate-bounce">
          <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
          <span>WARNING !</span>
        </div>
      </div>

      {/* Text Info */}
      <div className="mt-4 z-10">
        <h3 className="text-xl font-bold text-white tracking-tight">AI Risk Detector</h3>
        <p className="mt-2 text-xs text-gray-400 leading-relaxed max-w-sm">
          Identify signals of rug pulls, pump-and-dump patterns, and high-risk asset anomalies in
          real-time.
        </p>
      </div>
    </div>
  );
}
