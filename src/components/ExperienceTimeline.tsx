import { experience } from '../data/site'

export function ExperienceTimeline() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 px-3 py-16 sm:px-4 md:px-6 md:py-20"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-4 md:mb-5" data-reveal>
          <p className="font-sans text-[11px] font-semibold tracking-widest text-muted">
            Background
          </p>
          <h2 className="mt-2 font-serif text-4xl tracking-tight sm:text-5xl">
            Experience & Activities
          </h2>
        </div>

        <ol className="relative space-y-0" data-reveal>
          {/* Vertical timeline line */}
          <div
            className="absolute left-0 top-0 hidden h-full w-px bg-ink/15 md:block"
            aria-hidden="true"
          />

          {experience.map((item, index) => (
            <li
              key={item.org}
              className={`grid gap-2 py-8 md:grid-cols-[200px_1fr] md:gap-12 md:pl-10 ${
                index !== experience.length - 1 ? 'border-b border-ink/10' : ''
              }`}
            >
              {/* Timeline dot — desktop only */}
              <div
                className="absolute left-[-4.5px] hidden size-2.5 rounded-full bg-ink/40 ring-2 ring-white md:block"
                style={{ top: `calc(${index * (100 / experience.length)}% + 36px)` }}
                aria-hidden="true"
              />

              <div className="flex items-start gap-3 md:flex-col md:gap-1">
                <p className="font-sans text-xs font-semibold tracking-wide text-muted shrink-0">
                  {item.period}
                </p>
              </div>

              <div>
                <p className="text-[17px] text-ink">{item.org}</p>
                <p className="mt-0.5 text-sm text-muted">{item.role}</p>
                <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-ink/70">
                  {item.detail}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
