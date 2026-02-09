import React from 'react'
import { motion } from 'motion/react'

export default function About() {
  return (
    <section id="about" className="py-16 md:py-20 px-4 md:px-6 relative">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto rounded-2xl p-10 md:p-14 bg-white/8 backdrop-blur-2xl border border-white/15"
      >
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 bg-linear-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"
        >
          About Glaze
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed mb-4 md:mb-6"
        >
          Glaze is a boutique creative agency focused on crafting stunning, interactive frontend experiences. Our team of frontend designers and UI/UX specialists collaborate to deliver modern, glassmorphic interfaces with a distinctive lemon-green and soft-blue aesthetic.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-gray-300 leading-relaxed"
        >
          We believe in the intersection of design and technology—creating interfaces that are not just beautiful, but intuitive and accessible. With expertise in React, Framer Motion, GSAP, and Figma, we're equipped to bring your vision to life.
        </motion.p>
      </motion.div>
    </section>
  )
}
