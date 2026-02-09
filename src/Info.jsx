import React, { useState } from 'react'
import Navbar from './components/Navbar'
import ResponsiveBackground from './components/ResponsiveBackground'
import Hero from './components/Hero'
import Skills from './components/Skills'
import WorkGallery from './components/WorkGallery'
import About from './components/About'
import Footer from './components/Footer'

const Info = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="bg-gray-950 text-white min-h-screen relative overflow-hidden">
      {/* Responsive Background: 3D on desktop, CSS on mobile */}
      <ResponsiveBackground />

      {/* Main Content */}
      <div className="relative z-20">
        <Navbar onMenuToggle={() => setMenuOpen(!menuOpen)} isOpen={menuOpen} />

        <main>
          <Hero />
          <WorkGallery />
          <Skills />
          <About />
          <Footer />
        </main>
      </div>
    </div>
  )
}

export default Info
