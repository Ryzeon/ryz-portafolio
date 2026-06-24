import type { Project } from '../data/profile'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <h3 className="project-card__title">{project.name}</h3>
      <p className="project-card__description">{project.description}</p>
      <ul className="project-card__tags">
        {project.tags.map((tag) => (
          <li key={tag} className="tag">
            {tag}
          </li>
        ))}
      </ul>
      {project.url && (
        <a
          className="project-card__link"
          href={project.url}
          target="_blank"
          rel="noreferrer"
        >
          Ver proyecto
        </a>
      )}
    </article>
  )
}
