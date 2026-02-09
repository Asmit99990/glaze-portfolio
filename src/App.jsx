import { Canvas } from '@react-three/fiber'
import React from 'react'
import "./style.css"
import { OrbitControls } from '@react-three/drei'
import { motion } from 'motion/react'
// import * as THREE from "three"
import Ehhh from './Ehhh'
import Info from './Info'
import { Bloom, EffectComposer, ToneMapping } from '@react-three/postprocessing'
const App = () => {
  // let tex = useTexture("./image1.png")
  return (
    <>
      <div className='w-full '>
       <Info/>
      </div>
    </>
  )
}

export default App
