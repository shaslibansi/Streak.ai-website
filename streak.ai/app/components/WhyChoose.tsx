export default function WhyChoose() {
  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight">
            Why choose Streak.ai?
          </h2>
          <p className="text-lg text-gray-600">
            Streak.ai is the most advanced calorie tracker.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="hover-card bg-white rounded-3xl p-8 border border-gray-100">
            <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center mb-6">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#111"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <h3 className="font-bold text-xl mb-3">Free up your time</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Automatic macro and calorie calculation eliminates manual entry.
              Spend less time logging and more time living. Our AI handles the
              math so you don&apos;t have to.
            </p>
          </div>

          {/* Card 2 */}
          <div className="hover-card bg-white rounded-3xl p-8 border border-gray-100">
            <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center mb-6">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#111"
                strokeWidth="2"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <h3 className="font-bold text-xl mb-3">
              Integrate with your favorite fitness products
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Seamlessly sync with Apple Health, Google Fit, Fitbit, and more.
              Your steps, exercises, and heart rate data automatically inform
              your calorie goals.
            </p>
          </div>

          {/* Card 3 */}
          <div className="hover-card bg-white rounded-3xl p-8 border border-gray-100">
            <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center mb-6">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#111"
                strokeWidth="2"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </div>
            <h3 className="font-bold text-xl mb-3">
              Lose weight effortlessly
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Using your phone&apos;s depth sensor, we calculate precise food
              volume for accurate calorie counts. No guesswork, no estimation —
              just precise tracking that works.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
