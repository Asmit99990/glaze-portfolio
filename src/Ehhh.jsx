import React, { useRef, useState, useEffect } from 'react'
import { useTexture } from '@react-three/drei'
import * as THREE from "three"
import { useFrame } from '@react-three/fiber'
const Ehhh = () => {
    let tex = useTexture("./image1.png")
    let ehh = useRef(null)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        // Trigger animation after component mounts
        setIsLoaded(true)
    }, [])

    useFrame((state, delta) => {
        if (ehh.current) {
            ehh.current.rotation.y += delta
            
            // Entrance animation - scale up from 0 to 1
            if (ehh.current.scale.x < 1) {
                ehh.current.scale.x += delta * 1.5
                ehh.current.scale.y += delta * 1.5
                ehh.current.scale.z += delta * 1.5
            }
        }
    })

    return (
        <group rotation={[0, 1.3, 0.4]}>
            <mesh ref={ehh} scale={0}>
                <cylinderGeometry args={[1, 1, 1, 30, 30, true]} />
                <meshStandardMaterial map={tex} transparent side={THREE.DoubleSide} />
            </mesh>
        </group>
    )
}

export default Ehhh
