import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://streak.ai";
const postSlug = "/blog/home-screen-widgets";
const publishedDate = "2026-07-25";
const modifiedDate = "2026-07-25";

const relatedPosts = [
  {
    title: "How Streak.ai AI Food Scanning Makes Calorie Tracking Effortless",
    href: "/blog/first-steps",
  },
  {
    title: "Deeper Health Insights: New Visual Tools for Understanding Your Food",
    href: "/blog/deeper-health-insights",
  },
  {
    title: "Why privacy-first fitness apps matter for your health data",
    href: "/blog/privacy-first-fitness-app",
  },
];

export const metadata: Metadata = {
  title:
    "Track Your Progress Without Opening the App — Streak.ai's New Home Screen Widgets",
  description:
    "New Android home screen widgets let you see your streak, water intake, macros, and workout progress at a glance. No app open required.",
  keywords: [
    "Android home screen widgets",
    "fitness widget",
    "calorie widget Android",
    "streak counter widget",
    "water tracker widget",
    "meal tracker widget",
    "workout widget",
    "Streak.ai widgets",
    "fitness at a glance",
  ],
  alternates: {
    canonical: `${siteUrl}${postSlug}`,
  },
  openGraph: {
    title:
      "Track Your Progress Without Opening the App — Streak.ai's New Home Screen Widgets",
    description:
      "New Android home screen widgets let you see your streak, water intake, macros, and workout progress at a glance.",
    url: `${siteUrl}${postSlug}`,
    type: "article",
    siteName: "Streak.ai",
    images: [
      {
        url: `${siteUrl}/images/icon-v2.png`,
        width: 512,
        height: 512,
        alt: "Streak.ai home screen widgets",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Track Your Progress Without Opening the App — Streak.ai's New Home Screen Widgets",
    description:
      "New Android home screen widgets let you see your streak, water intake, macros, and workout progress at a glance.",
    images: [`${siteUrl}/images/icon-v2.png`],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Track Your Progress Without Opening the App — Streak.ai's New Home Screen Widgets",
  description:
    "New Android home screen widgets let you see your streak, water intake, macros, and workout progress at a glance.",
  author: { "@type": "Organization", name: "Streak.ai", url: siteUrl },
  publisher: { "@type": "Organization", name: "Streak.ai", url: siteUrl },
  datePublished: publishedDate,
  dateModified: modifiedDate,
  mainEntityOfPage: `${siteUrl}${postSlug}`,
  image: `${siteUrl}/images/icon-v2.png`,
  articleSection: "Product Updates",
  wordCount: 800,
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: `${siteUrl}/blog`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "New Home Screen Widgets",
      item: `${siteUrl}${postSlug}`,
    },
  ],
};

export default function HomeScreenWidgetsPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f2] px-6 py-24 text-charcoal">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <article className="mx-auto max-w-4xl rounded-3xl border border-gray-200 bg-white p-8 shadow-sm sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#6b7280]">
          Blog Article · Product Updates
        </p>
        <h1 className="mt-3 text-3xl font-bold sm:text-4xl">
          Track Your Progress Without Opening the App — Streak.ai's New Home
          Screen Widgets
        </h1>

        <div className="mt-4 flex items-center gap-3 text-sm text-gray-500">
          <time dateTime={publishedDate}>July 25, 2026</time>
          <span>·</span>
          <span>4 min read</span>
        </div>

        <p className="mt-6 text-lg text-gray-600">
          Checking your fitness progress should be as fast as glancing at your
          phone, not as slow as opening an app, waiting for it to load, and
          navigating through menus. That is the idea behind Streak.ai's new
          Android home screen widgets — seven interactive widgets that put your
          most important stats right on your home screen.
        </p>

        <div className="mt-8 space-y-6 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold text-[#111827]">
              Seven widgets at a glance
            </h2>
            <p className="mt-3">
              The latest update adds a full suite of home screen widgets, each
              designed for a different part of your daily routine:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>
                <strong>Streak Counter</strong> — Shows your current streak
                count and a motivational "ACTIVE" badge. The most viral widget,
                designed to keep you coming back.
              </li>
              <li>
                <strong>Water Tracker</strong> — Displays your daily water
                intake with a circular progress ring. See exactly how many ml
                you have had and what percentage of your goal you have reached.
              </li>
              <li>
                <strong>Daily Progress</strong> — Shows how many habits you have
                completed today out of your total, with a percentage ring that
                fills as you check off more habits.
              </li>
              <li>
                <strong>Quick Meal Log</strong> — One-tap buttons to start a
                scan, log manually, describe a meal, or scan a barcode. A deep
                link opens the right screen instantly.
              </li>
              <li>
                <strong>Meal Tracker</strong> — The most detailed widget. Shows
                your calorie progress with concentric rings (calories, fat,
                carbs, protein), a calorie headline, and a macro pill row with
                fat, carbs, and protein breakdowns.
              </li>
              <li>
                <strong>Weekly Overview</strong> — A seven-day bar chart showing
                your calorie trends for the week. Helps you spot patterns
                without opening the app.
              </li>
              <li>
                <strong>Workout Streak</strong> — Tracks your monthly workout
                count against your goal. Shows whether you are on track to hit
                your target.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#111827]">
              How the widgets work
            </h2>
            <p className="mt-3">
              All widgets are built using Android AppWidget with custom Kotlin
              receivers. When you log a meal, complete a habit, or finish a
              workout in the app, a sync service automatically pushes the latest
              data to SharedPreferences, which the widgets read and display.
              This means your widgets are always up to date — no manual refresh
              needed.
            </p>
            <p className="mt-3">
              The widgets use a unified glass-morphism design language that
              matches the app's aesthetic. Each widget renders inside a frosted
              glass container with rounded corners, subtle borders, and
              carefully chosen accent colors — green for progress, blue for
              water, gold for streaks.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#111827]">
              Why widgets matter for consistency
            </h2>
            <p className="mt-3">
              The most reliable way to build a habit is to reduce friction
              between you and the action. Home screen widgets remove an entire
              step from the checking process. Instead of opening the app,
              navigating to the right screen, and waiting for data to load, you
              just look at your home screen.
            </p>
            <p className="mt-3">
              For streak-driven motivation, this is especially powerful. Seeing
              your current streak count every time you unlock your phone is a
              constant visual reminder of your commitment. It turns a passive
              phone check into a positive reinforcement loop.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#111827]">
              How to add widgets to your home screen
            </h2>
            <p className="mt-3">
              Adding Streak.ai widgets is simple. Long-press on your home
              screen, tap "Widgets," find Streak.ai in the list, and choose the
              widget size you want. You can also preview all available widgets
              inside the app by going to Profile → Home Widgets.
            </p>
            <p className="mt-3">
              Each widget is available in multiple sizes. The Meal Tracker
              widget needs more space for its macro breakdown, while the Streak
              Counter and Water Tracker work well in compact sizes.
            </p>
          </section>
        </div>

        <section className="mt-10 rounded-2xl bg-[#f9fafb] p-6">
          <h2 className="text-xl font-semibold text-[#111827]">
            Related articles
          </h2>
          <ul className="mt-4 space-y-3">
            {relatedPosts.map((post) => (
              <li key={post.href}>
                <Link
                  href={post.href}
                  className="font-medium text-[#0f172a] underline hover:text-black"
                >
                  {post.title} →
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/blog"
            className="font-medium text-[#0f172a] hover:underline"
          >
            ← Back to all posts
          </Link>
          <Link href="/" className="font-medium text-[#0f172a] hover:underline">
            Back to Home
          </Link>
        </div>
      </article>
    </main>
  );
}
