export function Portrait() {
  return (
    <div className="relative mx-auto aspect-square w-[72%] max-w-[230px]">
      {/* Blush halo ring */}
      <div className="absolute inset-[-12%] rounded-full bg-blush/80" />
      {/* Photo frame */}
      <div className="absolute inset-0 overflow-hidden rounded-full bg-[#d4cfc8] ring-2 ring-white/60">
        <svg viewBox="0 0 200 200" className="h-full w-full" aria-hidden="true">
          {/* Background */}
          <rect width="200" height="200" fill="#ccc5bc" />
          {/* Torso/shoulders */}
          <ellipse cx="100" cy="178" rx="68" ry="52" fill="#2a2724" />
          {/* Neck */}
          <rect x="87" y="128" width="26" height="26" rx="6" fill="#bfb5aa" />
          {/* Head */}
          <ellipse cx="100" cy="100" rx="42" ry="46" fill="#c4bab1" />
          {/* Hair */}
          <ellipse cx="100" cy="72" rx="42" ry="36" fill="#2e2b27" />
          {/* Ear L */}
          <ellipse cx="58" cy="105" rx="7" ry="9" fill="#bfb5aa" />
          {/* Ear R */}
          <ellipse cx="142" cy="105" rx="7" ry="9" fill="#bfb5aa" />
          {/* Glasses frame */}
          <rect x="62" y="95" width="76" height="16" rx="8" fill="#1e1c1a" opacity="0.9" />
          {/* Glasses lens L */}
          <ellipse cx="83" cy="103" rx="12" ry="7.5" fill="#ddd8d0" opacity="0.7" />
          {/* Glasses lens R */}
          <ellipse cx="117" cy="103" rx="12" ry="7.5" fill="#ddd8d0" opacity="0.7" />
          {/* Glasses bridge */}
          <rect x="93" y="100" width="14" height="3" rx="1.5" fill="#1e1c1a" opacity="0.8" />
          {/* Nose */}
          <ellipse cx="100" cy="118" rx="6" ry="4" fill="#a89f95" />
          {/* Mouth */}
          <path d="M88 128 Q100 133 112 128" stroke="#8a8178" strokeWidth="2" fill="none" strokeLinecap="round" />
          {/* Mustache */}
          <path d="M88 123 Q100 127 112 123" stroke="#2e2b27" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.7" />
        </svg>
      </div>
    </div>
  )
}
