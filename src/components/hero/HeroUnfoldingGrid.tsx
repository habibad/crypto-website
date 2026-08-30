"use client";

import React from "react";
import WeeklyBalanceCard from "./WeeklyBalanceCard";
import SecuredEcosystemCard from "./SecuredEcosystemCard";
import QuoteCard from "./QuoteCard";
import InvestmentGaugeCard from "./InvestmentGaugeCard";
import WalletSelectorCard from "./WalletSelectorCard";
import CoinCard from "./CoinCard";
import ProcessingStatusCard from "./ProcessingStatusCard";
import WalletPortfolioTabsCard from "./WalletPortfolioTabsCard";
import GoalsTelemetryCard from "./GoalsTelemetryCard";
import CyberpunkAvatarCard from "./CyberpunkAvatarCard";
import TransactionRoutingCard from "./TransactionRoutingCard";
import SwipeToSendCard from "./SwipeToSendCard";

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
          5-COLUMN DASHBOARD COMPOSITION (EXACT MATCH WITH REFERENCE IMAGE 1 & 2)
          12 Flush, Gapless Cards with Grand Professional Viewport Proportions:
          - Col 1 (245px): [Box 1: Portfolio (205px)] + [Box 2: Quote (160px)]
          - Col 2 (285px): [Box 3: Secured (Wide & Flat 145px)] + [Box 4: Investment Style (Wide & Tall 200px)] (Staggered Down)
          - Col 3 (315px): [Box 5: Alexandria Coin (Tall Hero 305px)] + [Box 6: My Wallet (175px)] (Elevated Top y=0)
          - Col 4 (255px): [Box 7: Please Wait (185px)] + [Box 8: Tabs (Wide Pill 40px)] + [Box 9: Goals (135px)]
          - Col 5 (255px): [Box 10: Cyberpunk Avatar (195px)] + [Box 11: Routing (130px)] + [Box 12: Swipe (44px)]
      ══════════════════════════════════════════════════════ */}
      <div className="w-full max-w-[1440px] mx-auto px-2 sm:px-4 lg:px-6 py-3 relative">

        {/* ── PROFESSIONAL LUXURY 3D WIREFRAME BOXES & NEON MATRIX (EDGE TO EDGE) ── */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible"
          viewBox="0 0 1440 510"
          preserveAspectRatio="none"
          fill="none"
        >
          {/* ── 1. LEFT ISOMETRIC CORRIDOR (ENTRANCE FROM FAR LEFT FRAME WALL) ── */}
          <path
            d="M -30 160 L 35 160 L 75 200 L 245 200"
            stroke="#b8236d"
            strokeWidth="1.2"
            strokeOpacity="0.55"
          />
          <circle cx="75" cy="200" r="2.5" fill="#b8236d" fillOpacity="0.8" />

          {/* ── 2. COLUMN 2 DOCKING WIREFRAME BOXES (PROTRUDING ABOVE SECURED CARD) ── */}
          {/* Vertical guide rails rising behind Column 2 */}
          <line x1="261" y1="0" x2="261" y2="480" stroke="#b8236d" strokeWidth="0.8" strokeOpacity="0.25" strokeDasharray="3 3" />
          <line x1="546" y1="0" x2="546" y2="480" stroke="#b8236d" strokeWidth="0.8" strokeOpacity="0.25" strokeDasharray="3 3" />

          {/* Box 1 (Left slot above Secured Card) */}
          <rect
            x="275"
            y="10"
            width="120"
            height="85"
            rx="10"
            stroke="#b8236d"
            strokeWidth="1.2"
            strokeOpacity="0.45"
            fill="rgba(184,35,109,0.015)"
          />

          {/* Box 2 (Right slot above Secured Card) */}
          <rect
            x="410"
            y="10"
            width="120"
            height="85"
            rx="10"
            stroke="#b8236d"
            strokeWidth="1.2"
            strokeOpacity="0.45"
            fill="rgba(184,35,109,0.015)"
          />

          {/* Connecting top bar */}
          <line x1="275" y1="10" x2="530" y2="10" stroke="#b8236d" strokeWidth="1.2" strokeOpacity="0.55" />
          <circle cx="275" cy="10" r="2" fill="#b8236d" fillOpacity="0.75" />
          <circle cx="530" cy="10" r="2" fill="#b8236d" fillOpacity="0.75" />

          {/* ── 3. COLUMN 3 CENTER ANCHOR VERTICAL GUIDE RAILS (ALEXANDRIA) ── */}
          <line x1="562" y1="-15" x2="562" y2="495" stroke="#7c3aed" strokeWidth="0.9" strokeOpacity="0.3" strokeDasharray="3 3" />
          <line x1="877" y1="-15" x2="877" y2="495" stroke="#7c3aed" strokeWidth="0.9" strokeOpacity="0.3" strokeDasharray="3 3" />
          <circle cx="562" cy="-10" r="2" fill="#7c3aed" fillOpacity="0.6" />
          <circle cx="877" cy="-10" r="2" fill="#7c3aed" fillOpacity="0.6" />

          {/* ── 4. COLUMN 4 DOCKING WIREFRAME BOX (ABOVE PLEASE WAIT CARD) ── */}
          <rect
            x="905"
            y="10"
            width="115"
            height="80"
            rx="10"
            stroke="#b8236d"
            strokeWidth="1.2"
            strokeOpacity="0.45"
            fill="rgba(184,35,109,0.015)"
          />
          <line x1="905" y1="10" x2="1020" y2="10" stroke="#b8236d" strokeWidth="1.2" strokeOpacity="0.55" />
          <circle cx="905" cy="10" r="2" fill="#b8236d" fillOpacity="0.75" />
          <circle cx="1020" cy="10" r="2" fill="#b8236d" fillOpacity="0.75" />

          {/* ── 5. COLUMN 5 3D PERSPECTIVE WIREFRAME ROOM (AROUND CYBERPUNK & ROUTING) ── */}
          {/* Top connecting ceiling rail from Col 4 across Col 5 */}
          <line x1="905" y1="10" x2="1419" y2="10" stroke="#b8236d" strokeWidth="1.2" strokeOpacity="0.45" />

          {/* Vertical left spine of Col 5 */}
          <line x1="1164" y1="10" x2="1164" y2="475" stroke="#7c3aed" strokeWidth="0.9" strokeOpacity="0.3" strokeDasharray="3 3" />
          <circle cx="1164" cy="10" r="2" fill="#7c3aed" fillOpacity="0.6" />

          {/* Vertical right spine of Col 5 */}
          <line x1="1419" y1="10" x2="1419" y2="475" stroke="#7c3aed" strokeWidth="1.2" strokeOpacity="0.45" />
          <circle cx="1419" cy="10" r="2.5" fill="#b8236d" fillOpacity="0.8" />

          {/* 3D Perspective angle shooting UP-RIGHT to the far right frame wall */}
          <path
            d="M 1419 10 L 1480 -20"
            stroke="#b8236d"
            strokeWidth="1.4"
            strokeOpacity="0.55"
          />
          <circle cx="1480" cy="-20" r="2.5" fill="#b8236d" fillOpacity="0.8" />

          {/* 3D Back-wall vertical line */}
          <line x1="1480" y1="-20" x2="1480" y2="425" stroke="#7c3aed" strokeWidth="1.2" strokeOpacity="0.38" />

          {/* 3D Perspective angle shooting DOWN-RIGHT to the far right frame wall */}
          <path
            d="M 1419 475 L 1480 425"
            stroke="#7c3aed"
            strokeWidth="1.4"
            strokeOpacity="0.45"
          />
          <circle cx="1419" cy="475" r="2.5" fill="#7c3aed" fillOpacity="0.75" />
          <circle cx="1480" cy="425" r="2.5" fill="#7c3aed" fillOpacity="0.75" />

          {/* Vertical trace down behind Swipe to Send */}
          <line x1="1185" y1="375" x2="1185" y2="475" stroke="#b8236d" strokeWidth="1" strokeOpacity="0.45" />
          <circle cx="1185" cy="475" r="2" fill="#b8236d" fillOpacity="0.7" />
        </svg>

        <div className="w-full relative z-10">
          <style jsx>{`
            .dashboard-5col {
              display: flex;
              flex-direction: column;
              gap: 16px;
              width: 100%;
              justify-content: center;
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
                grid-template-columns: 245px 285px 315px 255px 255px;
                gap: 16px;
                justify-content: center;
                align-items: start;
              }
            }
          `}</style>

          <div className="dashboard-5col w-full">
            {/* ─── COLUMN 1: [Box 1: Portfolio (205px)] + [Box 2: Quote (160px)] (Far Left) ─── */}
            <div className="flex flex-col gap-3.5 lg:mt-7">
              <WeeklyBalanceCard />
              <QuoteCard />
            </div>

            {/* ─── COLUMN 2: [Box 3: Secured (Wide & Flat 145px)] + [Box 4: Investment Style (200px)] (Center-Left: Shifted Down) ─── */}
            <div className="flex flex-col gap-3.5 lg:mt-16">
              <SecuredEcosystemCard />
              <InvestmentGaugeCard />
            </div>

            {/* ─── COLUMN 3: [Box 5: Alexandria Coin (Tall Hero 305px)] + [Box 6: My Wallet (175px)] (Center Anchor: Elevated Hero) ─── */}
            <div className="flex flex-col gap-3.5 z-20 lg:mt-0">
              <CoinCard />
              <WalletSelectorCard />
            </div>

            {/* ─── COLUMN 4: [Box 7: Please Wait (185px)] + [Box 8: Tabs (Wide 40px)] + [Box 9: Goals (Wide 135px)] (Center-Right) ─── */}
            <div className="flex flex-col gap-3 lg:mt-7">
              <ProcessingStatusCard />
              <WalletPortfolioTabsCard />
              <GoalsTelemetryCard />
            </div>

            {/* ─── COLUMN 5: [Box 10: Cyberpunk Avatar (195px)] + [Box 11: Routing (130px)] + [Box 12: Swipe (44px)] (Far Right) ─── */}
            <div className="flex flex-col gap-3 lg:mt-7">
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

