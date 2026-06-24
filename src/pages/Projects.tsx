import ProjectCard from '../components/ProjectCard'
import { profile } from '../data/profile'

export default function Projects() {
  return (
    <section className="projects">
      <h1 className="projects__title">Proyectos</h1>
      <div className="projects__grid">
        {profile.projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
