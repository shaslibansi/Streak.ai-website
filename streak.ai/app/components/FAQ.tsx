"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is Streakup?",
    answer:
      "Streakup is a comprehensive health platform combining habit consistency, professional gym tracking, and AI-powered nutrition analysis into one seamless, private app available on Android.",
  },
  {
    question: "Is my data private?",
    answer:
      "Absolutely. Streakup uses a local-first architecture with an Isar embedded database on your device. Your health data stays entirely on your phone.",
  },
  {
    question: "How does the food scanner work?",
    answer:
      "Point your camera at a barcode, nutrition label, or ingredient list. The app captures the text using OCR and sends it to our AI backend. It returns a detailed breakdown: health score, macros, additive flags, and processing ratio. You can also describe a meal in natural language — the AI estimates calories, protein, carbs, and fat.",
  },
  {
    question: "Does it work offline?",
    answer:
      "Yes. All core features — habit tracking, workout logging, nutrition logging — work fully offline. Only AI-powered food analysis requires an internet connection. Your data is stored locally on your device at all times.",
  },
  {
    question: "What exercises are included?",
    answer:
      "Streakup includes a built-in library of over 1,300 exercises organized by muscle group (Chest, Back, Legs, Shoulders, Arms, Core) and equipment type (Barbell, Dumbbell, Machine, Cable, Bodyweight). You can search, filter, and add any exercise to your workouts or create custom routines.",
  },
  {
    question: "Are there usage limits?",
    answer:
      "To ensure fair usage, AI analysis is limited to 100,000 tokens per day. If you reach your limit, you can add your own Gemini API key in Profile settings as a fallback.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight">
            FAQ
          </h2>
          <p className="text-lg text-gray-600">Frequently asked questions</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-gray-200 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-lg pr-4">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className="transition-all duration-300 overflow-hidden"
                  style={{ maxHeight: isOpen ? "500px" : "0px" }}
                >
                  <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
