import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://streak.ai";
const postSlug = "/blog/deeper-health-insights";
const publishedDate = "2026-07-25";
const modifiedDate = "2026-07-25";

const relatedPosts = [
  {
    title: "Smarter Food Scanning: Enhanced Ingredient Safety Analysis and Allergen Detection",
    href: "/blog/smarter-food-scanning",
  },
  {
    title: "Track Your Progress Without Opening the App — Streak.ai's New Home Screen Widgets",
    href: "/blog/home-screen-widgets",
  },
  {
    title: "How Streak.ai AI Food Scanning Makes Calorie Tracking Effortless",
    href: "/blog/first-steps",
  },
];

export const metadata: Metadata = {
  title:
    "Deeper Health Insights: New Visual Tools for Understanding Your Food",
  description:
    "Streak.ai introduces a redesigned details screen with glass-morphism cards, micronutrient tracking, health score visualization, and a shareable analysis summary card.",
  keywords: [
    "food details screen",
    "nutrition visualization",
    "macro pie chart",
    "health score food",
    "micronutrient tracker",
    "daily value percent",
    "glassmorphism UI",
    "share nutrition card",
    "Streak.ai update",
  ],
  alternates: {
    canonical: `${siteUrl}${postSlug}`,
  },
  openGraph: {
    title:
      "Deeper Health Insights: New Visual Tools for Understanding Your Food",
    description:
      "Streak.ai introduces a redesigned details screen with glass-morphism cards, micronutrient tracking, health score visualization, and a shareable analysis summary card.",
    url: `${siteUrl}${postSlug}`,
    type: "article",
    siteName: "Streak.ai",
    images: [
      {
        url: `${siteUrl}/images/icon-v2.png`,
        width: 512,
        height: 512,
        alt: "Streak.ai health insights screen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Deeper Health Insights: New Visual Tools for Understanding Your Food",
    description:
      "Streak.ai introduces a redesigned details screen with glass-morphism cards, micronutrient tracking, health score visualization, and a shareable analysis summary card.",
    images: [`${siteUrl}/images/icon-v2.png`],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Deeper Health Insights: New Visual Tools for Understanding Your Food",
  description:
    "Streak.ai introduces a redesigned details screen with glass-morphism cards, micronutrient tracking, health score visualization, and a shareable analysis summary card.",
  author: { "@type": "Organization", name: "Streak.ai", url: siteUrl },
  publisher: { "@type": "Organization", name: "Streak.ai", url: siteUrl },
  datePublished: publishedDate,
  dateModified: modifiedDate,
  mainEntityOfPage: `${siteUrl}${postSlug}`,
  image: `${siteUrl}/images/icon-v2.png`,
  articleSection: "Product Updates",
  wordCount: 850,
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
      name: "Deeper Health Insights",
      item: `${siteUrl}${postSlug}`,
    },
  ],
};

export default function DeeperHealthInsightsPage() {
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
          Deeper Health Insights: New Visual Tools for Understanding Your Food
        </h1>

        <div className="mt-4 flex items-center gap-3 text-sm text-gray-500">
          <time dateTime={publishedDate}>July 25, 2026</time>
          <span>·</span>
          <span>4 min read</span>
        </div>

        <p className="mt-6 text-lg text-gray-600">
          The food details screen is the most important part of any nutrition
          tracker — it is where raw scan data turns into actionable insights.
          The latest Streak.ai update brings a completely redesigned details
          experience with glass-morphism cards, a comprehensive health score,
          micronutrient tracking, and a beautiful share card that lets you show
          off your analysis.
        </p>

        <div className="mt-8 space-y-6 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold text-[#111827]">
              Glass-morphism design system
            </h2>
            <p className="mt-3">
              The entire details screen has been rebuilt around a unified
              glass-morphism design language. A new reusable GlassContainer
              widget applies a frosted glass effect — 20px gaussian blur with
              semi-transparent backgrounds and subtle border highlights — to
              every card, section, and summary panel. The result is a cohesive,
              modern interface that feels premium on both light and dark themes.
            </p>
            <p className="mt-3">
              This design system is used consistently across the health score
              card, nutrition breakdown, daily value percentages, micronutrient
              grid, and the summary snippet card. It ties the entire experience
              together without adding visual clutter.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#111827]">
              Health score and natural percentage
            </h2>
            <p className="mt-3">
              Every scanned food now gets a health score card that combines
              multiple factors into a single assessment. The card shows the
              natural versus processed percentage as a gradient bar — green for
              whole foods, coral for processed ingredients — giving you an
              instant sense of where your food falls on the
              whole-food-to-ultra-processed spectrum.
            </p>
            <p className="mt-3">
              This is calculated from the ingredient list and NOVA
              classification when available, with estimates for foods that do
              not have a NOVA score. A food with 90% natural rating is clearly
              different from one with 10%, and the visual makes that difference
              impossible to miss.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#111827]">
              Macro pie chart and nutrition columns
            </h2>
            <p className="mt-3">
              The macro distribution is now visualized as an interactive pie
              chart showing the proportion of calories coming from protein,
              carbohydrates, and fat. Below the pie chart, nutrition columns
              display the exact gram values with color-coded progress bars —
              green for protein, orange for carbs, blue for fat — compared
              against your personal daily targets.
            </p>
            <p className="mt-3">
              A serving control lets you adjust the portion size and see all
              values update in real time. If you scan a full bag of chips but
              only eat half, you can adjust the serving size and the calories,
              macros, and micronutrients all scale proportionally.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#111827]">
              Micronutrient and daily value tracking
            </h2>
            <p className="mt-3">
              Beyond the standard macros, the new details screen shows a
              micronutrient card with fiber, sugar, sodium, saturated fat, and
              cholesterol — each displayed as a percentage of the daily value
              based on a 2,000-calorie diet. This gives you a complete picture
              of what is in your food, not just the calorie count.
            </p>
            <p className="mt-3">
              A dedicated Daily Value card collects all percentages into one
              place, making it easy to see at a glance whether a food is high in
              sodium, saturated fat, or added sugar relative to your daily
              needs.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#111827]">
              Shareable analysis card
            </h2>
            <p className="mt-3">
              Every scan can now be shared as a beautiful card image. The
              SummarySnippetCard and ShareCard combine the health score, macro
              breakdown, ingredient hazard map, and AI-generated summary into a
              single shareable image. You can save it to your gallery, share it
              with friends, or post it on social media — all without revealing
              personal health data.
            </p>
            <p className="mt-3">
              The share card is captured using Flutter's RepaintBoundary at 3x
              pixel ratio, ensuring sharp, high-resolution images that look good
              on any screen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#111827]">
              AI-generated summary snippet
            </h2>
            <p className="mt-3">
              Each scan includes an AI-generated summary snippet that
              highlights the most important findings: detected carcinogens and
              their IARC groups, flagged additives, the worst-offender
              ingredient combining both safety and carcinogen flags, and the
              natural percentage assessment. This gives you a quick,
              human-readable takeaway without needing to interpret the raw data
              yourself.
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
