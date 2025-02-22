"use client";
import * as THREE from 'three'
import { useRef, useState, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { MeshReflectorMaterial, MeshTransmissionMaterial, MeshPhysicalMaterial, BakeShadows, Backdrop } from '@react-three/drei'
import { EffectComposer, Bloom, DepthOfField, ToneMapping } from '@react-three/postprocessing'
import { BallCollider, Physics, RigidBody } from '@react-three/rapier'
import { easing } from 'maath'
import { Instances, Computers } from './Computers'
import Model from './Model'
import { SpinningBox } from './SpinningBox';



export default function App() {
  

  


  return (
    <Canvas
      shadows
      dpr={[1, 1.5]}
      camera={{ position: [-1.5, 1, 5.5], fov: 45, near: 1, far: 20 }}
    >
      {/* Lights */}
      <color attach="background" args={["#f0f0f0"]} />
      {/* <hemisphereLight intensity={0.15} groundColor="white" />
      <spotLight
        decay={0}
        position={[10, 20, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      /> */}

      {/* Main scene */}
      <group position={[-0, -1, 0]}>
        {/* physics applies */}
        <Physics /*debug*/ timeStep="vary" gravity={[0, -9.81, 0]}>
          {/* Auto-instanced sketchfab model */}
          {/* wrap the <Instances> in a <RigidBody> if you want to make it solid. */}

          {/* Backdrop */}

          {/* <Backdrop
            receiveShadow
            scale={[30, 10, 5]}
            floor={1.5}
            position={[0, -0.5, -2]}
          >
            <meshPhysicalMaterial roughness={1} color="#e0e0e0" />
            <MeshReflectorMaterial
              blur={[300, 30]}
              resolution={2048}
              mixBlur={1}
              mixStrength={180}
              roughness={1}
              depthScale={1.2}
              minDepthThreshold={0.4}
              maxDepthThreshold={1.4}
              color="#202020"
              metalness={0.8}
            />
          </Backdrop>
          <rectAreaLight
            args={["white", 3]}
            width={5}
            height={5}
            position={[-3, 4, 1]}
            target={[0, 0, 0]}
            visible={false}
          /> */}

          {/* Plane reflections + distance blur */}
          {/* <RigidBody>
            <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
              <planeGeometry args={[50, 50]} />
              <MeshReflectorMaterial
                blur={[300, 30]}
                resolution={2048}
                mixBlur={1}
                mixStrength={180}
                roughness={1}
                depthScale={1.2}
                minDepthThreshold={0.4}
                maxDepthThreshold={1.4}
                color="#202020"
                metalness={0.8}
              />
            </mesh>
          </RigidBody> */}

          {/* floating magic cube */}

          <Pointer />
          <Model scale={0.4} position={[0, 1, 0.5]} route="/work" />
          {/* <SpinningBox scale={0.4} position={[0, 1, 0.5]} route='/blogs' /> */}
        </Physics>
        <pointLight
          distance={10}
          intensity={10}
          position={[0, 1, 0.5]}
          color="orange"
        />
        {/* <rectAreaLight
          args={["white", 3]}
          width={5}
          height={5}
          position={[-3, 4, 1]}
          target={[0, 0, 0]}
          visible={false}
        /> */}
      </group>

      {/* Postprocessing */}
      <EffectComposer disableNormalPass>
        {/* <Bloom
          luminanceThreshold={0}
          mipmapBlur
          luminanceSmoothing={0.0}
          intensity={5}
        /> */}
        {/* <DepthOfField
          target={[0, 0, 0.5]}
          focalLength={0.25}
          bokehScale={15}
          height={700}
        /> */}
      </EffectComposer>
      {/* Camera movements */}
      <CameraRig />
      {/* Small helper that freezes the shadows for better performance */}
      <BakeShadows />
    </Canvas>
  );
}

function CameraRig() {
  useFrame((state, delta) => {
    easing.damp3(state.camera.position, [-1 + (state.pointer.x * state.viewport.width) / 3, (1 + state.pointer.y) / 2, 5.5], 0.5, delta)
    state.camera.lookAt(0, 0, 0)
  })
}

function Pointer({ vec = new THREE.Vector3() }) {
  const ref = useRef()
  useFrame(({ mouse, viewport }) => ref.current?.setNextKinematicTranslation(vec.set((mouse.x * viewport.width) / 2, (mouse.y * viewport.height) / 2, 0)))
  return (
    <RigidBody position={[0, 0, 0]} type="kinematicPosition" colliders={false} ref={ref}>
      {/* change n in  args={[n]}  to alter the size of the ballcolider in pointer. The smaller n is, the closer the pointer can get to touching the cube's ballCollider. */}
      <BallCollider args={[0.01]} />
    </RigidBody>
  )
}


function CameraRigZoomer({ zooming, targetPosition }) {
  useFrame((state) => {
    // state.camera.position.lerp({ x, y, z }, 0.1)
    // state.camera.lookAt(0, 0, 0)
    if (zooming && targetPosition) {
      state.camera.position.lerp(targetPosition, 0.1); // Adjust the speed as needed
      state.camera.updateProjectionMatrix();
    }
  })
}