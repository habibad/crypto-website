"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import HeroUnfoldingGrid from "./HeroUnfoldingGrid";
import HeroVideoPreloader from "./HeroVideoPreloader";

export default function HeroSection() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [preloaderActive, setPreloaderActive] = useState(true);
  const [replayCount] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <section className="relative w-full flex flex-col items-center overflow-visible select-none">

      {preloaderActive && (
        <HeroVideoPreloader
          key={replayCount}
          onPreloaderTransitionStart={() => {}}
          onPreloaderComplete={() => setPreloaderActive(false)}
          isReplaying={replayCount > 0}
        />
      )}

      {/* ═══════════════════════════
          ATMOSPHERIC NEBULA BACKGROUND LAYER
          Exact half-round parabolic celestial ring + corner flares
          Left: deep magenta/rose atmospheric nebula
          Right: luminous white-pink stellar burst flare
          Center: dark void framing headline
      ═══════════════════════════ */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
      >
        {/* ── Left atmospheric nebula flare ── */}
        <div
          className="absolute -top-16 -left-16 w-[45%] h-[520px]"
          style={{
            background:
              "radial-gradient(ellipse at 12% 20%, rgba(245, 55, 155, 0.72) 0%, rgba(205, 30, 125, 0.5) 30%, rgba(120, 15, 85, 0.22) 58%, transparent 75%)",
            filter: "blur(48px)",
          }}
        />

        {/* ── Right atmospheric stellar burst (white-pink core) ── */}
        <div
          className="absolute -top-16 -right-16 w-[45%] h-[520px]"
          style={{
            background:
              "radial-gradient(ellipse at 88% 18%, rgba(255, 255, 255, 0.92) 0%, rgba(255, 150, 215, 0.8) 18%, rgba(235, 45, 140, 0.55) 38%, rgba(140, 18, 95, 0.22) 60%, transparent 75%)",
            filter: "blur(42px)",
          }}
        />

        {/* ── Exact Half-Round Parabolic Aurora Arc (Cubic Bezier) ── */}
        <svg
          aria-hidden
          className="absolute top-0 left-0 w-full h-[520px] pointer-events-none"
          viewBox="0 0 1440 520"
          preserveAspectRatio="none"
          fill="none"
        >
          <defs>
            <linearGradient id="auroraBandGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#e82f8a" stopOpacity="0.95" />
              <stop offset="22%" stopColor="#d12078" stopOpacity="0.82" />
              <stop offset="50%" stopColor="#9a1560" stopOpacity="0.55" />
              <stop offset="78%" stopColor="#d12078" stopOpacity="0.82" />
              <stop offset="92%" stopColor="#ff70bb" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.92" />
            </linearGradient>

            <linearGradient id="auroraCoreGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ff75bf" stopOpacity="0.85" />
              <stop offset="25%" stopColor="#e82b85" stopOpacity="0.7" />
              <stop offset="50%" stopColor="#b5186b" stopOpacity="0.48" />
              <stop offset="75%" stopColor="#ff75bf" stopOpacity="0.8" />
              <stop offset="95%" stopColor="#ffffff" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.95" />
            </linearGradient>

            <filter id="blurUltra" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="55" />
            </filter>
            <filter id="blurMedium" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="26" />
            </filter>
            <filter id="blurSharp" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="10" />
            </filter>
          </defs>

          {/* Ambient wide diffuse atmospheric band */}
          <path
            d="M -60 70 C 260 220, 520 380, 720 380 C 920 380, 1180 220, 1500 70"
            stroke="url(#auroraBandGrad)"
            strokeWidth="150"
            fill="none"
            filter="url(#blurUltra)"
            opacity="0.92"
          />

          {/* Vibrant luminous body arc */}
          <path
            d="M -50 65 C 260 215, 520 375, 720 375 C 920 375, 1180 215, 1490 65"
            stroke="url(#auroraCoreGrad)"
            strokeWidth="65"
            fill="none"
            filter="url(#blurMedium)"
            opacity="0.82"
          />

          {/* Core luminous ribbon */}
          <path
            d="M -40 60 C 260 210, 520 370, 720 370 C 920 370, 1180 210, 1480 60"
            stroke="url(#auroraCoreGrad)"
            strokeWidth="20"
            fill="none"
            filter="url(#blurSharp)"
            opacity="0.75"
          />
        </svg>

        {/* ── Center dark celestial void ── frames the headline text */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[52%] h-[320px]"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, #05040a 0%, rgba(7, 5, 15, 0.75) 50%, transparent 80%)",
            filter: "blur(25px)",
          }}
        />
      </div>

      {/* ═══════════════════════════
          HERO TEXT BLOCK
      ═══════════════════════════ */}
      <div className="relative z-10 w-full flex flex-col items-center text-center pt-12 pb-6 px-4">

        {/* Headline — Light, elegant, modern sans-serif matching Reference Image 2 */}
        <h1
          className="font-light text-white leading-[1.12] tracking-[-0.015em] max-w-[660px]"
          style={{ fontSize: "clamp(36px, 4.2vw, 56px)" }}
        >
          Invest Crypto Smarter
          <span className="block">With AI Assistant</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-3.5 text-[13.5px] sm:text-[14.5px] text-[#9ca3af] font-light leading-relaxed max-w-[520px]">
          Explore market opportunities and grow your portfolio with AI insights.
        </p>

        {/* ── Unified Email Subscribe Pill Capsule (matching red-annotated circle) ── */}
        <form
          onSubmit={handleSubmit}
          className="mt-6.5 flex items-center justify-between w-full max-w-[460px] h-[46px] p-1 rounded-full border border-white/[0.12] bg-[#120e20]/90 backdrop-blur-md shadow-[0_6px_25px_rgba(0,0,0,0.5)]"
        >
          {/* Input field inside pill */}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email here"
            className="flex-1 bg-transparent px-4 sm:px-5 text-[12.5px] sm:text-[13px] text-white placeholder-[#6b7280] focus:outline-none"
            required
          />

          {/* Button pill nested seamlessly inside capsule */}
          <button
            type="submit"
            className="flex-shrink-0 flex items-center gap-1.5 h-[38px] px-5 sm:px-6 rounded-full text-[12.5px] font-medium text-white cursor-pointer whitespace-nowrap transition-all hover:brightness-110 active:scale-95 shadow-[0_0_20px_rgba(219,50,136,0.45)] hover:shadow-[0_0_28px_rgba(219,50,136,0.65)]"
            style={{
              background: "linear-gradient(90deg, #8326d9 0%, #db3288 100%)",
            }}
          >
            <span>{subscribed ? "Subscribed!" : "Subscribe For Free"}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>

      {/* ═══════════════════════════
          BENTO CARD GRID
          Overflows frame on left/right for the 3D floating effect
      ═══════════════════════════ */}
      <HeroUnfoldingGrid />
    </section>
  );
}
