import type { BaseLocaleProps } from "@/types/common";
import type { ServicesContent } from "@/lib/content";
import { renderServiceIcon } from "@/lib/icons/serviceIcons";

export interface ServicesProps extends BaseLocaleProps {
  content: ServicesContent;
}

export default function Services({ content }: ServicesProps) {
  return (
    <section
      id="services"
      className="py-24 bg-ink relative overflow-hidden border-t border-hairline"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brass/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs text-stone uppercase tracking-[0.25em] block mb-3">
            {content.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-bone mb-6">
            {content.title}
          </h2>

          <div className="p-6 sm:p-8 bg-ink-2/80 border border-brass/30 rounded-lg shadow-xl relative backdrop-blur-sm">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-brass text-ink font-mono text-[10px] uppercase font-semibold tracking-widest rounded-full">
              Mission & Vision
            </div>
            <p className="text-base sm:text-lg text-bone/90 leading-relaxed font-serif italic text-balance">
              &ldquo;{content.mission}&rdquo;
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {content.items.map((service, idx) => (
            <div
              key={service.num}
              className={`group bg-ink-2/60 border border-hairline hover:border-brass/50 rounded-lg p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:bg-ink-2 hover:shadow-[0_12px_35px_-10px_rgba(198,161,91,0.15)] flex flex-col justify-between ${
                idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-2xl font-bold text-brass/70 group-hover:text-brass transition-colors">
                    {service.num}
                  </span>
                  <div className="w-12 h-12 bg-brass/10 border border-brass/20 rounded-md flex items-center justify-center group-hover:bg-brass/20 group-hover:border-brass/40 transition-colors">
                    {renderServiceIcon(service.num)}
                  </div>
                </div>

                <h3 className="text-xl font-serif font-bold text-bone mb-3 group-hover:text-brass-2 transition-colors leading-snug">
                  {service.title}
                </h3>

                <p className="text-stone text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-hairline flex items-center justify-between text-xs font-mono text-stone/60 group-hover:text-stone transition-colors">
                <span>JR Dream Capability</span>
                <span className="text-brass group-hover:translate-x-1 transition-transform rtl:group-hover:-translate-x-1">
                  &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
