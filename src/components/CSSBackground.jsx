import React from 'react'
import { motion } from 'motion/react'
import gsap from 'gsap'
import { useEffect } from 'react'

export default function CSSBackground() {
  useEffect(() => {
    // GSAP animation for animated shapes
    gsap.to('.floating-shape-1', {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    })

    gsap.to('.floating-shape-2', {
      x: 15,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    })

    gsap.to('.floating-shape-3', {
      y: 25,
      duration: 3.5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: 0.5
    })
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="fixed top-0 left-0 w-full h-screen -z-10 bg-gray-950 overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950" />

      {/* Animated gradient blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-emerald-400/15 to-transparent rounded-full blur-3xl floating-shape-1" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-tl from-cyan-400/15 to-transparent rounded-full blur-3xl floating-shape-2" />
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-gradient-to-l from-blue-500/10 to-transparent rounded-full blur-3xl floating-shape-3" />

      {/* Staggered animated elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="absolute top-20 left-10 w-32 h-32 border-2 border-emerald-400/30 rounded-lg backdrop-blur-sm"
        style={{
          background: 'linear-gradient(135deg, rgba(163, 230, 53, 0.1) 0%, rgba(96, 165, 250, 0.05) 100%)'
        }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="absolute bottom-40 right-20 w-40 h-40 border-2 border-cyan-400/20 rounded-full backdrop-blur-sm"
        style={{
          background: 'linear-gradient(135deg, rgba(96, 165, 250, 0.1) 0%, rgba(163, 230, 53, 0.05) 100%)'
        }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="absolute top-1/2 right-32 w-24 h-24 border border-emerald-400/25 rounded-lg backdrop-blur-sm transform -rotate-45"
        style={{
          background: 'linear-gradient(135deg, rgba(163, 230, 53, 0.08) 0%, transparent 100%)'
        }}
      />
    </motion.div>
  )
}
