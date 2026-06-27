import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Section, SubSection } from "@/app/components/LegalSection";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Streak.ai Privacy Policy — how we collect, use, store, and protect your information.",
};

export default function PrivacyPage() {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/70 border-b border-gray-100/50">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/icon.png"
                alt="Streak.ai"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="font-bold text-xl tracking-tight">
                Streak.ai
              </span>
            </Link>
            <Link
              href="/"
              className="text-sm font-medium text-gray-600 hover:text-charcoal transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-28 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-2">
            Privacy Policy
          </h1>
          <p className="text-gray-500 text-sm mb-8">
            Last updated: June 19, 2026
          </p>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              This Privacy Policy describes how Streak.ai (&ldquo;we,&rdquo;
              &ldquo;our,&rdquo; or &ldquo;us&rdquo;) collects, uses, stores,
              and protects your information when you use our mobile application
              and related services.
            </p>

            <Section title="1. Information We Collect" />

            <SubSection title="1.1 Profile Information" />
            <p>When you set up your profile during onboarding, we collect:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Biological sex</li>
              <li>Date of birth</li>
              <li>Current weight, height, and target weight</li>
              <li>Activity level and fitness goal</li>
              <li>
                Daily calorie and macro targets (auto-calculated or manually
                set)
              </li>
            </ul>

            <SubSection title="1.2 Health & Activity Data" />
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Meal logs (food name, calories, macros, ingredients, photos)
              </li>
              <li>
                Workout sessions (exercises, sets, reps, weights, duration)
              </li>
              <li>Body measurements over time</li>
              <li>Water intake logs</li>
              <li>Sleep logs</li>
              <li>Habit tracking data</li>
              <li>Progress photos</li>
              <li>
                Food scan history (barcodes, nutrition labels, ingredient lists)
              </li>
              <li>
                Step count data (via Health Connect, device sensor, or manual
                entry)
              </li>
            </ul>

            <SubSection title="1.3 Step Tracking Data" />
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>Health Connect (Android):</strong> With your permission,
                the app reads daily step counts from Google Health Connect. This
                is read-only — steps are never written back.
              </li>
              <li>
                <strong>Device Step Sensor:</strong> When Health Connect is
                unavailable, the app may read the Android hardware step counter
                sensor. Cumulative steps since last boot are stored locally to
                calculate today&apos;s count.
              </li>
              <li>
                <strong>Manual Entry:</strong> You can add or subtract steps
                using quick-log buttons in the steps screen.
              </li>
            </ul>
            <p>
              Step data is stored locally in the app&apos;s embedded database
              (Isar) and system preferences. Step data is{" "}
              <strong>never</strong> transmitted to our servers or any third
              party.
            </p>

            <SubSection title="1.4 Device Information" />
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Android Device ID (used for anonymous identification and AI
                token tracking)
              </li>
              <li>Device model and operating system version</li>
            </ul>

            <SubSection title="1.5 Purchase Information" />
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Purchase token and order ID (for in-app purchase verification)
              </li>
              <li>Product ID for the unlock purchase</li>
            </ul>

            <Section title="2. How We Collect and Use Your Information" />

            <SubSection title="2.1 Local Storage (On-Device)" />
            <p>
              The vast majority of your data is stored locally on your device
              using our embedded database. This includes all profile
              information, health logs, workouts, habits, progress photos, and
              scan history. This data never leaves your device unless you
              explicitly choose to export it.
            </p>

            <SubSection title="2.2 AI Food Analysis" />
            <p>
              When you use the AI food scanner feature, the following data flows
              occur:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>Barcode scanning:</strong> Barcode numbers are sent to
                Open Food Facts (a public open database) to retrieve product
                nutrition information.
              </li>
              <li>
                <strong>Nutrition label / ingredient OCR:</strong> Text
                extracted from labels via on-device ML Kit is sent to our
                backend for AI parsing.
              </li>
              <li>
                <strong>Food photo analysis:</strong> Food images are sent to
                Google&apos;s Gemini API (using your own API key if provided) to
                identify and describe the food. The resulting text description
                is then sent to our backend for nutritional analysis.
              </li>
              <li>
                <strong>Describe meal:</strong> Your text description is sent to
                our backend for AI macro estimation.
              </li>
            </ul>
            <p>
              <strong>Important:</strong> Raw food images are only sent to the
              Gemini API — they are not uploaded to our servers. Only text
              descriptions of meals reach our backend infrastructure.
            </p>

            <SubSection title="2.3 AI Token Tracking" />
            <p>
              To ensure fair usage of our AI analysis feature, we track the
              number of AI tokens consumed daily and cumulatively. This tracking
              uses your anonymized device ID and is stored on our backend.
            </p>

            <SubSection title="2.4 Purchase Verification" />
            <p>
              When you purchase the Streak.ai unlock, your purchase token and
              order ID are sent to our backend for verification against Google
              Play&apos;s API. This confirms your purchase and enables lifetime
              AI token tracking.
            </p>

            <Section title="3. Third-Party Services" />
            <p>
              We use the following third-party services. Each processes data
              only as necessary to provide their respective functions:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 pr-4 font-semibold">
                      Service
                    </th>
                    <th className="text-left py-2 pr-4 font-semibold">
                      Purpose
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="py-2 pr-4">Supabase</td>
                    <td className="py-2 pr-4">Backend database</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Google Gemini API</td>
                    <td className="py-2 pr-4">
                      Food image analysis & identification
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Google ML Kit</td>
                    <td className="py-2 pr-4">
                      On-device barcode & text recognition
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Open Food Facts</td>
                    <td className="py-2 pr-4">
                      Public product barcode lookup
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Google Play Billing</td>
                    <td className="py-2 pr-4">
                      In-app purchase processing
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Google Health Connect</td>
                    <td className="py-2 pr-4">
                      Step count data source (optional, Android only)
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">LLM</td>
                    <td className="py-2 pr-4">
                      Server-side LLM food analysis
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Section title="4. Camera and Photo Access" />
            <p>We request camera access solely for:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Scanning food barcodes, nutrition labels, and ingredient lists
              </li>
              <li>Taking food photos for AI analysis</li>
              <li>
                Capturing progress photos to track physical transformation
              </li>
            </ul>
            <p>
              All photos are stored locally on your device. Food photos may be
              temporarily processed by Google&apos;s Gemini API for analysis
              purposes. We do not upload your photos to our servers or share
              them with third parties beyond what is described in Section 3.
            </p>

            <Section title="5. Notifications" />
            <p>
              We use only local notifications (no remote push notifications)
              for:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Daily motivational reminders</li>
              <li>Habit reminders (user-configured)</li>
              <li>Water drinking reminders (user-configured)</li>
              <li>Workout session updates</li>
            </ul>
            <p>
              These notifications are generated on your device and do not
              transmit any data to our servers.
            </p>

            <Section title="6. Data Export and Deletion" />

            <SubSection title="6.1 Export" />
            <p>
              You can export all your data at any time via the Profile screen.
              Two export formats are available:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>JSON Backup:</strong> Complete export of all app data in
                machine-readable format, importable back into the app.
              </li>
              <li>
                <strong>PDF Health Report:</strong> A formatted report including
                meals, water intake, body measurements, workouts, habits, and
                personal info.
              </li>
            </ul>

            <SubSection title="6.2 Deletion" />
            <p>You can delete your data in several ways:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Delete individual records (meals, workouts, habits, etc.)
                directly within each feature.
              </li>
              <li>
                Scan logs support soft-deletion (marked as deleted but retained
                for stability).
              </li>
            </ul>
            <p>
              Server-side records (AI token usage, purchase verification) are
              retained as necessary for service operation and fraud prevention.
              These records are anonymized and not linked to any personally
              identifiable information.
            </p>

            <Section title="7. No Social Features" />
            <p>
              Streak.ai does not include social features. There are no public
              profiles, messaging systems, comments, feeds, or means of sharing
              content with other users within the app. You may choose to share
              scan result cards via your device&apos;s system share sheet, but
              this is initiated by you and controlled entirely by your
              device&apos;s sharing mechanisms.
            </p>

            <Section title="8. Children&apos;s Privacy" />
            <p>
              Streak.ai does not knowingly collect personal information from
              children under the age of 13. The app does not include age
              verification mechanisms. If you are a parent or guardian and
              believe your child has provided us with personal information,
              please contact us so we can assist with data deletion.
            </p>

            <Section title="9. Data Security" />
            <p>
              We implement appropriate technical and organizational measures to
              protect your data. All data is stored locally on your device using
              an embedded database. Data transmitted to third-party services
              (Gemini, Supabase, etc.) is sent over encrypted connections
              (HTTPS). Your Gemini API key, if provided, is stored locally on
              your device and is not transmitted to our servers.
            </p>

            <Section title="10. Changes to This Policy" />
            <p>
              We may update this Privacy Policy from time to time. Changes will
              be posted on this page with an updated &ldquo;Last
              updated&rdquo; date. We encourage you to review this policy
              periodically.
            </p>

            <Section title="11. Contact Us" />
            <p>
              If you have any questions about this Privacy Policy or our data
              practices, please contact us through our website or via the
              contact information provided in the app.
            </p>
          </div>
        </div>
      </main>

      <footer className="bg-[#F5F5F0] pt-12 pb-8">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm text-gray-500">
            © Copyright 2026 Streak.ai. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
