import { motion } from "framer-motion";
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Earth = () => {
    const earth = useGLTF('./planet/scene.gltf')

  return (
    <>
    <primitive
    scale = {2.5}
    object={earth.scene}
      position-y = {0}
      rotation-y = {0}

    />
    <pointLight intensity={3}/>
    <ambientLight intensity={3}/>
    </>
    )
}

const EarthCanvas = () => {
  return(
    <Canvas
      shadows
      frameloop="demand"
      gl = {{ preserveDrqwingBuffer: true}}
      camera = {{fov: 45, near: 0.1, far: 200, position : [-4, 3, 6]}}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
      />

        <Earth />
        <Preload all />
      </Suspense>
    </Canvas>
  )
}


export default EarthCanvas