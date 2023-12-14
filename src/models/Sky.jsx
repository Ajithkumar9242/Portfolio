import React, { useRef } from 'react'
import skyScene from "../assets/3d/sky.glb"
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const Sky = ({ isRotating }) => {
    const Sky = useGLTF(skyScene)
    const skyRef = useRef()

    useFrame((_ , delta) =>{
      if (isRotating) {
        skyRef.current.rotation.y += 0.25* delta
     
      } 
    })
  return (
    <mesh ref={skyRef}>
        <primitive object={Sky.scene} />
    </mesh>
  )
}

export default Sky