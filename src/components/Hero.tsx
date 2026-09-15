import { Link } from 'react-router-dom'
import { site } from '../data/site'
import { CornerMark } from './CornerMark'
import { ArrowIcon, GitHubIcon, MailIcon } from './icons'
import { Portrait } from './Portrait'
import { KanbanMockup } from './ProjectMockups'

export function Hero() {
  return (
    <section className="px-3 pt-3 md:px-5 md:pt-4">
      <div className="mx-auto grid max-w-[1280px] gap-3 lg:grid-cols-[auto_minmax(260px,0.86fr)_1.45fr]">

        {/* Vertical side labels — desktop only */}
        <aside
          className="hidden flex-col justify-center gap-9 py-8 lg:flex"
          aria-label="Section shortcuts"
        >
          {['Contact', 'Experience', 'About', 'Work'].map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              className="text-[10px] tracking-[0.3em] text-muted/70 uppercase transition-colors hover:text-ink [writing-mode:vertical-rl] rotate-180"
            >
              {label}
            </a>
          ))}
        </aside>

        {/* ── Left column: portrait card ── */}
        <article className="relative flex min-h-[460px] flex-col rounded-[28px] bg-lavender p-5 md:min-h-[520px] md:p-6 lg:min-h-0 lg:min-h-[560px]">
          <p className="flex items-center gap-2 text-[11px] tracking-wider text-ink/70">
            <span className="size-1.5 rounded-full bg-ink/60" />
            About Me
          </p>

          {/* Portrait */}
          <div className="flex flex-1 flex-col items-center justify-center py-6">
            <Portrait />
          </div>

          {/* Name block */}
          <div>
            <p className="font-serif text-[22px] leading-none text-white/70 md:text-[26px]">
              I'm,
            </p>
            <h1 className="mt-0.5 font-serif text-[46px] leading-[0.9] text-ink md:text-[56px]">
              Fahriza
            </h1>
            <p className="mt-3 max-w-[15rem] text-sm leading-relaxed text-ink/65">
              Informatics student & full-stack developer in Bandung.
            </p>
          </div>

          {/* Footer row */}
          <div className="mt-5 flex items-end justify-between gap-3">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-1.5 text-[11px] text-ink/70 transition-opacity hover:opacity-80"
            >
              {site.email}
              <MailIcon className="size-3" />
            </a>
            <div className="flex size-[60px] shrink-0 items-center justify-center rounded-full border border-ink/20 text-center">
              <p className="font-mono text-[8px] leading-[1.6] tracking-wider uppercase">
                2026
                <br />
                Bandung
                <br />
                ID
              </p>
            </div>
          </div>
        </article>

        {/* ── Right column ── */}
        <div className="flex flex-col gap-3">
          {/* Top: headline */}
          <div className="flex flex-wrap items-end justify-between gap-4 px-1 pt-1">
            <h2 className="font-serif text-[52px] leading-[0.85] tracking-tight text-ink sm:text-7xl lg:text-[88px]">
              Portfolio
              <sup className="ml-1 font-sans text-lg font-medium align-super">↗</sup>
            </h2>
          </div>

          {/* Sub-headline */}
          <p className="px-1 text-[18px] leading-snug text-ink md:text-[22px]">
            Full-stack developer building practical digital products.
          </p>
          <p className="px-1 text-sm leading-relaxed text-muted md:text-[15px]">
            I build web applications across the frontend, backend, and Web3 stack —
            from product interfaces and APIs to blockchain integrations.
          </p>

          {/* Metadata + CTAs */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 px-1 text-xs text-muted">
            <span>Based in {site.city}</span>
            <span className="hidden text-line sm:inline">·</span>
            <span>{site.availability}</span>
          </div>

          <div className="flex flex-wrap gap-2 px-1">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-sm text-cream transition-opacity hover:opacity-80"
            >
              View Projects
              <ArrowIcon className="size-3.5" />
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-4 py-2.5 text-sm text-ink transition-colors hover:border-ink/40"
            >
              <GitHubIcon className="size-4" />
              GitHub
            </a>
          </div>

          {/* Bento tiles */}
          <div className="grid flex-1 grid-cols-2 gap-3 sm:grid-cols-6">

            {/* Featured project mockup — large */}
            <div className="relative col-span-2 min-h-[200px] overflow-hidden rounded-[24px] sm:col-span-4 sm:row-span-2 sm:min-h-[240px]">
              <KanbanMockup />
              <div className="absolute inset-0 flex items-center justify-center">
                <Link
                  to="/work/if-collab"
                  className="flex size-12 items-center justify-center rounded-full bg-white/90 text-ink shadow-sm transition-transform hover:scale-105"
                  aria-label="Open IF-Collab case study"
                >
                  <span className="ml-0.5 border-y-[7px] border-y-transparent border-l-[11px] border-l-ink" />
                </Link>
              </div>
              <CornerMark />
            </div>

            {/* Next.js tile */}
            <article className="relative col-span-1 flex min-h-[110px] flex-col justify-end rounded-[24px] bg-mint p-4 sm:col-span-2">
              <CornerMark />
              <p className="font-serif text-3xl leading-none">Next</p>
              <p className="mt-1 text-[11px] text-ink/60">Frontend systems</p>
            </article>

            {/* Node.js tile */}
            <article className="relative col-span-1 flex min-h-[110px] flex-col justify-end rounded-[24px] bg-plum p-4 sm:col-span-2">
              <CornerMark />
              <p className="font-serif text-3xl leading-none">Node</p>
              <p className="mt-1 text-[11px] text-ink/60">APIs & data</p>
            </article>

            {/* GitHub tile */}
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="relative col-span-1 flex min-h-[120px] flex-col items-start justify-end rounded-[24px] bg-charcoal p-4 text-cream transition-transform hover:scale-[1.02] sm:col-span-2"
            >
              <CornerMark light />
              <GitHubIcon className="mb-auto size-6 opacity-80" />
              <div>
                <p className="text-sm">GitHub</p>
                <p className="text-[11px] text-cream/50">Selected repos</p>
              </div>
            </a>

            {/* Web3 tile */}
            <article className="relative col-span-1 overflow-hidden rounded-[24px] sm:col-span-4">
              <div className="grid h-full min-h-[120px] grid-cols-5">
                <div className="relative col-span-2 flex items-center justify-center bg-night">
                  <CornerMark light />
                  <pre className="font-mono text-[9px] leading-relaxed text-mint/80 select-none">
                    {`fn build() {\n  ui → api\n  chain?\n}`}
                  </pre>
                </div>
                <div className="relative col-span-3 flex flex-col justify-end bg-gold p-4">
                  <CornerMark />
                  <p className="font-serif text-3xl leading-none">Web3</p>
                  <p className="mt-1 max-w-[10rem] text-[11px] text-ink/65">
                    Solidity, Ethereum, IPFS — when trust needs a ledger.
                  </p>
                </div>
              </div>
            </article>

          </div>
        </div>
      </div>
    </section>
  )
}
