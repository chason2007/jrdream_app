import type { Content, Locale } from "@/lib/content";

function getServiceIcon(num: string) {
  switch (num) {
    case "01":
      // Property Conditional Assessment Survey (Clipboard / Inspection)
      return (
        <svg
          className="w-6 h-6 text-brass"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
          />
        </svg>
      );
    case "02":
      // Fabric and MEP Refurbishment (Wrench / Engineering)
      return (
        <svg
          className="w-6 h-6 text-brass"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      );
    case "03":
      // Redevelopment Concept, Design & PM (Building Blueprint / Architecture)
      return (
        <svg
          className="w-6 h-6 text-brass"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0v-5a2 2 0 012-2h2a2 2 0 012 2v5m-4 0h4"
          />
        </svg>
      );
    case "04":
      // Property / Community Management & FM Tender (Key / Shield / Community)
      return (
        <svg
          className="w-6 h-6 text-brass"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      );
    case "05":
    default:
      // Automation and Digitization (Chip / Digital Tech)
      return (
        <svg
          className="w-6 h-6 text-brass"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 3v2m6-2v2M9 19v2m6-2v2M3 9h2m-2 6h2m14-6h2m-2 6h2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
          />
        </svg>
      );
  }
}

export default function Services({
  lang,
  dict,
}: {
  lang: Locale;
  dict: Content;
}) {
  const servicesDict = dict.services;
  const isAr = lang === "ar";

  return (
    <section
      id="services"
      className="py-24 bg-ink relative overflow-hidden border-t border-hairline"
    >
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brass/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Eyebrow & Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs text-stone uppercase tracking-[0.25em] block mb-3">
            {servicesDict.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-bone mb-6">
            {servicesDict.title}
          </h2>

          {/* Mission Quote Banner */}
          <div className="p-6 sm:p-8 bg-ink-2/80 border border-brass/30 rounded-lg shadow-xl relative backdrop-blur-sm">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-brass text-ink font-mono text-[10px] uppercase font-semibold tracking-widest rounded-full">
              Mission & Vision
            </div>
            <p className="text-base sm:text-lg text-bone/90 leading-relaxed font-serif italic text-balance">
              &ldquo;{servicesDict.mission}&rdquo;
            </p>
          </div>
        </div>

        {/* 5 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesDict.items.map((service, idx) => (
            <div
              key={service.num}
              className={`group bg-ink-2/60 border border-hairline hover:border-brass/50 rounded-lg p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:bg-ink-2 hover:shadow-[0_12px_35px_-10px_rgba(198,161,91,0.15)] flex flex-col justify-between ${
                idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div>
                {/* Number & Icon Header */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-2xl font-bold text-brass/70 group-hover:text-brass transition-colors">
                    {service.num}
                  </span>
                  <div className="w-12 h-12 bg-brass/10 border border-brass/20 rounded-md flex items-center justify-center group-hover:bg-brass/20 group-hover:border-brass/40 transition-colors">
                    {getServiceIcon(service.num)}
                  </div>
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-serif font-bold text-bone mb-3 group-hover:text-brass-2 transition-colors leading-snug">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-stone text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>

              {/* Bottom decorative border line */}
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
