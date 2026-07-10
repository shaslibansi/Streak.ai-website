import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://streak.ai";

export const metadata: Metadata = {
  title: "How Streak.ai makes calorie tracking effortless",
  description:
    "See how Streak.ai turns a meal photo into a simple calorie and macro log, making nutrition tracking faster and easier.",
  keywords: [
    "AI calorie tracking",
    "easy calorie tracking",
    "food photo tracker",
    "nutrition tracking app",
    "macro tracker",
  ],
  alternates: {
    canonical: `${siteUrl}/blog/first-steps`,
  },
  openGraph: {
    title: "How Streak.ai makes calorie tracking effortless",
    description:
      "Learn how picture-based nutrition tracking removes friction and helps you stay consistent with your goals.",
    url: `${siteUrl}/blog/first-steps`,
    type: "article",
    siteName: "Streak.ai",
  },
  twitter: {
    card: "summary_large_image",
    title: "How Streak.ai makes calorie tracking effortless",
    description:
      "Learn how picture-based nutrition tracking removes friction and helps you stay consistent with your goals.",
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
            headline: "How Streak.ai makes calorie tracking effortless",
            description:
              "An article explaining how Streak.ai uses photo recognition to simplify calorie and macro tracking.",
            author: {
              "@type": "Organization",
              name: "Streak.ai",
            },
            publisher: {
              "@type": "Organization",
              name: "Streak.ai",
              url: siteUrl,
            },
            mainEntityOfPage: `${siteUrl}/blog/first-steps`,
          }),
        }}
      />
      <article className="mx-auto max-w-3xl rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#6b7280]">
          Blog Article
        </p>
        <h1 className="mt-3 text-3xl font-bold sm:text-4xl">
          How Streak.ai makes calorie tracking effortless
        </h1>
        <p className="mt-6 text-lg text-gray-600">
          Streak.ai turns a photo into a structured food log, which removes the friction that usually makes tracking feel like a chore.
        </p>
        <p className="mt-4 text-gray-600">
          Instead of typing every ingredient, users simply snap a picture and get instant guidance on calories, macros, and meal insights.
        </p>
        <p className="mt-4 text-gray-600">
          That shortens the time needed to log meals, makes the habit easier to keep, and gives users more clarity about their nutrition choices.
        </p>
        <Link href="/blog" className="mt-8 inline-flex font-medium text-[#0f172a] hover:underline">
          ← Back to blogs
        </Link>
      </article>
    </main>
  );
}
