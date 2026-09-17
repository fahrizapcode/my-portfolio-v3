import { skills } from '../data/site'
import { techIconMap } from './TechMarquee'

const categoryAccent: Record<string, string> = {
  Frontend: 'bg-lavender/35',
  Backend: 'bg-mint/40',
  Database: 'bg-gold/40',
  Web3: 'bg-plum/45',
  Tools: 'bg-lavender/25',
}

export function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-20 px-3 py-8 sm:px-4 md:px-6 md:py-12"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-4 md:mb-5" data-reveal>
          <p className="font-sans text-[11px] font-semibold tracking-widest text-muted">
            Stack
          </p>
          <h2 className="mt-2 font-serif text-4xl tracking-tight sm:text-5xl">
            Tools I work with
          </h2>
          <p className="mt-2 max-w-lg text-muted text-sm sm:text-base">
            Used in shipped projects — not a scoreboard.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-5" data-reveal>
          {Object.entries(skills).map(([group, items]) => (
            <div key={group}>
              <p className="font-sans text-[11px] font-semibold tracking-wider text-muted">
                {group}
              </p>
              <ul className="mt-2 flex flex-wrap gap-1.5">
                {items.map((item) => {
                  const IconComp = techIconMap[item]
                  return (
                    <li key={item}>
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs sm:text-sm text-ink/80 ${categoryAccent[group] ?? 'bg-paper border border-line'}`}
                      >
                        {IconComp ? <IconComp className="size-3.5 shrink-0 sm:size-4" /> : null}
                        <span>{item}</span>
                      </span>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
