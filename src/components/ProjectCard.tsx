import { Link } from 'react-router-dom'
import type { Project } from '../data/projects'
import { CornerMark } from './CornerMark'
import { ArrowIcon } from './icons'
import { featuredMockupId, ProjectMockup } from './ProjectMockups'

export function ProjectCard({
  project,
  index,
}: {
  project: Project
  index: number
}) {
  const reverse = index % 2 === 1

  return (
    <article className="grid items-stretch gap-4 lg:grid-cols-12 lg:gap-6">
      <Link
        to={`/work/${project.slug}`}
        className={`relative min-h-[260px] overflow-hidden rounded-[28px] bg-paper p-3 transition duration-300 hover:scale-[1.01] sm:min-h-[340px] lg:col-span-7 ${
          reverse ? 'lg:order-2' : ''
        }`}
      >
        <CornerMark />
        <ProjectMockup id={featuredMockupId(project.slug)} className="h-full" />
      </Link>

      <div
        className={`flex flex-col justify-between rounded-[28px] border border-line bg-paper p-6 sm:p-8 lg:col-span-5 ${
          reverse ? 'lg:order-1' : ''
        }`}
      >
        <div>
          <p className="font-mono text-xs tracking-widest text-muted">
            {project.number}
          </p>
          <h3 className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl">
            {project.name}
          </h3>
          <p className="mt-2 text-sm text-muted">{project.type}</p>
          <p className="mt-5 text-[15px] leading-relaxed text-ink/80">
            {project.summary}
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-line px-3 py-1 text-xs text-muted"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {project.links.map((link) =>
            link.href.startsWith('/') ? (
              <Link
                key={link.label}
                to={link.href}
                className="inline-flex items-center gap-1.5 text-sm text-ink"
              >
                {link.label}
                <ArrowIcon className="size-3.5" />
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-ink"
              >
                {link.label}
                <ArrowIcon className="size-3.5" />
              </a>
            ),
          )}
        </div>
      </div>
    </article>
  )
}
