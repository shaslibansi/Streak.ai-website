"use client";

import { useState } from "react";
import Nav from "@/app/components/Nav";
import Hero from "@/app/components/Hero";
import Features from "@/app/components/Features";
import WhyChoose from "@/app/components/WhyChoose";
import About from "@/app/components/About";
import FAQ from "@/app/components/FAQ";
import Community from "@/app/components/Community";
import ComingSoonSidebar from "@/app/components/ComingSoonSidebar";
import Footer from "@/app/components/Footer";

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Streak.ai",
  operatingSystem: "Android",
  applicationCategory: "HealthApplication",
  description:
    "Track your calories with just a picture. AI-powered nutrition tracking that instantly recognizes ingredients, calculates calories, and breaks down macros.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Free with optional in-app purchase for premium features",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.5",
    ratingCount: "150",
    bestRating: "5",
  },
  author: {
    "@type": "Organization",
    name: "Streak.ai",
  },
};

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <Nav onAppStoreClick={() => setSidebarOpen(true)} />
      <main>
        <Hero onAppStoreClick={() => setSidebarOpen(true)} />
        <Features />
        <WhyChoose />
        <About />
        <FAQ />
        <Community />
      </main>
      <Footer onAppStoreClick={() => setSidebarOpen(true)} />
      <ComingSoonSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
    </>
  );
}
