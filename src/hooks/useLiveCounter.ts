"use client";

import { useState, useEffect } from "react";

interface CounterOptions {
  start?: number;
  end: number;
  duration?: number;
  delay?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  separator?: string;
  decimalSeparator?: string;
}

export function useLiveCounter({
  start = 0,
  end,
  duration = 1800,
  delay = 300,
  decimals = 0,
  prefix = "$",
  suffix = "",
  separator = ".",
  decimalSeparator = ",",
}: CounterOptions) {
  const [displayValue, setDisplayValue] = useState(
    formatNumber(start, decimals, separator, decimalSeparator, prefix, suffix)
  );

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrame: number;
    let timeoutId: NodeJS.Timeout;

    timeoutId = setTimeout(() => {
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);

        // Cubic ease-out curve for smooth deceleration
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = start + (end - start) * easeOut;

        setDisplayValue(
          formatNumber(current, decimals, separator, decimalSeparator, prefix, suffix)
        );

        if (progress < 1) {
          animationFrame = requestAnimationFrame(step);
        } else {
          setDisplayValue(
            formatNumber(end, decimals, separator, decimalSeparator, prefix, suffix)
          );
        }
      };

      animationFrame = requestAnimationFrame(step);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      cancelAnimationFrame(animationFrame);
    };
  }, [start, end, duration, delay, decimals, prefix, suffix, separator, decimalSeparator]);

  return displayValue;
}

function formatNumber(
  num: number,
  decimals: number,
  separator: string,
  decimalSeparator: string,
  prefix: string,
  suffix: string
): string {
  const fixed = num.toFixed(decimals);
  const [intPart, decPart] = fixed.split(".");

  // Format integer with thousands separator (e.g. 1.948.121)
  const formattedInt = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, separator);

  if (decimals > 0 && decPart !== undefined) {
    return `${prefix}${formattedInt}${decimalSeparator}${decPart}${suffix}`;
  }
  return `${prefix}${formattedInt}${suffix}`;
}
