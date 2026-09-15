import { Link, useParams } from 'react-router-dom'
import { ProjectCaseStudy } from '../components/ProjectCaseStudy'
import { getProject } from '../data/projects'

export function ProjectPage() {
  const { slug } = useParams()
  const project = slug ? getProject(slug) : undefined

  if (!project) {
    return (
      <section className="px-4 py-24 text-center">
        <h1 className="font-serif text-4xl">Project not found</h1>
        <Link to="/work" className="mt-4 inline-block text-sm text-muted">
          Back to work
        </Link>
      </section>
    )
  }

  return <ProjectCaseStudy project={project} />
}
