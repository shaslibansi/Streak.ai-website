import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://streak.ai";
const postSlug = "/blog/offline-workout-tracker";
const publishedDate = "2026-06-25";
const modifiedDate = "2026-07-10";

const faqs = [
  {
    question: "Can I use Streak.ai without an internet connection?",
    answer:
      "Yes. Streak.ai stores data locally on your device, so you can log workouts, meals, and habits without any internet connection.",
  },
  {
    question: "Does offline tracking sync later?",
    answer:
      "Streak.ai offers optional sync so you can back up your data when you are online, but the app works fully offline by default.",
  },
  {
    question: "What happens to my data if I lose my phone?",
    answer:
      "With optional sync enabled, your data is backed up and recoverable. Without sync, data is stored locally and tied to the device.",
  },
];

const relatedPosts = [
  {
    title: "Why privacy-first fitness apps matter for your health data",
    href: "/blog/privacy-first-fitness-app",
  },
  {
    title: "Why one-time purchase fitness apps beat subscriptions",
    href: "/blog/one-time-purchase-fitness-app",
  },
  {
    title: "Why simple food tracking leads to better habits",
    href: "/blog/habits",
  },
];

export const metadata: Metadata = {
  title: "How offline workout tracking improves consistency",
  description:
    "Learn why offline workout tracking helps you stay consistent with your fitness goals — no internet, no excuses, just your progress saved locally.",
  keywords: [
    "offline workout tracker",
    "fitness app offline",
    "no internet workout app",
    "local storage fitness app",
    "gym tracker offline",
    "workout logging app",
    "Streak.ai offline",
    "consistent workout tracking",
  ],
  alternates: {
    canonical: `${siteUrl}${postSlug}`,
  },
  openGraph: {
    title: "How offline workout tracking improves consistency",
    description:
      "Discover why offline-first workout tracking removes barriers to consistency and how Streak.ai keeps your data local and private.",
    url: `${siteUrl}${postSlug}`,
    type: "article",
    siteName: "Streak.ai",
    images: [
      {
        url: `${siteUrl}/images/icon-v2.png`,
        width: 512,
        height: 512,
        alt: "Streak.ai offline workout tracker",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How offline workout tracking improves consistency",
    description:
      "Discover why offline-first workout tracking removes barriers to consistency and how Streak.ai keeps your data local and private.",
    images: [`${siteUrl}/images/icon-v2.png`],
  },
};

export default function OfflineWorkoutPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f2] px-6 py-24 text-charcoal">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "How offline workout tracking improves consistency",
            description:
              "An article about how offline-first workout tracking removes barriers to consistency and keeps your fitness data local and private.",
            author: { "@type": "Organization", name: "Streak.ai", url: siteUrl },
            publisher: {
              "@type": "Organization",
              name: "Streak.ai",
              url: siteUrl,
            },
            datePublished: publishedDate,
            dateModified: modifiedDate,
            mainEntityOfPage: `${siteUrl}${postSlug}`,
            image: `${siteUrl}/images/icon-v2.png`,
            articleSection: "Offline Tracking",
            wordCount: 650,
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: { "@type": "Answer", text: item.answer },
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
                name: "How offline workout tracking improves consistency",
                item: `${siteUrl}${postSlug}`,
              },
            ],
          }),
        }}
      />
      <article className="mx-auto max-w-4xl rounded-3xl border border-gray-200 bg-white p-8 shadow-sm sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#6b7280]">
          Blog Article · Offline Tracking
        </p>
        <h1 className="mt-3 text-3xl font-bold sm:text-4xl">
          How offline workout tracking improves consistency
        </h1>

        <div className="mt-4 flex items-center gap-3 text-sm text-gray-500">
          <time dateTime={publishedDate}>June 25, 2026</time>
          <span>·</span>
          <span>4 min read</span>
        </div>

        <p className="mt-6 text-lg text-gray-600">
          One of the most overlooked barriers to fitness consistency is internet
          access. Gyms often have weak signals. Outdoor workouts happen in areas
          with no coverage. And cloud-dependent apps become frustrating to use
          when they cannot sync or load.
        </p>

        <div className="mt-8 space-y-6 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold text-[#111827]">
              Why connectivity kills momentum
            </h2>
            <p className="mt-3">
              When a fitness app requires an internet connection to load
              exercises, log sets, or view progress, any interruption becomes a
              reason to skip logging altogether. If the app cannot save a set
              because there is no signal, the workout goes unrecorded. Over
              time, missed logs become missed workouts.
            </p>
            <p className="mt-3">
              Offline-first apps remove this problem entirely. Data is saved
              locally on the device and syncs when a connection is available. The
              logging experience does not change whether you are in a basement
              gym, on a trail, or on a plane.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#111827]">
              How Streak.ai handles offline tracking
            </h2>
            <p className="mt-3">
              Streak.ai stores all data locally using on-device databases.
              Workouts, meals, habits, and progress photos are saved
              immediately. You can view past sessions, check streaks, and log
              new data without any network request. Optional cloud sync is
              available for backup, but the app never depends on it.
            </p>
            <p className="mt-3">
              This aligns with Streak.ai's <Link href="/blog/privacy-first-fitness-app" className="underline hover:text-black">privacy-first approach</Link> to health data. Your workout history stays on your device unless you choose to back it up.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#111827]">
              Offline tracking builds better habits
            </h2>
            <p className="mt-3">
              When logging is always available, it becomes a default behavior
              rather than something you do conditionally. You do not need to
              check for signal before starting a workout. You do not have to
              wait for data to sync. The app works exactly the same way every
              time, which reinforces the habit loop.
            </p>
            <p className="mt-3">
              For users who track <Link href="/blog/habits" className="underline hover:text-black">food and nutrition habits</Link> alongside
              workouts, this seamless experience means the entire health
              routine stays intact regardless of connectivity.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#111827]">
              Why more apps should go offline-first
            </h2>
            <p className="mt-3">
              Offline-first design is not just about convenience. It is about
              reliability. Users should never lose access to their data because
              of a network issue. As fitness apps collect more personal health
              information, local-first architecture also reduces the attack
              surface for data breaches and unwanted access.
            </p>
          </section>
        </div>

        <section className="mt-10 rounded-2xl bg-[#f9fafb] p-6">
          <h2 className="text-2xl font-semibold text-[#111827]">
            Frequently asked questions
          </h2>
          <div className="mt-6 space-y-4">
            {faqs.map((item) => (
              <div
                key={item.question}
                className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0"
              >
                <h3 className="font-semibold text-[#111827]">
                  {item.question}
                </h3>
                <p className="mt-2 text-gray-700">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

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
