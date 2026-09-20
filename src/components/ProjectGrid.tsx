import { projects } from '../data/projects'
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
    <section id="work" className="scroll-mt-20 px-3 py-8 sm:px-4 md:px-6 md:py-14">
      <div className="mx-auto max-w-[1280px]">
        {heading ? (
          <div className="mb-5 max-w-2xl md:mb-6" data-reveal>
            <p className="font-sans text-[11px] font-semibold tracking-widest text-muted">
              Selected Work
            </p>
            <h2 className="mt-2 font-serif text-4xl tracking-tight sm:text-6xl">
              Things I've Built
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
      </div>
    </section>
  )
}
