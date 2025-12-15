'use client'

import { motion } from 'framer-motion'

export default function Experience() {
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  const experiences = [
    {
      title: 'Founder & Lead Developer',
      company: 'Gothaj Client',
      period: '2021 - Present',
      description: 'Led development of custom Minecraft client, managed team of 4 developers, achieved 100k+ downloads.',
    },
    {
      title: 'Computer Science Student',
      company: 'University of Žilina',
      period: '2022 - Present',
      description: 'Advanced studies in Computer Science with focus on software engineering and system design.',
    },
  ]

  return (
    <section id="experience" className="section bg-dark-card/50">
      <motion.div
        className="max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* Section Title */}
        <motion.div variants={itemVariants} className="mb-12">
          <h2 className="heading text-4xl md:text-5xl mb-4">Experience</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className="relative pl-8 border-l-2 border-blue-600"
              variants={itemVariants}
            >
              {/* Timeline dot */}
              <div className="absolute -left-3 top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-dark-bg" />

              {/* Content */}
              <div className="card border-blue-600/20 bg-transparent">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-slate-100">{exp.title}</h3>
                    <p className="text-blue-400 font-semibold">{exp.company}</p>
                  </div>
                  <span className="text-slate-400 text-sm md:text-right mt-2 md:mt-0">{exp.period}</span>
                </div>
                <p className="text-slate-300">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
