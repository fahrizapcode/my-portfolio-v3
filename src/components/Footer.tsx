import { site } from '../data/site'
import { GitHubIcon, InstagramIcon, LinkedInIcon } from './icons'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line px-4 py-8 md:px-6 md:py-10">
      <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <span className="font-serif text-base text-ink">{site.name}</span>
          <span className="font-mono text-xs text-muted">
            © {year}
          </span>
        </div>

        <nav className="flex items-center gap-5" aria-label="Footer navigation">
          <a
            href={`mailto:${site.email}`}
            className="text-xs text-muted transition-colors hover:text-ink"
          >
            {site.email}
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="text-muted transition-colors hover:text-ink"
            aria-label="GitHub"
          >
            <GitHubIcon className="size-4" />
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-muted transition-colors hover:text-ink"
            aria-label="LinkedIn"
          >
            <LinkedInIcon className="size-4" />
          </a>
          <a
            href={site.instagram}
            target="_blank"
            rel="noreferrer"
            className="text-muted transition-colors hover:text-ink"
            aria-label="Instagram"
          >
            <InstagramIcon className="size-4" />
          </a>
        </nav>
      </div>
    </footer>
  )
}
