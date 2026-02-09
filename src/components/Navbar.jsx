import React, { useState } from 'react'
import { motion } from 'motion/react'

export default function Navbar({ onMenuToggle, isOpen }) {
  const [active, setActive] = useState('home')

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Works', href: '#works' },
    { label: 'Skills', href: '#skills' },
    { label: 'About', href: '#about' }
  ]

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-40 backdrop-blur-xl bg-white/8 border-b border-white/10 shadow-lg"
    >
      <div className="max-w-6xl mx-auto px-3 sm:px-4 py-3 sm:py-4 flex items-center justify-between">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl font-bold bg-linear-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"
        >
          Glaze
        </motion.h1>

        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link, idx) => (
            <motion.a
              key={idx}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + idx * 0.1 }}
              onMouseEnter={() => setActive(link.label)}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`relative group text-sm font-medium cursor-pointer px-3 py-2 rounded-lg transition-all ${
                active === link.label
                  ? 'border-2 border-emerald-400 text-emerald-400'
                  : 'border-2 border-transparent'
              }`}
            >
              {link.label}
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-linear-to-r from-emerald-400 to-cyan-400"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: active === link.label ? 1 : 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
                style={{ originX: 0 }}
              />
              <motion.div
                className="absolute -inset-2 rounded-lg bg-gradient-to-r from-emerald-400 to-cyan-400 -z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{ opacity: 0.1, scale: 1 }}
                animate={{ opacity: active === link.label ? 0.15 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </nav>

        <motion.a
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          href="#contact"
          whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(16, 185, 129, 0.6)' }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:inline-block px-6 py-2 rounded-full bg-linear-to-r from-emerald-400 to-cyan-400 text-white font-medium text-sm hover:shadow-lg transition relative overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 bg-linear-to-r from-cyan-400 to-emerald-400 rounded-full -z-10"
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.4 }}
            style={{ originX: 0 }}
          />
          Contact
        </motion.a>

        <button
          className="md:hidden p-2"
          onClick={onMenuToggle}
          aria-label="Toggle menu"
        >
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            className="relative w-6 h-6"
          >
            <span className="absolute top-1 left-0 w-6 h-0.5 bg-white transform transition" style={{ rotate: isOpen ? '45deg' : '0deg', y: isOpen ? '8px' : '0px' }} />
            <span className="absolute top-3 left-0 w-6 h-0.5 bg-white" style={{ opacity: isOpen ? 0 : 1 }} />
            <span className="absolute top-5 left-0 w-6 h-0.5 bg-white transform transition" style={{ rotate: isOpen ? '-45deg' : '0deg', y: isOpen ? '-8px' : '0px' }} />
          </motion.div>
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white/6 backdrop-blur-xl border-t border-white/10"
        >
          <div className="px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link, idx) => (
              <motion.a
                key={idx}
                href={link.href}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ x: 5, color: '#10b981' }}
                whileTap={{ scale: 0.95 }}
                className="text-sm font-medium hover:text-emerald-400 transition cursor-pointer"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: navLinks.length * 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-sm font-medium px-4 py-2 rounded-full bg-linear-to-r from-emerald-400 to-cyan-400 text-white"
            >
              Contact
            </motion.a>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
