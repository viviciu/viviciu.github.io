"use client"
import * as THREE from 'three'
import { useRef, useReducer, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Lightformer, MeshTransmissionMaterial } from '@react-three/drei'
import { BallCollider, Physics, RigidBody } from '@react-three/rapier'
import { easing } from 'maath'
import { Effects } from './Effects'
import { useControls } from 'leva'




export default function App(props) {

  const config = useControls({
    meshPhysicalMaterial: false,
    transmissionSampler: false,
    backside: true,
    samples: { value: 16, min: 1, max: 32, step: 1 },
    resolution: { value: 2048, min: 256, max: 2048, step: 256 },
    transmission: { value: 1.0, min: 0, max: 1 },
    roughness: { value: 0.19, min: 0, max: 1, step: 0.01 },
    thickness: { value: 5.95, min: 0, max: 10, step: 0.01 },
    ior: { value: 1.15, min: 1, max: 5, step: 0.01 },
    chromaticAberration: { value: 0.39, min: 0, max: 1 },
    anisotropy: { value: 0.03, min: 0, max: 1, step: 0.01 },
    anisotropicBlur: { value: 0.88, min: 0, max: 1, step: 0.01 },
    distortion: { value: 0.18, min: 0, max: 1, step: 0.01 },
    distortionScale: { value: 0.4, min: 0.01, max: 1, step: 0.01 },
    temporalDistortion: { value: 0.1, min: 0, max: 1, step: 0.01 },
    clearcoat: { value: 0.26, min: 0, max: 1 },
    attenuationDistance: { value: 1.6, min: 0, max: 10, step: 0.01 },
    attenuationColor: "#ffffff",
    color: "#8f8f8f",
    bg: "#ffffff", 
  })

  const accents = ['#ff4060', '#ffcc00', '#20ffa0', '#4060ff']
const shuffle = (accent = 0) => [
  { config },
  { config },
  { config },
  // { color: 'white', roughness: 0.1, metalness: 0.1 },
  // { color: 'white', roughness: 0.1, metalness: 0.1 },
  // { color: 'white', roughness: 0.1, metalness: 0.1 },
  // { color: accents[accent], roughness: 0.1, accent: true },
  // { color: accents[accent], roughness: 0.1, accent: true },
  // { color: accents[accent], roughness: 0.1, accent: true },
  // { color: '#444', roughness: 0.1 },
  // { color: '#444', roughness: 0.3 },
  // { color: '#444', roughness: 0.3 },
  // { color: 'white', roughness: 0.1 },
  // { color: 'white', roughness: 0.2 },
  // { color: 'white', roughness: 0.1 },
  // { color: accents[accent], roughness: 0.1, accent: true, transparent: true, opacity: 0.5 },
  // { color: accents[accent], roughness: 0.3, accent: true },
  // { color: accents[accent], roughness: 0.1, accent: true }
]

  const [accent, click] = useReducer((state) => ++state % accents.length, 0)
  const connectors = useMemo(() => shuffle(accent), [accent])
  return (
    <Canvas flat shadows onClick={click} dpr={[1, 1.5]} gl={{ antialias: false }} camera={{ position: [0, 0, 30], fov: 17.5, near: 10, far: 40 }} {...props}>
      <color attach="background" args={['#141622']} />
      <Physics /*debug*/ timeStep="vary" gravity={[0, 0, 0]}>
        <Pointer />
        {connectors.map((props, i) => (
          <Sphere key={i} {...props} />
        ))}
      </Physics>
<ambientLight intensity={5} />
            <directionalLight intensity={3} position={[0, 3, 2]} />
      <Environment resolution={256}>
        <group rotation={[-Math.PI / 3, 0, 1]}>
          <Lightformer form="circle" intensity={100} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={2} />
          <Lightformer form="circle" intensity={2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={2} />
          <Lightformer form="circle" intensity={2} rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={2} />
          <Lightformer form="circle" intensity={2} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={8} />
          <Lightformer form="ring" color="#4060ff" intensity={80} onUpdate={(self) => self.lookAt(0, 0, 0)} position={[10, 10, 0]} scale={10} />
        </group>
      </Environment>
      <Effects />
    </Canvas>
  )
}

function Sphere({ position, children, vec = new THREE.Vector3(), scale, r = THREE.MathUtils.randFloatSpread, accent, color = 'white', ...props }) {
  const api = useRef()
  const ref = useRef()
  const pos = useMemo(() => position || [r(10), r(10), r(10)], [])
  useFrame((state, delta) => {
    delta = Math.min(0.1, delta)
    api.current?.applyImpulse(vec.copy(api.current.translation()).negate().multiplyScalar(0.2))
    easing.dampC(ref.current.material.color, color, 0.2, delta)
  })
  return (
    <RigidBody linearDamping={4} angularDamping={1} friction={0.1} position={pos} ref={api} colliders={false}>
      <BallCollider args={[1]} />
      <mesh ref={ref} castShadow receiveShadow>
        <boxGeometry args={[1, 1, 1]} />
        <MeshTransmissionMaterial {...props} />
        {children}
      </mesh>
    </RigidBody>
  )
}

function Pointer({ vec = new THREE.Vector3() }) {
  const ref = useRef()
  useFrame(({ mouse, viewport }) => ref.current?.setNextKinematicTranslation(vec.set((mouse.x * viewport.width) / 2, (mouse.y * viewport.height) / 2, 0)))
  return (
    <RigidBody position={[0, 0, 0]} type="kinematicPosition" colliders={false} ref={ref}>
      <BallCollider args={[1]} />
    </RigidBody>
  )
}
