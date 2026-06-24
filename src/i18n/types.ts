export type Lang = 'es' | 'en'

export interface NavStrings {
  about: string
  stack: string
  experience: string
  work: string
  contact: string
}

export interface ContactForm {
  nameLabel: string
  namePlaceholder: string
  emailLabel: string
  emailPlaceholder: string
  messageLabel: string
  messagePlaceholder: string
  send: string
  sending: string
  success: string
  error: string
}

export interface UIStrings {
  nav: NavStrings
  form: ContactForm
  eyebrow: string
  openBadge: string
  cvBtn: string
  cvShellBtn: string
  ctaWork: string
  ctaContact: string
  heroTagline: string
  aboutLabel: string
  aboutLead: string
  aboutBody: string
  stackTitle: string
  expTitle: string
  eduDegree: string
  eduBody: string
  workTitle: string
  featuredTag: string
  privateLabel: string
  privateModalTitle: string
  privateModalBody: string
  privateModalClose: string
  contactLabel: string
  contactTitle: string
  contactBody: string
  contactCta: string
  saveHint: string
  copied: string
}
