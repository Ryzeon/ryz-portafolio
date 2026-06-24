export interface SocialLink {
  label: string
  url: string
}

export interface Project {
  id: string
  name: string
  description: string
  tags: string[]
  url?: string
}

export interface Profile {
  name: string
  role: string
  summary: string
  socials: SocialLink[]
  skills: string[]
  projects: Project[]
}

export const profile: Profile = {
  name: 'Ryzeon',
  role: 'Desarrollador de Software',
  summary:
    'Construyo aplicaciones web modernas con foco en rendimiento, accesibilidad y una buena experiencia de usuario.',
  socials: [
    { label: 'GitHub', url: 'https://github.com/Ryzeon' },
    { label: 'Email', url: 'mailto:dev@ryzeon.me' },
  ],
  skills: [
    'TypeScript',
    'React',
    'Node.js',
    'Vite',
    'CSS',
    'Git',
  ],
  projects: [
    {
      id: 'portafolio',
      name: 'Portafolio personal',
      description: 'Sitio SPA para presentar proyectos y experiencia.',
      tags: ['React', 'TypeScript', 'Vite'],
    },
  ],
}
