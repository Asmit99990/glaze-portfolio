import React, { useRef, useState, useEffect } from 'react'
import { motion } from 'motion/react'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  }

  return (
    <section id="home" className="py-16 md:py-32 px-4 md:px-6 relative">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto"
      >
        {/* Glassmorphic Card */}
        <motion.div
          variants={itemVariants}
          className="rounded-3xl p-12 md:p-16 bg-white/8 backdrop-blur-2xl border border-white/15 shadow-2xl relative overflow-hidden group"
        >
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-br from-emerald-400/5 to-cyan-400/5 opacity-0 group-hover:opacity-100 transition duration-500" />

          <div className="relative z-10">
            <motion.h2
              variants={itemVariants}
              className="text-2xl sm:text-3xl md:text-5xl font-extrabold bg-linear-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4"
            >
              Glaze Agency
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mb-6 md:mb-8 leading-relaxed"
            >
              A creative agency specializing in beautiful frontend development and stunning UI/UX design. We craft modern, interactive experiences with a lemon-green and soft-blue aesthetic.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col xs:flex-row gap-3 sm:gap-4 items-stretch sm:items-center"
            >
              <motion.a
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(163, 230, 53, 0.6)' }}
                whileTap={{ scale: 0.95 }}
                href="#works"
                className="inline-block text-center bg-linear-to-r from-emerald-400 to-green-400 hover:from-emerald-300 hover:to-green-300 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base"
              >
                View Our Works
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="inline-block text-center border-2 border-emerald-400/60 text-emerald-300 px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-emerald-400/10 transition"
              >
                Get In Touch
              </motion.a>
            </motion.div>
          </div>
        </motion.div>

        {/* Floating elements */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-10 right-10 w-32 h-32 bg-linear-to-br from-emerald-400/20 to-cyan-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          className="absolute bottom-20 left-10 w-40 h-40 bg-linear-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl"
        />
      </motion.div>
    </section>
  )
}
