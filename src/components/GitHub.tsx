import { githubRepos, site } from '../data/site'
import { ArrowIcon, GitHubIcon } from './icons'

function ActivityGrid() {
  const cells = Array.from({ length: 84 }, (_, index) => (index * 17) % 5)

  return (
    <div
      className="grid grid-cols-12 gap-1"
      aria-hidden="true"
    >
      {cells.map((level, index) => (
        <span
          key={index}
          className="aspect-square rounded-[2px]"
          style={{
            background:
              level === 0
                ? '#e4e0d6'
                : level === 1
                  ? '#c8c0e8'
                  : level === 2
                    ? '#a8a0e0'
                    : level === 3
                      ? '#7d9e96'
                      : '#3e3e3e',
          }}
        />
      ))}
    </div>
  )
}

export function GitHub() {
  return (
    <section className="px-3 py-16 sm:px-4 md:px-6">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-serif text-4xl tracking-tight sm:text-5xl">
              More code on GitHub
            </h2>
            <p className="mt-3 text-muted">
              Selected repositories and recent activity. Dummy data for now.
            </p>
          </div>
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm"
          >
            Visit GitHub
            <ArrowIcon className="size-3.5" />
          </a>
        </div>

        <div className="mt-8 grid gap-3 lg:grid-cols-[0.9fr_1.1fr]">
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-[24px] bg-night p-6 text-cream"
          >
            <GitHubIcon className="size-8" />
            <p className="mt-6 font-serif text-3xl">@{site.githubHandle}</p>
            <p className="mt-2 text-sm text-cream/70">{site.role}</p>
          </a>
          <div className="rounded-[24px] border border-line bg-paper p-6">
            <p className="mb-4 text-sm text-muted">Contribution activity</p>
            <ActivityGrid />
          </div>
        </div>

        <ul className="mt-3 grid gap-3 md:grid-cols-3">
          {githubRepos.map((repo) => (
            <li key={repo.name}>
              <a
                href={`${site.github}/${repo.name}`}
                target="_blank"
                rel="noreferrer"
                className="block h-full rounded-[24px] border border-line bg-paper p-5 transition hover:scale-[1.01]"
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
