import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://streak.ai";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Streak.ai — Track your calories with just a picture",
    template: "%s - Streak.ai",
  },
  description:
    "Snap a photo of any meal and our AI instantly recognizes ingredients, calculates calories, and breaks down your macros. No more manual logging — just point, shoot, and track. The most advanced AI calorie tracker.",
  keywords: [
    "calorie tracker",
    "AI food scanner",
    "macro tracker",
    "calorie counter app",
    "food photo calorie counter",
    "nutrition tracker",
    "weight loss app",
    "fitness tracker",
    "AI nutrition analysis",
    "meal tracking app",
    "Streak.ai",
    "calorie counting with AI",
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
    icon: "/images/icon.png",
    apple: "/images/icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Streak.ai",
    title: "Streak.ai — AI-Powered Calorie Tracker",
    description:
      "Snap a photo of any meal and our AI instantly recognizes ingredients, calculates calories, and breaks down your macros. No more manual logging — just point, shoot, and track.",
    url: siteUrl,
    images: [
      {
        url: "/images/icon.png",
        width: 512,
        height: 512,
        alt: "Streak.ai - AI Calorie Tracker",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Streak.ai — AI-Powered Calorie Tracker",
    description:
      "Snap a photo of any meal and our AI instantly recognizes ingredients, calculates calories, and breaks down your macros.",
    images: ["/images/icon.png"],
    site: "@streak_ai",
    creator: "@streak_ai",
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
        {children}
      </body>
    </html>
  );
}
