import React, { useState, useEffect, Suspense, lazy } from 'react'

const ThreeDBackground = lazy(() => import('./ThreeDBackground'))
import CSSBackground from './CSSBackground'

export default function ResponsiveBackground() {
  const [isDesktop, setIsDesktop] = useState(true)

  useEffect(() => {
    // Check if desktop on mount
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024)
    }

    checkDesktop()

    // Listen to window resize
    window.addEventListener('resize', checkDesktop)
    return () => window.removeEventListener('resize', checkDesktop)
  }, [])

  // Mobile: Lightweight CSS background
  if (!isDesktop) {
    return <CSSBackground />
  }

  // Desktop: Premium 3D Canvas with lazy loading
  return (
    <Suspense fallback={<CSSBackground />}>
      <ThreeDBackground />
    </Suspense>
  )
}
