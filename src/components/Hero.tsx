'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowDown } from 'lucide-react'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const section = document.querySelector('[data-section="about"]')
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-4 md:px-8 relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 -left-40 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-40 -right-40 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <motion.div
        className="max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Name */}
        <motion.h1 variants={itemVariants} className="heading text-5xl md:text-7xl mb-6 leading-tight">
          Richard Schmidt
        </motion.h1>

        {/* Role */}
        <motion.div variants={itemVariants} className="mb-6">
          <p className="text-xl md:text-2xl text-blue-400 font-semibold mb-4">
            Software Engineer & Computer Science Student
          </p>
          <p className="subheading text-base md:text-lg max-w-2xl mx-auto">
            Computer Science student at University of Žilina focused on building scalable and high-performance software.
          </p>
        </motion.div>

        {/* Description */}
        <motion.p variants={itemVariants} className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
          I'm passionate about solving complex technical challenges, working in collaborative teams, and creating
          products that impact real users. Currently exploring performance optimization and distributed systems.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault()
              const section = document.querySelector('[data-section="projects"]')
              if (section) section.scrollIntoView({ behavior: 'smooth' })
            }}
            className="btn-primary inline-block text-center"
          >
            View Projects
          </a>
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault()
              const section = document.querySelector('[data-section="contact"]')
              if (section) section.scrollIntoView({ behavior: 'smooth' })
            }}
            className="btn-secondary inline-block text-center"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-12 animate-bounce">
          <a
            href="#"
            onClick={handleScroll}
            className="text-slate-400 hover:text-blue-400 transition-colors p-3 rounded-full border border-slate-600 hover:border-blue-400"
            aria-label="Scroll to about section"
          >
            <ArrowDown size={24} />
          </a>
        </div>
      </motion.div>
    </section>
  )
}
