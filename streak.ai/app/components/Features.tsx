"use client";

import { useState } from "react";
import Image from "next/image";

const features = [
  {
    id: "1",
    label: "Food Log",
    title: "Track Your Food With Just a Picture",
    description:
      "Simply snap a photo of your meal and our advanced AI instantly identifies every ingredient, calculates calories, and breaks down your macros with remarkable accuracy.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#111"
        strokeWidth="2"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="M21 15l-5-5L5 21" />
      </svg>
    ),
  },
  {
    id: "2",
    title: "Search Our Database of over 1 million foods",
    description:
      "Access our comprehensive database with millions of foods, restaurant meals, and packaged products. Find accurate nutritional information in seconds.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#111"
        strokeWidth="2"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
      </svg>
    ),
  },
  {
    id: "3",
    title: "Complete Progress Tracking and AI suggestions",
    description:
      "Track your weight, body measurements, and fitness goals over time. Get personalized AI-powered recommendations to optimize your nutrition.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#111"
        strokeWidth="2"
      >
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    id: "4",
    title: "Keep track of your water and daily exercise",
    description:
      "Log your water intake with smart reminders and track your workouts. See how exercise impacts your daily calorie goals in real-time.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#111"
        strokeWidth="2"
      >
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
      </svg>
    ),
  },
];

export default function Features() {
  const [activeTab, setActiveTab] = useState("1");

  return (
    <section id="features" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl lg:text-5xl font-extrabold text-center mb-16 tracking-tight">
          What does Streak.ai include?
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - Phone Mockup */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/images/3.png"
              alt="Food Log"
              width={352}
              height={704}
              className="w-[20.8rem] lg:w-[22rem] sticky top-32 object-contain"
            />
          </div>

          {/* Right - Feature Cards */}
          <div className="space-y-4">
            {features.map((feature) => (
              <div
                key={feature.id}
                onClick={() => setActiveTab(feature.id)}
                className={`feature-card rounded-2xl p-6 border cursor-pointer transition-all duration-300 ${
                  activeTab === feature.id
                    ? "active bg-white shadow-md border-charcoal"
                    : "border-transparent bg-transparent hover:bg-white/50"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    {feature.label && (
                      <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                        {feature.label}
                      </span>
                    )}
                    <h3 className="font-bold text-lg mt-1 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
