'use client'

import Link from 'next/link'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/ScRichard',
      label: 'Visit GitHub',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/in/schmidtrich',
      label: 'Visit LinkedIn',
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:me@richardschmidt.dev',
      label: 'Send email',
    },
  ]

  return (
    <motion.footer
      className="bg-dark-card border-t border-dark-border py-12 px-4 md:px-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Social Links */}
        <div className="flex justify-center items-center space-x-6 mb-8">
          {socialLinks.map((social) => {
            const Icon = social.icon
            return (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <Icon size={24} />
              </motion.a>
            )
          })}
        </div>

        {/* Divider */}
        <div className="border-t border-dark-border my-8" />

        {/* Copyright */}
        <div className="text-center text-sm text-slate-500">
          <p className="flex items-center justify-center gap-2 mb-3">
            Made with <Heart size={16} className="text-red-500" /> by Richard Schmidt
          </p>
          <p>&copy; {currentYear} Richard Schmidt. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  )
}
