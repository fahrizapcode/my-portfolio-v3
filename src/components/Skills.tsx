import { skills } from '../data/site'

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 px-3 py-12 sm:px-4 md:px-6">
      <div className="mx-auto max-w-[1280px]">
        <h2 className="font-serif text-4xl tracking-tight sm:text-5xl">
          Tools I work with
        </h2>
        <p className="mt-3 max-w-xl text-muted">
          Used in shipped projects — not a scoreboard.
        </p>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {Object.entries(skills).map(([group, items]) => (
            <div key={group}>
              <p className="text-sm tracking-wide text-muted">{group}</p>
              <ul className="mt-3 space-y-2">
                {items.map((item) => (
                  <li key={item} className="border-b border-line pb-2 text-[15px]">
                    {item}
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
