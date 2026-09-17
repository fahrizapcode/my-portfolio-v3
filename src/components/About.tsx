import { education, site } from '../data/site'
import { Portrait } from './Portrait'

export function About() {
  return (
    <section id="about" className="scroll-mt-20 px-3 py-8 sm:px-4 md:px-6 md:py-12">
      <div className="mx-auto max-w-[1280px]">
        <div
          className="grid gap-10 lg:grid-cols-[260px_1.1fr_0.9fr] lg:items-start lg:gap-12"
          data-reveal
        >
          {/* Featured Photo Card */}
          <div className="mx-auto w-full max-w-[280px] lg:mx-0">
            <Portrait variant="card" className="w-full" />
          </div>

          {/* Text */}
          <div>
            <p className="font-sans text-[11px] font-semibold tracking-widest text-muted">
              About
            </p>
            <h2 className="mt-2 font-serif text-4xl tracking-tight sm:text-5xl">
              A little about me
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed text-ink/80">
              I'm {site.name}, an Informatics student and full-stack developer
              based in Bandung. I enjoy turning ideas into functional products —
              from interface design and frontend development to backend systems
              and Web3 integrations.
            </p>
            <p className="mt-4 text-[17px] leading-relaxed text-muted">
              Recent work covers web applications, full-stack systems, Web3
              applications, mobile applications, and collaborative projects with
              other students.
            </p>
          </div>

          {/* Education */}
          <div className="rounded-[16px] bg-plum/20 p-6 sm:p-8">
            <p className="font-sans text-[11px] font-semibold tracking-widest text-muted">
              Education
            </p>
            <ul className="mt-5 space-y-5">
              {education.map((item) => (
                <li key={item.school} className="border-b border-ink/10 pb-5 last:border-0 last:pb-0">
                  <p className="text-[15px] font-medium text-ink">{item.school}</p>
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
