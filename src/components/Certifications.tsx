import { certifications } from '../data/site'

export function Certifications() {
  return (
    <section className="px-3 py-16 sm:px-4 md:px-6 md:py-20">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-10 md:mb-14" data-reveal>
          <p className="font-mono text-[11px] tracking-widest text-muted uppercase">
            Achievements
          </p>
          <h2 className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl">
            Certifications
          </h2>
        </div>

        <ol className="relative space-y-0" data-reveal>
          {/* Vertical timeline line */}
          <div
            className="absolute left-0 top-0 hidden h-full w-px bg-line md:block"
            aria-hidden="true"
          />

          {certifications.map((item, index) => (
            <li
              key={item.title}
              className={`grid gap-2 py-8 md:grid-cols-[200px_1fr] md:gap-12 md:pl-10 ${
                index !== certifications.length - 1 ? 'border-b border-line' : ''
              }`}
            >
              {/* Timeline dot — desktop only */}
              <div
                className="absolute left-[-4.5px] hidden size-2.5 rounded-full bg-line ring-2 ring-cream md:block"
                style={{ top: `calc(${index * (100 / certifications.length)}% + 36px)` }}
                aria-hidden="true"
              />

              <div className="flex items-start gap-3 md:flex-col md:gap-1">
                <p className="font-mono text-[11px] tracking-widest text-muted shrink-0">
                  {item.date}
                </p>
              </div>

              <div>
                <p className="text-[17px] text-ink">{item.title}</p>
                <p className="mt-0.5 text-sm text-muted">{item.issuer}</p>
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
