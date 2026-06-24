import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Inicio', end: true },
  { to: '/proyectos', label: 'Proyectos', end: false },
]

export default function Navbar() {
  return (
    <header className="navbar">
      <NavLink to="/" className="navbar__brand">
        Ryzeon
      </NavLink>
      <nav className="navbar__links">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.end}
            className={({ isActive }) =>
              isActive ? 'navbar__link navbar__link--active' : 'navbar__link'
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
