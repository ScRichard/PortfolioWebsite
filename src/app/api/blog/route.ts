import { db } from '@/db'
import { blogPosts } from '@/db/schema'
import { NextResponse } from 'next/server'
import { eq } from 'drizzle-orm'

export async function GET() {
  try {
    const posts = await db.query.blogPosts.findMany({
      where: eq(blogPosts.published, true),
      orderBy: (posts, { desc }) => [desc(posts.createdAt)],
    })

    return NextResponse.json(posts)
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const adminPassword = request.headers.get('x-admin-password')
    if (adminPassword !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { title, slug, excerpt, content, category, tags, featured, readTime } = body

    if (!title || !slug || !excerpt || !content || !category) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const post = await db
      .insert(blogPosts)
      .values({
        title,
        slug,
        excerpt,
        content,
        category,
        tags: Array.isArray(tags) ? tags.join(',') : tags || '',
        featured: featured || false,
        readTime: readTime || 5,
        published: true,
      })
      .returning()

    return NextResponse.json(post[0], { status: 201 })
  } catch (error) {
    console.error('Error creating blog post:', error)
    return NextResponse.json({ error: 'Failed to create post' }, { status: 500 })
  }
}
