import { Link } from 'react-router-dom'
import { profile } from '../data/profile'

export default function Home() {
  return (
    <section className="home">
      <div className="hero">
        <p className="hero__role">{profile.role}</p>
        <h1 className="hero__name">{profile.name}</h1>
        <p className="hero__summary">{profile.summary}</p>
        <Link to="/proyectos" className="button">
          Ver proyectos
        </Link>
      </div>

      <div className="skills">
        <h2 className="skills__title">Tecnologías</h2>
        <ul className="skills__list">
          {profile.skills.map((skill) => (
            <li key={skill} className="tag">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
