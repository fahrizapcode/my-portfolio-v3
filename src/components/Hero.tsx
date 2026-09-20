import { site } from '../data/site'
import { CornerMark } from './CornerMark'
import { ArrowIcon, GitHubIcon, ProductIcon, SystemsIcon, Web3Icon } from './icons'
import { Portrait } from './Portrait'
import { TechMarquee } from './TechMarquee'

export function Hero() {
  return (
    <section className="px-3 pt-3 pb-10 sm:px-4 md:px-6 md:pt-10 md:pb-14">
      <div className="mx-auto max-w-[1280px]">
        {/* 2-Column Main Hero Section */}
        <div
          className="grid gap-8 lg:grid-cols-[460px_1fr] xl:grid-cols-[500px_1fr] lg:gap-12 lg:items-center"
          data-reveal
        >
          {/* KOLOM KIRI: 3 Cards Puzzle Menyambung Foto me.png */}
          <div className="w-full max-w-[300px] xs:max-w-[360px] sm:max-w-[520px] mx-auto lg:mx-0">
            <Portrait variant="puzzle" />
          </div>

          {/* KOLOM KANAN: Text & CTA */}
          <div className="flex flex-col justify-center min-w-0">
            {/* Title */}
            <h1 className="font-serif text-[32px] xs:text-[38px] sm:text-[70px] lg:text-[84px] leading-[0.98] tracking-tight -ml-0.5 sm:-ml-1 lg:-ml-1.5 break-words min-w-0">
              {site.name}
            </h1>

            {/* Subtitle */}
            <p className="mt-3 text-[17px] sm:text-[22px] lg:text-[27px] leading-snug font-medium text-ink max-w-2xl min-w-0">
              Full-stack developer building practical digital products.
            </p>

            {/* Paragraph Text */}
            <p className="mt-3 text-[15px] sm:text-[18px] leading-relaxed text-muted max-w-xl min-w-0">
              I build web applications across the frontend, backend, and Web3 stack
              from product interfaces and APIs to blockchain integrations.
            </p>

            {/* CTA Buttons */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="inline-flex items-center gap-2.5 rounded-full bg-ink px-6 py-3 text-sm font-medium text-cream transition-all hover:bg-ink/85 hover:gap-3.5 shadow-md active:scale-95"
              >
                View Projects
                <ArrowIcon className="size-4" />
              </a>
              <a
                href={site.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full border border-line bg-paper px-6 py-3 text-sm font-medium text-ink transition-all hover:border-ink/50 hover:bg-cream shadow-xs active:scale-95"
              >
                <GitHubIcon className="size-4" />
                GitHub
              </a>
            </div>

            {/* Mobile-only Tech Marquee: Raised right under CTA buttons so it's visible on first view */}
            <div className="mt-5 sm:hidden w-full overflow-hidden max-w-full">
              <TechMarquee />
            </div>
          </div>
        </div>

        {/* Feature Cards Grid: Floating Tech Marquee + 3 Conceptual Cards */}
        <div className="mt-4 sm:mt-6 md:mt-8 grid grid-cols-1 gap-2.5 sm:gap-3.5 items-stretch sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5" data-reveal>
          {/* Desktop/Tablet Floating Technology Showcase */}
          <div className="hidden sm:block sm:col-span-2 md:col-span-4 lg:col-span-2">
            <TechMarquee />
          </div>

          {/* CARD 01 — PRODUCT (Desktop / Tablet only) */}
          <article className="group relative hidden sm:flex col-span-1 min-h-[230px] flex-col justify-between overflow-hidden rounded-[16px] bg-mint/90 p-5 text-ink transition-transform duration-300 hover:scale-[1.015]">
            <CornerMark />
            <div>
              <p className="font-mono text-xs font-semibold text-ink/40">01</p>
            </div>
            <div className="mt-6">
              <div className="mb-3 flex size-11 items-center justify-center rounded-xl bg-ink/10 text-ink transition-transform duration-300 group-hover:scale-110">
                <ProductIcon className="size-6 opacity-90" />
              </div>
              <p className="font-serif text-2xl font-semibold tracking-tight text-ink">Product</p>
              <p className="mt-1 text-xs text-ink/75 font-medium leading-snug">From idea to interface</p>
              <p className="mt-4 font-mono text-[10px] tracking-wider text-ink/65 font-medium">
                UI · UX · FRONTEND
              </p>
            </div>
          </article>

          {/* CARD 02 — SYSTEMS (Desktop / Tablet only) */}
          <article className="group relative hidden sm:flex col-span-1 min-h-[230px] flex-col justify-between overflow-hidden rounded-[16px] bg-plum/90 p-5 text-ink transition-transform duration-300 hover:scale-[1.015]">
            <CornerMark />
            <div>
              <p className="font-mono text-xs font-semibold text-ink/40">02</p>
            </div>
            <div className="mt-6">
              <div className="mb-3 flex size-11 items-center justify-center rounded-xl bg-ink/10 text-ink transition-transform duration-300 group-hover:scale-110">
                <SystemsIcon className="size-6 opacity-90" />
              </div>
              <p className="font-serif text-2xl font-semibold tracking-tight text-ink">Systems</p>
              <p className="mt-1 text-xs text-ink/75 font-medium leading-snug">From API to infrastructure</p>
              <p className="mt-4 font-mono text-[10px] tracking-wider text-ink/65 font-medium">
                BACKEND · DATABASE · ARCHITECTURE
              </p>
            </div>
          </article>

          {/* CARD 03 — WEB3 (Desktop / Tablet only) */}
          <article className="group relative hidden sm:flex col-span-1 min-h-[230px] flex-col justify-between overflow-hidden rounded-[16px] bg-gold/90 p-5 text-ink transition-transform duration-300 hover:scale-[1.015] sm:col-span-2 md:col-span-2 lg:col-span-1">
            <CornerMark />
            <div>
              <p className="font-mono text-xs font-semibold text-ink/40">03</p>
            </div>
            <div className="mt-6">
              <div className="mb-3 flex size-11 items-center justify-center rounded-xl bg-ink/10 text-ink transition-transform duration-300 group-hover:scale-110">
                <Web3Icon className="size-6 opacity-90" />
              </div>
              <p className="font-serif text-2xl font-semibold tracking-tight text-ink">Web3</p>
              <p className="mt-1 text-xs text-ink/75 font-medium leading-snug">When decentralization makes sense</p>
              <p className="mt-4 font-mono text-[10px] tracking-wider text-ink/65 font-medium">
                SOLIDITY · ETHEREUM · IPFS
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
