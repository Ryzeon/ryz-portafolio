import { profile } from '../data/profile'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <span>
        © {year} {profile.name}
      </span>
      <div className="footer__socials">
        {profile.socials.map((social) => (
          <a
            key={social.label}
            href={social.url}
            target="_blank"
            rel="noreferrer"
          >
            {social.label}
          </a>
        ))}
      </div>
    </footer>
  )
}
