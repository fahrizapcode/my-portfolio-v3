import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { navLinks, site } from '../data/site'
import { GitHubIcon } from './icons'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const home = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => setOpen(false), [location.pathname])

  return (
    <header
      className={`sticky top-0 z-40 px-3 sm:px-4 md:px-6 transition-all duration-300 ${
        scrolled
          ? 'border-b border-line/60 bg-cream/95 shadow-[0_1px_12px_rgba(22,21,19,0.06)] backdrop-blur-md'
          : 'border-b border-transparent bg-cream/0'
      }`}
    >
      <div className="mx-auto flex max-w-[1280px] items-center justify-between py-3">
        <Link
          to="/"
          className="font-serif text-xl tracking-tight text-ink transition-opacity hover:opacity-70"
          onClick={() => setOpen(false)}
        >
          {site.name}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary navigation">
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
            className="text-ink/70 transition-colors hover:text-ink"
            aria-label="GitHub profile"
          >
            <GitHubIcon className="size-[18px]" />
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="flex size-9 items-center justify-center rounded-full border border-line bg-paper transition-colors hover:bg-cream md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="flex w-[14px] flex-col gap-[5px]">
            <span
              className={`h-px bg-ink transition-all duration-200 ${open ? 'translate-y-[7px] rotate-45' : ''}`}
            />
            <span
              className={`h-px bg-ink transition-all duration-200 ${open ? 'opacity-0' : ''}`}
            />
            <span
              className={`h-px bg-ink transition-all duration-200 ${open ? '-translate-y-[7px] -rotate-45' : ''}`}
            />
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-nav"
          className="animate-slide-down border-t border-line bg-cream/98 px-4 pb-5 pt-4 md:hidden"
        >
          <nav className="flex flex-col" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={home ? link.href.replace('/', '') : link.href}
                className="border-b border-line/60 py-3 text-base text-ink"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-sm text-muted"
              onClick={() => setOpen(false)}
            >
              <GitHubIcon className="size-4" />
              GitHub
            </a>

          </nav>
        </div>
      )}
    </header>
  )
}

