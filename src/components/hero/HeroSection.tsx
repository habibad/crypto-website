"use client";

import React, { useState } from "react";
import { ArrowRight, Mail, Sparkles } from "lucide-react";
import HeroUnfoldingGrid from "./HeroUnfoldingGrid";

export default function HeroSection() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <section className="relative w-full pt-32 md:pt-40 flex flex-col items-center justify-start overflow-visible">
      {/* Dynamic Overhead Glowing Nebula Arch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[450px] bg-gradient-to-b from-[#E03E99]/25 via-[#7928CA]/20 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Hero Header Content */}
      <div className="max-w-4xl mx-auto px-4 text-center z-10 flex flex-col items-center">
        {/* Subtle pill tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-pink-300 backdrop-blur-md mb-6 shadow-inner">
          <Sparkles className="w-3.5 h-3.5 text-[#E03E99]" />
          <span>Quantra AI 2.0 Engine Live</span>
        </div>

        {/* Primary Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-white leading-[1.1] max-w-3xl">
          Invest Crypto Smarter{" "}
          <span className="font-medium text-gradient-neon block sm:inline">
            With AI Assistant
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-lg text-gray-400 max-w-xl font-normal leading-relaxed">
          Explore market opportunities and grow your portfolio with AI insights, automated risk
          scoring, and multi-chain telemetry.
        </p>

        {/* Glass Email Subscription Bar */}
        <form
          onSubmit={handleSubmit}
          className="mt-8 w-full max-w-md p-1.5 rounded-full glass-panel border border-white/15 shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-center justify-between gap-2 transition-all focus-within:border-[#E03E99]/60 focus-within:shadow-[0_0_25px_rgba(224,62,153,0.3)]"
        >
          <div className="flex items-center gap-2.5 pl-4 flex-1">
            <Mail className="w-4 h-4 text-gray-400 flex-shrink-0" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email here"
              className="w-full bg-transparent text-sm text-white placeholder-gray-500 focus:outline-none"
              required
            />
          </div>
          <button
            type="submit"
            className="px-5 py-2.5 rounded-full btn-gradient-neon text-xs font-semibold flex items-center gap-1.5 flex-shrink-0 cursor-pointer"
          >
            <span>{subscribed ? "Subscribed!" : "Subscribe For Free"}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>

      {/* GSAP Unfolding Grid Section */}
      <HeroUnfoldingGrid />
    </section>
  );
}
