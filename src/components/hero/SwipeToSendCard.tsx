"use client";

import React, { useState, useRef } from "react";
import { ChevronsRight, Check } from "lucide-react";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function SwipeToSendCard() {
  const [isSent, setIsSent] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  const maxDrag = 150; // max track drag in px
  const opacity = useTransform(x, [0, maxDrag * 0.7], [1, 0.2]);

  const handleDragEnd = () => {
    if (x.get() > maxDrag * 0.7) {
      setIsSent(true);
      setTimeout(() => {
        setIsSent(false);
        x.set(0);
      }, 2500);
    } else {
      x.set(0);
    }
  };

  return (
    <div className="glass-card rounded-2xl p-4 w-full flex flex-col justify-center border border-white/10 shadow-2xl relative overflow-hidden">
      <div
        ref={trackRef}
        className={`relative h-12 rounded-full p-1 flex items-center transition-all overflow-hidden ${
          isSent
            ? "bg-emerald-500/20 border border-emerald-500/40"
            : "bg-[#14131d] border border-white/10"
        }`}
      >
        {/* Placeholder Text */}
        <motion.div
          style={{ opacity }}
          className="absolute inset-0 flex items-center justify-center text-xs font-medium text-gray-400 select-none pointer-events-none"
        >
          {isSent ? (
            <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
              <Check className="w-4 h-4" /> Transfer Completed!
            </span>
          ) : (
            "Swipe to Start Send"
          )}
        </motion.div>

        {/* Draggable Glowing Thumb */}
        {!isSent && (
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: maxDrag }}
            dragElastic={0.1}
            dragSnapToOrigin
            style={{ x }}
            onDragEnd={handleDragEnd}
            className="w-10 h-10 rounded-full bg-gradient-to-r from-[#E03E99] to-[#7928CA] shadow-[0_0_20px_rgba(224,62,153,0.8)] flex items-center justify-center cursor-grab active:cursor-grabbing z-10 select-none hover:scale-105"
          >
            <ChevronsRight className="w-5 h-5 text-white" />
          </motion.div>
        )}
      </div>
    </div>
  );
}
