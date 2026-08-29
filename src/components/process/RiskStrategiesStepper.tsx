"use client";

import React, { useState, useEffect, useRef } from "react";
import { Scan, BrainCircuit, Send, TrendingUp, ChevronsRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function RiskStrategiesStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const steps = [
    {
      id: 0,
      title: "Scan the Market",
      desc: "Analyze more than 500 cryptocurrency and token assets in real-time.",
      icon: Scan,
      gradient: "from-[#E03E99] to-[#7928CA]",
    },
    {
      id: 1,
      title: "Predictive Modeling",
      desc: "Neural networks predict market trends with an 85% accuracy exceeding.",
      icon: BrainCircuit,
      gradient: "from-[#7928CA] to-[#38bdf8]",
    },
    {
      id: 2,
      title: "Signal Delivery",
      desc: "Receive AI-driven Buy/Hold/Sell alerts through app, email, Telegram and our Community.",
      icon: Send,
      gradient: "from-[#E03E99] to-[#F43F5E]",
    },
    {
      id: 3,
      title: "Optimization",
      desc: "Your dashboard evolves and tailors itself to your strategic preferences over time.",
      icon: TrendingUp,
      gradient: "from-[#10B981] to-[#7928CA]",
    },
  ];

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];

      gsap.set(cards, {
        opacity: 0,
        y: 40,
        scale: 0.92,
        filter: "blur(10px)",
      });

      // 1. Staggered reveal timeline on scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 30%",
          scrub: 1.0,
          onUpdate: (self) => {
            // Dynamically transition active step from 0 to 3 across scroll progress
            const stepIndex = Math.min(3, Math.floor(self.progress * 4));
            setActiveStep(stepIndex);
          },
        },
      });

      tl.to(cards, {
        opacity: 1,
        y: 0,
        scale: 1.0,
        filter: "blur(0px)",
        stagger: 0.15,
        ease: "power2.out",
        duration: 1.2,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full py-24 px-4 max-w-7xl mx-auto flex flex-col items-center"
    >
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight leading-tight">
          Strategies For Different <br />
          <span className="font-normal text-gradient-neon">Risk Appetites.</span>
        </h2>
      </div>

      {/* 4 Horizontal Steps Pipeline */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          const isActive = activeStep === idx;

          return (
            <div
              key={step.id}
              ref={(el) => {
                cardRefs.current[idx] = el;
              }}
              className="relative flex flex-col will-change-transform"
            >
              {/* Stepper Card */}
              <div
                onClick={() => setActiveStep(idx)}
                className={`glass-card rounded-3xl p-6 h-full flex flex-col justify-between cursor-pointer transition-all duration-300 relative group overflow-hidden ${
                  isActive
                    ? "border-[#E03E99] bg-[#161322]/90 shadow-[0_0_35px_rgba(224,62,153,0.35)] scale-[1.02]"
                    : "border-white/10 hover:border-white/20"
                }`}
              >
                {/* Top Glowing Ambient highlight if active */}
                {isActive && (
                  <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#E03E99]/35 rounded-full blur-2xl pointer-events-none" />
                )}

                <div>
                  {/* Step Icon Badge */}
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-all ${
                      isActive
                        ? "bg-gradient-to-tr from-[#E03E99] to-[#7928CA] text-white shadow-[0_0_20px_rgba(224,62,153,0.6)] scale-105"
                        : "bg-white/5 border border-white/10 text-gray-300 group-hover:text-white"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white tracking-tight mb-2">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-gray-400 leading-relaxed">{step.desc}</p>
                </div>

                {/* Step Index Number */}
                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-gray-400">
                  <span>STEP 0{idx + 1}</span>
                  {isActive && (
                    <div className="flex items-center gap-1 text-[#E03E99] font-bold">
                      <ChevronsRight className="w-3.5 h-3.5" />
                      <span>ACTIVE</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Step Connector Chevron Pill (Between cards on desktop) */}
              {idx < steps.length - 1 && (
                <div
                  className={`hidden lg:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full items-center justify-center transition-all ${
                    idx < activeStep
                      ? "bg-gradient-to-r from-[#E03E99] to-[#7928CA] shadow-[0_0_15px_rgba(224,62,153,0.8)] scale-110"
                      : "bg-[#1f1d2c] border border-white/10 text-gray-500"
                  } pointer-events-none`}
                >
                  <ChevronsRight className="w-4 h-4 text-white" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
