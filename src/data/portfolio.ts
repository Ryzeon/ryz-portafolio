import type { Lang } from '../i18n/types'

/** Fixed accent palette used across cards, chips and badges. */
export const PALETTE = ['#ffd23f', '#ff6b4a', '#5577ff', '#22cc88', '#c08bf0', '#ff9fc2'] as const

export interface HeroChip {
  label: string
  color: string
}

export interface Stat {
  value: string
  label: string
  color: string
}

export interface StackGroup {
  label: string
  color: string
  items: string[]
}

export interface ExperienceItem {
  color: string
  period: string
  location: string
  role: string
  company: string
  bullets: string[]
  tags: string[]
}

export interface Education {
  company: string
  period: string
  location: string
}

export interface Metric {
  value: string
  label: string
}

export interface FeaturedProject {
  name: string
  link: string
  blurb: string
  stack: string[]
  metrics: Metric[]
}

export interface Project {
  color: string
  name: string
  link: string
  blurb: string
  stack: string[]
}

export interface Social {
  key: string
  value: string
  href: string
}

export interface Portfolio {
  marquee: string
  heroChips: HeroChip[]
  stats: Stat[]
  stackGroups: StackGroup[]
  experience: ExperienceItem[]
  education: Education
  featured: FeaturedProject
  projects: Project[]
  socials: Social[]
}

const HERO_CHIPS = ['Java', 'Spring Boot', 'Quarkus', 'AWS', 'Azure', 'Kubernetes', 'React']

const MARQUEE =
  'JAVA ★ SPRING BOOT ★ QUARKUS ★ AWS ★ AZURE ★ KUBERNETES ★ TERRAFORM ★ REACT ★ FLUTTER ★ KAFKA ★ MONGODB ★ REDIS ★ GRAFANA'

const SOCIALS: Social[] = [
  { key: 'Email', value: 'aavilaasto@gmail.com', href: 'mailto:aavilaasto@gmail.com' },
  { key: 'LinkedIn', value: '/in/alex-avila-asto', href: 'https://linkedin.com/in/alex-avila-asto' },
  { key: 'GitHub', value: '@Ryzeon', href: 'https://github.com/Ryzeon' },
  { key: 'X', value: '@Ryzeon_', href: 'https://twitter.com/Ryzeon_' },
]

const pick = <T,>(lang: Lang, es: T, en: T): T => (lang === 'es' ? es : en)

export function getPortfolio(lang: Lang): Portfolio {
  return {
    marquee: MARQUEE,
    heroChips: HERO_CHIPS.map((label, i) => ({ label, color: PALETTE[i % PALETTE.length] })),
    stats: [
      { value: '6+', label: pick(lang, 'años programando', 'years coding'), color: PALETTE[0] },
      { value: '5+', label: pick(lang, 'sistemas en prod.', 'production systems'), color: PALETTE[1] },
      { value: '2026', label: pick(lang, 'graduación UPC', 'UPC graduation'), color: PALETTE[2] },
    ],
    stackGroups: [
      {
        label: pick(lang, 'Lenguajes', 'Languages'),
        color: PALETTE[0],
        items: ['Java', 'Kotlin', 'TypeScript', 'Python', 'Dart', 'C++'],
      },
      {
        label: 'Backend',
        color: PALETTE[1],
        items: ['Spring Boot', 'Quarkus', 'Microservices', 'Event-driven', 'REST', 'WebSockets', 'Kafka'],
      },
      {
        label: 'Cloud / DevOps',
        color: PALETTE[2],
        items: ['AWS', 'Azure', 'Kubernetes', 'Terraform', 'CDK', 'GitHub Actions', 'Docker'],
      },
      {
        label: pick(lang, 'Datos', 'Data'),
        color: PALETTE[3],
        items: ['PostgreSQL', 'MongoDB', 'Redis', 'DynamoDB', 'SQL'],
      },
      {
        label: 'Frontend',
        color: PALETTE[4],
        items: ['React', 'Flutter', 'Angular', 'Vue', 'Firebase'],
      },
      {
        label: pick(lang, 'Observ. / QA', 'Observability / QA'),
        color: PALETTE[5],
        items: ['Grafana', 'Loki', 'Prometheus', 'Sentry', 'JUnit', 'Mockito'],
      },
    ],
    experience: [
      {
        color: PALETTE[1],
        period: 'Apr 2026 — present',
        location: 'Lima',
        role: 'Backend Developer',
        company: 'Dinet',
        bullets: pick(
          lang,
          [
            'Backend de un e-commerce de alta transaccionalidad con procesamiento batch confiable.',
            'Seguridad de APIs con JWT y hardening; flujos asíncronos con Azure Service Bus.',
            'Azure Pipelines → despliegue a Kubernetes (AKS); observabilidad con Grafana, Loki y Prometheus para reducir el MTTR.',
          ],
          [
            'Backend for a high-transaction ecommerce platform with reliable batch processing.',
            'API security with JWT & hardening; async flows via Azure Service Bus.',
            'Azure Pipelines → deploy to Kubernetes (AKS); observability with Grafana, Loki & Prometheus to cut MTTR.',
          ],
        ),
        tags: ['Java', 'Azure', 'AKS', 'Service Bus', 'Grafana'],
      },
      {
        color: PALETTE[2],
        period: 'Dec 2024 — present',
        location: 'Remote',
        role: 'Software Engineer (Backend & DevOps)',
        company: 'Influyo',
        bullets: pick(
          lang,
          [
            'Lideré la arquitectura de monolito a serverless híbrido en AWS (Lambda, API Gateway).',
            'IaC con Terraform y CI/CD en GitHub Actions con cobertura JaCoCo.',
            'Monitoreo de errores con Sentry y preparación para lanzamiento a producción.',
          ],
          [
            'Led architecture from monolith to hybrid serverless on AWS (Lambda, API Gateway).',
            'IaC with Terraform and CI/CD in GitHub Actions with JaCoCo coverage.',
            'Error monitoring with Sentry and production launch readiness.',
          ],
        ),
        tags: ['Java', 'AWS Lambda', 'Terraform', 'GitHub Actions'],
      },
      {
        color: PALETTE[3],
        period: 'May 2024 — Dec 2025',
        location: 'Lima',
        role: 'Software Developer Intern',
        company: 'Domain Consulting',
        bullets: pick(
          lang,
          [
            'Extensiones a medida para Alfresco Process Services (Activiti).',
            'Integración y sincronización con Keycloak; dashboards en Kibana.',
            'Capacitaciones técnicas de administración y desarrollo.',
          ],
          [
            'Custom Alfresco Process Services (Activiti) extensions.',
            'Keycloak integration & sync; Kibana dashboards.',
            'Technical training on system administration & development.',
          ],
        ),
        tags: ['Java', 'Alfresco', 'Keycloak', 'Kibana'],
      },
    ],
    education: { company: 'UPC', period: '2022 — 2026', location: 'Lima, PE' },
    featured: {
      name: 'Alkila',
      link: 'https://ryzeon.me',
      blurb: pick(
        lang,
        'SaaS multi-tenant para operación hotelera: aislamiento por tenant, arquitectura de plugins (SPI) para facturación SUNAT y notificaciones, eventos de dominio en tiempo real (WebSocket) y app Flutter (Web/iOS/Android).',
        'Multi-tenant SaaS for hotel operations: per-tenant isolation, plugin SPI for SUNAT e-invoicing & notifications, real-time domain events (WebSocket) and a Flutter app (Web/iOS/Android).',
      ),
      stack: ['Java 17', 'Spring Boot 3.5', 'MongoDB', 'Redis', 'Flutter', 'WebSocket', 'AWS', 'Gemini'],
      metrics: [
        {
          value: '~60%',
          label: pick(lang, 'menos tiempo de reserva (5 min → ≤2 min)', 'faster bookings (5 min → ≤2 min)'),
        },
        { value: '3', label: pick(lang, 'plataformas · un código', 'platforms · one codebase') },
      ],
    },
    projects: [
      {
        color: PALETTE[0],
        name: 'SWARD',
        link: 'https://github.com/sward-UPC',
        blurb: pick(
          lang,
          'Plataforma de riesgo académico con IA — microservicios FastAPI, motor de recomendación (SAKT) con XAI e integración con Moodle sobre AWS serverless.',
          'AI academic-risk platform — FastAPI microservices, SAKT recommendation engine with XAI, and Moodle integration on AWS serverless.',
        ),
        stack: ['Python', 'FastAPI', 'AWS CDK', 'Lambda', 'React', 'ML'],
      },
      {
        color: PALETTE[2],
        name: 'InnControl',
        link: 'https://github.com/InnControlUPC',
        blurb: pick(
          lang,
          'Gestión hotelera como microservicios Spring Cloud — Eureka, API Gateway y servicios de dominio (IAM, inventario, tareas).',
          'Hotel management as Spring Cloud microservices — Eureka, API Gateway and domain services (IAM, inventory, tasks).',
        ),
        stack: ['Java', 'Spring Cloud', 'Eureka', 'API Gateway', 'TypeScript'],
      },
      {
        color: PALETTE[3],
        name: 'RutaKids',
        link: 'https://llanta.ryzeon.me',
        blurb: pick(
          lang,
          'Tracking IoT de transporte escolar — firmware ESP32, gateway edge en Python y microservicios Java con app web.',
          'IoT school-transport tracking — ESP32 firmware, a Python edge gateway and Java microservices with a web app.',
        ),
        stack: ['ESP32 / C++', 'Python', 'Java', 'IoT'],
      },
      {
        color: PALETTE[4],
        name: 'discord-html-transcripts',
        link: 'https://github.com/Ryzeon/discord-html-transcripts',
        blurb: pick(
          lang,
          'Librería Java open-source para generar transcripciones HTML con JDA. Usada por la comunidad.',
          'Open-source Java library for nicely formatted HTML transcripts with JDA. Used by the community.',
        ),
        stack: ['Java', 'JDA', 'Open Source'],
      },
    ],
    socials: SOCIALS,
  }
}
