import type { Content, Locale } from "@/lib/content";

export default function About({
  lang,
  dict,
}: {
  lang: Locale;
  dict: Content;
}) {
  const aboutDict = dict.about;
  const isAr = lang === "ar";

  return (
    <section
      id="about"
      className="py-24 bg-ink-2 relative overflow-hidden border-t border-hairline"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/3 end-0 w-[600px] h-[600px] bg-brass/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-xs text-stone uppercase tracking-[0.25em] block mb-3">
            {aboutDict.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-bone mb-6 leading-tight">
            {aboutDict.title}
          </h2>
          <p className="text-lg sm:text-xl text-brass italic font-serif leading-relaxed">
            {aboutDict.headline}
          </p>
        </div>

        {/* Main Grid: Content Paragraphs & Stat Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Paragraphs Column */}
          <div className="lg:col-span-7 space-y-6 text-stone text-base leading-relaxed">
            {aboutDict.paragraphs.map((p, idx) => (
              <div
                key={idx}
                className="p-6 bg-ink/60 border border-hairline rounded-lg hover:border-brass/30 transition-colors shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <span className="font-mono text-xs text-brass shrink-0 pt-1">
                    0{idx + 1}
                  </span>
                  <p className="text-bone/90">{p}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Stats & Key Highlights Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {aboutDict.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-ink border border-brass/20 rounded-lg p-6 hover:border-brass/50 transition-all hover:-translate-y-0.5 shadow-md flex flex-col justify-between"
                >
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-brass mb-2 block">
                    {stat.value}
                  </span>
                  <span className="font-mono text-xs text-stone uppercase tracking-wider">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Target Sectors Badge Box */}
            <div className="p-6 bg-brass/10 border border-brass/30 rounded-lg">
              <h3 className="font-mono text-xs uppercase text-brass tracking-wider mb-3">
                Key Client Sectors
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Aviation Facilities", "Corporate Real Estate", "Elite Private Clients", "Workplace Strategy"].map((sector) => (
                  <span
                    key={sector}
                    className="px-3 py-1 bg-ink text-bone font-mono text-xs rounded-sm border border-hairline"
                  >
                    {sector}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
