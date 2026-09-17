import { useState } from 'react'
import { Link } from 'react-router-dom'
import type { Project } from '../data/projects'
import { ArrowIcon } from './icons'
import { ProjectMockup } from './ProjectMockups'

const accentChip: Record<Project['accent'], string> = {
  lavender: 'bg-lavender/30',
  mint: 'bg-mint/40',
  gold: 'bg-gold/35',
  night: 'bg-charcoal/10',
}

function ScreenshotSlider({
  screenshots,
  title,
}: {
  screenshots: string[]
  title: string
}) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="mt-12 flex flex-col gap-3">
      {/* 1-Column 1-Row Slide Container */}
      <div className="group relative overflow-hidden rounded-[24px] border border-line bg-paper p-3 shadow-md">
        <div className="relative flex min-h-[300px] w-full items-center justify-center overflow-hidden rounded-[18px] bg-ink/5 sm:min-h-[440px]">
          <img
            src={screenshots[currentIndex]}
            alt={`${title} Screenshot ${currentIndex + 1}`}
            className="h-auto max-h-[600px] w-full object-contain shadow-xs transition-all duration-300"
          />
        </div>

        {/* Navigation Buttons */}
        {screenshots.length > 1 ? (
          <>
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous screenshot"
              className="absolute top-1/2 left-6 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-ink/80 text-cream backdrop-blur-md shadow-lg transition-all hover:scale-110 hover:bg-ink active:scale-95"
            >
              <span className="inline-flex rotate-180">
                <ArrowIcon className="size-5" />
              </span>
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next screenshot"
              className="absolute top-1/2 right-6 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-ink/80 text-cream backdrop-blur-md shadow-lg transition-all hover:scale-110 hover:bg-ink active:scale-95"
            >
              <ArrowIcon className="size-5" />
            </button>
          </>
        ) : null}

        {/* Counter Pill */}
        <div className="absolute top-6 right-6 rounded-full bg-ink/75 px-3 py-1 font-mono text-xs text-cream backdrop-blur-md">
          {currentIndex + 1} / {screenshots.length}
        </div>
      </div>

      {/* Slide Indicators / Navigation Bar */}
      {screenshots.length > 1 ? (
        <div className="flex items-center justify-between px-2 pt-1">
          <p className="font-mono text-xs text-muted">
            Screenshot {String(currentIndex + 1).padStart(2, '0')} of{' '}
            {String(screenshots.length).padStart(2, '0')}
          </p>

          <div className="flex items-center gap-1.5">
            {screenshots.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to screenshot slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? 'w-7 bg-ink'
                    : 'w-2 bg-ink/20 hover:bg-ink/50'
                }`}
              />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  )
}

export function ProjectCaseStudy({ project }: { project: Project }) {
  return (
    <article className="px-4 pb-24 md:px-6">
      <div className="mx-auto max-w-[900px] pt-8">

        {/* Back link */}
        <Link
          to="/#work"
          className="inline-flex items-center gap-2 text-sm text-muted transition-opacity hover:opacity-70"
        >
          <span className="inline-flex rotate-180">
            <ArrowIcon className="size-3.5" />
          </span>
          All work
        </Link>

        {/* Header */}
        <p className="mt-10 font-mono text-[11px] tracking-widest text-muted">
          {project.number} · {project.type}
        </p>
        <h1 className="mt-3 font-serif text-5xl tracking-tight md:text-[72px] md:leading-[0.92]">
          {project.name}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
          {project.summary}
        </p>

        {/* External links */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.links
            .filter((link) => !link.href.startsWith('/'))
            .map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-line bg-paper px-4 py-2 text-sm transition-colors hover:border-ink/30"
              >
                {link.label}
                <ArrowIcon className="size-3" />
              </a>
            ))}
        </div>

        {/* Mockup / Screenshot gallery */}
        {project.screenshots && project.screenshots.length > 0 ? (
          <ScreenshotSlider screenshots={project.screenshots} title={project.name} />
        ) : (
          <div className="mt-12 grid gap-3 sm:grid-cols-2">
            {project.mockups.map((shot) => (
              <figure key={shot.id} className="rounded-[24px] bg-paper p-3">
                <div className="h-[220px] sm:h-[260px]">
                  <ProjectMockup id={shot.id} />
                </div>
                <figcaption className="px-1 pt-3 text-xs text-muted">
                  {shot.label}
                </figcaption>
              </figure>
            ))}
          </div>
        )}

        {/* Overview */}
        <Section title="Overview">{project.overview}</Section>
        <Section title="The Problem">{project.problem}</Section>
        <Section title="The Solution">{project.solution}</Section>

        {/* Architecture */}
        <section className="mt-14 border-t border-line pt-10">
          <p className="font-mono text-[11px] tracking-widest text-muted">
            Technical
          </p>
          <h2 className="mt-2 font-serif text-3xl">Architecture</h2>
          <div className="mt-6 space-y-6">
            {project.architecture.map((flow) => (
              <div key={flow.title}>
                <p className="mb-3 text-[11px] tracking-widest text-muted">
                  {flow.title}
                </p>
                <ol className="flex flex-wrap items-center gap-2">
                  {flow.nodes.map((node, i) => (
                    <li key={node} className="contents">
                      <span className="rounded-xl border border-line bg-paper px-3.5 py-2 text-sm">
                        {node}
                      </span>
                      {i < flow.nodes.length - 1 ? (
                        <span className="text-sm text-muted" aria-hidden="true">
                          →
                        </span>
                      ) : null}
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </section>

        {/* Key Challenges */}
        <section className="mt-14 border-t border-line pt-10">
          <p className="font-mono text-[11px] tracking-widest text-muted">
            Engineering
          </p>
          <h2 className="mt-2 font-serif text-3xl">Key Challenges</h2>
          <ul className="mt-6 space-y-3">
            {project.challenges.map((item, i) => (
              <li
                key={item}
                className="flex gap-4 rounded-[20px] border border-line bg-paper px-5 py-4"
              >
                <span className="mt-0.5 font-mono text-[10px] text-muted shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="leading-relaxed text-ink/80">{item}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Tech Stack */}
        <section className="mt-14 border-t border-line pt-10">
          <h2 className="font-serif text-3xl">Tech Stack</h2>
          <ul className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <li
                key={tech}
                className={`rounded-full px-4 py-2 text-sm ${accentChip[project.accent]}`}
              >
                {tech}
              </li>
            ))}
          </ul>
        </section>

        {/* Outcome */}
        <Section title="Outcome">{project.outcome}</Section>

      </div>
    </article>
  )
}

function Section({ title, children }: { title: string; children: string }) {
  return (
    <section className="mt-14 border-t border-line pt-10">
      <h2 className="font-serif text-3xl">{title}</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-ink/75">{children}</p>
    </section>
  )
}
