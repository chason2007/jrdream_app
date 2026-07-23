import type { BaseLocaleProps } from "@/types/common";
import type { AboutContent } from "@/lib/content";

export interface AboutProps extends BaseLocaleProps {
  content: AboutContent;
}

export default function About({ content }: AboutProps) {
  return (
    <section
      id="about"
      className="py-24 sm:py-32 bg-paper text-ink/80 relative overflow-hidden"
    >
      {/* Soft warm wash */}
      <div className="absolute top-0 end-0 w-[600px] h-[600px] bg-brass/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        {content.eyebrow && (
          <span className="font-mono text-xs text-brass uppercase tracking-[0.25em] block mb-4">
            {content.eyebrow}
          </span>
        )}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-ink leading-[1.1] text-balance max-w-3xl">
          {content.title}
        </h2>
        {content.headline && (
          <p className="mt-6 text-xl sm:text-2xl text-ink/70 italic font-serif leading-relaxed text-pretty max-w-2xl">
            {content.headline}
          </p>
        )}

        {/* Body — flowing text, no boxes */}
        <div className="mt-14 grid md:grid-cols-2 gap-x-14 gap-y-6 text-base sm:text-lg leading-relaxed text-ink/70">
          {content.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        {/* Stats — one clean inline row */}
        {content.stats && content.stats.length > 0 && (
          <div className="mt-16 pt-10 border-t border-ink/10 grid grid-cols-2 md:grid-cols-4 gap-8">
            {content.stats.map((stat, idx) => (
              <div key={idx}>
                <div className="font-serif text-3xl sm:text-4xl font-bold text-ink">
                  {stat.value}
                </div>
                <div className="mt-1 font-mono text-xs text-ink/50 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
