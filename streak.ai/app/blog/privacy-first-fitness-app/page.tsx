import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://streak.ai";

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
  ],
  alternates: {
    canonical: `${siteUrl}/blog/privacy-first-fitness-app`,
  },
  openGraph: {
    title: "Why privacy-first fitness apps matter for your health data",
    description:
      "Discover how Streak.ai combines privacy-first design with an all-in-one fitness experience for workouts, meals, habits, and progress.",
    url: `${siteUrl}/blog/privacy-first-fitness-app`,
    type: "article",
    siteName: "Streak.ai",
  },
  twitter: {
    card: "summary_large_image",
    title: "Why privacy-first fitness apps matter for your health data",
    description:
      "Discover how Streak.ai combines privacy-first design with an all-in-one fitness experience for workouts, meals, habits, and progress.",
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
            headline: "Why privacy-first fitness apps matter for your health data",
            description:
              "A guide to why privacy-first fitness apps matter and how Streak.ai keeps your wellness data safe, local, and useful.",
            author: {
              "@type": "Organization",
              name: "Streak.ai",
            },
            publisher: {
              "@type": "Organization",
              name: "Streak.ai",
              url: siteUrl,
            },
            mainEntityOfPage: `${siteUrl}/blog/privacy-first-fitness-app`,
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
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
          }),
        }}
      />
      <article className="mx-auto max-w-4xl rounded-3xl border border-gray-200 bg-white p-8 shadow-sm sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#6b7280]">
          Blog Article
        </p>
        <h1 className="mt-3 text-3xl font-bold sm:text-4xl">
          Why privacy-first fitness apps matter for your health data
        </h1>
        <p className="mt-6 text-lg text-gray-600">
          More people are tracking workouts, meals, sleep, and habits than ever before. But when your fitness app stores everything in the cloud, your health data stops being just a personal record and becomes part of a larger data ecosystem.
        </p>

        <div className="mt-8 space-y-6 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold text-[#111827]">Why privacy matters in fitness apps</h2>
            <p className="mt-3">
              Fitness data can reveal a lot about your routine, your goals, and your lifestyle. That makes privacy a real feature, not just a nice-to-have. A good app should let you decide how much of that data stays on your device and how much, if any, is shared.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#111827]">The problem with cloud-only tracking</h2>
            <p className="mt-3">
              Some apps make everyday logging feel convenient, but they also rely on constant internet access and centralized storage. That can create friction when you are offline, and it can leave users wondering who can access their information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#111827]">How Streak.ai is built differently</h2>
            <p className="mt-3">
              Streak.ai is designed to be practical first and private by default. It helps users track workouts, meals, habits, and progress without forcing them into a subscription model or sacrificing control over their data. Local-first storage and optional sync give users a more flexible and trustworthy experience.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#111827]">Who benefits most from privacy-first fitness tools</h2>
            <p className="mt-3">
              This matters for anyone who wants a fitness app that feels dependable and respectful of personal data. It is especially valuable for people who want to track their routines offline, avoid unnecessary subscriptions, and keep more control over their own progress.
            </p>
          </section>
        </div>

        <section className="mt-10 rounded-2xl bg-[#f9fafb] p-6">
          <h2 className="text-2xl font-semibold text-[#111827]">Frequently asked questions</h2>
          <div className="mt-6 space-y-4">
            {faqs.map((item) => (
              <div key={item.question} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
                <h3 className="font-semibold text-[#111827]">{item.question}</h3>
                <p className="mt-2 text-gray-700">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/blog" className="font-medium text-[#0f172a] hover:underline">
            ← Back to blogs
          </Link>
          <Link href="/" className="font-medium text-[#0f172a] hover:underline">
            Back to Home
          </Link>
        </div>
      </article>
    </main>
  );
}
