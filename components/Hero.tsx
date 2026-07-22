import type { BaseLocaleProps } from "@/types/common";
import type { HeroContent } from "@/lib/content";

export interface HeroProps extends BaseLocaleProps {
  content: HeroContent;
}

export default function Hero({ lang, content }: HeroProps) {
  const isAr = lang === "ar";

  const headlineType = isAr
    ? "leading-[1.3]"
    : "leading-[1.05] tracking-[-0.02em]";
  const accentClass = isAr ? "text-brass" : "italic text-brass";

  return (
    <section className="relative flex items-center min-h-[88vh] pt-28 pb-24 sm:pt-32 sm:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-ink" aria-hidden="true">
        <div
          className="absolute inset-0 bg-cover bg-center [filter:grayscale(0.4)_brightness(0.9)_contrast(1.05)]"
          style={{ backgroundImage: "url(/hero-abudhabi.jpg)" }}
        />
        <div className="absolute inset-0 bg-ink/35 mix-blend-multiply" />
        <div className="absolute inset-0 bg-brass/[0.06] mix-blend-soft-light" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/25 to-ink" />
        <div className="absolute inset-0 [background:radial-gradient(130%_90%_at_50%_40%,transparent_42%,rgba(13,24,38,0.72)_100%)]" />
        <div
          className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {content.eyebrow && (
          <div className="mb-8 flex justify-center">
            <span
              className={`reveal font-mono text-xs text-stone uppercase ${
                isAr ? "" : "tracking-[0.25em]"
              }`}
            >
              {content.eyebrow}
            </span>
          </div>
        )}

        <h1
          className={`reveal mb-6 font-serif font-bold text-bone text-center text-balance text-[clamp(2.25rem,5vw+1.25rem,4.5rem)] ${headlineType}`}
          style={{ animationDelay: "0.12s" }}
        >
          {content.headlineLead}{" "}
          <span className={accentClass}>{content.headlineAccent}</span>
        </h1>

        <p
          className="reveal mb-10 text-stone text-center max-w-[60ch] mx-auto leading-relaxed text-pretty text-[clamp(1.05rem,0.6vw+0.95rem,1.3rem)]"
          style={{ animationDelay: "0.24s" }}
        >
          {content.lede}
        </p>

        <div
          className="reveal flex flex-col sm:flex-row gap-4 justify-center items-center"
          style={{ animationDelay: "0.36s" }}
        >
          <button className="w-full sm:w-auto px-8 py-3 sm:py-4 bg-brass text-ink font-medium text-base sm:text-lg rounded-sm transition-[transform,box-shadow,background-color] duration-300 [transition-timing-function:var(--ease-premium)] hover:-translate-y-0.5 hover:bg-brass-2 hover:shadow-[0_10px_30px_-10px_rgba(198,161,91,0.55)] focus:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2 focus-visible:ring-offset-ink">
            {content.ctaPrimary}
          </button>
          <button className="w-full sm:w-auto px-8 py-3 sm:py-4 border border-bone/50 text-bone font-medium text-base sm:text-lg rounded-sm transition-[transform,background-color,border-color] duration-300 [transition-timing-function:var(--ease-premium)] hover:-translate-y-0.5 hover:bg-bone/10 hover:border-bone focus:outline-none focus-visible:ring-2 focus-visible:ring-bone focus-visible:ring-offset-2 focus-visible:ring-offset-ink">
            {content.ctaSecondary}
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-hairline to-transparent" />
    </section>
  );
}
