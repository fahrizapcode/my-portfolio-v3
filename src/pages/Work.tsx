import { Link } from 'react-router-dom'
import { ProjectMockup, featuredMockupId } from '../components/ProjectMockups'
import { projects } from '../data/projects'

export function Work() {
  return (
    <section className="px-4 py-12 md:px-6">
      <div className="mx-auto max-w-[1100px]">
        <p className="font-mono text-xs tracking-widest text-muted">Archive</p>
        <h1 className="mt-3 font-serif text-5xl tracking-tight md:text-6xl">
          All projects
        </h1>
        <p className="mt-4 max-w-lg text-muted">
          Dummy case studies for products, experiments, and systems.
        </p>
        <ul className="mt-12 grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <li key={project.slug}>
              <Link
                to={`/work/${project.slug}`}
                className="block rounded-[28px] border border-line bg-paper p-4 transition-transform hover:scale-[1.01]"
              >
                <div className="h-[180px]">
                  <ProjectMockup id={featuredMockupId(project.slug)} />
                </div>
                <p className="mt-4 font-mono text-xs text-muted">{project.number}</p>
                <h2 className="mt-1 font-serif text-3xl">{project.name}</h2>
                <p className="mt-2 text-sm text-muted">{project.type}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
