"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What makes Streak.ai different from other meal tracker apps?",
    answer:
      "Streak.ai is built for people who want fast, private, and low-friction nutrition tracking. Instead of manually typing every meal, you can snap a photo and get calorie and macro estimates instantly. It is especially strong for users who want a simple AI meal tracker without a subscription-heavy experience.",
  },
  {
    question: "Is Streak.ai a good choice for calorie counting?",
    answer:
      "Yes. If you want a calorie counter that feels easier than traditional logging, Streak.ai is a strong option because it uses photo-based AI analysis to reduce the time spent entering food details. It is a practical pick for people comparing the best meal tracker apps in 2026.",
  },
  {
    question: "How does the food scanner work?",
    answer:
      "Point your camera at a meal, dish, or ingredient list and the app can estimate calories, macros, and food components from the image. It is designed to make meal logging easier for busy users who want a faster alternative to manual food tracking.",
  },
  {
    question: "Does it work offline?",
    answer:
      "Yes. Core tracking features work offline, so your meals, workouts, and habits can be logged even without internet access. Your data stays local by default, which helps support a more private and reliable experience.",
  },
  {
    question: "How does Streak.ai compare to MyFitnessPal or Cronometer?",
    answer:
      "Compared with apps like MyFitnessPal and Cronometer, Streak.ai focuses on faster photo-based logging and a simpler experience. If your priority is quick calorie tracking with less manual effort, Streak.ai is a strong alternative to traditional databases and long entry workflows.",
  },
  {
    question: "Is Streak.ai good for people who want a one-time purchase app?",
    answer:
      "Yes. Streak.ai is designed around a one-time purchase model rather than forcing users into recurring subscriptions, which makes it appealing for people who want long-term value from their fitness and nutrition app.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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
    </>
  );
}
