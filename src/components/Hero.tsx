import { Link } from 'react-router-dom'
import { site } from '../data/site'
import { CornerMark } from './CornerMark'
import { ArrowIcon, GitHubIcon, MailIcon } from './icons'
import { Portrait } from './Portrait'
import { KanbanMockup } from './ProjectMockups'

export function Hero() {
  return (
    <section className="px-3 py-16 sm:px-4 md:px-6 md:py-24">
      <div className="mx-auto max-w-[1280px]">
        
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between md:gap-12" data-reveal>
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-3">
              <div className="size-16 overflow-hidden rounded-full border border-line bg-lavender/30">
                <Portrait />
              </div>
              <div>
                <p className="font-mono text-[11px] tracking-widest text-muted uppercase">
                  Based in {site.city}
                </p>
                <p className="mt-0.5 text-[13px] text-ink/70">
                  {site.availability}
                </p>
              </div>
            </div>
            
            <h1 className="font-serif text-[56px] leading-[0.9] tracking-tight sm:text-[80px] lg:text-[110px]">
              Fahriza
            </h1>
            <p className="mt-6 max-w-2xl text-[20px] leading-snug text-ink sm:text-[24px] md:text-[28px]">
              Full-stack developer building practical digital products.
            </p>
          </div>
          
          <div className="max-w-sm pb-2">
            <p className="text-[15px] leading-relaxed text-muted">
              I build web applications across the frontend, backend, and Web3 stack —
              from product interfaces and APIs to blockchain integrations.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#work"
                className="relative inline-flex items-center gap-2 rounded-full bg-black/40 px-6 py-3 text-sm text-white shadow-[0_0_15px_rgba(255,255,255,0.15)] ring-1 ring-white/20 backdrop-blur-md transition-all hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] hover:ring-white/40"
              >
                View Projects
                <ArrowIcon className="size-3.5" />
              </a>
              <a
                href={site.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-6 py-3 text-sm text-ink transition-colors hover:border-ink/40"
              >
                <GitHubIcon className="size-4" />
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-3 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5" data-reveal>
          <div className="relative col-span-2 min-h-[220px] overflow-hidden rounded-[24px] bg-[#efeaf8] sm:col-span-2 lg:col-span-2">
            <KanbanMockup />
            <div className="absolute inset-0 flex items-center justify-center bg-black/5 opacity-0 transition-opacity hover:opacity-100">
              <Link
                to="/work/if-collab"
                className="flex size-14 items-center justify-center rounded-full bg-white text-ink shadow-lg transition-transform hover:scale-105"
                aria-label="Open IF-Collab case study"
              >
                <span className="ml-1 border-y-[8px] border-y-transparent border-l-[12px] border-l-ink" />
              </Link>
            </div>
          </div>

          <article className="relative col-span-1 flex min-h-[140px] flex-col justify-end rounded-[24px] bg-mint p-5">
            <CornerMark />
            <p className="font-serif text-3xl leading-none">Next</p>
            <p className="mt-1 text-[11px] text-ink/60">Frontend systems</p>
          </article>

          <article className="relative col-span-1 flex min-h-[140px] flex-col justify-end rounded-[24px] bg-plum p-5">
            <CornerMark />
            <p className="font-serif text-3xl leading-none">Node</p>
            <p className="mt-1 text-[11px] text-ink/60">APIs & data</p>
          </article>

          <article className="relative col-span-1 flex min-h-[140px] flex-col justify-end rounded-[24px] bg-gold p-5 sm:col-span-2 lg:col-span-1">
            <CornerMark />
            <p className="font-serif text-3xl leading-none">Web3</p>
            <p className="mt-1 text-[11px] text-ink/65">
              Solidity, Ethereum, IPFS
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
