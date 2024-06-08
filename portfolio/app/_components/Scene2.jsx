"use client"
import { useRef, useState } from "react"
import { Canvas, useThree, useFrame } from "@react-three/fiber"
import { Suspense } from "react"
import { useProgress, Html, ScrollControls } from "@react-three/drei"
import { EffectComposer, N8AO, TiltShift2 } from "@react-three/postprocessing";
import { useGLTF, Float, Lightformer, Text, ContactShadows, Environment, MeshTransmissionMaterial } from "@react-three/drei";
import Box2 from "./Box2.jsx"





function Loader() {
  const { progress, active } = useProgress()

  return <Html center>{progress.toFixed(1)} % loaded</Html>
}

export default function Scene() {
  
  return (
    <Canvas gl={{ antialias: true }} dpr={[1, 1.5]} className="relative h-svh">
      
      <directionalLight position={[-5, -5, 5]} intensity={4} />
      <spotLight position={[20, 20, 10]} penumbra={1} castShadow angle={0.2} />
      <Suspense fallback={<Loader />}>
      {/* <color attach="background" args={["#e0e0e0"]} /> */}
      
          <Box2 />
      
      </Suspense>
    </Canvas>
  )
}