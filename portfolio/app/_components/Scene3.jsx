"use client"
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Box2 from './Box2'

function Scene3() {
  return (
    <Canvas
        style={{ height: "100vh" }}
        camera={{ position: [0, 0, 5] }}>
            <pointLight position={[10, 10, 10]} />
            <Box2 />
            
        </Canvas>
  )
}

export default Scene3