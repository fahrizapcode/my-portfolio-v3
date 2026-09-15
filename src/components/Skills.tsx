import { skills } from '../data/site'

const categoryAccent: Record<string, string> = {
  Frontend: 'bg-lavender/25',
  Backend: 'bg-mint/25',
  Database: 'bg-gold/25',
  Web3: 'bg-plum/30',
  Tools: 'bg-paper border border-line',
}

export function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-20 px-3 py-16 sm:px-4 md:px-6 md:py-20"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-10 md:mb-14" data-reveal>
          <p className="font-mono text-[11px] tracking-widest text-muted uppercase">
            Stack
          </p>
          <h2 className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl">
            Tools I work with
          </h2>
          <p className="mt-3 max-w-lg text-muted">
            Used in shipped projects — not a scoreboard.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5" data-reveal>
          {Object.entries(skills).map(([group, items]) => (
            <div key={group}>
              <p className="font-mono text-[10px] tracking-widest text-muted uppercase">
                {group}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {items.map((item) => (
                  <li key={item}>
                    <span
                      className={`inline-block rounded-full px-3 py-1.5 text-sm text-ink/80 ${categoryAccent[group] ?? 'bg-paper border border-line'}`}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
