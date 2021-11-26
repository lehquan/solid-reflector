import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { useAnimations, useGLTF } from '@react-three/drei'

// assets
import skull from '../assets/skull.glb'

const Model = React.memo(({ scale, position, rotation }) => {
  const modelRef = useRef()
  const { scene, nodes, materials, animations } = useGLTF(skull)
  const { actions, names } = useAnimations(animations, modelRef)

  // Play animation clips
  useEffect(() => {
    // actions[names[0]].reset().fadeIn(0.5).play()
  }, [])

  // Set today material
  useLayoutEffect(() => {
    // Traverse the children object and reset the color & material
    scene.traverse(obj => {
      obj.type === 'Mesh' && (obj.receiveShadow = obj.castShadow = true)
    })

  }, [scene, nodes, materials])

  return (
      <>
        <primitive ref={modelRef} castShadow={true} object={scene} scale={scale} position={position} rotation={rotation} />
      </>
  )
})

export default Model
