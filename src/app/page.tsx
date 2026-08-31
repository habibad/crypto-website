"use client";

import React from "react";
import StarfieldCanvas from "@/components/3d/StarfieldCanvas";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/hero/HeroSection";
import AIProcessingHub from "@/components/ai-hub/AIProcessingHub";
import RiskStrategiesStepper from "@/components/process/RiskStrategiesStepper";
import OptimizedEngineMatrix from "@/components/engine/OptimizedEngineMatrix";
import PricingMatrix from "@/components/pricing/PricingMatrix";
import InsightsAccordion from "@/components/insights/InsightsAccordion";
import HighImpactCTA from "@/components/cta/HighImpactCTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    /* Outer wrapper: very dark bg like reference (almost black #060508) */
    <div className="w-full bg-[#060508] flex flex-col">

      {/* ── Navbar ── sits on the dark outer bg, NOT inside the hero frame */}
      <Navbar />

      {/* ── Hero Frame Container ── rounded dark card with 4px animated rotating gradient border */}
      <div className="w-full max-w-[1560px] mx-auto px-3 sm:px-6 lg:px-8 mb-16">
        <div className="relative w-full p-[4px] rounded-[36px] overflow-hidden shadow-[0_0_50px_rgba(219,39,119,0.22),0_25px_90px_rgba(0,0,0,0.85)] flex items-center justify-center">
          {/* Animated Continuous Rotating Conic Gradient Layer */}
          <div
            className="absolute -inset-[150%] w-[400%] h-[400%] animate-[spin_10s_linear_infinite] pointer-events-none"
            style={{
              background:
                "conic-gradient(from 0deg at 50% 50%, #f472b6 0deg, #a855f7 72deg, #3b82f6 144deg, #06b6d4 216deg, #ec4899 288deg, #f472b6 360deg)",
            }}
          />

          <div
            className="relative z-10 w-full overflow-hidden rounded-[32px] min-h-[calc(100vh-84px)] flex flex-col justify-between"
            style={{ background: "#050409" }}
          >
            {/* Starfield particle bg layer */}
            <StarfieldCanvas />

            {/* Hero section: aurora glow + headline + email + bento grid */}
            <HeroSection />
          </div>
        </div>
      </div>

      {/* ── Rest of page ── below the hero frame */}
      <main className="relative w-full bg-[#070709] text-gray-100 flex flex-col overflow-x-hidden">
        <AIProcessingHub />
        <RiskStrategiesStepper />
        <OptimizedEngineMatrix />
        <PricingMatrix />
        <InsightsAccordion />
        <HighImpactCTA />
        <Footer />
      </main>
    </div>
  );
}
