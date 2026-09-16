import { useState } from 'react'
import { certifications } from '../data/site'
import { ArrowIcon } from './icons'

export function Certifications() {
  const [selectedCert, setSelectedCert] = useState<typeof certifications[0] | null>(null)
  const displayedCerts = certifications.slice(0, 5)

  return (
    <section id="certifications" className="scroll-mt-20 px-3 py-16 sm:px-4 md:px-6 md:py-20">
      <div className="mx-auto max-w-[1280px]">
        {/* Header */}
        <div className="mb-4 flex flex-wrap items-end justify-between gap-4 md:mb-5" data-reveal>
          <div>
            <p className="font-sans text-[11px] font-semibold tracking-widest text-muted">
              Qualifications & Achievements
            </p>
            <h2 className="mt-2 font-serif text-4xl tracking-tight sm:text-5xl">
              Certifications
            </h2>
            <p className="mt-2 text-base text-muted sm:text-lg">
              Official credentials, course completions, and technical qualifications.
            </p>
          </div>
        </div>

        {/* Masonry / Flexible Grid Layout */}
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3" data-reveal>
          {displayedCerts.map((cert, index) => {
            const certBgColors = [
              'bg-mint/25',
              'bg-plum/25',
              'bg-gold/25',
              'bg-lavender/25',
              'bg-blush/25',
            ]
            const bgClass = certBgColors[index % certBgColors.length]

            return (
              <div
                key={cert.id}
                className={`group mb-4 break-inside-avoid overflow-hidden rounded-[16px] ${bgClass} transition-all duration-300 hover:scale-[1.015]`}
              >
                {/* Flexible Image Container (Natural Aspect Ratio) */}
                <div
                  className="relative cursor-pointer overflow-hidden bg-black/5"
                  onClick={() => setSelectedCert(cert)}
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-ink/0 transition-colors group-hover:bg-ink/10 flex items-center justify-center">
                    <span className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium text-ink opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100 shadow-sm">
                      Enlarge Certificate
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 sm:p-6">
                  <div className="flex items-center justify-between gap-2 text-xs font-sans font-medium text-muted">
                    <span>{cert.issuer}</span>
                    <span>{cert.date}</span>
                  </div>
                  <h3 className="mt-2.5 font-serif text-xl leading-snug text-ink">
                    {cert.title}
                  </h3>
                </div>
              </div>
            )
          })}
        </div>

        {/* View all certifications link */}
        <div className="mt-10" data-reveal>
          <a
            href="https://linkedin.com/in/fahriza"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm text-ink transition-opacity hover:opacity-60"
          >
            View all certifications
            <ArrowIcon className="size-3.5" />
          </a>
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-night/80 p-4 backdrop-blur-md"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative max-h-[90vh] max-w-4xl overflow-hidden rounded-[24px] bg-paper p-2 sm:p-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute right-4 top-4 z-10 flex size-8 items-center justify-center rounded-full bg-night/70 text-cream transition-opacity hover:opacity-80"
              aria-label="Close modal"
            >
              ✕
            </button>
            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              className="max-h-[75vh] w-full object-contain rounded-[16px]"
            />
            <div className="mt-4 p-2 text-center">
              <h3 className="font-serif text-2xl text-ink">{selectedCert.title}</h3>
              <p className="mt-1 text-sm text-muted">
                Issued by {selectedCert.issuer} • {selectedCert.date}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
