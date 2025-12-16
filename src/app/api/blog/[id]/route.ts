import { db } from '@/db'
import { blogPosts } from '@/db/schema'
import { NextResponse } from 'next/server'
import { eq } from 'drizzle-orm'

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const post = await db.query.blogPosts.findFirst({
      where: eq(blogPosts.id, parseInt(params.id)),
    })

    if (!post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 })
    }

    return NextResponse.json(post)
  } catch (error) {
    console.error('Error fetching blog post:', error)
    return NextResponse.json({ error: 'Failed to fetch post' }, { status: 500 })
  }
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const adminPassword = request.headers.get('x-admin-password')
    if (adminPassword !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { title, slug, excerpt, content, category, tags, featured, readTime } = body

    const post = await db
      .update(blogPosts)
      .set({
        title,
        slug,
        excerpt,
        content,
        category,
        tags: Array.isArray(tags) ? tags.join(',') : tags || '',
        featured,
        readTime,
        updatedAt: new Date(),
      })
      .where(eq(blogPosts.id, parseInt(params.id)))
      .returning()

    return NextResponse.json(post[0])
  } catch (error) {
    console.error('Error updating blog post:', error)
    return NextResponse.json({ error: 'Failed to update post' }, { status: 500 })
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const adminPassword = request.headers.get('x-admin-password')
    if (adminPassword !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    await db.delete(blogPosts).where(eq(blogPosts.id, parseInt(params.id)))

    return NextResponse.json({ message: 'Post deleted' })
  } catch (error) {
    console.error('Error deleting blog post:', error)
    return NextResponse.json({ error: 'Failed to delete post' }, { status: 500 })
  }
}
