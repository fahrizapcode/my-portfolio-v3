import { site } from '../data/site'
import { CornerMark } from './CornerMark'
import { ArrowIcon, GitHubIcon, ProductIcon, SystemsIcon, Web3Icon } from './icons'
import { Portrait } from './Portrait'
import { TechMarquee } from './TechMarquee'

export function Hero() {
  return (
    <section className="px-3 pt-3 pb-10 sm:px-4 md:px-6 md:pt-4 md:pb-14">
      <div className="mx-auto max-w-[1280px]">
        {/* 2-Column Main Hero Section */}
        <div
          className="grid gap-8 lg:grid-cols-[460px_1fr] xl:grid-cols-[500px_1fr] lg:gap-12 lg:items-center"
          data-reveal
        >
          {/* KOLOM KIRI: 3 Cards Puzzle Menyambung Foto me.png */}
          <div className="w-full max-w-[480px] sm:max-w-[520px] mx-auto lg:mx-0">
            <Portrait variant="puzzle" />
          </div>

          {/* KOLOM KANAN: Text & CTA */}
          <div className="flex flex-col justify-center">
            {/* Status & Location Pill */}
            <div className="mb-3 inline-flex items-center gap-2.5 rounded-full bg-ink/5 px-4 py-1.5 w-fit">
              <span className="size-2 rounded-full bg-mint animate-pulse" />
              <span className="font-mono text-[11px] tracking-widest text-muted">
                Based in {site.city} • {site.availability}
              </span>
            </div>

            {/* Title */}
            <h1 className="font-serif text-[64px] leading-[0.9] tracking-tight sm:text-[88px] lg:text-[104px] text-ink">
              Fahriza
            </h1>

            {/* Subtitle */}
            <p className="mt-3 text-[22px] leading-snug font-medium text-ink sm:text-[26px] lg:text-[30px] max-w-2xl">
              Full-stack developer building practical digital products.
            </p>

            {/* Paragraph Text */}
            <p className="mt-3 text-[16px] leading-relaxed text-muted sm:text-[18px] max-w-xl">
              I build web applications across the frontend, backend, and Web3 stack —
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
          </div>
        </div>

        {/* Feature Cards Grid: Floating Tech Marquee + 3 Conceptual Cards */}
        <div className="mt-6 md:mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 items-stretch" data-reveal>
          {/* Floating Technology Showcase */}
          <TechMarquee />

          {/* 3 Conceptual Cards Wrapper: 1 Row (3 Columns) on Mobile, unrolled on desktop/tablet via sm:contents */}
          <div className="grid grid-cols-3 gap-2 sm:contents">
            {/* CARD 01 — PRODUCT */}
            <article className="group relative flex min-h-[140px] sm:min-h-[230px] flex-col justify-between overflow-hidden rounded-[12px] sm:rounded-[16px] bg-mint/90 p-2.5 sm:p-5 text-ink transition-transform duration-300 hover:scale-[1.015] lg:col-span-1">
              <span className="hidden sm:block"><CornerMark /></span>
              {/* Top row: Number only */}
              <div>
                <p className="font-mono text-[10px] sm:text-xs font-semibold text-ink/50">01</p>
              </div>

              {/* Bottom block: Icon directly above Title, Subtitle, Supporting text */}
              <div className="mt-2 sm:mt-6">
                <div className="mb-1.5 sm:mb-3 flex size-7 sm:size-11 items-center justify-center rounded-lg sm:rounded-xl bg-ink/10 text-ink transition-transform duration-300 group-hover:scale-110">
                  <ProductIcon className="size-4 sm:size-6 opacity-90" />
                </div>
                <p className="font-serif text-sm sm:text-2xl font-semibold tracking-tight text-ink">Product</p>
                <p className="mt-0.5 text-[10px] sm:text-xs text-ink/75 font-medium leading-snug line-clamp-1 sm:line-clamp-none">From idea to interface</p>
                <p className="mt-1.5 sm:mt-4 font-mono text-[8px] sm:text-[10px] tracking-tight sm:tracking-wider text-ink/65 font-medium truncate">
                  UI · UX · FRONTEND
                </p>
              </div>
            </article>

            {/* CARD 02 — SYSTEMS */}
            <article className="group relative flex min-h-[140px] sm:min-h-[230px] flex-col justify-between overflow-hidden rounded-[12px] sm:rounded-[16px] bg-plum/90 p-2.5 sm:p-5 text-ink transition-transform duration-300 hover:scale-[1.015] lg:col-span-1">
              <span className="hidden sm:block"><CornerMark /></span>
              {/* Top row: Number only */}
              <div>
                <p className="font-mono text-[10px] sm:text-xs font-semibold text-ink/50">02</p>
              </div>

              {/* Bottom block: Icon directly above Title, Subtitle, Supporting text */}
              <div className="mt-2 sm:mt-6">
                <div className="mb-1.5 sm:mb-3 flex size-7 sm:size-11 items-center justify-center rounded-lg sm:rounded-xl bg-ink/10 text-ink transition-transform duration-300 group-hover:scale-110">
                  <SystemsIcon className="size-4 sm:size-6 opacity-90" />
                </div>
                <p className="font-serif text-sm sm:text-2xl font-semibold tracking-tight text-ink">Systems</p>
                <p className="mt-0.5 text-[10px] sm:text-xs text-ink/75 font-medium leading-snug line-clamp-1 sm:line-clamp-none">From API to infra</p>
                <p className="mt-1.5 sm:mt-4 font-mono text-[8px] sm:text-[10px] tracking-tight sm:tracking-wider text-ink/65 font-medium truncate">
                  BACKEND · DATABASE
                </p>
              </div>
            </article>

            {/* CARD 03 — WEB3 */}
            <article className="group relative flex min-h-[140px] sm:min-h-[230px] flex-col justify-between overflow-hidden rounded-[12px] sm:rounded-[16px] bg-gold/90 p-2.5 sm:p-5 text-ink transition-transform duration-300 hover:scale-[1.015] sm:col-span-2 md:col-span-2 lg:col-span-1">
              <span className="hidden sm:block"><CornerMark /></span>
              {/* Top row: Number only */}
              <div>
                <p className="font-mono text-[10px] sm:text-xs font-semibold text-ink/50">03</p>
              </div>

              {/* Bottom block: Icon directly above Title, Subtitle, Supporting text */}
              <div className="mt-2 sm:mt-6">
                <div className="mb-1.5 sm:mb-3 flex size-7 sm:size-11 items-center justify-center rounded-lg sm:rounded-xl bg-ink/10 text-ink transition-transform duration-300 group-hover:scale-110">
                  <Web3Icon className="size-4 sm:size-6 opacity-90" />
                </div>
                <p className="font-serif text-sm sm:text-2xl font-semibold tracking-tight text-ink">Web3</p>
                <p className="mt-0.5 text-[10px] sm:text-xs text-ink/75 font-medium leading-snug line-clamp-1 sm:line-clamp-none">Decentralization</p>
                <p className="mt-1.5 sm:mt-4 font-mono text-[8px] sm:text-[10px] tracking-tight sm:tracking-wider text-ink/65 font-medium truncate">
                  SOLIDITY · ETH
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
