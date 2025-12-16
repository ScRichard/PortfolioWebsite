'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { createBlogPostSchema, type CreateBlogPostInput } from '@/lib/validations/blog'

interface BlogFormProps {
  onSuccess?: () => void
  initialData?: CreateBlogPostInput
  isEditing?: boolean
}

export default function BlogForm({ onSuccess, initialData, isEditing }: BlogFormProps) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [tagInput, setTagInput] = useState(initialData?.tags?.join(', ') || '')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CreateBlogPostInput>({
    resolver: zodResolver(createBlogPostSchema),
    defaultValues: initialData,
  })

  const onSubmit = async (data: CreateBlogPostInput) => {
    setLoading(true)
    setError('')
    setSuccess('')

    try {
      const adminPassword = sessionStorage.getItem('adminPassword')
      if (!adminPassword) {
        setError('Not authenticated')
        return
      }

      const payload = {
        ...data,
        tags: tagInput.split(',').map((tag) => tag.trim()).filter(Boolean),
      }

      const method = isEditing ? 'PUT' : 'POST'
      const url = isEditing ? `/api/blog/${initialData?.id}` : '/api/blog'

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'x-admin-password': adminPassword,
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        throw new Error('Failed to save blog post')
      }

      setSuccess(isEditing ? 'Post updated successfully!' : 'Post created successfully!')
      reset()
      setTagInput('')

      setTimeout(() => {
        onSuccess?.()
      }, 1000)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {error && <div className="bg-red-500/20 border border-red-500 text-red-300 px-4 py-3 rounded">{error}</div>}
      {success && <div className="bg-green-500/20 border border-green-500 text-green-300 px-4 py-3 rounded">{success}</div>}

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-slate-300 mb-2">
            Title *
          </label>
          <input
            id="title"
            type="text"
            {...register('title')}
            className="w-full px-4 py-2 bg-dark-card border border-dark-border rounded-lg focus:outline-none focus:border-blue-400 text-slate-100"
            placeholder="Blog post title"
          />
          {errors.title && <span className="text-red-400 text-sm">{errors.title.message}</span>}
        </div>

        <div>
          <label htmlFor="slug" className="block text-sm font-medium text-slate-300 mb-2">
            Slug *
          </label>
          <input
            id="slug"
            type="text"
            {...register('slug')}
            className="w-full px-4 py-2 bg-dark-card border border-dark-border rounded-lg focus:outline-none focus:border-blue-400 text-slate-100"
            placeholder="blog-post-slug"
          />
          {errors.slug && <span className="text-red-400 text-sm">{errors.slug.message}</span>}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-slate-300 mb-2">
            Category *
          </label>
          <input
            id="category"
            type="text"
            {...register('category')}
            className="w-full px-4 py-2 bg-dark-card border border-dark-border rounded-lg focus:outline-none focus:border-blue-400 text-slate-100"
            placeholder="Web Development"
          />
          {errors.category && <span className="text-red-400 text-sm">{errors.category.message}</span>}
        </div>

        <div>
          <label htmlFor="readTime" className="block text-sm font-medium text-slate-300 mb-2">
            Read Time (minutes)
          </label>
          <input
            id="readTime"
            type="number"
            {...register('readTime', { valueAsNumber: true })}
            className="w-full px-4 py-2 bg-dark-card border border-dark-border rounded-lg focus:outline-none focus:border-blue-400 text-slate-100"
            placeholder="5"
            min="1"
          />
        </div>
      </div>

      <div>
        <label htmlFor="excerpt" className="block text-sm font-medium text-slate-300 mb-2">
          Excerpt *
        </label>
        <textarea
          id="excerpt"
          {...register('excerpt')}
          rows={3}
          className="w-full px-4 py-2 bg-dark-card border border-dark-border rounded-lg focus:outline-none focus:border-blue-400 text-slate-100"
          placeholder="Brief description of the post"
        />
        {errors.excerpt && <span className="text-red-400 text-sm">{errors.excerpt.message}</span>}
      </div>

      <div>
        <label htmlFor="content" className="block text-sm font-medium text-slate-300 mb-2">
          Content *
        </label>
        <textarea
          id="content"
          {...register('content')}
          rows={10}
          className="w-full px-4 py-2 bg-dark-card border border-dark-border rounded-lg focus:outline-none focus:border-blue-400 text-slate-100"
          placeholder="Full blog post content (supports markdown)"
        />
        {errors.content && <span className="text-red-400 text-sm">{errors.content.message}</span>}
      </div>

      <div>
        <label htmlFor="tags" className="block text-sm font-medium text-slate-300 mb-2">
          Tags
        </label>
        <input
          id="tags"
          type="text"
          value={tagInput}
          onChange={(e) => setTagInput(e.target.value)}
          className="w-full px-4 py-2 bg-dark-card border border-dark-border rounded-lg focus:outline-none focus:border-blue-400 text-slate-100"
          placeholder="nextjs, react, web-development (comma-separated)"
        />
      </div>

      <div className="flex items-center gap-4">
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" {...register('featured')} className="w-4 h-4" />
          <span className="text-slate-300">Featured Post</span>
        </label>
      </div>

      <button type="submit" disabled={loading} className="btn-primary w-full">
        {loading ? 'Saving...' : isEditing ? 'Update Post' : 'Create Post'}
      </button>
    </form>
  )
}
