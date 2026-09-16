import { About } from '../components/About'
import { Certifications } from '../components/Certifications'
import { Contact } from '../components/Contact'
import { ExperienceTimeline } from '../components/ExperienceTimeline'
import { Hero } from '../components/Hero'
import { ProjectGrid } from '../components/ProjectGrid'
import { Skills } from '../components/Skills'

export function Home() {
  return (
    <>
      <Hero />
      <ProjectGrid />
      <Skills />
      <ExperienceTimeline />
      <Certifications />
      <About />
      <Contact />
    </>
  )
}
