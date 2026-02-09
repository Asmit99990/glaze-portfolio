import React from 'react'
import { motion } from 'motion/react'

const skillCards = [
  {
    title: 'Frontend Developer',
    skills: ['HTML', 'CSS', 'GSAP', 'React', 'Framer Motion'],
    color: 'from-emerald-400/30 to-emerald-600/10'
  },
  {
    title: 'UI / UX Designer',
    skills: ['Figma'],
    color: 'from-cyan-400/30 to-blue-600/10'
  },
  {
    title: 'Backend Engineer',
    skills: ['Coming Soon'],
    color: 'from-purple-400/30 to-pink-600/10'
  }
]

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 40, rotateY: -20 },
    visible: { opacity: 1, y: 0, rotateY: 0, transition: { duration: 0.6 } }
  }

  return (
    <section id="skills" className="py-16 md:py-20 px-4 md:px-6 relative">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="max-w-6xl mx-auto"
      >
        <motion.h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12 bg-linear-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
          Our Expertise
        </motion.h3>

        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {skillCards.map((card, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              className={`p-8 rounded-2xl bg-linear-to-br ${card.color} backdrop-blur-xl border border-white/15 hover:border-white/25 transition group cursor-pointer relative overflow-hidden`}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-2xl transition duration-500" style={{
                background: card.color.includes('emerald') ? 'rgba(163, 230, 53, 0.1)' : card.color.includes('cyan') ? 'rgba(96, 165, 250, 0.1)' : 'rgba(162, 155, 254, 0.1)'
              }} />

              <div className="relative z-10">
                <motion.h4
                  className="font-bold mb-6 text-lg"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {card.title}
                </motion.h4>

                <motion.ul
                  className="text-sm space-y-3"
                  initial="hidden"
                  whileInView="visible"
                  variants={{
                    visible: { transition: { staggerChildren: 0.1 } }
                  }}
                >
                  {card.skills.map((skill, i) => (
                    <motion.li
                      key={i}
                      variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }}
                      className="flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      {skill}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
