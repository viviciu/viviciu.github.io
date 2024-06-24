// CURRENTLY THIS FILE ISNT BEING USED, AND THE CONFIG COLORS AND INCREASING SPINNING FUNCTIONALITY DOESNT WORK. SEE V7 FOR THE WORKING VERSION.
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
    const config = {
      meshPhysicalMaterial: false,
      transmissionSampler: false,
      backside: true,
      samples: 16,
      resolution: 2048,
      transmission: 1.0,
      roughness: 0.19,
      thickness: 5.95,
      ior: 1.15,
      chromaticAberration: 0.39,
      anisotropy: 0.03 ,
      anisotropicBlur: 0.88,
      distortion: 0.18,
      distortionScale: 0.4,
      temporalDistortion: 0.1 ,
      clearcoat: 0.26 ,
      attenuationDistance: 1.6 ,
      attenuationColor: "#ffffff",
      color: "#8f8f8f",
      bg: "#ffffff", 
    };



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
        <MeshTransmissionMaterial
          {...config}
        />
      </mesh>
    );
  }

export default Box