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
        <aside className="hidden flex-col justify-center gap-10 py-8 lg:flex" aria-label="Section shortcuts">
          {['Contact', 'Experience', 'About', 'Work'].map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              className="text-[11px] tracking-[0.28em] text-muted uppercase [writing-mode:vertical-rl] rotate-180"
            >
              {label}
            </a>
          ))}
        </aside>

        <article className="relative flex min-h-[480px] flex-col rounded-[28px] bg-lavender p-5 md:p-6">
          <p className="flex items-center gap-2 text-xs tracking-wide text-ink/80">
            <span className="size-1.5 rounded-full bg-ink/70" />
            About Me
          </p>

          <div className="flex flex-1 flex-col justify-center py-6">
            <Portrait />
          </div>

          <div>
            <p className="font-serif text-2xl leading-none text-white/80 md:text-[28px]">
              I’m,
            </p>
            <h1 className="mt-1 font-serif text-[42px] leading-[0.95] text-ink md:text-5xl">
              Fahriza
            </h1>
            <p className="mt-3 max-w-[16rem] text-sm text-ink/75">
              Informatics student and full-stack developer in Bandung.
            </p>
          </div>

          <div className="mt-6 flex items-end justify-between gap-3">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 text-xs text-ink/80"
            >
              {site.email}
              <MailIcon className="size-3.5" />
            </a>
            <div className="flex size-16 items-center justify-center rounded-full border border-ink/20 text-center">
              <p className="font-mono text-[8px] leading-tight tracking-wider uppercase">
                2026
                <br />
                Bandung
                <br />
                ID
              </p>
            </div>
          </div>
        </article>

        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap items-end justify-between gap-4 px-1 pt-1">
            <h2 className="font-serif text-[52px] leading-[0.85] tracking-tight text-ink sm:text-7xl lg:text-[92px]">
              Portfolio
              <sup className="ml-1 font-sans text-lg font-medium align-super">1</sup>
            </h2>
          </div>

          <p className="max-w-xl px-1 text-lg leading-snug text-ink md:text-[22px]">
            Full-stack developer building practical digital products.
          </p>
          <p className="max-w-xl px-1 text-sm leading-relaxed text-muted md:text-base">
            I build web applications across the frontend, backend, and Web3 stack —
            from product interfaces and APIs to blockchain integrations.
          </p>

          <div className="flex flex-wrap gap-4 px-1 text-xs text-muted">
            <span>Based in {site.city}</span>
            <span className="hidden text-muted sm:inline">|</span>
            <span>{site.availability}</span>
          </div>

          <div className="flex flex-wrap gap-2 px-1">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-sm text-cream"
            >
              View Projects
              <ArrowIcon className="size-3.5" />
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-4 py-2.5 text-sm text-ink"
            >
              <GitHubIcon className="size-4" />
              GitHub
            </a>
          </div>

          <div className="grid flex-1 grid-cols-2 gap-3 sm:grid-cols-6">
            <div className="relative col-span-2 min-h-[200px] overflow-hidden rounded-[24px] sm:col-span-4 sm:min-h-[240px] sm:row-span-2">
              <KanbanMockup />
              <div className="absolute inset-0 flex items-center justify-center">
                <Link
                  to="/work/if-collab"
                  className="flex size-12 items-center justify-center rounded-full bg-white/90 text-ink shadow-sm"
                  aria-label="Open IF-Collab case study"
                >
                  <span className="ml-0.5 border-y-[7px] border-y-transparent border-l-[11px] border-l-ink" />
                </Link>
              </div>
              <CornerMark />
            </div>

            <article className="relative col-span-1 flex min-h-[110px] flex-col justify-end rounded-[24px] bg-mint p-4 sm:col-span-2">
              <CornerMark />
              <p className="font-serif text-3xl leading-none">Next</p>
              <p className="mt-1 text-xs text-ink/70">Frontend systems</p>
            </article>

            <article className="relative col-span-1 flex min-h-[110px] flex-col justify-end rounded-[24px] bg-plum p-4 sm:col-span-2">
              <CornerMark />
              <p className="font-serif text-3xl leading-none">Node</p>
              <p className="mt-1 text-xs text-ink/70">APIs & data</p>
            </article>

            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="relative col-span-1 flex min-h-[120px] flex-col items-start justify-end rounded-[24px] bg-charcoal p-4 text-cream transition hover:scale-[1.01] sm:col-span-2"
            >
              <CornerMark light />
              <GitHubIcon className="mb-auto size-7 opacity-90" />
              <p className="mt-4 text-sm">GitHub</p>
              <p className="text-xs text-cream/60">Selected repos</p>
            </a>

            <article className="relative col-span-1 overflow-hidden rounded-[24px] sm:col-span-4">
              <div className="grid h-full min-h-[120px] grid-cols-5">
                <div className="relative col-span-2 flex items-center justify-center bg-night">
                  <CornerMark light />
                  <pre className="font-mono text-[9px] leading-relaxed text-mint/90">
                    {`fn build() {
  ui → api
  chain?
}`}
                  </pre>
                </div>
                <div className="relative col-span-3 flex flex-col justify-end bg-gold p-4">
                  <CornerMark />
                  <p className="font-serif text-3xl leading-none">Web3</p>
                  <p className="mt-1 max-w-[10rem] text-xs text-ink/70">
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
