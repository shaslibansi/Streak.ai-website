import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://downloadstreak.ai";
const postSlug = "/blog/first-steps";
const publishedDate = "2026-06-15";
const modifiedDate = "2026-07-10";

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
  title: "How Streak.ai AI Food Scanning Makes Calorie Tracking Effortless",
  description:
    "See how Streak.ai turns a meal photo into an instant calorie and macro log with AI-powered food recognition. No typing, no databases — just point, snap, and track.",
  keywords: [
    "AI calorie tracking",
    "AI food scanner",
    "photo calorie counter",
    "food photo recognition",
    "easy calorie tracking",
    "nutrition tracking app",
    "macro tracker app",
    "calorie counter no typing",
    "Streak.ai food scanner",
  ],
  alternates: {
    canonical: `${siteUrl}${postSlug}`,
  },
  openGraph: {
    title: "How Streak.ai AI Food Scanning Makes Calorie Tracking Effortless",
    description:
      "Learn how Streak.ai's AI food scanner analyzes meals from photos — no manual logging, no barcode scanning, just instant nutrition data.",
    url: `${siteUrl}${postSlug}`,
    type: "article",
    siteName: "Streak.ai",
    images: [
      {
        url: `${siteUrl}/images/icon-v2.png`,
        width: 512,
        height: 512,
        alt: "Streak.ai AI food scanner analyzing a meal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Streak.ai AI Food Scanning Makes Calorie Tracking Effortless",
    description:
      "Learn how Streak.ai's AI food scanner analyzes meals from photos — no manual logging, no barcode scanning, just instant nutrition data.",
    images: [`${siteUrl}/images/icon-v2.png`],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How Streak.ai AI Food Scanning Makes Calorie Tracking Effortless",
  description:
    "Learn how Streak.ai's AI food scanner analyzes meals from photos — no manual logging, no barcode scanning, just instant nutrition data.",
  author: { "@type": "Organization", name: "Streak.ai", url: siteUrl },
  publisher: { "@type": "Organization", name: "Streak.ai", url: siteUrl },
  datePublished: publishedDate,
  dateModified: modifiedDate,
  mainEntityOfPage: `${siteUrl}${postSlug}`,
  image: `${siteUrl}/images/icon-v2.png`,
  articleSection: "AI Food Scanning",
  wordCount: 650,
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/blog` },
    {
      "@type": "ListItem",
      position: 3,
      name: "How Streak.ai makes calorie tracking effortless",
      item: `${siteUrl}${postSlug}`,
    },
  ],
};

export default function BlogPostPage() {
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
          Blog Article · AI Food Scanning
        </p>
        <h1 className="mt-3 text-3xl font-bold sm:text-4xl">
          How Streak.ai AI Food Scanning Makes Calorie Tracking Effortless
        </h1>

        <div className="mt-4 flex items-center gap-3 text-sm text-gray-500">
          <time dateTime={publishedDate}>June 15, 2026</time>
          <span>·</span>
          <span>3 min read</span>
        </div>

        <p className="mt-6 text-lg text-gray-600">
          Most people stop using calorie trackers within the first week. The reason is almost never about motivation. It is usually about friction. Typing every ingredient, searching through databases, and guessing portion sizes adds up fast.
        </p>
        <p className="mt-4 text-gray-600">
          Streak.ai takes a different approach. Instead of asking users to log every item manually, it lets them take a photo and get structured nutrition data in seconds. This changes the habit from a chore into something that feels almost automatic.
        </p>

        <div className="mt-8 space-y-6 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold text-[#111827]">
              How the AI food scanner works
            </h2>
            <p className="mt-3">
              When you open the camera in Streak.ai and snap a picture of a meal, the app sends the image to an AI model trained to recognize food items. The model identifies ingredients, estimates portion sizes, and returns calorie, protein, carb, and fat estimates. It also flags processed ingredients, carcinogenic additives, and common allergens.
            </p>
            <p className="mt-3">
              Unlike traditional calorie databases that rely on barcode lookups or manual entries, Streak.ai understands meals in context. A salad with grilled chicken is analyzed differently from a salad with fried chicken. A bowl of oatmeal with protein powder is handled differently from plain oatmeal.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#111827]">
              What makes it different from barcode scanners
            </h2>
            <p className="mt-3">
              Barcode-based trackers only work for packaged foods. If you cook from scratch, eat at a restaurant, or grab something without a label, they do not help. Streak.ai works for all of those cases because it sees the food, not the package.
            </p>
            <p className="mt-3">
              It also recognizes non-food items and warns you when something does not look edible. This keeps the nutrition data realistic and prevents incorrect logs.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#111827]">
              Why photo-based tracking improves consistency
            </h2>
            <p className="mt-3">
              The easier a habit is to start, the more likely it is to stick. When logging a meal takes three seconds instead of three minutes, users log more often. That consistency leads to better awareness of portion sizes, macro balance, and overall eating patterns.
            </p>
            <p className="mt-3">
              Over time, even casual tracking can help users make smarter choices without feeling restricted. That is the difference between a short-term diet and a lasting habit.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#111827]">
              Privacy and the AI scanner
            </h2>
            <p className="mt-3">
              Because Streak.ai is built around <Link href="/blog/privacy-first-fitness-app" className="underline hover:text-black">privacy-first design</Link>, the AI analysis happens securely. Images are processed and the nutrition data is stored locally on your device by default. You control whether any data is synced or shared.
            </p>
          </section>
        </div>

        <section className="mt-10 rounded-2xl bg-[#f9fafb] p-6">
          <h2 className="text-xl font-semibold text-[#111827]">Related articles</h2>
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
