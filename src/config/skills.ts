export interface Skill {
  name: string
  level?: 'beginner' | 'intermediate' | 'advanced' | 'expert'
}

export interface SkillCategory {
  category: string
  skills: Skill[]
}

export const skillsData: SkillCategory[] = [
  {
    category: 'Languages',
    skills: [
      { name: 'Java', level: 'expert' },
      { name: 'C++', level: 'advanced' },
      { name: 'Python', level: 'advanced' },
      { name: 'JavaScript', level: 'advanced' },
      { name: 'TypeScript', level: 'intermediate' },
    ],
  },
  {
    category: 'Frameworks & Libraries',
    skills: [
      { name: 'React', level: 'advanced' },
      { name: 'Next.js', level: 'intermediate' },
      { name: 'Tailwind CSS', level: 'advanced' },
      { name: 'Spring Boot', level: 'intermediate' },
    ],
  },
  {
    category: 'Tools & Platforms',
    skills: [
      { name: 'Git', level: 'advanced' },
      { name: 'Linux', level: 'intermediate' },
      { name: 'Docker', level: 'intermediate' },
      { name: 'Gradle', level: 'intermediate' },
      { name: 'Maven', level: 'beginner' },
    ],
  },
  {
    category: 'Soft Skills',
    skills: [
      { name: 'Team Management', level: 'advanced' },
      { name: 'Communication', level: 'advanced' },
      { name: 'Leadership', level: 'advanced' },
      { name: 'Problem Solving', level: 'expert' },
      { name: 'Mentoring', level: 'intermediate' },
    ],
  },
]
