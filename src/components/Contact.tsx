import { site } from '../data/site'
import { GitHubIcon, MailIcon } from './icons'

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 px-3 py-16 sm:px-4 md:px-6 md:py-24"
    >
      <div
        className="mx-auto max-w-[1280px] rounded-[32px] bg-ink px-6 py-14 sm:px-12 sm:py-20 md:px-16 md:py-24"
        data-reveal
      >
        <p className="font-sans text-[11px] font-semibold tracking-widest text-cream/40">
          Contact
        </p>
        <h2 className="mt-4 max-w-xl font-serif text-4xl tracking-tight text-cream sm:text-6xl sm:leading-[1.0]">
          Have a project in mind?
        </h2>
        <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-cream/60">
          I'm open to freelance projects, collaborations, and opportunities to
          build useful products.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-cream px-5 py-2.5 text-sm text-ink transition-opacity hover:opacity-85"
          >
            <MailIcon className="size-4" />
            Email Me
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm text-cream transition-colors hover:border-white/30"
          >
            <GitHubIcon className="size-4" />
            GitHub
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm text-cream transition-colors hover:border-white/30"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
