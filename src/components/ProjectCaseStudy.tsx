import { Link } from 'react-router-dom'
import type { Project } from '../data/projects'
import { ArrowIcon } from './icons'
import { ProjectMockup } from './ProjectMockups'

export function ProjectCaseStudy({ project }: { project: Project }) {
  return (
    <article className="px-4 pb-20 md:px-6">
      <div className="mx-auto max-w-[960px] pt-8">
        <Link
          to="/#work"
          className="inline-flex items-center gap-2 text-sm text-muted"
        >
          <span className="rotate-180">
            <ArrowIcon className="size-3.5" />
          </span>
          Work
        </Link>

        <p className="mt-8 font-mono text-xs tracking-widest text-muted">
          {project.number} · {project.type}
        </p>
        <h1 className="mt-3 font-serif text-5xl tracking-tight md:text-7xl">
          {project.name}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
          {project.summary}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.links
            .filter((link) => !link.href.startsWith('/'))
            .map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-line px-4 py-2 text-sm"
              >
                {link.label}
              </a>
            ))}
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          {project.mockups.map((shot) => (
            <figure key={shot.id} className="rounded-[24px] bg-paper p-3">
              <div className="h-[220px] sm:h-[260px]">
                <ProjectMockup id={shot.id} />
              </div>
              <figcaption className="px-1 pt-3 text-xs text-muted">
                {shot.label}
              </figcaption>
            </figure>
          ))}
        </div>

        <Section title="Overview">{project.overview}</Section>
        <Section title="The Problem">{project.problem}</Section>
        <Section title="The Solution">{project.solution}</Section>

        <section className="mt-12 border-t border-line pt-10">
          <h2 className="font-serif text-3xl">Architecture</h2>
          <div className="mt-6 space-y-4">
            {project.architecture.map((flow) => (
              <div key={flow.title}>
                <p className="text-xs tracking-wide text-muted uppercase">
                  {flow.title}
                </p>
                <ol className="mt-3 flex flex-wrap items-center gap-2">
                  {flow.nodes.map((node, i) => (
                    <li key={node} className="contents">
                      <span className="rounded-2xl border border-line bg-paper px-3 py-2 text-sm">
                        {node}
                      </span>
                      {i < flow.nodes.length - 1 ? (
                        <span className="text-muted" aria-hidden="true">
                          →
                        </span>
                      ) : null}
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 border-t border-line pt-10">
          <h2 className="font-serif text-3xl">Key Challenges</h2>
          <ul className="mt-5 space-y-3">
            {project.challenges.map((item) => (
              <li
                key={item}
                className="rounded-[20px] border border-line px-4 py-4 leading-relaxed text-muted"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12 border-t border-line pt-10">
          <h2 className="font-serif text-3xl">Tech Stack</h2>
          <ul className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <li
                key={tech}
                className="rounded-full bg-lavender/40 px-4 py-2 text-sm"
              >
                {tech}
              </li>
            ))}
          </ul>
        </section>

        <Section title="Outcome">{project.outcome}</Section>
      </div>
    </article>
  )
}

function Section({ title, children }: { title: string; children: string }) {
  return (
    <section className="mt-12 border-t border-line pt-10">
      <h2 className="font-serif text-3xl">{title}</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-muted">{children}</p>
    </section>
  )
}
