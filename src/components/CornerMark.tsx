export function CornerMark({
  light = false,
}: {
  light?: boolean
}) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute top-3.5 right-3.5 size-2.5 border-t border-r ${
        light ? 'border-white/50' : 'border-ink/35'
      }`}
    />
  )
}
