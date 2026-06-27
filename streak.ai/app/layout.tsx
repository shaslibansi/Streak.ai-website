import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Streak.ai — Track your calories with just a picture",
  description:
    "Snap a photo of any meal and our AI instantly recognizes ingredients, calculates calories, and breaks down your macros. No more manual logging — just point, shoot, and track.",
  icons: {
    icon: "/images/icon.png",
  },
  openGraph: {
    title: "Streak.ai",
    description:
      "Track your calories with just a picture — AI-powered nutrition tracking.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
