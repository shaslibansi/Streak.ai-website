import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Section, SubSection } from "@/app/components/LegalSection";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Streak.ai Terms of Use — governing your use of the Streak.ai mobile application and related services.",
};

export default function TermsPage() {
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
            Terms of Use
          </h1>
          <p className="text-gray-500 text-sm mb-8">
            Last updated: June 19, 2026
          </p>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              These Terms of Use (&ldquo;Terms&rdquo;) govern your use of the
              Streak.ai mobile application (&ldquo;the App&rdquo;) and related
              services. By downloading, installing, or using the App, you agree
              to be bound by these Terms. If you do not agree, do not use the
              App.
            </p>

            <Section title="1. Description of Service" />
            <p>
              Streak.ai is a comprehensive health and fitness application that
              provides the following core features:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>Habit Tracking:</strong> Create and maintain daily
                habits with streak tracking, visual calendars, and contribution
                heatmaps.
              </li>
              <li>
                <strong>Gym Workout Logger:</strong> Track exercises, sets,
                reps, weights, and rest intervals. Build and save custom workout
                routines from an exercise library of 100+ exercises.
              </li>
              <li>
                <strong>AI-Powered Nutrition Analysis:</strong> Scan barcodes,
                nutrition labels, and ingredient lists, or take photos of food
                for AI-powered macro estimation and health scoring.
              </li>
              <li>
                <strong>Progress Tracking:</strong> Monitor body measurements,
                progress photos, workout volume, and habit consistency over
                time.
              </li>
              <li>
                <strong>Step Tracking:</strong> Track daily steps via Health
                Connect integration, device step sensor, or manual entry. View
                step history, statistics, and 7-day charts.
              </li>
              <li>
                <strong>Water & Sleep Tracking:</strong> Log daily water intake
                and sleep patterns.
              </li>
            </ul>

            <Section title="2. Eligibility" />
            <p>
              By using the App, you represent and warrant that you are at least
              13 years of age. If you are under 13, you may not use the App. The
              App is not intended for users under 13 without parental consent
              and supervision.
            </p>

            <Section title="3. User Accounts" />
            <p>
              Streak.ai does not require user accounts. The App uses anonymous
              device-based identification for certain features (such as AI token
              tracking and purchase verification). You are responsible for
              maintaining the security of your device and any data stored on it.
            </p>

            <Section title="4. In-App Purchases" />

            <SubSection title="4.1 Streak.ai Unlock" />
            <p>
              The App offers a one-time, non-consumable in-app purchase called
              &ldquo;Streak.ai Unlock&rdquo; that provides access to premium
              features including AI-powered food scanning, smart tracking, and
              progress & routines. The purchase is processed through Google Play
              Billing and is subject to Google&apos;s terms and conditions.
            </p>

            <SubSection title="4.2 No Refunds" />
            <p>
              All purchases are final and non-refundable, except as required by
              applicable law or as otherwise determined by Google Play&apos;s
              refund policies.
            </p>

            <SubSection title="4.3 Discount Codes" />
            <p>
              From time to time, we may offer discount codes for the unlock
              purchase. These codes are subject to specific terms and expiration
              dates and may be revoked if obtained through unauthorized means.
            </p>

            <Section title="5. AI Features and Token System" />

            <SubSection title="5.1 AI Analysis" />
            <p>
              The App uses artificial intelligence to analyze food images and
              text descriptions for macro and calorie estimation. Results are
              estimates only and should not be considered medically or
              nutritionally accurate. You should verify critical nutritional
              information through other means.
            </p>

            <SubSection title="5.2 Token Limits" />
            <p>AI analysis is subject to fair usage limits:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>Daily limit:</strong> 100,000 tokens per day
              </li>
              <li>
                <strong>Lifetime limit:</strong> 100,000 tokens
              </li>
            </ul>
            <p>
              These limits apply to unpaid users. Purchasing the Streak.ai
              Unlock provides higher lifetime token tracking. Users may bypass
              limits entirely by providing their own Gemini API key in the
              Profile settings.
            </p>

            <SubSection title="5.3 Disclaimer" />
            <p>
              AI-generated nutritional information is provided for informational
              and educational purposes only. It is not a substitute for
              professional medical advice, diagnosis, or treatment. Always seek
              the advice of a qualified healthcare provider with any questions
              you may have regarding your health or nutritional needs.
            </p>

            <Section title="6. User Responsibilities" />
            <p>You agree to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Provide accurate information during profile setup</li>
              <li>
                Use the App in compliance with all applicable laws and
                regulations
              </li>
              <li>
                Not attempt to circumvent AI token limits or purchase
                verification
              </li>
              <li>
                Not reverse-engineer, modify, or create derivative works of the
                App
              </li>
              <li>Not use the App for any unlawful or prohibited purpose</li>
              <li>
                Maintain the confidentiality of your device and any API keys you
                configure
              </li>
            </ul>

            <Section title="7. Intellectual Property" />
            <p>
              The App, including all code, design, graphics, text, and
              functionality, is owned by Streak.ai and is protected by
              copyright, trademark, and other intellectual property laws. You
              are granted a limited, non-exclusive, non-transferable license to
              use the App for personal, non-commercial purposes.
            </p>

            <Section title="8. Third-Party Services" />
            <p>
              The App integrates with third-party services including but not
              limited to:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Google Gemini API (food image analysis)</li>
              <li>
                Google ML Kit (on-device barcode and text recognition)
              </li>
              <li>Open Food Facts (public food database)</li>
              <li>Google Play Billing (purchase processing)</li>
              <li>
                Google Health Connect (step count data reading, Android only)
              </li>
              <li>Supabase (backend infrastructure)</li>
            </ul>
            <p>
              We are not responsible for the availability, accuracy, or
              functionality of these third-party services. Your use of these
              services may be subject to their respective terms and privacy
              policies.
            </p>

            <Section title="9. Disclaimer of Warranties" />
            <p>
              THE APP IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS
              AVAILABLE&rdquo; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR
              IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF
              MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
              NON-INFRINGEMENT. WE DO NOT GUARANTEE THAT THE APP WILL BE
              UNINTERRUPTED, ERROR-FREE, OR THAT DEFECTS WILL BE CORRECTED.
            </p>
            <p>
              NUTRITIONAL AND HEALTH INFORMATION PROVIDED BY THE APP IS FOR
              INFORMATIONAL PURPOSES ONLY AND IS NOT INTENDED AS MEDICAL ADVICE.
              YOU SHOULD CONSULT A QUALIFIED HEALTHCARE PROFESSIONAL BEFORE
              MAKING ANY DECISIONS ABOUT YOUR HEALTH, DIET, OR EXERCISE ROUTINE.
            </p>

            <Section title="10. Limitation of Liability" />
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, STREAK.AI
              SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
              CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATING TO
              YOUR USE OF THE APP, INCLUDING BUT NOT LIMITED TO DAMAGES FOR LOST
              PROFITS, DATA LOSS, OR PERSONAL INJURY.
            </p>

            <Section title="11. Termination" />
            <p>
              You may stop using the App at any time. You can delete all locally
              stored data via the &ldquo;Clear All Data&rdquo; option in the
              Profile screen. We reserve the right to terminate or suspend
              access to the App for violations of these Terms or for any other
              reason at our discretion.
            </p>

            <Section title="12. Changes to These Terms" />
            <p>
              We may modify these Terms at any time. Changes will be posted on
              this page with an updated &ldquo;Last updated&rdquo; date.
              Continued use of the App after changes constitutes acceptance of
              the new Terms.
            </p>

            <Section title="13. Governing Law" />
            <p>
              These Terms shall be governed by and construed in accordance with
              the laws of the Republic of the Philippines, without regard to its
              conflict of law provisions.
            </p>

            <Section title="14. Contact" />
            <p>
              If you have any questions about these Terms, please contact us
              through our website or via the contact information provided in the
              App.
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
