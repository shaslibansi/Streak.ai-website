"use client";

import { useState } from "react";
import Link from "next/link";
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

const blogPosts = [
  {
    title: "Why privacy-first fitness apps matter for your health data",
    description:
      "Learn why local-first design and private data handling are becoming essential in modern fitness apps.",
    href: "/blog/privacy-first-fitness-app",
  },
  {
    title: "How Streak.ai makes calorie tracking effortless",
    description:
      "Learn how picture-based nutrition tracking helps users stay consistent without manual logging.",
    href: "/blog/first-steps",
  },
  {
    title: "Why simple food tracking leads to better habits",
    description:
      "A quick look at how reducing friction can make healthy routines easier to maintain.",
    href: "/blog/habits",
  },
];

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

        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#6b7280]">
                Latest insights
              </p>
              <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight">
                Learn how Streak.ai keeps nutrition tracking private and effortless.
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Read short, SEO-optimized articles about AI food scanning, privacy-first fitness tracking, and habit-building with smarter nutrition tools.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <article
                  key={post.href}
                  className="rounded-[2rem] border border-gray-200 bg-[#f8fafc] p-8 shadow-sm hover:-translate-y-1 transition-transform"
                >
                  <h3 className="text-xl font-semibold text-[#111827]">
                    {post.title}
                  </h3>
                  <p className="mt-4 text-gray-600">{post.description}</p>
                  <Link
                    href={post.href}
                    className="mt-6 inline-flex items-center font-medium text-[#0f172a] hover:underline"
                  >
                    Read article →
                  </Link>
                </article>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/blog"
                className="inline-flex rounded-full bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-gray-900"
              >
                View all blog posts
              </Link>
            </div>
          </div>
        </section>

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
