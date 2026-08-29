"use client";

import React from "react";
import StarfieldCanvas from "@/components/3d/StarfieldCanvas";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/hero/HeroSection";
import CryptoOrbitArc from "@/components/orbit/CryptoOrbitArc";
import AIProcessingHub from "@/components/ai-hub/AIProcessingHub";
import RiskStrategiesStepper from "@/components/process/RiskStrategiesStepper";
import OptimizedEngineMatrix from "@/components/engine/OptimizedEngineMatrix";
import PricingMatrix from "@/components/pricing/PricingMatrix";
import InsightsAccordion from "@/components/insights/InsightsAccordion";
import HighImpactCTA from "@/components/cta/HighImpactCTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-[#070709] text-gray-100 flex flex-col overflow-x-hidden">
      {/* 3D Additive Starfield Particle Background */}
      <StarfieldCanvas />

      {/* Sticky Floating Navbar */}
      <Navbar />

      {/* 1. Hero Section with GSAP Macro-Zoom Unfolding Grid */}
      <HeroSection />

      {/* 2. Convex Curved Orbit Arc */}
      <CryptoOrbitArc />

      {/* 3. AI Processing Hub (Microchip & Orthogonal 90-Degree Circuit Traces) */}
      <AIProcessingHub />

      {/* 4. Risk Strategies Process Stepper Pipeline */}
      <RiskStrategiesStepper />

      {/* 5. The Optimized AI Engine 2x2 Matrix */}
      <OptimizedEngineMatrix />

      {/* 6. Pricing Matrix (3 Tiers with Pro Best Seller glow) */}
      <PricingMatrix />

      {/* 7. Interactive Logs & Insights Accordion */}
      <InsightsAccordion />

      {/* 8. High-Impact Nebula Call to Action */}
      <HighImpactCTA />

      {/* 9. Mega Footer with Giant QUANTRA Watermark */}
      <Footer />
    </main>
  );
}
