"use client";

import Image from "next/image";

interface HeroProps {
  onAppStoreClick: () => void;
}

export default function Hero({ onAppStoreClick }: HeroProps) {
  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Headline */}
            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight">
              Meet Streak.ai
              <br />
              <span className="text-gray-400">Track your calories</span>
              <br />
              with just a picture
            </h1>

            {/* Subtext */}
            <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
              Snap a photo of any meal and our AI instantly recognizes
              ingredients, calculates calories, and breaks down your macros. No
              more manual logging — just point, shoot, and track.
            </p>

            {/* Download Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={onAppStoreClick}
                className="app-store-btn bg-black text-white px-6 py-4 rounded-2xl flex items-center gap-3"
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 384 512"
                >
                  <defs>
                    <linearGradient
                      id="appleGradHero"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#ffffff" />
                      <stop offset="100%" stopColor="#d1d5db" />
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#appleGradHero)"
                    d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-111.1-59.4-126.5zM231.6 2.7c-22.6 1-45.6 13.7-59.6 32.6-13 17.7-23.5 43.7-19.5 69.5 24.7 2.4 48.8-12.5 62.6-31.2 13.3-18.3 21.1-43.2 16.5-70.9z"
                  />
                </svg>
                <div className="text-left">
                  <div className="text-xs opacity-70">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </button>
              <a
                href="https://play.google.com/store/apps/details?id=com.streakup.ai&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className="app-store-btn bg-black text-white px-6 py-4 rounded-2xl flex items-center gap-3"
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 512 512"
                >
                  <defs>
                    <linearGradient
                      id="gHero1"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#00A0E4" />
                      <stop offset="100%" stopColor="#0079CA" />
                    </linearGradient>
                    <linearGradient
                      id="gHero2"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#00F076" />
                      <stop offset="100%" stopColor="#04C965" />
                    </linearGradient>
                    <linearGradient
                      id="gHero3"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#FF3A44" />
                      <stop offset="100%" stopColor="#E11732" />
                    </linearGradient>
                    <linearGradient
                      id="gHero4"
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
                    fill="url(#gHero1)"
                  />
                  <path
                    d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1z"
                    fill="url(#gHero3)"
                  />
                  <path
                    d="M104.6 499l280.8-161.2-60.1-60.1L104.6 499z"
                    fill="url(#gHero2)"
                  />
                  <path
                    d="M472.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8z"
                    fill="url(#gHero4)"
                  />
                </svg>
                <div className="text-left">
                  <div className="text-xs opacity-70">Get it on</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column - Phone Mockups */}
          <div className="relative h-[500px] lg:h-[600px] flex items-center justify-center">
            {/* Mockup 1 - Camera View */}
            <div className="mockup-3d absolute left-0 lg:left-4 top-8 z-10 animate-float w-64 lg:w-72">
              <Image
                src="/images/1.png"
                alt="Streak.ai food scanner camera interface showing a meal being captured for AI calorie analysis"
                width={288}
                height={576}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Doodle Arrow */}
            <div className="absolute inset-0 z-30 pointer-events-none hidden lg:flex items-center justify-center translate-x-6 -translate-y-4">
              <svg
                width="180"
                height="100"
                viewBox="0 0 180 100"
                fill="none"
                className="w-40 lg:w-48"
              >
                <path
                  d="M5 75 Q 50 80, 85 55 T 155 18"
                  stroke="#9CA3AF"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeDasharray="5 5"
                  fill="none"
                />
                <path
                  d="M140 30 L157 18 L148 38"
                  stroke="#9CA3AF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
                <circle cx="5" cy="75" r="3.5" fill="#9CA3AF" />
              </svg>
            </div>

            {/* Mockup 2 - Results UI */}
            <div className="mockup-3d-2 absolute right-0 lg:right-4 top-24 z-20 animate-float-delayed w-64 lg:w-72">
              <Image
                src="/images/2.png"
                alt="Streak.ai nutrition results screen showing calories, macros, and ingredient breakdown from food photo"
                width={288}
                height={576}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
