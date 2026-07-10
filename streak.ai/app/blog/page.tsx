import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://streak.ai";

const blogPosts = [
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

export const metadata: Metadata = {
  title: "Streak.ai Blog | Tips for calorie tracking and healthy habits",
  description:
    "Read practical articles about AI calorie tracking, nutrition coaching, and healthy habits that make food logging easier and more sustainable.",
  keywords: [
    "Streak.ai blog",
    "AI calorie tracker blog",
    "nutrition tracking tips",
    "healthy habits",
    "food logging advice",
  ],
  alternates: {
    canonical: `${siteUrl}/blog`,
  },
  openGraph: {
    title: "Streak.ai Blog | Tips for calorie tracking and healthy habits",
    description:
      "Explore simple guides and insights on calorie tracking, meal logging, and building better routines with Streak.ai.",
    url: `${siteUrl}/blog`,
    type: "website",
    siteName: "Streak.ai",
  },
  twitter: {
    card: "summary_large_image",
    title: "Streak.ai Blog | Tips for calorie tracking and healthy habits",
    description:
      "Explore simple guides and insights on calorie tracking, meal logging, and building better routines with Streak.ai.",
  },
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f2] text-charcoal">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Streak.ai Blog",
            description:
              "Practical articles about AI calorie tracking, nutrition habits, and building healthier routines.",
            url: `${siteUrl}/blog`,
            publisher: {
              "@type": "Organization",
              name: "Streak.ai",
              url: siteUrl,
            },
          }),
        }}
      />
      <section className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-24 md:px-8 lg:px-10">
        <div className="max-w-3xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#6b7280]">
            Streak.ai Blog
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Insights for healthier routines and smarter nutrition tracking.
          </h1>
          <p className="text-lg text-gray-600">
            Explore practical tips, product updates, and simple ways to build better food habits with less effort.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {blogPosts.map((post) => (
            <article
              key={post.title}
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm"
            >
              <h2 className="text-2xl font-semibold">{post.title}</h2>
              <p className="mt-3 text-gray-600">{post.description}</p>
              <Link
                href={post.href}
                className="mt-6 inline-flex items-center font-medium text-[#0f172a] hover:underline"
              >
                Read more →
              </Link>
            </article>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/"
            className="rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white"
          >
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
