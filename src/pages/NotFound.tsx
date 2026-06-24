import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="not-found">
      <h1 className="not-found__code">404</h1>
      <p className="not-found__text">La página que buscas no existe.</p>
      <Link to="/" className="button">
        Volver al inicio
      </Link>
    </section>
  )
}
