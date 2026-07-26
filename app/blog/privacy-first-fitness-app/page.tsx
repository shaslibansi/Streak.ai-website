import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://streak.ai";
const postSlug = "/blog/privacy-first-fitness-app";
const publishedDate = "2026-06-10";
const modifiedDate = "2026-07-10";

const faqs = [
  {
    question: "What is a privacy-first fitness app?",
    answer:
      "A privacy-first fitness app keeps your health data on your device whenever possible and does not depend on constant cloud access to work well.",
  },
  {
    question: "Why does local storage matter for fitness apps?",
    answer:
      "Local storage helps protect sensitive health information and keeps the app usable even when your connection is weak or unavailable.",
  },
  {
    question: "Is Streak.ai private by design?",
    answer:
      "Yes. Streak.ai is built around local-first data handling, with optional sync so users can choose how much of their data they want to store in the cloud.",
  },
];

const relatedPosts = [
  {
    title: "How offline workout tracking improves consistency",
    href: "/blog/offline-workout-tracker",
  },
  {
    title: "Why one-time purchase fitness apps beat subscriptions",
    href: "/blog/one-time-purchase-fitness-app",
  },
  {
    title: "How Streak.ai AI Food Scanning Makes Calorie Tracking Effortless",
    href: "/blog/first-steps",
  },
];

export const metadata: Metadata = {
  title: "Why privacy-first fitness apps matter for your health data",
  description:
    "Learn why privacy-first fitness apps are becoming essential and how Streak.ai keeps workouts, meals, and habits private while staying powerful.",
  keywords: [
    "privacy first fitness app",
    "local storage fitness app",
    "offline workout tracker",
    "private fitness app",
    "Streak.ai privacy",
    "data privacy fitness",
    "secure health tracking",
  ],
  alternates: {
    canonical: `${siteUrl}${postSlug}`,
  },
  openGraph: {
    title: "Why privacy-first fitness apps matter for your health data",
    description:
      "Discover how Streak.ai combines privacy-first design with an all-in-one fitness experience for workouts, meals, habits, and progress.",
    url: `${siteUrl}${postSlug}`,
    type: "article",
    siteName: "Streak.ai",
    images: [
      {
        url: `${siteUrl}/images/icon.png`,
        width: 512,
        height: 512,
        alt: "Streak.ai privacy-first fitness tracking",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Why privacy-first fitness apps matter for your health data",
    description:
      "Discover how Streak.ai combines privacy-first design with an all-in-one fitness experience for workouts, meals, habits, and progress.",
    images: [`${siteUrl}/images/icon.png`],
  },
};

export default function PrivacyFirstFitnessPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f2] px-6 py-24 text-charcoal">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Why privacy-first fitness apps matter for your health data",
            description:
              "A guide to why privacy-first fitness apps matter and how Streak.ai keeps your wellness data safe, local, and useful.",
            author: { "@type": "Organization", name: "Streak.ai", url: siteUrl },
            publisher: {
              "@type": "Organization",
              name: "Streak.ai",
              url: siteUrl,
            },
            datePublished: publishedDate,
            dateModified: modifiedDate,
            mainEntityOfPage: `${siteUrl}${postSlug}`,
            image: `${siteUrl}/images/icon.png`,
            articleSection: "Privacy",
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
                name: "Why privacy-first fitness apps matter",
                item: `${siteUrl}${postSlug}`,
              },
            ],
          }),
        }}
      />
      <article className="mx-auto max-w-4xl rounded-3xl border border-gray-200 bg-white p-8 shadow-sm sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#6b7280]">
          Blog Article · Privacy
        </p>
        <h1 className="mt-3 text-3xl font-bold sm:text-4xl">
          Why privacy-first fitness apps matter for your health data
        </h1>

        <div className="mt-4 flex items-center gap-3 text-sm text-gray-500">
          <time dateTime={publishedDate}>June 10, 2026</time>
          <span>·</span>
          <span>4 min read</span>
        </div>

        <p className="mt-6 text-lg text-gray-600">
          More people are tracking workouts, meals, sleep, and habits than ever
          before. But when your fitness app stores everything in the cloud, your
          health data stops being just a personal record and becomes part of a
          larger data ecosystem.
        </p>

        <div className="mt-8 space-y-6 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold text-[#111827]">
              Why privacy matters in fitness apps
            </h2>
            <p className="mt-3">
              Fitness data can reveal a lot about your routine, your goals, and
              your lifestyle. That makes privacy a real feature, not just a
              nice-to-have. A good app should let you decide how much of that
              data stays on your device and how much, if any, is shared.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#111827]">
              The problem with cloud-only tracking
            </h2>
            <p className="mt-3">
              Some apps make everyday logging feel convenient, but they also
              rely on constant internet access and centralized storage. That can
              create friction when you are offline, and it can leave users
              wondering who can access their information. This is especially
              relevant for <Link href="/blog/offline-workout-tracker" className="underline hover:text-black">offline workout tracking</Link>, where
              connectivity should never be a barrier to logging progress.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#111827]">
              How Streak.ai is built differently
            </h2>
            <p className="mt-3">
              Streak.ai is designed to be practical first and private by default.
              It helps users track workouts, meals, habits, and progress without
              forcing them into a subscription model or sacrificing control over
              their data. Local-first storage and optional sync give users a more
              flexible and trustworthy experience. This aligns with the{" "}
              <Link href="/blog/one-time-purchase-fitness-app" className="underline hover:text-black">
                one-time purchase model
              </Link>{" "}
              that puts user ownership first.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#111827]">
              Who benefits most from privacy-first fitness tools
            </h2>
            <p className="mt-3">
              This matters for anyone who wants a fitness app that feels
              dependable and respectful of personal data. It is especially
              valuable for people who want to track their routines offline, avoid
              unnecessary subscriptions, and keep more control over their own
              progress.
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
