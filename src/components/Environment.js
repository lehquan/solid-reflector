import React, { useEffect } from 'react'
import { useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { PMREMGenerator } from 'three/src/extras/PMREMGenerator'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader'
import { RoughnessMipmapper } from 'three/examples/jsm/utils/RoughnessMipmapper'
import hdr from '../assets/venice_sunset_1k.hdr'
// download HDR: https://polyhaven.com/a/cayley_interior

const Environment = React.memo(() => {
  const { gl, scene } = useThree()

  gl.antialias = true
  gl.alpha = true
  gl.outputEncoding = THREE.sRGBEncoding
  gl.physicallyCorrectLights = true

  // set the pixel ratio (for mobile devices)
  gl.setPixelRatio(window.devicePixelRatio)

  const loader = new RGBELoader()
  loader.setDataType(THREE.UnsignedByteType)
  useEffect(() => {
    loader.load(hdr, texture => {
      texture.mapping = THREE.EquirectangularReflectionMapping
      scene.environment = texture

      // use of RoughnessMipmapper is optional
      const roughnessMipmapper = new RoughnessMipmapper(gl)
      scene.children.forEach(child => {
        if (child.isMesh) {
          roughnessMipmapper.generateMipmaps(child.material)
        }
      })

      texture.dispose()
      roughnessMipmapper.dispose()
    })
  }, [scene, loader])

  return null
})

export default Environment
