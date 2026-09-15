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
    <section className="px-4 py-16 md:px-6">
      <div className="mx-auto max-w-[1100px]">
        <p className="font-mono text-xs tracking-widest text-muted">06</p>
        <h2 className="mt-3 font-serif text-4xl tracking-tight md:text-5xl">
          How I build
        </h2>
        <div className="mt-10 grid gap-3 md:grid-cols-2">
          {principles.map((item, index) => (
            <article
              key={item.title}
              className="rounded-[24px] border border-line bg-paper p-6"
            >
              <p className="font-mono text-xs text-muted">0{index + 1}</p>
              <h3 className="mt-3 font-serif text-2xl">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
