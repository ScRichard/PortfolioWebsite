'use client'

import { motion } from 'framer-motion'
import { skillsData } from '@/config/skills'

export default function Skills() {
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

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  const getLevelColor = (level?: string) => {
    switch (level) {
      case 'expert':
        return 'from-emerald-500 to-emerald-600'
      case 'advanced':
        return 'from-blue-500 to-blue-600'
      case 'intermediate':
        return 'from-amber-500 to-amber-600'
      case 'beginner':
        return 'from-slate-500 to-slate-600'
      default:
        return 'from-slate-500 to-slate-600'
    }
  }

  const getLevelText = (level?: string) => {
    switch (level) {
      case 'expert':
        return 'Expert'
      case 'advanced':
        return 'Advanced'
      case 'intermediate':
        return 'Intermediate'
      case 'beginner':
        return 'Beginner'
      default:
        return 'Knowledge'
    }
  }

  return (
    <section id="skills" className="section">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* Section Title */}
        <motion.div variants={itemVariants} className="mb-12">
          <h2 className="heading text-4xl md:text-5xl mb-4">Skills & Expertise</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full" />
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {skillsData.map((category, categoryIdx) => (
            <motion.div
              key={categoryIdx}
              className="card"
              variants={itemVariants}
              whileHover={{ y: -5, borderColor: '#3b82f6' }}
            >
              {/* Category Title */}
              <h3 className="text-xl font-bold text-slate-100 mb-6">{category.category}</h3>

              {/* Skills */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skillIdx}
                    className={`px-4 py-2 rounded-lg bg-gradient-to-r ${getLevelColor(skill.level)} text-white font-medium text-sm shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-default group relative`}
                    variants={skillVariants}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill.name}
                    {skill.level && (
                      <span className="invisible group-hover:visible absolute -top-8 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white px-2 py-1 rounded text-xs whitespace-nowrap border border-slate-600 z-10">
                        {getLevelText(skill.level)}
                      </span>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Footer */}
        <motion.div
          variants={itemVariants}
          className="mt-12 grid grid-cols-3 gap-4 md:gap-8 text-center"
        >
          <div className="p-4 rounded-lg bg-dark-card/50 border border-dark-border">
            <p className="text-2xl md:text-3xl font-bold text-blue-400 mb-2">4+</p>
            <p className="text-slate-400 text-sm">Programming Languages</p>
          </div>
          <div className="p-4 rounded-lg bg-dark-card/50 border border-dark-border">
            <p className="text-2xl md:text-3xl font-bold text-blue-400 mb-2">10+</p>
            <p className="text-slate-400 text-sm">Technologies</p>
          </div>
          <div className="p-4 rounded-lg bg-dark-card/50 border border-dark-border">
            <p className="text-2xl md:text-3xl font-bold text-blue-400 mb-2">3+</p>
            <p className="text-slate-400 text-sm">Years Experience</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
