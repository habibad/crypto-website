"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, ChevronRight, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About us", href: "#about" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Smart solutions", href: "#solutions" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact us", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-4 md:p-6 pointer-events-none">
      {/* Floating Pill Bar */}
      <nav
        className={`w-full max-w-5xl rounded-full px-5 py-3 flex items-center justify-between pointer-events-auto transition-all duration-300 ${
          isScrolled
            ? "glass-panel bg-[#121218]/85 border-white/15 shadow-[0_15px_30px_rgba(0,0,0,0.8)] backdrop-blur-2xl"
            : "glass-panel bg-[#121218]/60 border-white/10"
        }`}
      >
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#7928CA] to-[#E03E99] p-0.5 shadow-[0_0_15px_rgba(224,62,153,0.6)] flex items-center justify-center group-hover:scale-105 transition-transform">
            <div className="w-full h-full rounded-full bg-[#12111b] flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-[#E03E99]" />
            </div>
          </div>
          <span className="text-sm font-bold text-white tracking-tight">Quantra AI</span>
        </Link>

        {/* Center Navigation Links (Desktop) */}
        <div className="hidden md:flex items-center gap-6 text-xs text-gray-300 font-medium">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-white transition-colors hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button className="text-xs text-gray-300 hover:text-white px-3 py-1.5 transition-colors cursor-pointer">
            Login
          </button>
          <button className="px-4 py-2 rounded-full btn-gradient-neon text-xs font-semibold flex items-center gap-1 cursor-pointer">
            <span>Get started now</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gray-300 hover:text-white p-1"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-20 left-4 right-4 p-6 rounded-3xl glass-panel-glow bg-[#12111d]/95 border border-[#E03E99]/40 pointer-events-auto shadow-2xl flex flex-col gap-4 z-50">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm text-gray-200 hover:text-white py-1"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <button className="text-xs text-gray-300 text-left py-1">Login</button>
            <button className="w-full py-2.5 rounded-full btn-gradient-neon text-xs font-semibold flex items-center justify-center gap-1">
              <span>Get started now</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
