import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import { ArrowIcon } from './icons'
import { ProjectCard } from './ProjectCard'

export function ProjectGrid({
  limit,
  heading = true,
}: {
  limit?: number
  heading?: boolean
}) {
  const list = typeof limit === 'number' ? projects.slice(0, limit) : projects

  return (
    <section id="work" className="scroll-mt-20 px-3 py-16 sm:px-4 md:px-6 md:py-24">
      <div className="mx-auto max-w-[1280px]">
        {heading ? (
          <div className="mb-5 max-w-2xl md:mb-6" data-reveal>
            <p className="font-sans text-[11px] font-semibold tracking-widest text-muted">
              Selected work
            </p>
            <h2 className="mt-2 font-serif text-4xl tracking-tight sm:text-6xl">
              Selected Work
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted sm:text-lg">
              A selection of products, experiments, and systems I've built.
            </p>
          </div>
        ) : null}

        <div className="flex flex-col gap-5 md:gap-7">
          {list.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>

        <div className="mt-12" data-reveal>
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-sm text-ink transition-opacity hover:opacity-60"
          >
            View all projects
            <ArrowIcon className="size-3.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
