export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#F5F5F0]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight">
          About Streakup
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Pure transparency, powered by AI
        </p>
        <div className="relative">
          <svg
            className="absolute -top-8 -left-4 w-12 h-12 text-gray-300"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <p className="text-lg lg:text-xl text-gray-700 leading-relaxed italic max-w-3xl mx-auto">
            &ldquo;Studies show that consumers who strictly audit ingredient
            listings significantly reduce risk indices for chronic metabolic
            strain. Streakup turns complex chemical labels into pure
            transparency.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
