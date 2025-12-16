'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import BlogForm from '@/components/BlogForm'
import { Plus, Edit2, Trash2, LogOut } from 'lucide-react'

export default function AdminDashboard() {
  const [isClient, setIsClient] = useState(false)
  const [posts, setPosts] = useState<any[]>([])
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState<number | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    setIsClient(true)
    const adminPassword = sessionStorage.getItem('adminPassword')
    if (!adminPassword) {
      router.push('/admin/login')
      return
    }

    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    try {
      const adminPassword = sessionStorage.getItem('adminPassword')
      const response = await fetch('/api/blog', {
        headers: {
          'x-admin-password': adminPassword || '',
        },
      })
      const data = await response.json()
      setPosts(data)
    } catch (error) {
      console.error('Failed to fetch posts:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this post?')) return

    try {
      const adminPassword = sessionStorage.getItem('adminPassword')
      const response = await fetch(`/api/blog/${id}`, {
        method: 'DELETE',
        headers: {
          'x-admin-password': adminPassword || '',
        },
      })

      if (response.ok) {
        setPosts(posts.filter((post) => post.id !== id))
      }
    } catch (error) {
      console.error('Failed to delete post:', error)
    }
  }

  const handleLogout = () => {
    sessionStorage.removeItem('adminPassword')
    router.push('/admin/login')
  }

  if (!isClient) return null

  return (
    <div className="min-h-screen bg-dark-bg">
      {/* Admin Header */}
      <div className="bg-dark-card border-b border-dark-border sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-slate-100">Admin Dashboard</h1>
              <p className="text-slate-400 text-sm mt-1">Manage blog posts and content</p>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 text-slate-300 hover:text-red-400 hover:bg-red-600/10 rounded-lg transition-colors border border-dark-border hover:border-red-500/50"
            >
              <LogOut size={20} />
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        {!showForm ? (
          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">Blog Posts</h2>
              <button
                onClick={() => setShowForm(true)}
                className="btn-primary flex items-center gap-2"
              >
                <Plus size={20} />
                New Post
              </button>
            </div>

            {loading ? (
              <div className="text-slate-400">Loading posts...</div>
            ) : posts.length === 0 ? (
              <div className="card p-8 text-center text-slate-400">
                <p className="mb-4">No blog posts yet</p>
                <button
                  onClick={() => setShowForm(true)}
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <Plus size={20} />
                  Create First Post
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {posts.map((post) => (
                  <div key={post.id} className="card p-6 flex items-start justify-between">
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                      <p className="text-slate-400 mb-2">{post.excerpt}</p>
                      <div className="flex items-center gap-4 text-sm text-slate-500">
                        <span>{post.category}</span>
                        <span>
                          {new Date(post.createdAt).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </span>
                        {post.featured && <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Featured</span>}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 ml-4">
                      <button
                        onClick={() => setEditingId(post.id)}
                        className="p-2 hover:bg-slate-800 rounded transition-colors"
                      >
                        <Edit2 size={18} className="text-blue-400" />
                      </button>
                      <button
                        onClick={() => handleDelete(post.id)}
                        className="p-2 hover:bg-slate-800 rounded transition-colors"
                      >
                        <Trash2 size={18} className="text-red-400" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div>
            <div className="mb-8">
              <button
                onClick={() => {
                  setShowForm(false)
                  setEditingId(null)
                }}
                className="text-blue-400 hover:text-blue-300"
              >
                ← Back to Posts
              </button>
              <h2 className="text-2xl font-bold mt-4">{editingId ? 'Edit Post' : 'Create New Post'}</h2>
            </div>

            <div className="card p-8">
              <BlogForm
                onSuccess={() => {
                  setShowForm(false)
                  setEditingId(null)
                  fetchPosts()
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
