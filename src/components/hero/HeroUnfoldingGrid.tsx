"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import WeeklyBalanceCard from "./WeeklyBalanceCard";
import SecuredEcosystemCard from "./SecuredEcosystemCard";
import QuoteCard from "./QuoteCard";
import InvestmentGaugeCard from "./InvestmentGaugeCard";
import WalletSelectorCard from "./WalletSelectorCard";
import CoinCard from "./CoinCard";
import GoalsTelemetryCard from "./GoalsTelemetryCard";
import ProcessingStatusCard from "./ProcessingStatusCard";
import CyberpunkAvatarCard from "./CyberpunkAvatarCard";
import SwipeToSendCard from "./SwipeToSendCard";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HeroUnfoldingGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const gridWrapperRef = useRef<HTMLDivElement>(null);
  const centerCoinRef = useRef<HTMLDivElement>(null);

  // Left Module references
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const card4Ref = useRef<HTMLDivElement>(null);

  // Center auxiliary
  const card5Ref = useRef<HTMLDivElement>(null);

  // Right Module references
  const card7Ref = useRef<HTMLDivElement>(null);
  const card8Ref = useRef<HTMLDivElement>(null);
  const card9Ref = useRef<HTMLDivElement>(null);
  const card10Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !gridWrapperRef.current) return;

    const ctx = gsap.context(() => {
      // Set Initial Macro-Zoom Close-up State (Focused tightly on central AXR coin at scale: 2.4)
      gsap.set(gridWrapperRef.current, {
        scale: 2.4,
        transformOrigin: "center center",
      });

      const surroundingCards = [
        card1Ref.current,
        card2Ref.current,
        card3Ref.current,
        card4Ref.current,
        card5Ref.current,
        card7Ref.current,
        card8Ref.current,
        card9Ref.current,
        card10Ref.current,
      ].filter(Boolean);

      // Initial state: blur and hidden with inward translation
      gsap.set(surroundingCards, {
        opacity: 0,
        filter: "blur(12px)",
        scale: 0.85,
      });

      // Left cards start translated rightwards (inward)
      gsap.set([card1Ref.current, card2Ref.current, card3Ref.current, card4Ref.current], {
        x: 60,
      });
      // Right cards start translated leftwards (inward)
      gsap.set([card7Ref.current, card8Ref.current, card9Ref.current, card10Ref.current], {
        x: -60,
      });
      // Center bottom card starts translated upwards
      gsap.set(card5Ref.current, {
        y: -40,
      });

      // GSAP Scrubbing Timeline pinned on scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=1200",
          pin: true,
          scrub: 1.2,
          anticipatePin: 1,
        },
      });

      // 1. Smoothly pull camera back from scale 2.4 to 1.0
      tl.to(
        gridWrapperRef.current,
        {
          scale: 1.0,
          ease: "power2.out",
          duration: 1.5,
        },
        0
      );

      // 2. Unblur, fade in, and translate surrounding cards outward into position
      tl.to(
        surroundingCards,
        {
          opacity: 1,
          filter: "blur(0px)",
          scale: 1.0,
          x: 0,
          y: 0,
          stagger: 0.05,
          ease: "power2.out",
          duration: 1.3,
        },
        0.2
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-screen flex items-center justify-center pt-8 pb-16 overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-gradient-to-r from-[#7928CA]/20 via-[#E03E99]/15 to-[#7928CA]/20 rounded-full blur-[140px] pointer-events-none" />

      {/* Grid Container */}
      <div
        ref={gridWrapperRef}
        className="w-full max-w-[1280px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 items-start will-change-transform"
      >
        {/* COLUMN 1: LEFT MODULES */}
        <div className="flex flex-col gap-4">
          <div ref={card1Ref} className="will-change-transform">
            <WeeklyBalanceCard />
          </div>
          <div ref={card2Ref} className="will-change-transform">
            <SecuredEcosystemCard />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div ref={card3Ref} className="will-change-transform">
              <QuoteCard />
            </div>
            <div ref={card4Ref} className="will-change-transform">
              <InvestmentGaugeCard />
            </div>
          </div>
        </div>

        {/* COLUMN 2: CENTER MODULES (Central AXR 3D Card + Wallet) */}
        <div className="flex flex-col gap-4">
          <div ref={centerCoinRef} className="z-20">
            <CoinCard />
          </div>
          <div ref={card5Ref} className="will-change-transform">
            <WalletSelectorCard />
          </div>
        </div>

        {/* COLUMN 3: RIGHT MODULES */}
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div ref={card8Ref} className="sm:col-span-1 will-change-transform">
              <ProcessingStatusCard />
            </div>
            <div ref={card9Ref} className="sm:col-span-2 will-change-transform">
              <CyberpunkAvatarCard />
            </div>
          </div>
          <div ref={card7Ref} className="will-change-transform">
            <GoalsTelemetryCard />
          </div>
          <div ref={card10Ref} className="will-change-transform">
            <SwipeToSendCard />
          </div>
        </div>
      </div>
    </div>
  );
}
