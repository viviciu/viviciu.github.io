"use client"
// THIS SCENE CREATES A 3D ENVIRONMENT WITH A REFLECTIVE BOX THAT ROTATES ON MOUSE HOVER.
// it includes the <Box /> component which creates a box with a reflective material that rotates on mouse hover.
import { Canvas, useThree } from "@react-three/fiber"
import { Suspense } from "react"
import { useProgress, Html, ScrollControls } from "@react-three/drei"
import { EffectComposer, N8AO, TiltShift2 } from "@react-three/postprocessing";
import { useGLTF, Float, Lightformer, Text, ContactShadows, Environment, MeshTransmissionMaterial } from "@react-three/drei";
import Box from "./Box.jsx"

function Loader() {
  const { progress, active } = useProgress()

  return <Html center>{progress.toFixed(1)} % loaded</Html>
}

export default function Scene() {
  return (
    <Canvas gl={{ antialias: true }} dpr={[1, 1.5]} className="relative h-svh">
      <directionalLight position={[-5, -5, 5]} intensity={4} />
      <Suspense fallback={<Loader />}>
      {/* <color attach="background" args={["#e0e0e0"]} /> */}
      <spotLight position={[20, 20, 10]} penumbra={1} castShadow angle={0.2} />
          <Box />
        {/* <Shadows position={[0, 0, -0.5]} /> */}
        <ContactShadows scale={100} position={[0, -7.5, 0]} blur={1} far={100} opacity={0.85} />
          <Environment resolution={256} preset="city">
            <group rotation={[-Math.PI / 3, 0, 1]}>
              <Lightformer form="circle" intensity={100} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={2} />
              <Lightformer form="circle" intensity={2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={2} />
              <Lightformer form="circle" intensity={2} rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={2} />
              <Lightformer form="circle" intensity={2} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={8} />
              <Lightformer form="ring" color="#4060ff" intensity={80} onUpdate={(self) => self.lookAt(0, 0, 0)} position={[10, 10, 0]} scale={10} />
            </group>
          </Environment>
          <EffectComposer disableNormalPass>
            {/* <N8AO aoRadius={1} intensity={2} /> */}
            {/* <TiltShift2 blur={0.2} /> */}
          </EffectComposer>
      </Suspense>
    </Canvas>
  )
}