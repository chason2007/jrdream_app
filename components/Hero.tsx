import type { Content, Locale } from "@/lib/content";

export default function Hero({
  lang,
  dict,
}: {
  lang: Locale;
  dict: Content;
}) {
  const isAr = lang === "ar";
  const hero = dict.hero;

  // Arabic display type (Amiri) is taller and takes no italic; tune per-locale.
  const headlineLeading = isAr ? "leading-[1.3]" : "leading-tight";
  const accentClass = isAr ? "text-brass" : "italic text-brass";

  return (
    <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-ink via-ink-2 to-ink" />
      <div className="absolute inset-0 bg-gradient-to-t from-brass/5 via-transparent to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow */}
        <div className="mb-8 flex justify-center">
          <span
            className={`font-mono text-xs text-stone uppercase ${
              isAr ? "" : "tracking-widest"
            }`}
          >
            {hero.eyebrow}
          </span>
        </div>

        {/* Headline */}
        <h1
          className={`mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-bone text-center text-balance ${headlineLeading}`}
        >
          {hero.headlineLead}{" "}
          <span className={accentClass}>{hero.headlineAccent}</span>
        </h1>

        {/* Lede — capped near a 60ch measure for readability */}
        <p className="mb-10 text-lg sm:text-xl text-stone text-center max-w-[60ch] mx-auto leading-relaxed text-pretty">
          {hero.lede}
        </p>

        {/* CTA buttons */}
        <div className="mb-16 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="w-full sm:w-auto px-8 py-3 sm:py-4 bg-brass hover:bg-brass-2 text-ink font-medium text-base sm:text-lg rounded-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2 focus-visible:ring-offset-ink">
            {hero.ctaPrimary}
          </button>
          <button className="w-full sm:w-auto px-8 py-3 sm:py-4 border border-bone/60 text-bone hover:bg-bone/10 font-medium text-base sm:text-lg rounded-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-bone focus-visible:ring-offset-2 focus-visible:ring-offset-ink">
            {hero.ctaSecondary}
          </button>
        </div>

        {/* Ticker */}
        <div className="pt-8 border-t border-hairline">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-6 sm:gap-x-14 text-center">
            {hero.ticker.map((item) => (
              <div key={item.label}>
                <div
                  className={`font-mono text-sm text-brass font-medium ${
                    isAr ? "" : "tracking-wider"
                  }`}
                >
                  {/* Figures stay Latin/LTR even in the Arabic layout */}
                  <span dir="ltr">{item.value}</span>
                </div>
                <div
                  className={`font-mono text-xs text-stone uppercase ${
                    isAr ? "" : "tracking-wider"
                  }`}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Baseline hairline */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-hairline to-transparent" />
    </section>
  );
}
