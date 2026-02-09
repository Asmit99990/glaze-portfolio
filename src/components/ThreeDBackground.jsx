import React from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Float } from '@react-three/drei'
import { motion } from 'motion/react'
import * as THREE from 'three'

// Floating 3D geometric shapes - optimized
function GeometricShape({ position, color, scale, speed }) {
  const meshRef = React.useRef()

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += speed * 0.01
      meshRef.current.rotation.y += speed * 0.015
    }
  })

  return (
    <Float floatIntensity={1.5} speed={speed}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 2]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.2}
          metalness={0.5}
          roughness={0.3}
        />
      </mesh>
    </Float>
  )
}

export default function ThreeDBackground() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      className="fixed top-0 left-0 w-full h-screen -z-10 bg-linear-to-br from-gray-950 via-gray-900 to-gray-950"
    >
      <Canvas camera={{ position: [0, 2, 18], fov: 50 }} flat dpr={[1, 1.5]} performance={{ min: 0.5 }}>
        {/* Subtle ambient lighting */}
        <ambientLight intensity={0.5} />
        
        {/* Lemon-green light */}
        <pointLight position={[12, 8, 10]} intensity={0.8} color="#a3e635" />
        
        {/* Soft blue light */}
        <pointLight position={[-12, -8, 10]} intensity={0.6} color="#60a5fa" />

        {/* Subtle accent light */}
        <pointLight position={[0, 0, 5]} intensity={0.3} color="#38bdf8" />

        {/* Scattered shapes positioned subtly - optimized for performance */}
        <GeometricShape position={[-5, 2, -8]} color="#a3e635" scale={0.6} speed={0.8} />
        <GeometricShape position={[6, -1, -10]} color="#bef264" scale={0.9} speed={0.6} />

        <GeometricShape position={[0, 5, -12]} color="#60a5fa" scale={0.5} speed={1.0} />
        <GeometricShape position={[-7, -2, -9]} color="#93c5fd" scale={0.7} speed={0.7} />

        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate 
          autoRotateSpeed={0.3}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI * 2 / 3}
        />
      </Canvas>
    </motion.div>
  )
}
