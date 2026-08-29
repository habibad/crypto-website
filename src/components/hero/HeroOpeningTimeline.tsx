"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import AlexandriaCoin3D from "../3d/AlexandriaCoin3D";

interface HeroOpeningTimelineProps {
  onComplete?: () => void;
  onReplay?: () => void;
}

export default function HeroOpeningTimeline({ onComplete }: HeroOpeningTimelineProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const coinStageRef = useRef<HTMLDivElement>(null);
  const [typedTitle, setTypedTitle] = useState("");
  const [priceNumber, setPriceNumber] = useState("0.00");
  const [showCounter, setShowCounter] = useState(false);

  useEffect(() => {
    if (!overlayRef.current || !coinStageRef.current) return;

    const tl = gsap.timeline({
      onComplete: () => {
        if (onComplete) onComplete();
      },
    });

    // Stage 1: Coin enters from offscreen left taking ~60% screen
    gsap.set(coinStageRef.current, {
      x: "-120vw",
      y: 0,
      scale: 1.9,
      opacity: 0,
    });

    // Animate Coin in from left with smooth spring deceleration
    tl.to(coinStageRef.current, {
      x: "0vw",
      opacity: 1,
      scale: 1.6,
      duration: 1.1,
      ease: "power3.out",
    });

    // Stage 2: Typing effect & price counter
    tl.call(() => {
      setShowCounter(true);
      // Typewriter effect for "Alexandria (AXR)"
      const fullText = "Alexandria (AXR)";
      let cur = "";
      let i = 0;
      const typeInterval = setInterval(() => {
        if (i < fullText.length) {
          cur += fullText[i];
          setTypedTitle(cur);
          i++;
        } else {
          clearInterval(typeInterval);
        }
      }, 40);

      // Price counting up from 0 to 13,622.07
      const obj = { val: 0 };
      gsap.to(obj, {
        val: 13622.07,
        duration: 0.9,
        ease: "power2.out",
        onUpdate: () => {
          setPriceNumber(
            obj.val.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })
          );
        },
      });
    });

    tl.to({}, { duration: 1.0 });

    // Stage 3: Smooth transition overlay fade-out to reveal the live interactive grid
    tl.to(overlayRef.current, {
      opacity: 0,
      duration: 0.6,
      ease: "power2.inOut",
      pointerEvents: "none",
    });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center bg-[#070709]/95 backdrop-blur-2xl transition-opacity will-change-opacity"
    >
      {/* Background Starfield Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(117,88,236,0.25)_0%,rgba(7,7,9,1)_80%)]" />

      {/* Floating 60% Macro Coin Container */}
      <div
        ref={coinStageRef}
        className="relative flex flex-col items-center justify-center will-change-transform"
        style={{ width: "min(60vw, 520px)", height: "min(60vw, 520px)" }}
      >
        {/* Floating Card Mock overlay for Stage 2 */}
        {showCounter && (
          <div className="absolute -top-14 left-0 right-0 flex items-center justify-between px-6 z-20 animate-fade-in">
            <div>
              <div className="text-sm font-semibold text-purple-300 font-mono tracking-wider">
                {typedTitle}
                <span className="inline-block w-1.5 h-3.5 bg-purple-400 ml-1 animate-pulse" />
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono mt-0.5 tracking-tight">
                ${priceNumber}
              </div>
              <div className="text-xs text-rose-400 font-mono mt-0.5 font-medium">
                -741.52 (0.62%)
              </div>
            </div>
            <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center font-bold text-lg shadow-[0_0_25px_rgba(255,255,255,0.8)]">
              +
            </div>
          </div>
        )}

        {/* 3D Coin WebGL Canvas */}
        <div className="w-full h-full flex items-center justify-center">
          <AlexandriaCoin3D size={440} className="scale-125" interactive={false} />
        </div>
      </div>
    </div>
  );
}
