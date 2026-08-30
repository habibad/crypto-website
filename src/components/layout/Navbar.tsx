"use client";

import React, { useState } from "react";
import { ChevronRight, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "About us", href: "#about" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Smart solutions", href: "#solutions" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact us", href: "#contact" },
  ];

  return (
    <header
      id="main-navbar"
      className="w-full max-w-[1536px] mx-auto h-[60px] px-4 sm:px-6 lg:px-8 flex items-center justify-between z-40 relative select-none"
      style={{ fontFamily: "var(--font-outfit), var(--font-sans), sans-serif" }}
    >
      {/* Brand Logo */}
      <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
        {/* Small gradient circle icon like reference */}
        <div className="w-[24px] h-[24px] rounded-full bg-gradient-to-tr from-[#7928CA] to-[#E03E99] flex items-center justify-center shadow-[0_0_10px_rgba(224,62,153,0.45)] group-hover:scale-105 transition-transform flex-shrink-0">
          <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
            <path d="M6 1L9 5H7V11H5V5H3L6 1Z" fill="white" />
          </svg>
        </div>
        <span className="text-[13.5px] font-semibold text-white tracking-tight">
          Quantra AI
        </span>
      </Link>

      {/* Center Nav Links (Desktop) */}
      <nav className="hidden md:flex items-center gap-8 text-[12.5px] text-[#8a91a0] font-normal absolute left-1/2 -translate-x-1/2">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="hover:text-white transition-colors duration-150"
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* Right: Login + Get Started */}
      <div className="hidden md:flex items-center gap-4">
        <button className="text-[12px] text-[#c9d0db] hover:text-white transition-colors cursor-pointer font-normal">
          Login
        </button>
        <button className="px-3.5 py-[5px] rounded-full border border-white/20 bg-transparent hover:bg-white/5 text-[12px] font-normal text-white flex items-center gap-1 transition-all cursor-pointer">
          <span>Get started now</span>
          <ChevronRight className="w-3 h-3 text-gray-400" />
        </button>
      </div>

      {/* Mobile Toggle */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden text-gray-300 hover:text-white p-1 cursor-pointer"
        aria-label="Toggle Navigation Menu"
      >
        {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-14 left-4 right-4 p-5 rounded-2xl bg-[#12111d]/95 border border-white/10 shadow-2xl flex flex-col gap-4 z-50 backdrop-blur-xl">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm text-gray-300 hover:text-white py-1"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-white/10 flex flex-col gap-3">
            <button className="text-xs text-gray-300 text-left">Login</button>
            <button className="w-full py-2 rounded-full border border-white/20 text-xs text-white flex items-center justify-center gap-1">
              Get started now <ChevronRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
