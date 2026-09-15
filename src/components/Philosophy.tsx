const principles = [
  {
    title: 'Solve the problem',
    body: 'I focus on the actual problem before choosing the technology.',
  },
  {
    title: 'Build for users',
    body: 'Good engineering should result in software that people can actually use.',
  },
  {
    title: 'Keep systems understandable',
    body: 'I prefer clear architecture, maintainable code, and simple solutions over unnecessary complexity.',
  },
  {
    title: 'Use Web3 where it makes sense',
    body: 'Blockchain should solve a real trust, ownership, or verifiability problem — not be added just because it is trendy.',
  },
]

export function Philosophy() {
  return (
    <section className="px-3 py-16 sm:px-4 md:px-6 md:py-20">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-10 md:mb-14" data-reveal>
          <p className="font-mono text-[11px] tracking-widest text-muted uppercase">
            Approach
          </p>
          <h2 className="mt-3 font-serif text-4xl tracking-tight md:text-5xl">
            How I build
          </h2>
        </div>

        <div className="grid gap-3 sm:grid-cols-2" data-reveal>
          {principles.map((item, index) => (
            <article
              key={item.title}
              className="rounded-[24px] border border-line bg-paper p-6 sm:p-7"
            >
              <p className="font-mono text-[10px] tracking-widest text-muted">
                0{index + 1}
              </p>
              <h3 className="mt-4 font-serif text-2xl leading-tight">
                {item.title}
              </h3>
              <p className="mt-3 leading-relaxed text-ink/70">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
