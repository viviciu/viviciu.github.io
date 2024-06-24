// The <Box /> component creates a box with a reflective material that rotates faster on mouse hover.
"use client"
import React, { useEffect, useRef, useState } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { useGLTF, Float, Lightformer, Text, Html, ContactShadows, Environment, MeshTransmissionMaterial } from "@react-three/drei";
import { EffectComposer, N8AO, TiltShift2 } from "@react-three/postprocessing";
import { words } from "./data";
import { gsap } from "gsap";
import { useControls } from "leva";
import * as THREE from "three";


function Box(props) {
  const ref = useRef();
    const { camera, raycaster, pointer, viewport } = useThree();
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
    });



    useFrame((state, delta) => {
      if (ref.current) {
        // Project the mesh's 3D position to 2D
        const projectedPosition = ref.current.position.clone().project(camera);

        // Calculate the 2D distance between the pointer and the projected position
        const dx = pointer.x - projectedPosition.x;
        const dy = pointer.y - projectedPosition.y;
        const distance = Math.sqrt(dx * dx + dy * dy);


        ref.current.rotation.x += delta / distance;
        ref.current.rotation.y += delta / distance;
      }
    });

    const [hovered, hover] = useState(false);
    return (
      <mesh
        {...props}
        castShadow
        ref={ref}
        onPointerOver={(event) => hover(true)}
        onPointerOut={(event) => hover(false)}
      >
        <boxGeometry args={[1, 1, 1]} />
        {/* <meshPhysicalMaterial color={hovered ? 'hotpink' : 'orange'} /> */}
        <MeshTransmissionMaterial
          {...config}
        />
      </mesh>
    );
  }

export default Box