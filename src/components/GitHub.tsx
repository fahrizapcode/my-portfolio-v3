import { githubRepos, site } from '../data/site'
import { ArrowIcon, GitHubIcon } from './icons'

function ActivityGrid() {
  // Deterministic pattern based on index
  const cells = Array.from({ length: 84 }, (_, i) => {
    const v = (i * 13 + 3) % 5
    return v
  })

  const levelColor = (level: number) => {
    switch (level) {
      case 0: return 'var(--color-line)'
      case 1: return '#d4cde8'
      case 2: return 'var(--color-lavender)'
      case 3: return 'var(--color-lavender-deep)'
      case 4: return 'var(--color-charcoal)'
      default: return 'var(--color-line)'
    }
  }

  return (
    <div className="grid grid-cols-12 gap-[3px]" aria-hidden="true">
      {cells.map((level, index) => (
        <span
          key={index}
          className="aspect-square rounded-[2px]"
          style={{ background: levelColor(level) }}
        />
      ))}
    </div>
  )
}

export function GitHub() {
  return (
    <section className="scroll-mt-20 px-3 py-16 sm:px-4 md:px-6 md:py-20">
      <div className="mx-auto max-w-[1280px]">

        {/* Header */}
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4 md:mb-12" data-reveal>
          <div>
            <p className="font-mono text-[11px] tracking-widest text-muted uppercase">
              Open source
            </p>
            <h2 className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl">
              More code on GitHub
            </h2>
            <p className="mt-3 text-muted">
              Selected repositories and recent activity.
            </p>
          </div>
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm transition-opacity hover:opacity-60"
          >
            Visit GitHub
            <ArrowIcon className="size-3.5" />
          </a>
        </div>

        {/* Profile + activity */}
        <div className="mt-4 grid gap-3 lg:grid-cols-[0.85fr_1.15fr]" data-reveal>
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col justify-between rounded-[24px] bg-night p-6 text-cream transition-opacity hover:opacity-90 sm:p-8"
          >
            <GitHubIcon className="size-7 opacity-80" />
            <div className="mt-6">
              <p className="font-serif text-[32px] leading-tight">
                @{site.githubHandle}
              </p>
              <p className="mt-1.5 text-sm text-cream/60">{site.role}</p>
            </div>
          </a>

          <div className="rounded-[24px] border border-line bg-paper p-6 sm:p-8">
            <p className="mb-5 text-sm text-muted">Contribution activity (demo)</p>
            <ActivityGrid />
          </div>
        </div>

        {/* Repos */}
        <ul className="mt-3 grid gap-3 md:grid-cols-3" data-reveal>
          {githubRepos.map((repo) => (
            <li key={repo.name}>
              <a
                href={`${site.github}/${repo.name}`}
                target="_blank"
                rel="noreferrer"
                className="block h-full rounded-[24px] border border-line bg-paper p-5 transition-transform hover:scale-[1.015]"
              >
                <p className="font-mono text-sm">{repo.name}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {repo.description}
                </p>
                <p className="mt-4 text-xs text-muted">
                  {repo.stack} · {repo.updated}
                </p>
              </a>
            </li>
          ))}
        </ul>

      </div>
    </section>
  )
}
