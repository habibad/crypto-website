"use client";

import React, { useState } from "react";
import { ChevronRight, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface InsightItem {
  id: number;
  title: string;
  date?: string;
  summary?: string;
}

export default function InsightsAccordion() {
  // Default open state on index 2 (item 3: "30 Aug 2025 | Rebalancing in Real-Time")
  const [openIndex, setOpenIndex] = useState<number | null>(2);

  const items: InsightItem[] = [
    {
      id: 0,
      title: "Quantisync's leap in DeFi intelligence",
      date: "14 Sep 2025",
      summary:
        "Exploring how asynchronous neural state synchronization provides millisecond-level advantage across decentralized liquidity pools.",
    },
    {
      id: 1,
      title: "NeuronVault's edge on volatility detection",
      date: "05 Sep 2025",
      summary:
        "A deep dive into statistical variance clustering models predicting flash liquidations 45 seconds prior to order book cascading.",
    },
    {
      id: 2,
      title: "Rebalancing in Real-Time",
      date: "30 Aug 2025",
      summary:
        "An enterprise client shares how Quantra's AI module prevented major losses during a flash crash.",
    },
    {
      id: 3,
      title: "Metabridge: Scaling cross-chain analytics",
      date: "21 Aug 2025",
      summary:
        "Architecting unified graph neural networks across Ethereum, Solana, and Layer 2 rollups without RPC bottlenecks.",
    },
    {
      id: 4,
      title: "SentinelAI's integration with institutional desks",
      date: "12 Aug 2025",
      summary:
        "Standardizing automated risk metrics and counterparty health indicators for regulated OTC trading entities.",
    },
  ];

  return (
    <section className="relative w-full py-24 px-4 max-w-7xl mx-auto flex flex-col items-center">
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column Header */}
        <div className="lg:col-span-5 flex flex-col justify-between h-full">
          <div>
            <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight leading-tight">
              Our Logs & <br />
              <span className="font-normal text-gradient-neon">Insights</span>
            </h2>
            <p className="mt-4 text-sm text-gray-400 max-w-sm font-normal leading-relaxed">
              Read the latest breakthroughs from our quantitative research laboratory, machine
              learning models, and market intelligence archives.
            </p>
          </div>

          <div className="mt-12 text-xs font-mono text-pink-300/80 tracking-wider uppercase">
            10K+ Crypto Assets Insight
          </div>
        </div>

        {/* Right Column Expandable Accordion List */}
        <div className="lg:col-span-7 flex flex-col divide-y divide-white/10 border-y border-white/10">
          {items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={item.id}
                layout
                className="py-6 transition-colors duration-200"
              >
                {/* Header Row */}
                <div
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex items-center justify-between cursor-pointer group select-none"
                >
                  <div className="flex flex-col">
                    {isOpen && item.date && (
                      <span className="text-[11px] font-mono text-gray-400 mb-1">
                        {item.date}
                      </span>
                    )}
                    <h3
                      className={`text-base sm:text-lg font-medium transition-colors ${
                        isOpen ? "text-white font-semibold" : "text-gray-300 group-hover:text-white"
                      }`}
                    >
                      {item.title}
                    </h3>
                  </div>

                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center border transition-all ${
                      isOpen
                        ? "bg-[#E03E99]/20 border-[#E03E99] text-[#E03E99] rotate-90"
                        : "bg-white/5 border-white/10 text-gray-400 group-hover:border-white/30 group-hover:text-white"
                    }`}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Expanded Content with Framer Motion */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="mt-3 text-xs sm:text-sm text-gray-400 leading-relaxed max-w-xl">
                        {item.summary}
                      </p>

                      <div className="mt-5">
                        <button className="px-4 py-2 rounded-full glass-card border border-white/15 text-xs font-semibold text-white hover:border-[#E03E99]/60 flex items-center gap-1.5 transition-all shadow-md group/btn cursor-pointer">
                          <span>Read More</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
