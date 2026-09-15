import { education, site } from '../data/site'

export function About() {
  return (
    <section id="about" className="scroll-mt-20 px-3 py-16 sm:px-4 md:px-6 md:py-20">
      <div className="mx-auto max-w-[1280px]">
        <div
          className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16"
          data-reveal
        >
          {/* Text */}
          <div>
            <p className="font-mono text-[11px] tracking-widest text-muted uppercase">
              About
            </p>
            <h2 className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl">
              A little about me
            </h2>
            <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-ink/80">
              I'm {site.name}, an Informatics student and full-stack developer
              based in Bandung. I enjoy turning ideas into functional products —
              from interface design and frontend development to backend systems
              and Web3 integrations.
            </p>
            <p className="mt-4 max-w-xl text-[17px] leading-relaxed text-muted">
              Recent work covers web applications, full-stack systems, Web3
              applications, mobile applications, and collaborative projects with
              other students.
            </p>
          </div>

          {/* Education */}
          <div className="self-start rounded-[24px] border border-line bg-paper p-6 sm:p-8 lg:self-end">
            <p className="font-mono text-[10px] tracking-widest text-muted uppercase">
              Education
            </p>
            <ul className="mt-5 space-y-5">
              {education.map((item) => (
                <li key={item.school} className="border-b border-line pb-5 last:border-0 last:pb-0">
                  <p className="text-[15px] text-ink">{item.school}</p>
                  <p className="mt-1 text-sm text-muted">{item.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
