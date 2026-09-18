import { Link } from 'react-router-dom'
import type { Project } from '../data/projects'
import { CornerMark } from './CornerMark'
import { ArrowIcon } from './icons'
import { featuredMockupId, ProjectMockup } from './ProjectMockups'

const accentBg: Record<Project['accent'], string> = {
  lavender: 'bg-lavender/30',
  mint: 'bg-mint/35',
  gold: 'bg-gold/35',
  night: 'bg-plum/30',
  navy: 'bg-navy/20',
}

const accentInfoBg: Record<Project['accent'], string> = {
  lavender: 'bg-lavender/20',
  mint: 'bg-mint/25',
  gold: 'bg-gold/25',
  night: 'bg-plum/20',
  navy: 'bg-navy/15',
}

const accentTag: Record<Project['accent'], string> = {
  lavender: 'bg-lavender/40 text-ink/80',
  mint: 'bg-mint/50 text-ink/80',
  gold: 'bg-gold/45 text-ink/80',
  night: 'bg-plum/40 text-ink/80',
  navy: 'bg-navy/30 text-cream/90',
}

export function ProjectCard({
  project,
  index,
}: {
  project: Project
  index: number
}) {
  const reverse = index % 2 === 1
  const portrait = project.slug === 'student-walker'

  return (
    <article
      className="grid items-stretch gap-3 lg:grid-cols-12 lg:gap-4"
      data-reveal
    >
      {/* Mockup panel */}
      <Link
        to={`/work/${project.slug}`}
        className={`group relative min-h-[180px] overflow-hidden rounded-[16px] transition-transform duration-300 hover:scale-[1.015] sm:min-h-[360px] ${
          portrait ? 'lg:col-span-4' : 'lg:col-span-7'
        } ${
          project.screenshots && project.screenshots.length > 0
            ? 'bg-white border border-gray-200 p-1.5'
            : `${accentBg[project.accent]} p-3`
        } ${reverse ? 'lg:order-2' : ''}`}
      >
        <CornerMark />
        {project.screenshots && project.screenshots.length > 0 ? (
          <div className="flex h-full min-h-[180px] sm:min-h-[360px] w-full items-center justify-center overflow-hidden rounded-[12px] bg-white p-1">
            <img
              src={project.screenshots[0]}
              alt={project.name}
              className="max-h-full max-w-full rounded-[8px] object-contain border border-gray-200"
            />
          </div>
        ) : (
          <ProjectMockup id={featuredMockupId(project.slug)} className="h-full" />
        )}
        {/* Hover overlay hint */}
        <div className="absolute inset-0 flex items-end justify-end p-4 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-ink/80 px-3 py-1.5 text-[11px] text-cream backdrop-blur-sm">
            View case study
            <ArrowIcon className="size-3" />
          </span>
        </div>
      </Link>

      {/* Info panel */}
      <div
        className={`flex flex-col justify-between rounded-[16px] p-4 sm:p-8 ${
          portrait ? 'lg:col-span-8' : 'lg:col-span-5'
        } ${accentInfoBg[project.accent]} ${
          reverse ? 'lg:order-1' : ''
        }`}
      >
        <div>
          <div className="flex items-center justify-between">
            <p className="font-mono text-[11px] tracking-widest text-muted">
              {project.number}
            </p>
            <p className="text-[11px] tracking-wide text-muted">{project.type}</p>
          </div>

          <h3 className="mt-2 font-serif text-[28px] leading-[1.05] tracking-tight sm:mt-4 sm:text-[48px]">
            {project.name}
          </h3>

          <p className="mt-2 text-[13px] leading-relaxed text-ink/75 sm:mt-4 sm:text-[15px]">
            {project.summary}
          </p>

          <ul className="mt-3 flex flex-wrap gap-1.5 sm:mt-5">
            {project.stack.map((tech) => (
              <li
                key={tech}
                className={`rounded-full px-3 py-1 text-[12px] ${accentTag[project.accent]}`}
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>

        {/* Links */}
        <div className="mt-4 flex flex-wrap gap-4 sm:mt-8">
          {project.links.map((link) =>
            link.href.startsWith('/') ? (
              <Link
                key={link.label}
                to={link.href}
                className="inline-flex items-center gap-1.5 text-sm text-ink transition-opacity hover:opacity-60"
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
                className="inline-flex items-center gap-1.5 text-sm text-ink transition-opacity hover:opacity-60"
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
