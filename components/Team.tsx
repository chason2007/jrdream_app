import type { BaseLocaleProps } from "@/types/common";
import type { TeamContent } from "@/lib/content";

export interface TeamProps extends BaseLocaleProps {
  readonly content: TeamContent;
}

export default function Team({ content }: Readonly<TeamProps>) {
  const founder = content.founder;

  return (
    <section
      id="team"
      className="py-24 sm:py-32 bg-paper text-ink/80 relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-brass/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs text-brass uppercase tracking-[0.25em] block mb-3">
            {content.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-ink mb-4 text-balance">
            {content.title}
          </h2>
          <p className="text-ink/70 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed text-pretty">
            {content.subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-surface border border-ink/10 rounded-xl overflow-hidden shadow-[0_10px_40px_-15px_rgba(13,24,38,0.15)] mb-16 hover:border-brass/40 transition-all duration-300">
          <div className="grid grid-cols-1 md:grid-cols-12">
            <div className="md:col-span-5 relative h-80 md:h-auto min-h-[320px] bg-paper">
              <img
                src={founder.image}
                alt={founder.name}
                className="w-full h-full object-cover object-center filter grayscale contrast-[1.05] hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent md:hidden" />
            </div>

            <div className="md:col-span-7 p-8 sm:p-10 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between gap-4 mb-2">
                  <span className="font-mono text-xs text-brass uppercase tracking-widest font-semibold">
                    {founder.role}
                  </span>
                  <div className="flex items-center gap-3">
                    {founder.email && (
                      <a
                        href={`mailto:${founder.email}`}
                        className="text-ink/50 hover:text-brass transition-colors p-1"
                        aria-label={`Email ${founder.name}`}
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </a>
                    )}
                    {founder.linkedin && (
                      <a
                        href={founder.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-ink/50 hover:text-brass transition-colors p-1"
                        aria-label={`${founder.name} LinkedIn Profile`}
                      >
                        <svg
                          className="w-5 h-5 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-ink mb-4">
                  {founder.name}
                </h3>

                <p className="text-ink/70 text-sm sm:text-base leading-relaxed">
                  {founder.bio}
                </p>
              </div>

              <div className="pt-4 border-t border-ink/10 flex items-center justify-between text-xs font-mono text-ink/50">
                <span>Executive Leadership — Abu Dhabi HQ</span>
                <span className="text-brass font-semibold">20+ Yrs Asset Strategy</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {content.members.map((member) => (
            <div
              key={member.name}
              className="group bg-surface border border-ink/10 hover:border-brass/40 rounded-lg p-6 text-center transition-[transform,border-color,box-shadow] duration-300 [transition-timing-function:var(--ease-premium)] hover:-translate-y-1 hover:shadow-[0_12px_32px_-14px_rgba(198,161,91,0.3)] flex flex-col justify-between"
            >
              <div>
                <div className="w-24 h-24 mx-auto rounded-full bg-paper mb-5 overflow-hidden ring-2 ring-brass/30 group-hover:ring-brass transition-all duration-300 shadow-md">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center filter grayscale contrast-[1.05] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                </div>

                <h4 className="text-lg font-serif font-bold text-ink mb-1 group-hover:text-brass transition-colors">
                  {member.name}
                </h4>

                <p className="text-brass text-xs font-mono font-medium mb-1">
                  {member.role}
                </p>

                {member.credentials && (
                  <span className="inline-block px-2 py-0.5 bg-paper text-ink/60 font-mono text-[10px] uppercase rounded-sm border border-ink/10 mb-3">
                    {member.credentials}
                  </span>
                )}
              </div>

              {member.linkedin && (
                <div className="pt-4 border-t border-ink/10 flex justify-center">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink/40 hover:text-brass transition-colors p-1"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <svg
                      className="w-4 h-4 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
                    </svg>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
