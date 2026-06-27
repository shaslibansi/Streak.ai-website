export default function Community() {
  return (
    <section className="py-20 lg:py-28 bg-[#F5F5F0] border-t border-gray-200/50">
      <div className="max-w-3xl mx-auto px-6 text-center">
        {/* Badge */}
        <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#1877F2] bg-[#1877F2]/10 px-3 py-1 rounded-full mb-4">
          Connect &amp; Grow
        </span>

        <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4 tracking-tight">
          Join the Streak.ai Community
        </h2>

        <p className="text-lg text-gray-600 max-w-xl mx-auto mb-10 leading-relaxed">
          Connect with fellow fitness enthusiasts, share your daily meal wins,
          and get direct updates on our latest AI features.
        </p>

        <div className="flex flex-col items-center justify-center gap-3">
          <a
            href="https://web.facebook.com/share/g/1DtN3pXcsz/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#1877F2] text-white px-8 py-4 rounded-xl font-semibold shadow-lg shadow-[#1877F2]/20 hover:bg-[#166fe5] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            <span>Join our Facebook Group</span>
          </a>
        </div>
      </div>
    </section>
  );
}
