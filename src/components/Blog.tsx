'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Calendar, Clock, Tag } from 'lucide-react'
import { useEffect } from 'react'

interface BlogPost {
  id: number
  title: string
  excerpt: string
  category: string
  tags: string
  featured: boolean
  readTime: number
  createdAt: string
}

export default function Blog() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/blog')
        const data = await response.json()
        setBlogPosts(data)
      } catch (error) {
        console.error('Failed to fetch blog posts:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  const featuredPosts = blogPosts.filter((post) => post.featured)
  const otherPosts = blogPosts.filter((post) => !post.featured)

  if (loading) {
    return (
      <section className="py-20 px-4 md:px-8 bg-dark-bg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-slate-400">Loading blog posts...</div>
        </div>
      </section>
    )
  }

  if (blogPosts.length === 0) {
    return (
      <section className="py-20 px-4 md:px-8 bg-dark-bg">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="heading text-4xl md:text-5xl mb-4">Blog</h2>
          <p className="text-slate-300 text-lg">No blog posts yet. Check back soon!</p>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 px-4 md:px-8 bg-dark-bg">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="mb-16 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.h2 variants={itemVariants} className="heading text-4xl md:text-5xl mb-4">
            Blog
          </motion.h2>
          <motion.p variants={itemVariants} className="text-slate-300 text-lg max-w-2xl mx-auto">
            Articles about web development, performance optimization, and software engineering best practices.
          </motion.p>
        </motion.div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <motion.div
            className="mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.h3 variants={itemVariants} className="text-2xl font-bold mb-8 text-blue-400">
              Featured Articles
            </motion.h3>
            <motion.div variants={containerVariants} className="grid md:grid-cols-2 gap-6">
              {featuredPosts.map((post) => (
                <motion.article
                  key={post.id}
                  variants={itemVariants}
                  className="card group cursor-pointer"
                  whileHover={{ y: -4 }}
                >
                  <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 text-xs font-semibold rounded-full">
                          {post.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-100 group-hover:text-blue-400 transition-colors mb-2">
                        {post.title}
                      </h3>
                    </div>

                    {/* Excerpt */}
                    <p className="text-slate-400 mb-4 flex-grow">{post.excerpt}</p>

                    {/* Metadata */}
                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        {new Date(post.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={16} />
                        {post.readTime} min read
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {(post.tags || '').split(',').map((tag) => (
                        <span key={tag} className="text-xs text-slate-400 flex items-center gap-1">
                          <Tag size={12} />
                          {tag.trim()}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <button className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold group/btn transition-colors">
                      Read Article
                      <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </motion.div>
        )}

        {/* All Posts */}
        {otherPosts.length > 0 && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.h3 variants={itemVariants} className="text-2xl font-bold mb-8 text-blue-400">
              Latest Articles
            </motion.h3>
            <motion.div variants={containerVariants} className="space-y-4">
              {otherPosts.map((post) => (
                <motion.article
                  key={post.id}
                  variants={itemVariants}
                  className="card group cursor-pointer py-4"
                  whileHover={{ x: 4 }}
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex-grow">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                        <h3 className="text-lg font-bold text-slate-100 group-hover:text-blue-400 transition-colors">
                          {post.title}
                        </h3>
                        <span className="inline-block px-2 py-1 bg-blue-500/20 text-blue-300 text-xs font-semibold rounded w-fit">
                          {post.category}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-slate-500">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          {new Date(post.date).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                          })}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={14} />
                          {post.readTime} min
                        </div>
                      </div>
                    </div>
                    <ArrowRight size={20} className="text-blue-400 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
