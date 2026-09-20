import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCertificates, type Certificate } from '../hooks/useCertificates'
import { ArrowIcon } from '../components/icons'
import { PdfThumbnail } from '../components/PdfThumbnail'

type FilterCategory = 'All' | 'Hard Skill' | 'Soft Skill'

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
            <span className={`inline-block rounded-full px-2.5 py-0.5 text-[11px] font-medium ${CATEGORY_PILL[cert.category]}`}>
              {cert.category}
            </span>
            <h3 className="mt-1 font-serif text-lg sm:text-2xl text-ink leading-snug">{cert.title}</h3>
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

const FILTERS: FilterCategory[] = ['All', 'Hard Skill', 'Soft Skill']

export function Certificates() {
  const { certificates, loading } = useCertificates()
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('All')
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null)

  const filtered =
    activeFilter === 'All'
      ? certificates
      : certificates.filter((c) => c.category === activeFilter)

  const counts = {
    All: certificates.length,
    'Hard Skill': certificates.filter((c) => c.category === 'Hard Skill').length,
    'Soft Skill': certificates.filter((c) => c.category === 'Soft Skill').length,
  }

  return (
    <section className="px-3 py-10 sm:px-4 md:px-6 md:py-16">
      <div className="mx-auto max-w-[1280px]">
        {/* Header */}
        <p className="font-sans text-[11px] font-semibold tracking-widest text-muted">
          Qualifications &amp; Achievements
        </p>
        <h1 className="mt-2 font-serif text-5xl tracking-tight md:text-6xl">
          All Certifications
        </h1>
        <p className="mt-2 max-w-lg text-muted">
          Official credentials, course completions, and technical qualifications.
        </p>

        {/* Filter tabs */}
        <div className="mt-6 flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200 ${
                activeFilter === f
                  ? 'bg-ink text-cream'
                  : 'bg-ink/8 text-ink/60 hover:bg-ink/15 hover:text-ink'
              }`}
            >
              {f}
              <span className={`ml-1.5 text-[11px] ${activeFilter === f ? 'opacity-60' : 'opacity-40'}`}>
                {counts[f]}
              </span>
            </button>
          ))}
        </div>

        {/* Grid */}
        {loading ? (
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="overflow-hidden rounded-[16px] bg-ink/5 animate-pulse">
                <div className="aspect-video bg-ink/10" />
                <div className="p-4 space-y-2">
                  <div className="h-3 w-16 rounded bg-ink/10" />
                  <div className="h-4 w-3/4 rounded bg-ink/10" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((cert, index) => {
              const bgClass = CARD_BG[index % CARD_BG.length]
              return (
                <div
                  key={cert.file}
                  className={`group overflow-hidden rounded-[16px] ${bgClass} transition-all duration-300 hover:scale-[1.015]`}
                >
                  <div
                    className="relative aspect-video cursor-pointer overflow-hidden bg-black/5"
                    onClick={() => setSelectedCert(cert)}
                  >
                    <CertThumbnail cert={cert} />
                    <div className="absolute inset-0 bg-ink/0 transition-colors group-hover:bg-ink/10 flex items-center justify-center">
                      <span className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium text-ink opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100 shadow-sm">
                        {isPdfFile(cert.file) ? 'View Certificate' : 'Enlarge Certificate'}
                      </span>
                    </div>
                  </div>
                  <div className="p-4 sm:p-5">
                    <span className={`inline-block rounded-full px-2.5 py-0.5 text-[11px] font-medium ${CATEGORY_PILL[cert.category]}`}>
                      {cert.category}
                    </span>
                    <h2 className="mt-2 font-serif text-lg leading-snug text-ink">
                      {cert.title}
                    </h2>
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {/* Back link */}
        <div className="mt-10">
          <Link
            to="/#certifications"
            className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-ink"
          >
            ← Back to home
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
