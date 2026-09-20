import { site } from '../data/site'

interface PortraitProps {
  className?: string
  variant?: 'card' | 'avatar' | 'puzzle'
}

export function Portrait({ className = '', variant = 'puzzle' }: PortraitProps) {
  if (variant === 'avatar') {
    return (
      <div className={`group relative inline-block ${className}`}>
        <div className="absolute inset-[-4px] rounded-full bg-gradient-to-tr from-lavender via-blush to-mint opacity-70 blur-xs transition-all duration-300 group-hover:scale-105 group-hover:opacity-100" />
        <div className="relative aspect-square size-full overflow-hidden rounded-full bg-cream transition-transform duration-300 group-hover:scale-[1.02]">
          <img
            src="/me.png"
            alt={site.name}
            className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
          />
        </div>
      </div>
    )
  }

  // 3-Card Connected Puzzle Portrait Component
  return (
    <div
      className={`group relative flex w-full aspect-[4/3.5] gap-1.5 sm:gap-2 ${className}`}
    >
      {/* KOLOM KIRI: 2 Cards Vertikal Atas & Bawah */}
      <div className="flex w-[38%] flex-col gap-1.5 sm:gap-2 h-full shrink-0">
        {/* CARD 1: TOP LEFT (bg-mint, rounded-20px) */}
        <div className="relative flex-1 overflow-hidden rounded-[18px] sm:rounded-[20px] bg-mint transition-transform duration-300 hover:scale-[1.01]">
          {/* Puzzle Image Slice: Top-Left */}
          <img
            src="/me.png"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute max-w-none object-contain object-bottom transition-transform duration-700 ease-out"
            style={{
              width: '320%',
              height: '250%',
              top: '-25%',
              left: '-45%',
            }}
          />
        </div>

        {/* CARD 2: BOTTOM LEFT (bg-plum, rounded-20px) */}
        <div className="relative flex-1 overflow-hidden rounded-[18px] sm:rounded-[20px] bg-plum transition-transform duration-300 hover:scale-[1.01]">
          {/* Puzzle Image Slice: Bottom-Left */}
          <img
            src="/me.png"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute max-w-none object-contain object-bottom transition-transform duration-700 ease-out"
            style={{
              width: '320%',
              height: '250%',
              top: '-135%',
              left: '-45%',
            }}
          />
        </div>
      </div>

      {/* CARD 3: RIGHT CARD (bg-gold like Web3 card, rounded-20px) */}
      <div className="relative flex-1 overflow-hidden rounded-[18px] sm:rounded-[20px] bg-gold transition-transform duration-300 hover:scale-[1.01]">
        {/* Soft ambient lighting highlights */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.3),transparent_60%)]" />

        {/* Puzzle Image Slice: Right Side */}
        <img
          src="/me.png"
          alt={site.name}
          className="pointer-events-none absolute max-w-none object-contain object-bottom drop-shadow-[0_15px_25px_rgba(0,0,0,0.15)] transition-transform duration-700 ease-out"
          style={{
            width: '196%',
            height: '108%',
            top: '-6%',
            left: '-92%',
          }}
        />
      </div>
    </div>
  )
}
