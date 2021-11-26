import React from 'react'
// import { Reflector } from 'three/examples/jsm/objects/Reflector.js'
import * as THREE from 'three'
import { Reflector } from './Reflector'

const Ground = React.memo(() => {
  const reflectorGeometry = new THREE.PlaneBufferGeometry(8, 8)
  const mirror = new Reflector(reflectorGeometry, {
    textureWidth: 1024 * window.devicePixelRatio,
    textureHeight: 1024 * window.devicePixelRatio,
    color: new THREE.Color('#f2709c'),
    recursion: 1,
    clipBias: 0.003,
  })

  mirror.rotation.x = Math.PI * -0.5
  mirror.position.set(-1.3, 5, 2)

  //
  return <primitive object={mirror} />
})

export default Ground
