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
    <section id="work" className="scroll-mt-24 px-3 py-16 sm:px-4 md:px-6 md:py-24">
      <div className="mx-auto max-w-[1280px]">
        {heading ? (
          <div className="mb-10 max-w-2xl md:mb-14">
            <p className="text-sm tracking-wide text-muted">Selected work</p>
            <h2 className="mt-3 font-serif text-4xl tracking-tight sm:text-6xl">
              Selected Work
            </h2>
            <p className="mt-4 text-base text-muted sm:text-lg">
              A selection of products, experiments, and systems I&apos;ve built.
            </p>
          </div>
        ) : null}

        <div className="flex flex-col gap-10 md:gap-16">
          {list.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>

        {limit ? (
          <div className="mt-10">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-sm text-ink"
            >
              View all projects
              <ArrowIcon className="size-3.5" />
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  )
}
