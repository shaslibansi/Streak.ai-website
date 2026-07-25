import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Analytics from "@/app/components/Analytics";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://streak.ai";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Streak.ai",
  title: {
    default: "Streak.ai",
    template: "%s | Streak.ai",
  },
  description:
    "Streak.ai is a privacy-first fitness app for tracking meals, workouts, and habits with AI-powered photo-based calorie recognition, local storage, and optional sync.",
  keywords: [
    "privacy-first fitness app",
    "AI calorie tracker",
    "food photo calorie counter",
    "fitness tracker without subscription",
    "offline workout tracker",
    "meal tracking app",
    "nutrition tracker",
    "Streak.ai",
    "AI nutrition analysis",
    "habit tracker",
    "health app",
  ],
  authors: [{ name: "Streak.ai", url: siteUrl }],
  creator: "Streak.ai",
  publisher: "Streak.ai",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/icon-v2.png",
    apple: "/images/icon-v2.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Streak.ai",
    title: "Streak.ai — AI-Powered, Privacy-First Fitness Tracker",
    description:
      "Track meals, workouts, and habits with private AI-powered nutrition analysis, offline support, and a one-time purchase model.",
    url: siteUrl,
    images: [
      {
        url: `${siteUrl}/images/icon-v2.png`,
        width: 512,
        height: 512,
        alt: "Streak.ai - AI Calorie Tracker",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Streak.ai — AI-Powered, Privacy-First Fitness Tracker",
    description:
      "Track meals, workouts, and habits with private AI-powered nutrition analysis, offline support, and a one-time purchase model.",
    images: [`${siteUrl}/images/icon-v2.png`],
    site: "@streakai",
    creator: "@streakai",
  },
  alternates: {
    canonical: siteUrl,
  },
  appleWebApp: {
    capable: true,
    title: "Streak.ai",
    statusBarStyle: "default",
  },
  formatDetection: {
    telephone: false,
  },
  category: "health and fitness",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <head>
        {/* FAQPage structured data - global fallback */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Streak.ai",
              url: siteUrl,
              description:
                "Track your calories with just a picture. AI-powered nutrition tracking app.",
              applicationCategory: "HealthApplication",
              operatingSystem: "Android",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased font-sans">
        <Analytics />
        {children}
      </body>
    </html>
  );
}
