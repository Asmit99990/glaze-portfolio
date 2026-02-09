import React from 'react'
import { motion } from 'motion/react'

export default function Footer() {
  return (
    <footer id="contact" className="py-12 md:py-16 px-4 md:px-6 relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <div className="rounded-2xl p-10 md:p-14 bg-linear-to-br from-white/8 to-white/4 backdrop-blur-2xl border border-white/15">
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6 bg-linear-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"
            >
              Let's Create Something Amazing
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="mailto:hello@glaze.example"
                className="px-6 py-3 rounded-full bg-linear-to-r from-emerald-400 to-cyan-400 text-white font-semibold hover:shadow-lg hover:shadow-emerald-400/50"
              >
                Get In Touch
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="space-y-2 text-sm text-gray-400"
            >
              <p>© {new Date().getFullYear()} Glaze Agency — Creative Frontend & UI/UX</p>
              <p>Email: glaze0999@gmail.com • </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}
