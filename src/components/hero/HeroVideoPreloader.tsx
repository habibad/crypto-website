"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { SkipForward } from "lucide-react";

interface HeroVideoPreloaderProps {
  onPreloaderTransitionStart: () => void;
  onPreloaderComplete: () => void;
  isReplaying?: boolean;
}

export default function HeroVideoPreloader({
  onPreloaderTransitionStart,
  onPreloaderComplete,
  isReplaying = false,
}: HeroVideoPreloaderProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const transitionStartedRef = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.currentTime = 0;
    transitionStartedRef.current = false;

    video.play().catch(() => {
      console.log("Autoplay fallback handled");
    });

    const handleTimeUpdate = () => {
      // Concurrently trigger hero motion entrance at ~4.2s for a seamless simultaneous cross-fade
      if (video.currentTime >= 4.2 && !transitionStartedRef.current) {
        transitionStartedRef.current = true;
        onPreloaderTransitionStart();

        if (containerRef.current) {
          gsap.to(containerRef.current, {
            opacity: 0,
            duration: 0.7,
            ease: "power2.inOut",
            onComplete: () => {
              onPreloaderComplete();
            },
          });
        }
      }
    };

    const handleEnded = () => {
      if (!transitionStartedRef.current) {
        transitionStartedRef.current = true;
        onPreloaderTransitionStart();
        if (containerRef.current) {
          gsap.to(containerRef.current, {
            opacity: 0,
            duration: 0.4,
            ease: "power2.inOut",
            onComplete: () => {
              onPreloaderComplete();
            },
          });
        } else {
          onPreloaderComplete();
        }
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("ended", handleEnded);
    };
  }, [isReplaying, onPreloaderTransitionStart, onPreloaderComplete]);

  const handleSkip = () => {
    if (transitionStartedRef.current) return;
    transitionStartedRef.current = true;
    onPreloaderTransitionStart();

    if (containerRef.current) {
      gsap.to(containerRef.current, {
        opacity: 0,
        duration: 0.35,
        ease: "power2.inOut",
        onComplete: () => {
          onPreloaderComplete();
        },
      });
    } else {
      onPreloaderComplete();
    }
  };

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-screen h-screen z-50 bg-[#070709] flex items-center justify-center overflow-hidden pointer-events-auto select-none"
    >
      {/* 2.5K Ultra-Sharp Fullscreen Video with Object-Cover */}
      <video
        ref={videoRef}
        src="/videos/hero_preloader.mp4"
        playsInline
        autoPlay
        muted
        preload="auto"
        className="w-full h-full object-cover bg-[#070709]"
      />

      {/* Minimalist Floating Skip Button */}
      <button
        onClick={handleSkip}
        className="absolute bottom-6 right-6 px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-xs text-white backdrop-blur-lg flex items-center gap-1.5 transition-all hover:scale-105 active:scale-95 cursor-pointer z-20 shadow-xl"
        title="Skip Intro"
      >
        <span className="font-medium tracking-wide">Skip</span>
        <SkipForward className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
