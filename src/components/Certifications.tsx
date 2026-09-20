import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCertificates, type Certificate } from '../hooks/useCertificates'
import { ArrowIcon } from './icons'
import { PdfThumbnail } from './PdfThumbnail'

// Cycle through accent-coloured backgrounds for visual variety
const CARD_BG = [
  'bg-mint/25',
  'bg-plum/25',
  'bg-gold/25',
  'bg-lavender/25',
  'bg-blush/25',
]

const CATEGORY_PILL: Record<Certificate['category'], string> = {
  'Hard Skill': 'bg-mint/40 text-ink/80',
  'Soft Skill': 'bg-lavender/40 text-ink/80',
}

function isPdfFile(file: string) {
  return file.toLowerCase().endsWith('.pdf')
}

// ─── Thumbnail shown inside each card ────────────────────────────────────────
function CertThumbnail({ cert }: { cert: Certificate }) {
  if (isPdfFile(cert.file)) {
    return (
      <PdfThumbnail
        url={cert.file}
        className="absolute inset-0 w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
      />
    )
  }

  return (
    <img
      src={cert.file}
      alt={cert.title}
      className="absolute inset-0 w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
      loading="lazy"
    />
  )
}

// ─── Modal — Uses PdfThumbnail canvas for PDF, img for images ──────────────────
function CertModal({
  cert,
  onClose,
}: {
  cert: Certificate
  onClose: () => void
}) {
  const isPdf = isPdfFile(cert.file)

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-night/80 p-3 sm:p-4 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative flex flex-col max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-[20px] sm:rounded-[24px] bg-paper shadow-2xl p-3 sm:p-5"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-20 flex size-8 items-center justify-center rounded-full bg-night/70 text-cream transition-opacity hover:opacity-80"
          aria-label="Close certificate viewer"
        >
          ✕
        </button>

        {/* Certificate Display Area (PDF or Image) */}
        <div className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden rounded-[16px] bg-black/5 p-2 sm:p-3">
          {isPdf ? (
            <PdfThumbnail
              url={cert.file}
              className="h-[55vh] sm:h-[68vh] w-full"
            />
          ) : (
            <img
              src={cert.file}
              alt={cert.title}
              className="max-h-[55vh] sm:max-h-[68vh] w-full object-contain rounded-[12px]"
            />
          )}
        </div>

        {/* Certificate Metadata & Open Link */}
        <div className="mt-3 flex items-center justify-between gap-3 px-1 sm:px-2">
          <div>
            <span
              className={`inline-block rounded-full px-2.5 py-0.5 text-[11px] font-medium ${CATEGORY_PILL[cert.category]}`}
            >
              {cert.category}
            </span>
            <h3 className="mt-1 font-serif text-lg sm:text-2xl text-ink leading-snug">
              {cert.title}
            </h3>
          </div>
          {isPdf && (
            <a
              href={cert.file}
              target="_blank"
              rel="noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-1.5 rounded-full border border-ink/20 px-3.5 py-2 text-xs font-medium text-ink transition-opacity hover:opacity-60"
            >
              Open Original PDF
              <ArrowIcon className="size-3" />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

// ─── Main section ─────────────────────────────────────────────────────────────
export function Certifications() {
  const { certificates, loading } = useCertificates()
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null)

  // Landing page always shows first 5 — change order in JSON to change featured
  const featured = certificates.slice(0, 5)

  return (
    <section
      id="certifications"
      className="scroll-mt-20 px-3 py-8 sm:px-4 md:px-6 md:py-12"
    >
      <div className="mx-auto max-w-[1280px]">
        {/* Header */}
        <div
          className="mb-4 flex flex-wrap items-end justify-between gap-4 md:mb-5"
          data-reveal
        >
          <div>
            <p className="font-sans text-[11px] font-semibold tracking-widest text-muted">
              Qualifications &amp; Achievements
            </p>
            <h2 className="mt-2 font-serif text-4xl tracking-tight sm:text-5xl">
              Certifications
            </h2>
            <p className="mt-2 text-base text-muted sm:text-lg">
              Official credentials, course completions, and technical
              qualifications.
            </p>
          </div>
        </div>

        {/* Certificate grid — 1 col / 2 col sm / 3 col lg */}
        {loading ? (
          /* Skeleton cards while fetching */
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3" data-reveal>
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-[16px] bg-ink/5 animate-pulse"
              >
                <div className="aspect-video bg-ink/10" />
                <div className="p-4 sm:p-5 space-y-2">
                  <div className="h-3 w-16 rounded bg-ink/10" />
                  <div className="h-4 w-3/4 rounded bg-ink/10" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
            data-reveal
          >
            {featured.map((cert, index) => {
              const bgClass = CARD_BG[index % CARD_BG.length]
              return (
                <div
                  key={cert.file}
                  className={`group overflow-hidden rounded-[16px] ${bgClass} transition-all duration-300 hover:scale-[1.015]`}
                >
                  {/* Thumbnail area */}
                  <div
                    className="relative aspect-video cursor-pointer overflow-hidden bg-black/5"
                    onClick={() => setSelectedCert(cert)}
                  >
                    <CertThumbnail cert={cert} />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-ink/0 transition-colors group-hover:bg-ink/10 flex items-center justify-center">
                      <span className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium text-ink opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100 shadow-sm">
                        {isPdfFile(cert.file) ? 'View Certificate' : 'Enlarge Certificate'}
                      </span>
                    </div>
                  </div>

                  {/* Card details */}
                  <div className="p-4 sm:p-5">
                    <span
                      className={`inline-block rounded-full px-2.5 py-0.5 text-[11px] font-medium ${CATEGORY_PILL[cert.category]}`}
                    >
                      {cert.category}
                    </span>
                    <h3 className="mt-2 font-serif text-lg leading-snug text-ink">
                      {cert.title}
                    </h3>
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {/* View all link */}
        <div className="mt-5" data-reveal>
          <Link
            to="/certificates"
            className="inline-flex items-center gap-2 text-sm text-ink transition-opacity hover:opacity-60"
          >
            View all certifications
            <ArrowIcon className="size-3.5" />
          </Link>
        </div>
      </div>

      {/* Modal */}
      {selectedCert && (
        <CertModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
      )}
    </section>
  )
}
