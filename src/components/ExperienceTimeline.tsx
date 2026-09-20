import { experience } from '../data/site'

export function ExperienceTimeline() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 px-3 py-8 sm:px-4 md:px-6 md:py-12"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-4 md:mb-5" data-reveal>
          <p className="font-sans text-[11px] font-semibold tracking-widest text-muted">
            Background
          </p>
          <h2 className="mt-2 font-serif text-4xl tracking-tight sm:text-5xl">
            Experience &amp; Activities
          </h2>
        </div>

        <ol className="relative space-y-0" data-reveal>
          {/* Vertical timeline line */}
          <div
            className="absolute left-[3.5px] top-7 bottom-7 w-px bg-ink/15"
            aria-hidden="true"
          />

          {experience.map((item, index) => (
            <li
              key={`${item.org}-${index}`}
              className={`relative grid gap-2 py-6 pl-6 md:pl-10 md:grid-cols-[220px_1fr] md:gap-10 ${
                index !== experience.length - 1 ? 'border-b border-ink/10' : ''
              }`}
            >
              {/* Timeline dot - precisely centered with title line baseline */}
              <div
                className="absolute left-[-1px] top-[33px] size-2.5 rounded-full bg-ink/70 ring-4 ring-paper"
                aria-hidden="true"
              />

              <div className="flex flex-col gap-1 pt-1">
                <p className="font-sans text-xs font-semibold tracking-wide text-muted shrink-0">
                  {item.period}
                </p>
                {item.location && (
                  <p className="text-[11px] leading-tight text-muted/70 font-sans">
                    {item.location}
                  </p>
                )}
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg font-medium text-ink leading-snug">{item.role}</h3>
                  {item.type && (
                    <span className="rounded-full bg-ink/5 border border-ink/10 px-2.5 py-0.5 text-[11px] font-medium text-ink/70">
                      {item.type}
                    </span>
                  )}
                </div>
                <p className="mt-0.5 text-sm font-semibold text-muted">{item.org}</p>

                <p className="mt-2.5 max-w-3xl text-[15px] leading-relaxed text-ink/80">
                  {item.detail}
                </p>

                {item.highlights && item.highlights.length > 0 && (
                  <ul className="mt-3 space-y-1.5 pl-4 list-disc text-sm text-ink/75 max-w-3xl">
                    {item.highlights.map((hl, i) => (
                      <li key={i} className="leading-relaxed">
                        {hl}
                      </li>
                    ))}
                  </ul>
                )}

                {item.skills && item.skills.length > 0 && (
                  <div className="mt-3.5 flex flex-wrap gap-1.5">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md bg-ink/5 px-2 py-0.5 text-[11px] font-medium text-ink/70"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
