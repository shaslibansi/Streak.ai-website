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

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
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
