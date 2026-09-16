import { Link } from 'react-router-dom'
import { featuredMockupId, ProjectMockup } from '../components/ProjectMockups'
import { projects } from '../data/projects'

const accentBg: Record<string, string> = {
  lavender: 'bg-lavender/20',
  mint: 'bg-mint/25',
  gold: 'bg-gold/25',
  night: 'bg-charcoal/10',
}

export function Work() {
  return (
    <section className="px-4 py-12 md:px-6 md:py-16">
      <div className="mx-auto max-w-[1100px]">
        <p className="font-sans text-[11px] font-semibold tracking-widest text-muted">Archive</p>
        <h1 className="mt-2 font-serif text-5xl tracking-tight md:text-6xl">
          All projects
        </h1>
        <p className="mt-2 max-w-lg text-muted">
          Case studies for products, experiments, and systems.
        </p>

        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {projects.map((project) => (
            <li key={project.slug}>
              <Link
                to={`/work/${project.slug}`}
                className={`group block overflow-hidden rounded-[16px] p-4 transition-transform hover:scale-[1.015] ${accentBg[project.accent] ?? 'bg-lavender/25'}`}
              >
                <div className="h-[180px]">
                  <ProjectMockup id={featuredMockupId(project.slug)} />
                </div>
                <p className="mt-4 font-mono text-[11px] tracking-widest text-muted">
                  {project.number}
                </p>
                <h2 className="mt-1 font-serif text-3xl">{project.name}</h2>
                <p className="mt-1.5 text-sm text-muted">{project.type}</p>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-ink"
          >
            ← Back home
          </Link>
        </div>
      </div>
    </section>
  )
}
