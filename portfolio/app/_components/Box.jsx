
import React, { useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { MeshTransmissionMaterial } from "@react-three/drei";
import { useControls } from "leva"


export default function Box() {
  const mesh = useRef();
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
      // what if we used framer motion?
      mesh.current.rotation.y += delta *2
      mesh.current.rotation.x += delta *2
      
        // Project the mesh's 3D position to 2D
        
        // Calculate the 2D distance between the pointer and the projected position
        // const dx = Math.abs(pointer.x - 0)
        // const dy = Math.abs(pointer.y - 0)
        // const distance = Math.sqrt(dx * dx + dy * dy);


        // mesh.current.rotation.x += delta / distance;
        // mesh.current.rotation.y += delta / distance;
        useFrame((state, delta) => {
          if (mesh.current) {
            // Project the mesh's 3D position to 2D
            const projectedPosition = mesh.current.position.clone().project(camera);
    
            // Calculate the 2D distance between the pointer and the projected position
            const dx = pointer.x - projectedPosition.x;
            const dy = pointer.y - projectedPosition.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
    
    
            mesh.current.rotation.x += delta / distance;
            mesh.current.rotation.y += delta / distance;
          }
        });
      
    });

    // somethign like 'onCubeHover' or 'onCubeClick'
    const eventHandler = (state, delta) => {
      console.log('the event occured')
      const cursorX = event.clientX;
      const cursorY = event.clientY;
      console.log('Cursor location:', cursorX, cursorY);
      // Mesh location data
      // const meshRect = mesh.current.getBoundingClientRect();
      // console.log('Mesh location:', meshRect);
      // console.log('Mesh location:', mesh.current);
      console.log('Mesh location:', mesh.current.position.project(camera));
    }

    const [hovered, hover] = useState(false);
  return (
      <group scale={viewport.width / 10}>
        <mesh ref={mesh} castShadow onPointerOver={ eventHandler }
        onPointerEnter={ () => { document.body.style.cursor = 'pointer' } }
        onPointerLeave={ () => { document.body.style.cursor = 'default' } }>
          <boxGeometry />
          <MeshTransmissionMaterial {...config} />
        </mesh>
      </group>
    )
  }