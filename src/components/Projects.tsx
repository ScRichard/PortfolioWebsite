'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { projectsData } from '@/config/projects'
import { Github, ExternalLink, Users } from 'lucide-react'

export default function Projects() {
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

  return (
    <section id="projects" className="section bg-dark-card/50">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* Section Title */}
        <motion.div variants={itemVariants} className="mb-12">
          <h2 className="heading text-4xl md:text-5xl mb-4">Projects & Work</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full" />
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              className="group card flex flex-col h-full"
              variants={itemVariants}
              whileHover={{ y: -8, borderColor: '#3b82f6' }}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="inline-block w-fit mb-4">
                  <span className="px-3 py-1 bg-blue-600/30 border border-blue-500/50 text-blue-400 text-xs font-semibold rounded-full">
                    Featured Project
                  </span>
                </div>
              )}

              {/* Title */}
              <h3 className="text-2xl font-bold text-slate-100 mb-3 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-slate-300 text-base mb-4 flex-grow leading-relaxed">
                {project.description}
              </p>

              {/* Long Description (for featured) */}
              {project.longDescription && (
                <p className="text-slate-400 text-sm mb-4 italic">{project.longDescription}</p>
              )}

              {/* Technologies */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-3 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full border border-slate-600/50 hover:border-blue-500/50 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Metrics */}
              {project.metrics && project.metrics.length > 0 && (
                <div className="mb-6 pb-6 border-b border-dark-border space-y-2">
                  {project.metrics.map((metric, metricIdx) => (
                    <div key={metricIdx} className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">{metric.label}</span>
                      <span className="text-blue-400 font-semibold">{metric.value}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Links */}
              {project.links && Object.keys(project.links).length > 0 && (
                <div className="flex gap-3 mt-auto">
                  {project.links.github && (
                    <motion.a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-700/30 text-slate-300 hover:bg-blue-600/30 hover:text-blue-400 border border-slate-600/50 hover:border-blue-500/50 transition-all text-sm font-medium"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label="View GitHub repository"
                    >
                      <Github size={16} />
                      Code
                    </motion.a>
                  )}
                  {project.links.live && (
                    <motion.a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-700/30 text-slate-300 hover:bg-blue-600/30 hover:text-blue-400 border border-slate-600/50 hover:border-blue-500/50 transition-all text-sm font-medium"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label="View live project"
                    >
                      <ExternalLink size={16} />
                      Live
                    </motion.a>
                  )}
                  {project.links.youtube && (
                    <motion.a
                      href={project.links.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-700/30 text-slate-300 hover:bg-red-600/30 hover:text-red-400 border border-slate-600/50 hover:border-red-500/50 transition-all text-sm font-medium"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label="Watch on YouTube"
                    >
                      <Users size={16} />
                      Video
                    </motion.a>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={itemVariants}
          className="mt-12 text-center"
        >
          <p className="text-slate-400 mb-4">Want to see more projects?</p>
          <motion.a
            href="https://github.com/ScRichard"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={20} />
            Visit My GitHub
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}
