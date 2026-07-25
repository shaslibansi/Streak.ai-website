import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://streak.ai";

const blogPosts = [
  {
    title: "Why privacy-first fitness apps matter for your health data",
    description:
      "Learn why local-first design and private data handling are becoming essential in modern fitness apps.",
    href: "/blog/privacy-first-fitness-app",
    category: "Privacy",
    date: "2026-06-10",
    dateLabel: "June 10, 2026",
  },
  {
    title: "How Streak.ai AI Food Scanning Makes Calorie Tracking Effortless",
    description:
      "See how AI-powered food recognition turns meal photos into instant nutrition logs — no typing required.",
    href: "/blog/first-steps",
    category: "AI Food Scanning",
    date: "2026-06-15",
    dateLabel: "June 15, 2026",
  },
  {
    title: "Why simple food tracking leads to better habits",
    description:
      "Learn how reducing friction in meal logging helps you build lasting nutrition habits without burnout.",
    href: "/blog/habits",
    category: "Habit Building",
    date: "2026-06-18",
    dateLabel: "June 18, 2026",
  },
  {
    title: "Why one-time purchase fitness apps beat subscriptions",
    description:
      "Compare subscription vs one-time purchase fitness apps and see why paying once offers better value.",
    href: "/blog/one-time-purchase-fitness-app",
    category: "Pricing",
    date: "2026-06-22",
    dateLabel: "June 22, 2026",
  },
  {
    title: "How offline workout tracking improves consistency",
    description:
      "Discover why offline-first workout tracking removes barriers to consistency and keeps your data private.",
    href: "/blog/offline-workout-tracker",
    category: "Offline Tracking",
    date: "2026-06-25",
    dateLabel: "June 25, 2026",
  },
];

export const metadata: Metadata = {
  title:
    "Streak.ai Blog | Best AI Meal Tracker, Calorie Counter & Privacy-First Fitness Tips",
  description:
    "Read practical articles about the best AI meal tracker options, calorie counting tips, privacy-first fitness apps, and habits that make food logging easier and more sustainable.",
  keywords: [
    "Streak.ai blog",
    "AI calorie tracker blog",
    "nutrition tracking tips",
    "healthy habits",
    "food logging advice",
    "privacy first fitness",
    "offline workout tracker",
    "one time purchase fitness app",
  ],
  alternates: {
    canonical: `${siteUrl}/blog`,
  },
  openGraph: {
    title:
      "Streak.ai Blog | Best AI Meal Tracker, Calorie Counter & Privacy-First Fitness Tips",
    description:
      "Explore practical guides and insights on the best AI meal tracker tools, calorie counting, meal logging, habit building, and privacy-first fitness apps.",
    url: `${siteUrl}/blog`,
    type: "website",
    siteName: "Streak.ai",
    images: [
      {
        url: `${siteUrl}/images/icon-v2.png`,
        width: 512,
        height: 512,
        alt: "Streak.ai Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Streak.ai Blog | Best AI Meal Tracker, Calorie Counter & Privacy-First Fitness Tips",
    description:
      "Explore practical guides and insights on the best AI meal tracker tools, calorie counting, meal logging, habit building, and privacy-first fitness apps.",
    images: [`${siteUrl}/images/icon-v2.png`],
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
              "Practical articles about AI calorie tracking, nutrition habits, privacy-first fitness, and building healthier routines.",
            url: `${siteUrl}/blog`,
            publisher: {
              "@type": "Organization",
              name: "Streak.ai",
              url: siteUrl,
            },
            blogPost: blogPosts.map((post) => ({
              "@type": "BlogPosting",
              headline: post.title,
              url: `${siteUrl}${post.href}`,
              datePublished: post.date,
            })),
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: siteUrl,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Blog",
                item: `${siteUrl}/blog`,
              },
            ],
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
            Explore practical tips, product updates, and simple ways to build
            better food habits with less effort. From AI food scanning to
            privacy-first fitness, discover what makes tracking stick.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.href}
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <div className="flex items-center gap-2 text-xs text-gray-500 uppercase tracking-wider">
                <span className="font-semibold text-[#6b7280]">
                  {post.category}
                </span>
                <span>·</span>
                <time dateTime={post.date}>{post.dateLabel}</time>
              </div>
              <h2 className="mt-3 text-xl font-semibold">{post.title}</h2>
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
            className="rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-800"
          >
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
