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
      className="py-24 sm:py-32 bg-paper text-ink/80 relative overflow-hidden"
    >
      <div className="absolute bottom-0 start-0 w-[700px] h-[500px] bg-brass/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        {content.eyebrow && (
          <span className="font-mono text-xs text-brass uppercase tracking-[0.25em] block mb-4">
            {content.eyebrow}
          </span>
        )}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-ink leading-[1.1] text-balance max-w-3xl">
          {content.title}
        </h2>
        {content.mission && (
          <p className="mt-6 text-xl sm:text-2xl text-ink/70 italic font-serif leading-relaxed text-pretty max-w-3xl">
            &ldquo;{content.mission}&rdquo;
          </p>
        )}

        {/* Services — airy ledger entries, no boxes */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {content.items.map((service) => (
            <div key={service.num} className="group border-t border-ink/10 pt-6">
              <div className="flex items-center justify-between mb-5">
                <span className="font-mono text-xs text-ink/40">
                  {service.num}
                </span>
                {renderServiceIcon(service.num, "w-6 h-6 text-brass")}
              </div>
              <h3 className="text-lg sm:text-xl font-serif font-bold text-ink mb-2 leading-snug">
                {service.title}
              </h3>
              <p className="text-ink/65 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
