'use client'

import { motion } from 'framer-motion'
import { MapPin, BookOpen } from 'lucide-react'

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section id="about" className="section bg-dark-card/50">
      <motion.div
        className="max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* Section Title */}
        <motion.div variants={itemVariants} className="mb-12">
          <h2 className="heading text-4xl md:text-5xl mb-4">About Me</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full" />
        </motion.div>

        {/* Content */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Text */}
          <motion.div variants={itemVariants} className="md:col-span-2 space-y-6">
            <p className="text-slate-300 text-lg leading-relaxed">
              I am a motivated Computer Science student eager to learn, grow, and gain real-world experience. With a
              passion for technology and innovation, I enjoy solving technical challenges, working in collaborative
              teams, and building products that create real value for users.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              My experience includes leading development teams, architecting scalable systems, and optimizing
              performance-critical applications. I'm particularly interested in full-stack development, system design,
              and exploring emerging technologies.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              Beyond coding, I value continuous learning, mentoring others, and contributing to open-source projects.
              I'm always looking for opportunities to expand my skills and tackle new challenges.
            </p>
          </motion.div>

          {/* Info Cards */}
          <motion.div variants={itemVariants} className="space-y-4">
            {/* Location */}
            <div className="card border-blue-600/30 bg-dark-card/80">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-blue-600/20">
                  <MapPin className="text-blue-400" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-100 mb-1">Location</h3>
                  <p className="text-slate-400 text-sm">Žilina, Slovakia</p>
                </div>
              </div>
            </div>

            {/* University */}
            <div className="card border-blue-600/30 bg-dark-card/80">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-blue-600/20">
                  <BookOpen className="text-blue-400" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-100 mb-1">Education</h3>
                  <p className="text-slate-400 text-sm">University of Žilina</p>
                </div>
              </div>
            </div>

            {/* Status */}
            <div className="card border-emerald-600/30 bg-emerald-600/10">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                <p className="text-emerald-400 font-medium text-sm">Open to opportunities</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
