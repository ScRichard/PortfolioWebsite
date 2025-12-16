export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  date: string
  readTime: number
  category: string
  tags: string[]
  featured?: boolean
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Getting Started with Next.js 14',
    excerpt: 'Learn how to build modern web applications with Next.js 14 and the new App Router.',
    content: 'Next.js 14 brings significant improvements to developer experience and performance...',
    date: '2024-12-10',
    readTime: 5,
    category: 'Web Development',
    tags: ['nextjs', 'react', 'web-development'],
    featured: true,
  },
  {
    id: '2',
    title: 'TypeScript Best Practices',
    excerpt: 'Essential TypeScript patterns and practices for writing scalable applications.',
    content: 'TypeScript provides powerful type safety features that help catch errors before runtime...',
    date: '2024-12-05',
    readTime: 8,
    category: 'Programming',
    tags: ['typescript', 'best-practices'],
    featured: true,
  },
  {
    id: '3',
    title: 'Performance Optimization Techniques',
    excerpt: 'Practical techniques for optimizing web application performance.',
    content: 'Performance is crucial for user experience. Here are key optimization strategies...',
    date: '2024-11-28',
    readTime: 6,
    category: 'Performance',
    tags: ['performance', 'optimization', 'web-development'],
  },
  {
    id: '4',
    title: 'Building Scalable APIs',
    excerpt: 'Design patterns for building APIs that grow with your application.',
    content: 'As your application grows, API design becomes increasingly important...',
    date: '2024-11-20',
    readTime: 7,
    category: 'Backend',
    tags: ['api', 'backend', 'scalability'],
  },
]
