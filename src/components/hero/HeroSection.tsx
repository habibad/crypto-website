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

      {/* ══════════════════════════════════════════════════════
          ATMOSPHERIC CELESTIAL AURORA ARC & CORNER SPOTLIGHTS
          Exact match with Reference Image 1:
          - Deep pitch-black void at top center behind headline
          - Brilliant, wide luminous spotlights emanating from top-left and top-right
          - Smoothly tapering down into a delicate, thinner ("chikom") and lighter ("halka") arc in the center
      ══════════════════════════════════════════════════════ */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
      >
        {/* ── 1. Left Corner Radiant Spotlight & Plume (Fills top-left with radiant glow) ── */}
        {/* Deep ambient rose/magenta background glow */}
        <div
          className="absolute -top-16 -left-16 w-[52%] h-[520px]"
          style={{
            background:
              "radial-gradient(ellipse 90% 80% at 10% 12%, rgba(244, 63, 142, 0.75) 0%, rgba(219, 39, 119, 0.52) 22%, rgba(159, 18, 57, 0.28) 45%, rgba(90, 10, 45, 0.1) 65%, transparent 80%)",
            filter: "blur(42px)",
          }}
        />
        {/* Angled light cone angling downwards-inwards */}
        <div
          className="absolute -top-10 -left-10 w-[42%] h-[380px]"
          style={{
            background:
              "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 190, 225, 0.85) 15%, rgba(244, 63, 142, 0.6) 35%, rgba(190, 24, 93, 0.25) 58%, transparent 78%)",
            filter: "blur(28px)",
          }}
        />
        {/* Hot white corner pinnacle */}
        <div
          className="absolute -top-6 -left-6 w-[26%] h-[240px]"
          style={{
            background:
              "radial-gradient(circle at 14% 14%, #ffffff 0%, rgba(255, 220, 240, 0.95) 25%, rgba(255, 140, 195, 0.55) 50%, transparent 75%)",
            filter: "blur(16px)",
          }}
        />

        {/* ── 2. Right Corner Radiant Spotlight & Plume (Fills top-right with radiant glow) ── */}
        {/* Deep ambient rose/magenta background glow */}
        <div
          className="absolute -top-16 -right-16 w-[52%] h-[520px]"
          style={{
            background:
              "radial-gradient(ellipse 90% 80% at 90% 12%, rgba(244, 63, 142, 0.75) 0%, rgba(219, 39, 119, 0.52) 22%, rgba(159, 18, 57, 0.28) 45%, rgba(90, 10, 45, 0.1) 65%, transparent 80%)",
            filter: "blur(42px)",
          }}
        />
        {/* Angled light cone angling downwards-inwards */}
        <div
          className="absolute -top-10 -right-10 w-[42%] h-[380px]"
          style={{
            background:
              "linear-gradient(225deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 190, 225, 0.85) 15%, rgba(244, 63, 142, 0.6) 35%, rgba(190, 24, 93, 0.25) 58%, transparent 78%)",
            filter: "blur(28px)",
          }}
        />
        {/* Hot white corner pinnacle */}
        <div
          className="absolute -top-6 -right-6 w-[26%] h-[240px]"
          style={{
            background:
              "radial-gradient(circle at 86% 14%, #ffffff 0%, rgba(255, 220, 240, 0.95) 25%, rgba(255, 140, 195, 0.55) 50%, transparent 75%)",
            filter: "blur(16px)",
          }}
        />

        {/* ── 3. Smooth Tapered Celestial Arc (Thick at corners, Soft & Thin in middle) ── */}
        <svg
          aria-hidden
          className="absolute top-0 left-0 w-full h-[460px] pointer-events-none"
          viewBox="0 0 1440 460"
          preserveAspectRatio="none"
          fill="none"
        >
          <defs>
            {/* Volumetric Diffuse Arc Gradient */}
            <linearGradient id="taperedArcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="8%" stopColor="#ffc2df" stopOpacity="0.95" />
              <stop offset="18%" stopColor="#f43f8e" stopOpacity="0.85" />
              <stop offset="32%" stopColor="#db2777" stopOpacity="0.55" />
              <stop offset="44%" stopColor="#be185d" stopOpacity="0.35" />
              <stop offset="50%" stopColor="#f43f8e" stopOpacity="0.3" />
              <stop offset="56%" stopColor="#be185d" stopOpacity="0.35" />
              <stop offset="68%" stopColor="#db2777" stopOpacity="0.55" />
              <stop offset="82%" stopColor="#f43f8e" stopOpacity="0.85" />
              <stop offset="92%" stopColor="#ffc2df" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
            </linearGradient>

            {/* Inner Crest Core Highlight Gradient */}
            <linearGradient id="crestHighlightGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="10%" stopColor="#ffe4f2" stopOpacity="0.9" />
              <stop offset="25%" stopColor="#f472b6" stopOpacity="0.55" />
              <stop offset="42%" stopColor="#fb7185" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#fb7185" stopOpacity="0.12" />
              <stop offset="58%" stopColor="#fb7185" stopOpacity="0.2" />
              <stop offset="75%" stopColor="#f472b6" stopOpacity="0.55" />
              <stop offset="90%" stopColor="#ffe4f2" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
            </linearGradient>

            {/* Soft Gaussian Blurs */}
            <filter id="blurWideArc" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="38" />
            </filter>
            <filter id="blurMidArc" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="20" />
            </filter>
            <filter id="blurSharpCrest" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="7" />
            </filter>
          </defs>

          {/* 1. Volumetric Tapered Filled Arc Ribbon:
              Thick at edges (~190px height), Narrow & thin at center dip (~42px height) */}
          <path
            d="M -40 -15 C 260 75, 500 235, 720 235 C 940 235, 1180 75, 1480 -15 L 1480 160 C 1180 170, 940 270, 720 270 C 500 270, 260 170, -40 160 Z"
            fill="url(#taperedArcGrad)"
            filter="url(#blurWideArc)"
            opacity="0.92"
          />

          {/* 2. Saturated Mid Arc Body */}
          <path
            d="M -40 -5 C 260 80, 500 236, 720 236 C 940 236, 1180 80, 1480 -5 L 1480 100 C 1180 130, 940 260, 720 260 C 500 260, 260 130, -40 100 Z"
            fill="url(#taperedArcGrad)"
            filter="url(#blurMidArc)"
            opacity="0.8"
          />

          {/* 3. Refined Upper Crest Highlight Stroke */}
          <path
            d="M -40 -10 C 260 78, 500 234, 720 234 C 940 234, 1180 78, 1480 -10"
            stroke="url(#crestHighlightGrad)"
            strokeWidth="12"
            strokeLinecap="round"
            fill="none"
            filter="url(#blurSharpCrest)"
            opacity="0.85"
          />

          {/* ── Twinkling Celestial Stars matching Reference Image 1 ── */}
          {/* Left Wing Stars */}
          <circle cx="110" cy="75" r="1.7" fill="#ffffff" opacity="0.95" />
          <circle cx="190" cy="135" r="1.3" fill="#ffd5ed" opacity="0.8" />
          <circle cx="290" cy="60" r="1.9" fill="#ffffff" opacity="0.95" />
          <circle cx="370" cy="160" r="1.4" fill="#ffffff" opacity="0.75" />

          {/* Center Dark Void Stars (Clean, sharp and sparse) */}
          <circle cx="540" cy="45" r="1.3" fill="#ffffff" opacity="0.9" />
          <circle cx="720" cy="28" r="1.9" fill="#ffffff" opacity="1" />
          <circle cx="900" cy="40" r="1.4" fill="#ffffff" opacity="0.85" />
          <circle cx="730" cy="115" r="1.2" fill="#ffd1e8" opacity="0.75" />

          {/* Right Wing Stars */}
          <circle cx="1080" cy="150" r="1.4" fill="#ffd5ed" opacity="0.8" />
          <circle cx="1160" cy="65" r="1.9" fill="#ffffff" opacity="0.95" />
          <circle cx="1270" cy="125" r="1.4" fill="#ffffff" opacity="0.85" />
          <circle cx="1360" cy="80" r="2" fill="#ffffff" opacity="1" />

          {/* Lower Floating Stars */}
          <circle cx="260" cy="305" r="1.4" fill="#ffffff" opacity="0.7" />
          <circle cx="450" cy="320" r="1.1" fill="#ffb4dc" opacity="0.6" />
          <circle cx="1000" cy="325" r="1.2" fill="#ffd1e8" opacity="0.65" />
          <circle cx="1210" cy="305" r="1.5" fill="#ffffff" opacity="0.75" />
        </svg>

        {/* ── 4. Deep Pitch-Black Top-Center Contrast Shield ── */}
        {/* Ensures upper center behind headline remains pitch black */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[64%] h-[210px]"
          style={{
            background:
              "radial-gradient(ellipse 65% 75% at 50% 0%, #050409 0%, #050409 45%, rgba(5, 4, 9, 0.85) 68%, transparent 100%)",
            filter: "blur(14px)",
          }}
        />

        {/* ── 5. Bottom Vignette Shadow to cleanly separate email & grid ── */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[100px]"
          style={{
            background: "linear-gradient(to top, #050409 20%, rgba(5, 4, 9, 0.7) 60%, transparent 100%)",
          }}
        />
      </div>

      {/* ══════════════════════════════════════════════════════
          HERO TEXT & EMAIL SUBSCRIPTION BLOCK (MATCHING REFERENCE IMAGE 2)
      ══════════════════════════════════════════════════════ */}
      <div className="relative z-10 w-full flex flex-col items-center text-center pt-8 sm:pt-10 pb-4 px-4">

        {/* Headline — Light, elegant, modern geometric typography matching Reference Image 2 */}
        <h1
          className="text-white leading-[1.12] tracking-[-0.02em] max-w-[760px]"
          style={{
            fontFamily: "var(--font-outfit), var(--font-sans), sans-serif",
            fontSize: "clamp(42px, 4.8vw, 62px)",
            fontWeight: 400,
            letterSpacing: "-0.02em",
          }}
        >
          Invest Crypto Smarter
          <span className="block font-light text-white/95">With AI Assistant</span>
        </h1>

        {/* Subtitle */}
        <p
          className="mt-3.5 text-[15px] sm:text-[16px] text-[#a1a7b8] leading-relaxed max-w-[580px]"
          style={{
            fontFamily: "var(--font-outfit), var(--font-sans), sans-serif",
            fontWeight: 300,
          }}
        >
          Explore market opportunities and grow your portfolio with AI insights.
        </p>

        {/* ── Unified Email Subscribe Pill Capsule (matching Reference Image 2) ── */}
        <form
          onSubmit={handleSubmit}
          className="mt-6 flex items-center justify-between w-full max-w-[460px] h-[48px] p-1.5 rounded-full border border-white/[0.12] bg-[#120e1d]/90 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.7)]"
        >
          {/* Input field inside pill */}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email here"
            className="flex-1 bg-transparent px-4 sm:px-5 text-[13.5px] text-white placeholder-[#717888] focus:outline-none"
            style={{
              fontFamily: "var(--font-outfit), var(--font-sans), sans-serif",
              fontWeight: 300,
            }}
            required
          />

          {/* Button pill nested seamlessly inside capsule */}
          <button
            type="submit"
            className="flex-shrink-0 flex items-center gap-1.5 h-[38px] px-5 sm:px-6 rounded-full text-[12.5px] font-medium text-white cursor-pointer whitespace-nowrap transition-all hover:brightness-110 active:scale-95 shadow-[0_0_20px_rgba(219,50,136,0.45)] hover:shadow-[0_0_28px_rgba(219,50,136,0.65)]"
            style={{
              background: "linear-gradient(90deg, #7c3aed 0%, #db2777 100%)",
              fontFamily: "var(--font-outfit), var(--font-sans), sans-serif",
            }}
          >
            <span>{subscribed ? "Subscribed!" : "Subscribe For Free"}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>

      {/* ══════════════════════════════════════════════════════
          BENTO CARD GRID (MATCHING REFERENCE IMAGE 2)
      ══════════════════════════════════════════════════════ */}
      <HeroUnfoldingGrid />
    </section>
  );
}
