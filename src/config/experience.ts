export interface Experience {
  title: string
  company: string
  period: string
  description: string
  achievements?: string[]
}

export const experienceData: Experience[] = [
  {
    title: 'Founder & Lead Developer',
    company: 'Gothaj Client',
    period: '2021 - Present',
    description:
      'Led development of a custom Minecraft client with a 4-person team. Responsible for architecture, planning, code reviews, and releases. Implemented performance-critical C++ components for client optimization.',
    achievements: [
      '100,000+ downloads',
      '100+ daily active users',
      'Led team of 4 developers',
      'Architected scalable systems',
      'Managed releases and updates',
    ],
  },
  {
    title: 'Computer Science Student',
    company: 'University of Žilina',
    period: '2022 - Present',
    description:
      'Pursuing advanced studies in Computer Science with focus on software engineering, system design, and performance optimization.',
    achievements: [
      'Relevant coursework in Data Structures',
      'Algorithms and System Design',
      'Experience with Java, C++, Python',
    ],
  },
]
