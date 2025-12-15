export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  technologies: string[]
  metrics?: {
    label: string
    value: string | number
  }[]
  links?: {
    github?: string
    youtube?: string
    live?: string
  }
  featured?: boolean
}

export const projectsData: Project[] = [
  {
    id: 'gothaj-client',
    title: 'Gothaj Client',
    description: 'Custom Minecraft client built using Java and performance-critical C++ components.',
    longDescription:
      'Custom Minecraft client with a 4-person team where I led planning, code reviews, and releases. Implemented performance-critical systems using C++ for client optimization and Java for the core application. Achieved significant scale with 100,000+ downloads and maintained 100+ daily active users.',
    technologies: ['Java', 'C++', 'Gradle', 'OpenGL'],
    metrics: [
      { label: 'Downloads', value: '100,000+' },
      { label: 'Daily Active Users', value: '100+' },
      { label: 'Team Members', value: 4 },
    ],
    links: {
      github: 'https://github.com',
      youtube: 'https://youtube.com',
    },
    featured: true,
  },
  {
    id: 'portfolio-website',
    title: 'Portfolio Website',
    description: 'Modern, responsive portfolio built with Next.js, React, and Tailwind CSS.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    links: {
      github: 'https://github.com/ScRichard/portfolio',
    },
    featured: false,
  },
  {
    id: 'project-3',
    title: 'Coming Soon',
    description: 'More exciting projects in development...',
    technologies: ['TBD'],
    featured: false,
  },
]
