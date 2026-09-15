import { About } from '../components/About'
import { Contact } from '../components/Contact'
import { ExperienceTimeline } from '../components/ExperienceTimeline'
import { GitHub } from '../components/GitHub'
import { Hero } from '../components/Hero'
import { Philosophy } from '../components/Philosophy'
import { ProjectGrid } from '../components/ProjectGrid'
import { Skills } from '../components/Skills'

export function Home() {
  return (
    <>
      <Hero />
      <ProjectGrid />
      <Skills />
      <ExperienceTimeline />
      <Philosophy />
      <About />
      <GitHub />
      <Contact />
    </>
  )
}
