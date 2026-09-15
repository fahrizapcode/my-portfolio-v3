import { education, site } from '../data/site'

export function About() {
  return (
    <section id="about" className="scroll-mt-24 px-3 py-16 sm:px-4 md:px-6 md:py-20">
      <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <p className="text-sm tracking-wide text-muted">About</p>
          <h2 className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl">
            A little about me
          </h2>
          <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-ink/80">
            I&apos;m {site.name}, an Informatics student and full-stack developer
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
        <div className="self-end rounded-[24px] border border-line bg-paper p-6">
          <p className="text-sm text-muted">Education</p>
          <ul className="mt-4 space-y-5">
            {education.map((item) => (
              <li key={item.school}>
                <p>{item.school}</p>
                <p className="text-sm text-muted">{item.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
