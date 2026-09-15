export function Portrait() {
  return (
    <div className="relative mx-auto aspect-square w-[68%] max-w-[220px]">
      <div className="absolute inset-[-10%] rounded-full bg-blush/90" />
      <div className="absolute inset-0 overflow-hidden rounded-full bg-[#d7d3cc] ring-2 ring-white/50">
        <svg viewBox="0 0 200 200" className="h-full w-full grayscale">
          <rect width="200" height="200" fill="#cfc8bf" />
          <ellipse cx="100" cy="168" rx="62" ry="48" fill="#2f2c28" />
          <ellipse cx="100" cy="92" rx="44" ry="52" fill="#b7aea4" />
          <ellipse cx="100" cy="78" rx="40" ry="36" fill="#3a3732" />
          <rect x="62" y="88" width="76" height="18" rx="9" fill="#1c1b19" opacity="0.85" />
          <ellipse cx="84" cy="96" rx="10" ry="7" fill="#ece8e1" />
          <ellipse cx="116" cy="96" rx="10" ry="7" fill="#ece8e1" />
          <ellipse cx="100" cy="118" rx="8" ry="5" fill="#8a8178" />
        </svg>
      </div>
    </div>
  )
}
