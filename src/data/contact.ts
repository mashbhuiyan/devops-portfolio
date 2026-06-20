export interface OpportunityType {
  id: string
  icon: string
  title: string
  subtitle: string
  description: string[]
  cta: string
  ctaHref: string
  color: string
  borderColor: string
  bgColor: string
}

export interface ContactInfo {
  availability: 'available' | 'selective' | 'unavailable'
  availabilityText: string
  location: string
  timezone: string
  workPreference: string[]
  responseTime: string
  email: string
  linkedin: string
  github: string
  resumeUrl: string
  calendlyUrl?: string
}

export const contactInfo: ContactInfo = {
  availability: 'available',
  availabilityText: 'Open to opportunities starting immediately',
  location: 'Bangladesh',
  timezone: 'UTC+6',
  workPreference: ['Remote', 'Hybrid', 'Relocation negotiable'],
  responseTime: '24 hours',
  email: 'mash.bhuiyan@gmail.com',
  linkedin: 'https://www.linkedin.com/in/mohammad-abdul-mannan-bhuiyan/',
  github: 'https://github.com/mashbhuiyan',
  resumeUrl: '/resume.pdf',
  calendlyUrl: 'https://calendly.com/YOUR_LINK',
}

export const opportunityTypes: OpportunityType[] = [
  {
    id: 'fulltime',
    icon: 'mdi:briefcase',
    title: 'Full-Time Role',
    subtitle: 'Senior · Staff · Principal level',
    description: [
      'Senior DevOps Engineer',
      'Platform Engineer',
      'Cloud Architect',
      'Site Reliability Engineer',
    ],
    cta: 'Discuss a Role',
    ctaHref: '#contact-form',
    color: 'text-cyan-400',
    borderColor: 'border-cyan-500/30',
    bgColor: 'bg-cyan-500/5',
  },
  {
    id: 'contract',
    icon: 'mdi:file-sign',
    title: 'Contract',
    subtitle: '3–12 month engagements',
    description: [
      'Infrastructure builds',
      'Pipeline modernization',
      'Cloud migration projects',
      'Platform engineering',
    ],
    cta: 'Discuss a Contract',
    ctaHref: '#contact-form',
    color: 'text-blue-400',
    borderColor: 'border-blue-500/30',
    bgColor: 'bg-blue-500/5',
  },
  {
    id: 'consulting',
    icon: 'mdi:handshake',
    title: 'Consulting',
    subtitle: 'Advisory & project-based',
    description: [
      'Cloud architecture review',
      'DevOps transformation',
      'Cost optimization audit',
      'Security hardening',
    ],
    cta: 'Book a Call',
    ctaHref: contactInfo.calendlyUrl || '#contact-form',
    color: 'text-purple-400',
    borderColor: 'border-purple-500/30',
    bgColor: 'bg-purple-500/5',
  },
]
