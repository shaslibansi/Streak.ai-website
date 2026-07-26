import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://streak.ai";
const postSlug = "/blog/smarter-food-scanning";
const publishedDate = "2026-07-25";
const modifiedDate = "2026-07-25";

const relatedPosts = [
  {
    title: "Deeper Health Insights: New Visual Tools for Understanding Your Food",
    href: "/blog/deeper-health-insights",
  },
  {
    title: "How Streak.ai AI Food Scanning Makes Calorie Tracking Effortless",
    href: "/blog/first-steps",
  },
  {
    title: "Why privacy-first fitness apps matter for your health data",
    href: "/blog/privacy-first-fitness-app",
  },
];

export const metadata: Metadata = {
  title:
    "Smarter Food Scanning: Enhanced Ingredient Safety Analysis and Allergen Detection",
  description:
    "Streak.ai's food scanner now detects 30+ allergen categories, classifies ingredients by safety level, and identifies IARC-classified carcinogens with detailed explanations.",
  keywords: [
    "AI food scanner",
    "ingredient safety analysis",
    "allergen detection app",
    "carcinogen detector",
    "IARC food classification",
    "clean label app",
    "food additive scanner",
    "nutrition analysis AI",
  ],
  alternates: {
    canonical: `${siteUrl}${postSlug}`,
  },
  openGraph: {
    title:
      "Smarter Food Scanning: Enhanced Ingredient Safety Analysis and Allergen Detection",
    description:
      "Streak.ai's food scanner now detects 30+ allergen categories, classifies ingredients by safety level, and identifies IARC-classified carcinogens with detailed explanations.",
    url: `${siteUrl}${postSlug}`,
    type: "article",
    siteName: "Streak.ai",
    images: [
      {
        url: `${siteUrl}/images/icon.png`,
        width: 512,
        height: 512,
        alt: "Streak.ai food scanner analysis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Smarter Food Scanning: Enhanced Ingredient Safety Analysis and Allergen Detection",
    description:
      "Streak.ai's food scanner now detects 30+ allergen categories and identifies IARC-classified carcinogens.",
    images: [`${siteUrl}/images/icon.png`],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Smarter Food Scanning: Enhanced Ingredient Safety Analysis and Allergen Detection",
  description:
    "Streak.ai's food scanner now detects 30+ allergen categories, classifies ingredients by safety level, and identifies IARC-classified carcinogens with detailed explanations.",
  author: { "@type": "Organization", name: "Streak.ai", url: siteUrl },
  publisher: { "@type": "Organization", name: "Streak.ai", url: siteUrl },
  datePublished: publishedDate,
  dateModified: modifiedDate,
  mainEntityOfPage: `${siteUrl}${postSlug}`,
  image: `${siteUrl}/images/icon.png`,
  articleSection: "AI Food Scanning",
  wordCount: 900,
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
      name: "Smarter Food Scanning",
      item: `${siteUrl}${postSlug}`,
    },
  ],
};

export default function SmarterFoodScanningPage() {
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
          Smarter Food Scanning: Enhanced Ingredient Safety Analysis and
          Allergen Detection
        </h1>

        <div className="mt-4 flex items-center gap-3 text-sm text-gray-500">
          <time dateTime={publishedDate}>July 25, 2026</time>
          <span>·</span>
          <span>5 min read</span>
        </div>

        <p className="mt-6 text-lg text-gray-600">
          Knowing what is in your food goes beyond calories and macros. The
          latest update to Streak.ai's food scanner brings a major upgrade to
          how ingredients are analyzed — with comprehensive allergen detection,
          color-coded safety classification, and detailed IARC-based carcinogen
          identification.
        </p>

        <div className="mt-8 space-y-6 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold text-[#111827]">
              Comprehensive allergen detection
            </h2>
            <p className="mt-3">
              The new AllergenWarningBanner automatically scans every ingredient
              list against a database of over 30 allergen categories, covering
              all major regulatory frameworks:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-1">
              <li>
                <strong>FALCPA (US):</strong> Milk, eggs, fish, crustaceans,
                tree nuts, peanuts, wheat, soy, sesame
              </li>
              <li>
                <strong>EU Top 14:</strong> All of the above plus lupin,
                molluscs, celery, mustard, and sulphites
              </li>
              <li>
                <strong>Regional:</strong> Buckwheat (Japan/Korea), coconut (FDA
                tree nut), oats (strict celiac)
              </li>
              <li>
                <strong>Deep derivatives:</strong> Caseinates, whey isolates,
                soy lecithin, maltodextrin, modified food starches
              </li>
            </ul>
            <p className="mt-3">
              When an allergen is detected, the scanner shows a clear red
              warning banner listing all detected allergens. Tapping the banner
              expands to show exactly which ingredients triggered each
              allergen — no guessing, no hidden ingredients.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#111827]">
              Color-coded ingredient hazard map
            </h2>
            <p className="mt-3">
              The new IngredientHazardMap visualizes every ingredient in your
              food with a clear, color-coded safety rating:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-1">
              <li>
                <strong>Green (Safe):</strong> Natural or minimally processed
                ingredients with no concerns
              </li>
              <li>
                <strong>Orange (Moderate):</strong> Processed ingredients or
                added sweeteners — fine in moderation
              </li>
              <li>
                <strong>Red (Avoid):</strong> Controversial additives flagged by
                safety alerts
              </li>
              <li>
                <strong>Purple (Carcinogen):</strong> IARC-classified
                carcinogenic ingredients
              </li>
            </ul>
            <p className="mt-3">
              Tap any ingredient chip to see a detailed explanation of why it
              was classified that way. For carcinogens, the explanation includes
              the IARC group classification, the risk level, and the scientific
              reasoning behind the classification.
            </p>
            <p className="mt-3">
              When there are more than 10 ingredients with 5 or more safe ones,
              the safe ingredients are automatically grouped into a single
              pill — keeping the display clean while still being informative.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#111827]">
              IARC carcinogen classification
            </h2>
            <p className="mt-3">
              The scanner now includes a comprehensive local database of
              IARC-classified carcinogens. This database is authoritative for
              known carcinogens and is cross-referenced with AI-detected
              findings to prevent false positives:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-1">
              <li>
                <strong>Group 1 (Known):</strong> Sodium nitrite, ethanol,
                aflatoxins, processed meat, Chinese salted fish, areca nut
              </li>
              <li>
                <strong>Group 2A (Probable):</strong> Acrylamide found in
                fried/baked starchy foods
              </li>
              <li>
                <strong>Group 2B (Possible):</strong> Aspartame, BHA, Red 3,
                potassium bromate, titanium dioxide, 4-methylimidazole, caramel
                color, traditional pickled vegetables
              </li>
            </ul>
            <p className="mt-3">
              Each detected carcinogen shows its full IARC group,
              human-readable risk level, and a detailed reason explaining the
              classification. This makes it easy to understand not just that an
              ingredient is flagged, but why — and how concerned you should be.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#111827]">
              Natural vs processed percentage bar
            </h2>
            <p className="mt-3">
              A new visual indicator shows you at a glance how natural or
              processed your food is. The NaturalProcessedBar displays a
              gradient bar — green for natural percentage on the left, coral for
              processed percentage on the right — with exact percentages labeled
              above. This gives you an instant sense of where your food falls on
              the whole-food-to-ultra-processed spectrum.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#111827]">
              Why this matters
            </h2>
            <p className="mt-3">
              Most nutrition apps stop at calories and macros. But the real
              story of food quality is in the ingredients — the additives,
              preservatives, artificial colors, and hidden allergens that
              standard tracking ignores. By bringing ingredient-level analysis
              to every scan, Streak.ai helps users make more informed choices
              about what they eat, not just how much.
            </p>
            <p className="mt-3">
              This is especially important for people with food sensitivities,
              allergies, or concerns about ultra-processed foods. Instead of
              researching every unfamiliar ingredient, the scanner does the work
              for you in seconds.
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
