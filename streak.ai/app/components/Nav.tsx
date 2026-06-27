"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface NavProps {
  onAppStoreClick: () => void;
}

export default function Nav({ onAppStoreClick }: NavProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  const navLinks = [
    { href: "#", label: "Home" },
    { href: "#features", label: "Features" },
    { href: "#about", label: "About" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/70 border-b border-gray-100/50 transition-shadow ${
          scrolled ? "shadow-sm" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2">
              <Image
                src="/images/icon.png"
                alt="Streak.ai"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="font-bold text-xl tracking-tight">
                Streak.ai
              </span>
            </a>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="nav-link text-sm font-medium text-gray-700 hover:text-charcoal"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Download Badges */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={onAppStoreClick}
                className="app-store-btn bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 text-xs font-medium"
              >
                <AppleIcon gradientId="appleGradNav" />
                App Store
              </button>
              <a
                href="https://play.google.com/store/apps/details?id=com.streakup.ai&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className="app-store-btn bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 text-xs font-medium"
              >
                <GooglePlayIcon gradientId="gNav" />
                Google Play
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`hamburger md:hidden flex flex-col gap-1.5 p-2 ${
                mobileOpen ? "active" : ""
              }`}
              aria-label="Toggle menu"
            >
              <span className="w-5 h-0.5 bg-charcoal block transition-all duration-300" />
              <span className="w-5 h-0.5 bg-charcoal block transition-all duration-300" />
              <span className="w-5 h-0.5 bg-charcoal block transition-all duration-300" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={closeMobile}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-80 h-full bg-white shadow-2xl z-50 p-8 md:hidden transition-transform duration-300 ease-in-out ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={closeMobile}
          className="absolute top-4 right-4 p-2"
          aria-label="Close menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <div className="flex flex-col gap-6 mt-12">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={closeMobile}
              className={`text-lg font-medium ${
                link.href === "#" ? "text-charcoal" : "text-gray-600"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

function AppleIcon({ gradientId }: { gradientId: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 384 512">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#d1d5db" />
        </linearGradient>
      </defs>
      <path
        fill={`url(#${gradientId})`}
        d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-111.1-59.4-126.5zM231.6 2.7c-22.6 1-45.6 13.7-59.6 32.6-13 17.7-23.5 43.7-19.5 69.5 24.7 2.4 48.8-12.5 62.6-31.2 13.3-18.3 21.1-43.2 16.5-70.9z"
      />
    </svg>
  );
}

function GooglePlayIcon({ gradientId }: { gradientId: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 512 512">
      <defs>
        <linearGradient
          id={`${gradientId}1`}
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#00A0E4" />
          <stop offset="100%" stopColor="#0079CA" />
        </linearGradient>
        <linearGradient
          id={`${gradientId}2`}
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#00F076" />
          <stop offset="100%" stopColor="#04C965" />
        </linearGradient>
        <linearGradient
          id={`${gradientId}3`}
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#FF3A44" />
          <stop offset="100%" stopColor="#E11732" />
        </linearGradient>
        <linearGradient
          id={`${gradientId}4`}
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#FFE000" />
          <stop offset="100%" stopColor="#FFB300" />
        </linearGradient>
      </defs>
      <path
        d="M47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0z"
        fill={`url(#${gradientId}1)`}
      />
      <path
        d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1z"
        fill={`url(#${gradientId}3)`}
      />
      <path
        d="M104.6 499l280.8-161.2-60.1-60.1L104.6 499z"
        fill={`url(#${gradientId}2)`}
      />
      <path
        d="M472.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8z"
        fill={`url(#${gradientId}4)`}
      />
    </svg>
  );
}
