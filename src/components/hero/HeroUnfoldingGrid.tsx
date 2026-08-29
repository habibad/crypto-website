"use client";

import React from "react";
import WeeklyBalanceCard from "./WeeklyBalanceCard";
import SecuredEcosystemCard from "./SecuredEcosystemCard";
import QuoteCard from "./QuoteCard";
import InvestmentGaugeCard from "./InvestmentGaugeCard";
import WalletSelectorCard from "./WalletSelectorCard";
import CoinCard from "./CoinCard";
import GoalsTelemetryCard from "./GoalsTelemetryCard";
import ProcessingStatusCard from "./ProcessingStatusCard";
import CyberpunkAvatarCard from "./CyberpunkAvatarCard";
import TransactionRoutingCard from "./TransactionRoutingCard";
import SwipeToSendCard from "./SwipeToSendCard";

/**
 * REFERENCE LAYOUT ANALYSIS (pixel-measured):
 *
 * The card grid is WIDER than the hero frame — leftmost and rightmost
 * cards bleed outside the frame boundary (overflow-hidden clips them).
 * This creates the "3D floating dashboard" depth effect.
 *
 * Column structure (left → right):
 *  Col 1: Portfolio + Quote      → shifted DOWN ~mt-16 (starts lower than coin)
 *  Col 2: Secured + Investment   → shifted DOWN ~mt-16
 *  Col 3: Coin card (tall) + Wallet → starts at TOP (the elevated hero piece)
 *  Col 4: [PleaseWait | Avatar] + Goals + Transaction + Swipe
 *
 * Card heights (reference-proportional at 1200px viewport):
 *  Portfolio: ~130px, Quote: ~110px
 *  Secured: ~120px, Investment: ~120px
 *  Coin: ~235px, Wallet: ~120px
 *  PleaseWait: ~135px, Avatar: ~135px
 *  Goals: ~95px, Transaction: ~85px, Swipe: ~42px
 */

export default function HeroUnfoldingGrid() {
  return (
    <div className="relative w-full overflow-visible pt-1 pb-6">

      {/* Subtle perspective wireframe & circuit traces behind cards */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none -z-10 flex items-center justify-center overflow-hidden"
      >
        <div
          className="w-[140%] h-[460px] absolute top-20"
          style={{
            transform: "perspective(900px) rotateX(60deg)",
            backgroundImage:
              "linear-gradient(to right, rgba(224,62,153,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(117,88,236,0.08) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 50%, #000 40%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 50% 50%, #000 40%, transparent 100%)",
            opacity: 0.5,
          }}
        />
      </div>

      {/* ══════════════════════════════════════════════════════
          5-COLUMN DASHBOARD COMPOSITION (EXPANSIVE 1536PX BASIS LAYOUT)
          (MATCHING REFERENCE IMAGE 1:1 WITH WIDE SPACING & EDGE-TO-EDGE SVG)
      ══════════════════════════════════════════════════════ */}
      <div className="w-full max-w-[1490px] mx-auto px-6 sm:px-4 py-4 relative">

        {/* ── PROFESSIONAL LUXURY 3D WIREFRAME BOXES & NEON MATRIX (EDGE TO EDGE) ── */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible"
          viewBox="0 0 1490 500"
          preserveAspectRatio="none"
          fill="none"
        >
          {/* ── 1. LEFT ISOMETRIC CORRIDOR (ENTRANCE FROM FAR LEFT FRAME WALL) ── */}
          <path
            d="M 0 160 L 45 160 L 85 200 L 270 200"
            stroke="#b8236d"
            strokeWidth="1.2"
            strokeOpacity="0.55"
          />
          <circle cx="85" cy="200" r="2.5" fill="#b8236d" fillOpacity="0.8" />

          {/* ── 2. COLUMN 2 DOCKING WIREFRAME BOXES (PROTRUDING ABOVE SECURED CARD) ── */}
          {/* Vertical guide rails rising behind Column 2 */}
          <line x1="285" y1="0" x2="285" y2="460" stroke="#b8236d" strokeWidth="0.8" strokeOpacity="0.25" strokeDasharray="3 3" />
          <line x1="580" y1="0" x2="580" y2="460" stroke="#b8236d" strokeWidth="0.8" strokeOpacity="0.25" strokeDasharray="3 3" />

          {/* Box 1 (Left slot above Secured Card) */}
          <rect
            x="300"
            y="5"
            width="125"
            height="90"
            rx="10"
            stroke="#b8236d"
            strokeWidth="1.2"
            strokeOpacity="0.45"
            fill="rgba(184,35,109,0.015)"
          />

          {/* Box 2 (Right slot above Secured Card) */}
          <rect
            x="440"
            y="5"
            width="125"
            height="90"
            rx="10"
            stroke="#b8236d"
            strokeWidth="1.2"
            strokeOpacity="0.45"
            fill="rgba(184,35,109,0.015)"
          />

          {/* Connecting top bar */}
          <line x1="300" y1="5" x2="565" y2="5" stroke="#b8236d" strokeWidth="1.2" strokeOpacity="0.55" />
          <circle cx="300" cy="5" r="2" fill="#b8236d" fillOpacity="0.75" />
          <circle cx="565" cy="5" r="2" fill="#b8236d" fillOpacity="0.75" />

          {/* ── 3. COLUMN 3 CENTER ANCHOR VERTICAL GUIDE RAILS (ALEXANDRIA) ── */}
          <line x1="595" y1="-15" x2="595" y2="480" stroke="#7c3aed" strokeWidth="0.9" strokeOpacity="0.3" strokeDasharray="3 3" />
          <line x1="915" y1="-15" x2="915" y2="480" stroke="#7c3aed" strokeWidth="0.9" strokeOpacity="0.3" strokeDasharray="3 3" />
          <circle cx="595" cy="-10" r="2" fill="#7c3aed" fillOpacity="0.6" />
          <circle cx="915" cy="-10" r="2" fill="#7c3aed" fillOpacity="0.6" />

          {/* ── 4. COLUMN 4 DOCKING WIREFRAME BOX (ABOVE PLEASE WAIT CARD) ── */}
          <rect
            x="950"
            y="5"
            width="115"
            height="80"
            rx="10"
            stroke="#b8236d"
            strokeWidth="1.2"
            strokeOpacity="0.45"
            fill="rgba(184,35,109,0.015)"
          />
          <line x1="950" y1="5" x2="1065" y2="5" stroke="#b8236d" strokeWidth="1.2" strokeOpacity="0.55" />
          <circle cx="950" cy="5" r="2" fill="#b8236d" fillOpacity="0.75" />
          <circle cx="1065" cy="5" r="2" fill="#b8236d" fillOpacity="0.75" />

          {/* ── 5. COLUMN 5 3D PERSPECTIVE WIREFRAME ROOM (AROUND CYBERPUNK & ROUTING) ── */}
          {/* Top connecting ceiling rail from Col 4 across Col 5 */}
          <line x1="950" y1="5" x2="1470" y2="5" stroke="#b8236d" strokeWidth="1.2" strokeOpacity="0.45" />

          {/* Vertical left spine of Col 5 */}
          <line x1="1195" y1="5" x2="1195" y2="465" stroke="#7c3aed" strokeWidth="0.9" strokeOpacity="0.3" strokeDasharray="3 3" />
          <circle cx="1195" cy="5" r="2" fill="#7c3aed" fillOpacity="0.6" />

          {/* Vertical right spine of Col 5 */}
          <line x1="1470" y1="5" x2="1470" y2="465" stroke="#7c3aed" strokeWidth="1.2" strokeOpacity="0.45" />
          <circle cx="1470" cy="5" r="2.5" fill="#b8236d" fillOpacity="0.8" />

          {/* 3D Perspective angle shooting UP-RIGHT to the far right frame wall */}
          <path
            d="M 1470 5 L 1530 -25"
            stroke="#b8236d"
            strokeWidth="1.4"
            strokeOpacity="0.55"
          />
          <circle cx="1530" cy="-25" r="2.5" fill="#b8236d" fillOpacity="0.8" />

          {/* 3D Back-wall vertical line */}
          <line x1="1530" y1="-25" x2="1530" y2="415" stroke="#7c3aed" strokeWidth="1.2" strokeOpacity="0.38" />

          {/* 3D Perspective angle shooting DOWN-RIGHT to the far right frame wall */}
          <path
            d="M 1470 465 L 1530 415"
            stroke="#7c3aed"
            strokeWidth="1.4"
            strokeOpacity="0.45"
          />
          <circle cx="1470" cy="465" r="2.5" fill="#7c3aed" fillOpacity="0.75" />
          <circle cx="1530" cy="415" r="2.5" fill="#7c3aed" fillOpacity="0.75" />

          {/* Vertical trace down behind Swipe to Send */}
          <line x1="1215" y1="360" x2="1215" y2="465" stroke="#b8236d" strokeWidth="1" strokeOpacity="0.45" />
          <circle cx="1215" cy="465" r="2" fill="#b8236d" fillOpacity="0.7" />
        </svg>

        <div className="w-full relative z-10">
          <style jsx>{`
            .dashboard-5col {
              display: flex;
              flex-direction: column;
              gap: 16px;
            }
            @media (min-width: 768px) {
              .dashboard-5col {
                display: grid;
                grid-template-columns: repeat(2, minmax(0, 1fr));
                gap: 16px;
              }
            }
            @media (min-width: 1024px) {
              .dashboard-5col {
                display: grid;
                grid-template-columns: 1.05fr 1.25fr 1.35fr 1.05fr 1.15fr;
                gap: 16px;
                align-items: start;
              }
            }
          `}</style>

          <div className="dashboard-5col w-full">
            {/* ─── COLUMN 1: Portfolio + Quote (Far Left) ─── */}
            <div className="flex flex-col gap-3.5 lg:mt-3">
              <WeeklyBalanceCard />
              <QuoteCard />
            </div>

            {/* ─── COLUMN 2: Secured + Investment Gauge (Center-Left) ─── */}
            <div className="flex flex-col gap-3.5 lg:mt-3">
              <SecuredEcosystemCard />
              <InvestmentGaugeCard />
            </div>

            {/* ─── COLUMN 3: Alexandria (AXR) + Wallet Selector (Center Anchor) ─── */}
            <div className="flex flex-col gap-3.5 z-20">
              <CoinCard />
              <WalletSelectorCard />
            </div>

            {/* ─── COLUMN 4: Please Wait + Goals Telemetry (Center-Right) ─── */}
            <div className="flex flex-col gap-3.5 lg:mt-3">
              <ProcessingStatusCard />
              <GoalsTelemetryCard />
            </div>

            {/* ─── COLUMN 5: Cash Portfolio Avatar + Routing + Swipe (Far Right) ─── */}
            <div className="flex flex-col gap-3 lg:mt-2">
              <CyberpunkAvatarCard />
              <TransactionRoutingCard />
              <SwipeToSendCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
