"use client";

import React from "react";
import PortfolioOptimizerCard from "./PortfolioOptimizerCard";
import CandlestickTrendsCard from "./CandlestickTrendsCard";
import MarketScannerCard from "./MarketScannerCard";
import RiskDetectorCard from "./RiskDetectorCard";

export default function OptimizedEngineMatrix() {
  return (
    <section className="relative w-full py-24 px-4 max-w-7xl mx-auto flex flex-col items-center">
      {/* Section Header */}
      <div className="w-full flex flex-col md:flex-row md:items-end justify-between mb-16">
        <div>
          <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight">
            The Optimized <br />
            <span className="font-normal text-gradient-neon">AI Engine</span>
          </h2>
        </div>
        <p className="text-sm text-gray-400 font-mono mt-4 md:mt-0 tracking-wider">
          crafted with precision.
        </p>
      </div>

      {/* 2x2 Matrix Grid */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PortfolioOptimizerCard />
        <CandlestickTrendsCard />
        <MarketScannerCard />
        <RiskDetectorCard />
      </div>
    </section>
  );
}
