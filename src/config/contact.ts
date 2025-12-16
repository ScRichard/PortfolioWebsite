export interface ContactInfo {
  email: string
  github: string
  linkedin: string
  twitter?: string
  location?: string
}

export const contactInfo: ContactInfo = {
  email: 'me@richardschmidt.dev',
  github: 'https://github.com/ScRichard',
  linkedin: 'https://linkedin.com/in/schmidtrich',
  location: 'Žilina, Slovakia',
}
