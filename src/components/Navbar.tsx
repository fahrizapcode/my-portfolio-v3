import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { navLinks, site } from '../data/site'
import { GitHubIcon } from './icons'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const home = location.pathname === '/'

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-cream/90 backdrop-blur-md supports-[backdrop-filter]:bg-cream/75">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-4 py-3 md:px-6">
        <Link
          to="/"
          className="font-serif text-xl tracking-tight text-ink"
          onClick={() => setOpen(false)}
        >
          {site.name}
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={home ? link.href.replace('/', '') : link.href}
              className="text-sm text-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="text-ink"
            aria-label="GitHub"
          >
            <GitHubIcon className="size-5" />
          </a>
        </nav>

        <button
          type="button"
          className="flex size-10 items-center justify-center rounded-full border border-line md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex w-4 flex-col gap-1.5">
            <span className={`h-px bg-ink transition ${open ? 'translate-y-[4px] rotate-45' : ''}`} />
            <span className={`h-px bg-ink transition ${open ? '-translate-y-[4px] -rotate-45' : ''}`} />
          </span>
        </button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-line px-4 py-4 md:hidden"
        >
          <nav className="flex flex-col gap-3" aria-label="Mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={home ? link.href.replace('/', '') : link.href}
                className="py-1 text-base text-ink"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 py-1 text-ink"
            >
              <GitHubIcon className="size-4" />
              GitHub
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
