"use client";

import React, { useEffect, useRef } from "react";
import { Check, ChevronRight, Sparkles } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function PricingMatrix() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const plans = [
    {
      name: "Basic Plan",
      desc: "For solo traders or early-stage crypto investors.",
      price: "$1,500",
      period: "/ Month",
      isPopular: false,
      ctaText: "Get started now",
      ctaGradient: false,
      features: [
        "1 AI-powered portfolio scan",
        "Monthly asset trend report (PDF)",
        "Basic portfolio risk assessment",
        "Community access (Discord)",
        "Email-only support",
      ],
    },
    {
      name: "Pro Plan",
      desc: "Best for growing crypto funds & DeFi analysts.",
      price: "$3,000",
      period: "/ Custom",
      isPopular: true,
      badge: "Our Best Seller",
      ctaText: "Start Free Trial",
      ctaGradient: true,
      features: [
        "Weekly portfolio optimization by AI",
        "Asset insights (PDF + interactive dashboard)",
        "AI-generated token sentiment scores",
        "Real-time risk signals (beta)",
        "Integration with 1 CEX/DEX wallet",
        "Priority email + chat support",
      ],
    },
    {
      name: "Enterprise Plan",
      desc: "Fully modular AI analytics for institutions.",
      price: "Customized",
      period: "/ Month",
      isPopular: false,
      ctaText: "Contact Us",
      ctaGradient: false,
      features: [
        "Unlimited AI modules & connectors",
        "Real-time anomaly detection engine",
        "Custom reporting templates (PDF/CSV/JSON)",
        "Integration with on-chain + off-chain sources",
        "Dedicated account manager",
        "24/7 enterprise support & onboarding",
      ],
    },
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];

      gsap.set(cards, {
        opacity: 0,
        y: 40,
        scale: 0.94,
      });

      gsap.to(cards, {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.12,
        duration: 1.0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className="relative w-full py-24 px-4 max-w-7xl mx-auto flex flex-col items-center"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-gradient-to-r from-[#7928CA]/25 via-[#E03E99]/20 to-[#7928CA]/25 rounded-full blur-[140px] pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 z-10">
        <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight leading-tight">
          Flexible Plans <br />
          <span className="font-normal text-gradient-neon">For Every Cryptobros</span>
        </h2>
        <p className="mt-4 text-sm text-gray-400 font-normal">
          Choose a plan that fits your needs, or contact us for a custom quote.
        </p>
      </div>

      {/* 3 Pricing Cards Grid */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch z-10">
        {plans.map((plan, idx) => (
          <div
            key={plan.name}
            ref={(el) => {
              cardsRef.current[idx] = el;
            }}
            className={`rounded-3xl flex flex-col justify-between p-8 transition-all duration-300 relative will-change-transform ${
              plan.isPopular
                ? "bg-[#161322]/95 border-2 border-[#E03E99] shadow-[0_0_60px_rgba(224,62,153,0.45)] scale-105 z-20"
                : "glass-card border border-white/10 hover:border-white/20"
            }`}
          >
            {/* Top Best Seller Badge for Pro Plan */}
            {plan.isPopular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#E03E99] to-[#7928CA] text-white text-xs font-bold flex items-center gap-1.5 shadow-[0_0_25px_rgba(224,62,153,0.85)] uppercase tracking-wider animate-pulse">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{plan.badge}</span>
              </div>
            )}

            <div>
              {/* Plan Title & Subtitle */}
              <h3 className="text-xl font-bold text-white tracking-tight">{plan.name}</h3>
              <p className="text-xs text-gray-400 mt-1.5 min-h-[32px] leading-relaxed">{plan.desc}</p>

              {/* Pricing Figures */}
              <div className="my-6 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-white font-mono tracking-tight">
                  {plan.price}
                </span>
                <span className="text-xs text-gray-400 font-mono">{plan.period}</span>
              </div>

              {/* Call to Action Button */}
              <button
                className={`w-full py-3 px-5 rounded-full text-xs font-semibold flex items-center justify-center gap-1.5 transition-all duration-200 cursor-pointer ${
                  plan.ctaGradient
                    ? "btn-gradient-neon text-white"
                    : "bg-white text-gray-950 hover:bg-gray-200 shadow-md"
                }`}
              >
                <span>{plan.ctaText}</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              {/* Feature Checklist */}
              <div className="mt-8 space-y-3.5 pt-6 border-t border-white/10">
                {plan.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-3 text-xs text-gray-300">
                    <div
                      className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        plan.isPopular ? "bg-[#E03E99]/20 text-[#E03E99]" : "bg-white/10 text-white"
                      }`}
                    >
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span className="leading-snug">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
