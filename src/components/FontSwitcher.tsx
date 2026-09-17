import { useEffect, useState } from 'react'

export interface TitleFontOption {
  id: string
  name: string
  category: 'Serif' | 'Sans' | 'Display'
  fontFamily: string
  cssValue: string
  description?: string
}

export const TITLE_FONTS: TitleFontOption[] = [
  {
    id: 'instrument-serif',
    name: 'Instrument Serif',
    category: 'Serif',
    fontFamily: 'Instrument Serif',
    cssValue: '"Instrument Serif", ui-serif, Georgia, serif',
    description: 'Default • Classic & graceful editorial serif',
  },
  {
    id: 'plus-jakarta-sans',
    name: 'Plus Jakarta Sans',
    category: 'Sans',
    fontFamily: 'Plus Jakarta Sans',
    cssValue: '"Plus Jakarta Sans", ui-sans-serif, system-ui, sans-serif',
    description: 'Modern geometric & highly legible sans',
  },
  {
    id: 'playfair-display',
    name: 'Playfair Display',
    category: 'Serif',
    fontFamily: 'Playfair Display',
    cssValue: '"Playfair Display", ui-serif, Georgia, serif',
    description: 'High contrast & sophisticated editorial headline',
  },
  {
    id: 'cormorant-garamond',
    name: 'Cormorant Garamond',
    category: 'Serif',
    fontFamily: 'Cormorant Garamond',
    cssValue: '"Cormorant Garamond", ui-serif, Georgia, serif',
    description: 'Refined, elegant & traditional book typography',
  },
  {
    id: 'fraunces',
    name: 'Fraunces',
    category: 'Serif',
    fontFamily: 'Fraunces',
    cssValue: '"Fraunces", ui-serif, Georgia, serif',
    description: 'Warm, quirky & expressive optical serif',
  },
  {
    id: 'syne',
    name: 'Syne',
    category: 'Display',
    fontFamily: 'Syne',
    cssValue: '"Syne", ui-sans-serif, system-ui, sans-serif',
    description: 'Bold, distinctive & futuristic display style',
  },
  {
    id: 'space-grotesk',
    name: 'Space Grotesk',
    category: 'Sans',
    fontFamily: 'Space Grotesk',
    cssValue: '"Space Grotesk", ui-sans-serif, system-ui, sans-serif',
    description: 'Proportional tech sans with brutalist aesthetic',
  },
  {
    id: 'bricolage-grotesque',
    name: 'Bricolage Grotesque',
    category: 'Display',
    fontFamily: 'Bricolage Grotesque',
    cssValue: '"Bricolage Grotesque", ui-sans-serif, system-ui, sans-serif',
    description: 'Expressive modern display with dynamic curves',
  },
  {
    id: 'cinzel',
    name: 'Cinzel',
    category: 'Serif',
    fontFamily: 'Cinzel',
    cssValue: '"Cinzel", ui-serif, Georgia, serif',
    description: 'Cinematic Roman classic proportions',
  },
  {
    id: 'outfit',
    name: 'Outfit',
    category: 'Sans',
    fontFamily: 'Outfit',
    cssValue: '"Outfit", ui-sans-serif, system-ui, sans-serif',
    description: 'Minimalist, high-end clean geometric sans',
  },
]

const STORAGE_KEY = 'portfolio_title_font_id'

// Custom Hook to manage active font state globally
export function useTitleFontManager() {
  const [currentFontId, setCurrentFontId] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(STORAGE_KEY) || TITLE_FONTS[0].id
    }
    return TITLE_FONTS[0].id
  })
  const [comparingDefault, setComparingDefault] = useState(false)

  const currentFont =
    TITLE_FONTS.find((f) => f.id === currentFontId) || TITLE_FONTS[0]
  const defaultFont = TITLE_FONTS[0]

  // Apply CSS font override dynamically whenever font changes or compare mode is toggled
  useEffect(() => {
    const activeFont = comparingDefault ? defaultFont : currentFont
    
    // Set root CSS custom variable for Tailwind theme
    document.documentElement.style.setProperty('--font-serif', activeFont.cssValue)

    // Inject override style element to guarantee all .font-serif title elements update immediately
    let styleEl = document.getElementById('title-font-override')
    if (!styleEl) {
      styleEl = document.createElement('style')
      styleEl.id = 'title-font-override'
      document.head.appendChild(styleEl)
    }
    styleEl.textContent = `
      :root {
        --font-serif: ${activeFont.cssValue} !important;
      }
      .font-serif {
        font-family: ${activeFont.cssValue} !important;
      }
    `
  }, [currentFont, comparingDefault, defaultFont])

  const selectFont = (fontId: string) => {
    setCurrentFontId(fontId)
    setComparingDefault(false)
    localStorage.setItem(STORAGE_KEY, fontId)
  }

  const nextFont = () => {
    const currentIndex = TITLE_FONTS.findIndex((f) => f.id === currentFontId)
    const nextIndex = (currentIndex + 1) % TITLE_FONTS.length
    selectFont(TITLE_FONTS[nextIndex].id)
  }

  const toggleCompare = () => {
    setComparingDefault((prev) => !prev)
  }

  const resetToDefault = () => {
    selectFont(TITLE_FONTS[0].id)
  }

  return {
    currentFont,
    defaultFont,
    currentFontId,
    comparingDefault,
    selectFont,
    nextFont,
    toggleCompare,
    resetToDefault,
  }
}

/**
 * Single Switch Button Component for Navigation bar
 */
export function NavbarFontButton({
  currentFont,
  nextFont,
}: {
  currentFont: TitleFontOption
  nextFont: () => void
}) {
  return (
    <button
      type="button"
      onClick={nextFont}
      title="Klik untuk ganti font title (Simulasi Font)"
      className="group relative inline-flex items-center gap-2 rounded-full border border-line/80 bg-paper/80 px-3 py-1 text-xs text-ink transition-all hover:border-ink hover:bg-cream active:scale-95 shadow-xs"
    >
      <span className="font-mono text-[10px] font-medium tracking-wider text-muted group-hover:text-ink">
        Font Title
      </span>
      <span className="h-3 w-px bg-line/80" />
      <span
        className="font-serif text-sm font-semibold tracking-tight text-ink transition-all"
        style={{ fontFamily: currentFont.cssValue }}
      >
        {currentFont.name}
      </span>
      <span className="text-muted transition-transform duration-300 group-hover:rotate-180">
        ⇄
      </span>
    </button>
  )
}

/**
 * Floating Title Font Simulator & Comparison Widget
 */
export function FontSwitcherWidget({
  currentFont,
  defaultFont,
  comparingDefault,
  nextFont,
  selectFont,
  toggleCompare,
  resetToDefault,
}: ReturnType<typeof useTitleFontManager>) {
  const [expanded, setExpanded] = useState(false)

  const isDefault = currentFont.id === defaultFont.id

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2 font-sans select-none">
      {/* Expanded Font Selector Panel */}
      {expanded && (
        <div className="animate-rise w-[340px] sm:w-[380px] overflow-hidden rounded-2xl border border-line bg-paper/95 p-4 shadow-2xl backdrop-blur-md">
          <div className="flex items-center justify-between border-b border-line/60 pb-3">
            <div>
              <h4 className="font-mono text-xs font-semibold tracking-wider text-muted">
                Simulasi Font Title
              </h4>
              <p className="text-[11px] text-muted mt-0.5">
                Pilih font di bawah untuk langsung mengubah semua judul
              </p>
            </div>
            <button
              type="button"
              onClick={() => setExpanded(false)}
              className="flex size-6 items-center justify-center rounded-full text-muted hover:bg-cream hover:text-ink"
              aria-label="Tutup panel font"
            >
              ✕
            </button>
          </div>

          {/* Quick Comparison Bar */}
          <div className="my-3 rounded-xl border border-line/60 bg-cream/60 p-2.5">
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted font-medium">Mode Komparasi:</span>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={toggleCompare}
                  disabled={isDefault}
                  className={`rounded-lg px-2.5 py-1 text-xs font-medium transition-all ${
                    comparingDefault
                      ? 'bg-gold/30 text-ink border border-gold/50'
                      : 'bg-paper text-muted border border-line hover:text-ink'
                  } ${isDefault ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                >
                  {comparingDefault ? '👁️ Lihat Original' : '⚖️ Bandingkan dengan Original'}
                </button>
                {!isDefault && (
                  <button
                    type="button"
                    onClick={resetToDefault}
                    className="rounded-lg px-2 py-1 text-xs text-muted hover:text-ink hover:bg-cream border border-transparent"
                    title="Reset ke default"
                  >
                    Reset
                  </button>
                )}
              </div>
            </div>

            {/* Comparison preview banner */}
            <div className="mt-2 text-center rounded-lg bg-paper p-2 border border-line/40">
              <p className="text-[10px] font-mono tracking-widest text-muted">
                {comparingDefault ? 'Melihat Font Original (Default)' : `Memakai Font Simulasi: ${currentFont.name}`}
              </p>
              <p
                className="mt-1 text-xl tracking-tight text-ink transition-all truncate"
                style={{
                  fontFamily: comparingDefault ? defaultFont.cssValue : currentFont.cssValue,
                }}
              >
                Fahriza Pratama — Full-stack Developer
              </p>
            </div>
          </div>

          {/* Font List */}
          <div className="max-h-[260px] space-y-1.5 overflow-y-auto pr-1">
            {TITLE_FONTS.map((font) => {
              const active = currentFont.id === font.id
              return (
                <button
                  key={font.id}
                  type="button"
                  onClick={() => selectFont(font.id)}
                  className={`group w-full flex items-center justify-between rounded-xl p-2.5 text-left transition-all ${
                    active
                      ? 'bg-ink text-cream shadow-sm'
                      : 'bg-paper hover:bg-cream text-ink border border-line/40'
                  }`}
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span
                        className="truncate text-base"
                        style={{ fontFamily: font.cssValue }}
                      >
                        {font.name}
                      </span>
                      <span
                        className={`rounded-md px-1.5 py-0.5 text-[9px] font-mono tracking-wider ${
                          active
                            ? 'bg-cream/20 text-cream'
                            : 'bg-line/60 text-muted'
                        }`}
                      >
                        {font.category}
                      </span>
                    </div>
                    {font.description && (
                      <p
                        className={`text-[10px] truncate mt-0.5 ${
                          active ? 'text-cream/70' : 'text-muted'
                        }`}
                      >
                        {font.description}
                      </p>
                    )}
                  </div>
                  {active && (
                    <span className="ml-2 text-xs font-bold text-mint">✓</span>
                  )}
                </button>
              )
            })}
          </div>
        </div>
      )}

      {/* Main Floating Trigger Bar */}
      <div className="flex items-center gap-1.5 rounded-full border border-ink/15 bg-paper/95 p-1.5 shadow-xl backdrop-blur-md">
        {/* The requested Single Switch Button */}
        <button
          type="button"
          onClick={nextFont}
          className="flex items-center gap-2 rounded-full bg-ink px-3.5 py-2 text-xs font-medium text-cream shadow-sm transition-all hover:bg-ink/90 active:scale-95"
          title="Klik 1-tombol ini untuk ganti ke font title berikutnya"
        >
          <span className="font-mono text-[11px] font-bold text-lavender">Aa</span>
          <span className="font-serif text-sm leading-none" style={{ fontFamily: currentFont.cssValue }}>
            {comparingDefault ? defaultFont.name : currentFont.name}
          </span>
          <span className="rounded-full bg-cream/20 px-1.5 py-0.5 text-[10px] font-mono">
            ⇄ Switch
          </span>
        </button>

        {/* Quick Compare Button */}
        {!isDefault && (
          <button
            type="button"
            onClick={toggleCompare}
            title="Klik untuk membandingkan dengan font original"
            className={`flex items-center gap-1 rounded-full px-2.5 py-2 text-xs transition-all ${
              comparingDefault
                ? 'bg-gold/30 text-ink font-semibold border border-gold'
                : 'bg-cream/80 text-muted hover:text-ink'
            }`}
          >
            ⚖️ <span className="hidden sm:inline">{comparingDefault ? 'Original' : 'Compare'}</span>
          </button>
        )}

        {/* Expand / Menu Toggle Button */}
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          title="Buka pilihan semua font title"
          className="flex size-8 items-center justify-center rounded-full text-muted hover:bg-cream hover:text-ink transition-colors"
          aria-expanded={expanded}
          aria-label="Pilih font title"
        >
          {expanded ? '▼' : '⚙️'}
        </button>
      </div>
    </div>
  )
}
