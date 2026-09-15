import { experience } from '../data/site'

export function ExperienceTimeline() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 px-3 py-16 sm:px-4 md:px-6 md:py-20"
    >
      <div className="mx-auto max-w-[1280px]">
        <h2 className="font-serif text-4xl tracking-tight sm:text-5xl">
          Experience & Activities
        </h2>
        <ol className="mt-10 divide-y divide-line border-y border-line">
          {experience.map((item) => (
            <li
              key={item.org}
              className="grid gap-2 py-6 md:grid-cols-[180px_1fr] md:gap-10"
            >
              <p className="font-mono text-xs tracking-wide text-muted">
                {item.period}
              </p>
              <div>
                <p className="text-lg">{item.org}</p>
                <p className="text-sm text-muted">{item.role}</p>
                <p className="mt-3 max-w-2xl leading-relaxed text-ink/80">
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
