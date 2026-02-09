import React from 'react'
import { motion } from 'motion/react'

// EDIT HERE: Update this array to customize gallery items
export const WORK_ITEMS = [
  { id: 1, title: 'Landing Page', desc: 'Modern marketing site with smooth animations', tag: 'UI/UX', color: 'from-emerald-400/40 to-emerald-600/20' },
  { id: 2, title: 'Web App UI', desc: 'Interactive React application interface', tag: 'Frontend', color: 'from-cyan-400/40 to-blue-600/20' },
  { id: 3, title: 'Interactive Hero', desc: 'GSAP-powered animations with canvas', tag: 'Animation', color: 'from-purple-400/40 to-pink-600/20' },
  { id: 4, title: 'Mobile Mockups', desc: 'High-fidelity Figma prototypes', tag: 'Design', color: 'from-amber-400/40 to-orange-600/20' }
]

export default function WorkGallery({ items = WORK_ITEMS }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <section id="works" className="py-16 md:py-20 px-4 md:px-6 relative">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="max-w-6xl mx-auto"
      >
        <motion.h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12 bg-linear-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
          Selected Works
        </motion.h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {items.map((work) => (
            <motion.div
              key={work.id}
              variants={itemVariants}
              whileHover={{ scale: 1.08, y: -15 }}
              className={`group rounded-2xl overflow-hidden bg-linear-to-br ${work.color} backdrop-blur-xl border border-white/15 cursor-pointer hover:border-white/30 transition shadow-xl hover:shadow-2xl`}
            >
              <div className="relative p-6 h-48 flex flex-col justify-between">
                {/* Animated background */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-linear-to-tr from-emerald-400/10 to-cyan-400/10" />

                <div className="relative z-10">
                  <motion.div
                    className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-3"
                  >
                    <span className="text-xs font-semibold">{work.tag}</span>
                  </motion.div>

                  <motion.h4
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="text-lg font-bold mb-2"
                  >
                    {work.title}
                  </motion.h4>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.15 }}
                    className="text-sm text-gray-300"
                  >
                    {work.desc}
                  </motion.p>
                </div>

                {/* Bottom accent */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-emerald-400 to-cyan-400"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  style={{ originX: 0 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
