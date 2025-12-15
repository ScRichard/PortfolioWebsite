'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Mail, Send, Github, Linkedin, CheckCircle, AlertCircle } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

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
      transition: { duration: 0.6 },
    },
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      // Validate form
      if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
        setStatus('error')
        setErrorMsg('All fields are required')
        return
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(formData.email)) {
        setStatus('error')
        setErrorMsg('Please enter a valid email address')
        return
      }

      // Here you would typically send the email using a service like EmailJS, SendGrid, etc.
      // For now, we'll simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setStatus('success')
      setFormData({ name: '', email: '', message: '' })

      // Reset status after 3 seconds
      setTimeout(() => setStatus('idle'), 3000)
    } catch (error) {
      setStatus('error')
      setErrorMsg('Failed to send message. Please try again.')
    }
  }

  return (
    <section id="contact" className="section">
      <motion.div
        className="max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* Section Title */}
        <motion.div variants={itemVariants} className="mb-12 text-center">
          <h2 className="heading text-4xl md:text-5xl mb-4">Let's Work Together</h2>
          <p className="subheading text-base md:text-lg mb-4">
            Have a project in mind or just want to chat? Get in touch!
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Contact Methods */}
          <motion.a
            href="mailto:contact@richardschmidt.dev"
            variants={itemVariants}
            className="card group hover:bg-blue-600/10 hover:border-blue-500/50 text-center"
            whileHover={{ y: -5 }}
          >
            <div className="p-3 rounded-lg bg-blue-600/20 w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Mail className="text-blue-400" size={28} />
            </div>
            <h3 className="font-bold text-slate-100 mb-2">Email</h3>
            <p className="text-slate-400 text-sm break-all">contact@richardschmidt.dev</p>
          </motion.a>

          {/* GitHub */}
          <motion.a
            href="https://github.com/ScRichard"
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
            className="card group hover:bg-slate-600/10 hover:border-slate-400/50 text-center"
            whileHover={{ y: -5 }}
          >
            <div className="p-3 rounded-lg bg-slate-600/20 w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Github className="text-slate-300" size={28} />
            </div>
            <h3 className="font-bold text-slate-100 mb-2">GitHub</h3>
            <p className="text-slate-400 text-sm">@ScRichard</p>
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://linkedin.com/in/richard-schmidt"
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
            className="card group hover:bg-blue-600/10 hover:border-blue-500/50 text-center"
            whileHover={{ y: -5 }}
          >
            <div className="p-3 rounded-lg bg-blue-600/20 w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Linkedin className="text-blue-400" size={28} />
            </div>
            <h3 className="font-bold text-slate-100 mb-2">LinkedIn</h3>
            <p className="text-slate-400 text-sm">richard-schmidt</p>
          </motion.a>
        </div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="card max-w-2xl mx-auto"
          variants={itemVariants}
        >
          <h3 className="text-2xl font-bold text-slate-100 mb-6">Send me a message</h3>

          {/* Status Messages */}
          {status === 'success' && (
            <motion.div
              className="mb-6 p-4 bg-emerald-600/20 border border-emerald-500/50 rounded-lg flex items-center gap-3"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <CheckCircle className="text-emerald-400" size={20} />
              <p className="text-emerald-400 font-medium">Message sent successfully! I'll get back to you soon.</p>
            </motion.div>
          )}

          {status === 'error' && (
            <motion.div
              className="mb-6 p-4 bg-red-600/20 border border-red-500/50 rounded-lg flex items-center gap-3"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <AlertCircle className="text-red-400" size={20} />
              <p className="text-red-400 font-medium">{errorMsg}</p>
            </motion.div>
          )}

          {/* Form Fields */}
          <div className="space-y-5">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-slate-300 font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-slate-100 placeholder-slate-500 focus:border-blue-500 focus:outline-none transition-colors"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-slate-300 font-medium mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-slate-100 placeholder-slate-500 focus:border-blue-500 focus:outline-none transition-colors"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-slate-300 font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project or inquiry..."
                rows={5}
                className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-slate-100 placeholder-slate-500 focus:border-blue-500 focus:outline-none transition-colors resize-none"
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={status === 'loading'}
              className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
              whileTap={{ scale: status === 'loading' ? 1 : 0.98 }}
            >
              {status === 'loading' ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={20} />
                  Send Message
                </>
              )}
            </motion.button>
          </div>
        </motion.form>
      </motion.div>
    </section>
  )
}
