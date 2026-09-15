import { site } from '../data/site'
import { GitHubIcon, MailIcon } from './icons'

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 px-3 py-16 sm:px-4 md:px-6 md:py-24"
    >
      <div className="mx-auto max-w-[1280px] rounded-[28px] bg-ink px-6 py-14 text-cream sm:px-12 sm:py-20">
        <h2 className="max-w-xl font-serif text-4xl tracking-tight sm:text-6xl">
          Have a project in mind?
        </h2>
        <p className="mt-5 max-w-lg text-cream/70">
          I&apos;m open to freelance projects, collaborations, and opportunities
          to build useful products.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-cream px-5 py-2.5 text-sm text-ink"
          >
            <MailIcon className="size-4" />
            Email Me
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm"
          >
            <GitHubIcon className="size-4" />
            GitHub
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
