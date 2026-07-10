import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://streak.ai";

export const metadata: Metadata = {
  title: "Why simple food tracking leads to better habits",
  description:
    "Learn how reducing friction in meal logging makes healthy habits easier to maintain over time.",
  keywords: [
    "healthy habits",
    "food tracking habits",
    "habit building",
    "nutrition consistency",
    "weight loss habits",
  ],
  alternates: {
    canonical: `${siteUrl}/blog/habits`,
  },
  openGraph: {
    title: "Why simple food tracking leads to better habits",
    description:
      "Discover why quick and effortless logging helps people stay consistent and improve long-term nutrition habits.",
    url: `${siteUrl}/blog/habits`,
    type: "article",
    siteName: "Streak.ai",
  },
  twitter: {
    card: "summary_large_image",
    title: "Why simple food tracking leads to better habits",
    description:
      "Discover why quick and effortless logging helps people stay consistent and improve long-term nutrition habits.",
  },
};

export default function BlogPostPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f2] px-6 py-24 text-charcoal">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Why simple food tracking leads to better habits",
            description:
              "An article explaining how effortless food logging can improve consistency and long-term nutrition habits.",
            author: {
              "@type": "Organization",
              name: "Streak.ai",
            },
            publisher: {
              "@type": "Organization",
              name: "Streak.ai",
              url: siteUrl,
            },
            mainEntityOfPage: `${siteUrl}/blog/habits`,
          }),
        }}
      />
      <article className="mx-auto max-w-3xl rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#6b7280]">
          Blog Article
        </p>
        <h1 className="mt-3 text-3xl font-bold sm:text-4xl">
          Why simple food tracking leads to better habits
        </h1>
        <p className="mt-6 text-lg text-gray-600">
          The easiest routines are the ones people can keep doing without thinking too hard.
        </p>
        <p className="mt-4 text-gray-600">
          When logging food feels quick and natural, users are more likely to stay consistent and make stronger long-term choices.
        </p>
        <p className="mt-4 text-gray-600">
          That consistency is often what separates a short-term diet from a habit that lasts.
        </p>
        <Link href="/blog" className="mt-8 inline-flex font-medium text-[#0f172a] hover:underline">
          ← Back to blogs
        </Link>
      </article>
    </main>
  );
}
