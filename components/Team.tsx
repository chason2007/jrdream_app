import type { Content, Locale } from "@/lib/content";

export default function Team({
  lang,
  dict,
}: {
  lang: Locale;
  dict: Content;
}) {
  const teamDict = dict.team;
  const isAr = lang === "ar";
  const founder = teamDict.founder;

  return (
    <section
      id="team"
      className="py-24 bg-ink relative overflow-hidden border-t border-hairline"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-brass/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs text-stone uppercase tracking-[0.25em] block mb-3">
            {teamDict.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-bone mb-4">
            {teamDict.title}
          </h2>
          <p className="text-stone text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            {teamDict.subtitle}
          </p>
        </div>

        {/* Founder / Executive Director Spotlight Card */}
        <div className="max-w-4xl mx-auto bg-ink-2/90 border border-brass/40 rounded-xl overflow-hidden shadow-2xl mb-16 hover:border-brass/70 transition-all duration-300">
          <div className="grid grid-cols-1 md:grid-cols-12">
            {/* Founder Image */}
            <div className="md:col-span-5 relative h-80 md:h-auto min-h-[320px] bg-ink">
              <img
                src={founder.image}
                alt={founder.name}
                className="w-full h-full object-cover object-center filter grayscale contrast-[1.05] hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-2 via-transparent to-transparent md:hidden" />
            </div>

            {/* Founder Bio & Details */}
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
                        className="text-stone hover:text-brass transition-colors p-1"
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
                        className="text-stone hover:text-brass transition-colors p-1"
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

                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-bone mb-4">
                  {founder.name}
                </h3>

                <p className="text-stone text-sm sm:text-base leading-relaxed">
                  {founder.bio}
                </p>
              </div>

              <div className="pt-4 border-t border-hairline flex items-center justify-between text-xs font-mono text-stone/80">
                <span>Executive Leadership — Abu Dhabi HQ</span>
                <span className="text-brass font-semibold">20+ Yrs Asset Strategy</span>
              </div>
            </div>
          </div>
        </div>

        {/* Executive Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {teamDict.members.map((member) => (
            <div
              key={member.name}
              className="group bg-ink-2/60 border border-hairline hover:border-brass/40 rounded-lg p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-ink-2 hover:shadow-[0_10px_30px_-10px_rgba(198,161,91,0.2)] flex flex-col justify-between"
            >
              <div>
                {/* Circular Portrait */}
                <div className="w-24 h-24 mx-auto rounded-full bg-ink mb-5 overflow-hidden ring-2 ring-brass/30 group-hover:ring-brass transition-all duration-300 shadow-md">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center filter grayscale contrast-[1.05] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                </div>

                {/* Name */}
                <h4 className="text-lg font-serif font-bold text-bone mb-1 group-hover:text-brass transition-colors">
                  {member.name}
                </h4>

                {/* Role */}
                <p className="text-brass/90 text-xs font-mono font-medium mb-1">
                  {member.role}
                </p>

                {/* Credentials */}
                {member.credentials && (
                  <span className="inline-block px-2 py-0.5 bg-ink text-stone/80 font-mono text-[10px] uppercase rounded-sm border border-hairline mb-3">
                    {member.credentials}
                  </span>
                )}
              </div>

              {/* Social Links */}
              {member.linkedin && (
                <div className="pt-4 border-t border-hairline flex justify-center">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone/60 hover:text-brass transition-colors p-1"
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
