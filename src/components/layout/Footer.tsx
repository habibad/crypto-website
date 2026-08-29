"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative w-full pt-20 pb-12 overflow-hidden border-t border-white/10 mt-20">
      {/* Background ambient bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[300px] bg-gradient-to-t from-[#7928CA]/20 via-[#E03E99]/15 to-transparent rounded-t-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Top Footer Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Left Hero Statement & Socials */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl sm:text-3xl font-light text-white tracking-tight leading-snug max-w-md">
                Transform Your Customer Stories <br />
                <span className="font-normal text-gradient-neon">
                  Into Powerful Growth Drivers
                </span>
              </h3>
            </div>

            {/* Social Text Links */}
            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-5 text-xs text-gray-400 font-medium">
              <a href="#linkedin" className="hover:text-white transition-colors">
                Linkedin
              </a>
              <span className="text-gray-600">/</span>
              <a href="#telegram" className="hover:text-[#38bdf8] transition-colors">
                Telegram
              </a>
              <span className="text-gray-600">/</span>
              <a href="#instagram" className="hover:text-[#E03E99] transition-colors">
                Instagram
              </a>
              <span className="text-gray-600">/</span>
              <a href="#email" className="hover:text-white transition-colors">
                Email
              </a>
            </div>
          </div>

          {/* Right Navigation Columns */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Navigations */}
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold text-white tracking-wider uppercase">
                Navigations
              </span>
              <ul className="space-y-2 text-xs text-gray-400">
                <li>
                  <a href="#services" className="hover:text-white transition-colors">
                    Our Services
                  </a>
                </li>
                <li>
                  <a href="#blog" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="hover:text-white transition-colors">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold text-white tracking-wider uppercase">
                Support
              </span>
              <ul className="space-y-2 text-xs text-gray-400">
                <li>
                  <a href="#about" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-white transition-colors">
                    Faq
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Follow */}
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold text-white tracking-wider uppercase">
                Follow
              </span>
              <ul className="space-y-2 text-xs text-gray-400">
                <li>
                  <a href="#instagram" className="hover:text-white transition-colors">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#tiktok" className="hover:text-white transition-colors">
                    Tiktok
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <div>© 2025 Sehzade All Right Reserved.</div>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-white transition-colors">
              Terms Of Service
            </a>
          </div>
        </div>
      </div>

      {/* Massive Metallic Background Watermark: QUANTRA */}
      <div className="w-full overflow-hidden flex items-center justify-center pt-10 select-none pointer-events-none">
        <h1 className="text-[18vw] font-black tracking-widest text-transparent uppercase leading-none bg-gradient-to-b from-white/15 via-white/5 to-transparent bg-clip-text drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] opacity-70">
          QUANTRA
        </h1>
      </div>
    </footer>
  );
}
