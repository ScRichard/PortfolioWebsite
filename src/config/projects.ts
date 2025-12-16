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
      github: 'https://github.com/ScRichard/Gothaj-Next-Gen',
      youtube: 'https://youtube.com/@GothajClient',
    },
    featured: true,
  },
  {
    id: 'project-2',
    title: 'Coming Soon',
    description: 'More exciting projects in development...',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React', "PostgreSQL"],
    featured: false,
  },
]
