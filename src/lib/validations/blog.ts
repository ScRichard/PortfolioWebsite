import { z } from 'zod'

export const createBlogPostSchema = z.object({
  title: z.string().min(1, 'Title is required').max(255),
  slug: z.string().min(1, 'Slug is required').max(255).regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Slug must be lowercase with hyphens'),
  excerpt: z.string().min(10, 'Excerpt must be at least 10 characters').max(500),
  content: z.string().min(20, 'Content must be at least 20 characters'),
  category: z.string().min(1, 'Category is required'),
  tags: z.array(z.string()).optional().default([]),
  featured: z.boolean().optional().default(false),
  readTime: z.number().min(1).optional().default(5),
})

export type CreateBlogPostInput = z.infer<typeof createBlogPostSchema>
