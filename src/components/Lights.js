import React, { useRef } from 'react'
import * as THREE from 'three'

const Lights = React.memo(() => {
	const lights = useRef()

	//
	return (
			<group ref={lights}>
				<directionalLight
						castShadow
						position={[-5, 8, 0]}
						intensity={3}
						shadow-mapSize-width={1024}
						shadow-mapSize-height={1024}
						shadow-camera-far={50}
						shadow-camera-left={-10}
						shadow-camera-right={10}
						shadow-camera-top={10}
						shadow-camera-bottom={-10}
				/>
				{/*<directionalLight
						castShadow
						position={[-3, 4, 0]}
						intensity={3}
						shadow-mapSize-width={1024}
						shadow-mapSize-height={1024}
						shadow-camera-far={50}
						shadow-camera-left={-10}
						shadow-camera-right={10}
						shadow-camera-top={10}
						shadow-camera-bottom={-10}
				/>*/}
				<directionalLight position={[-0.5, 2, 2]} zoom={0.1} />
				<ambientLight color={ new THREE.Color('#f2709c') } />
				<pointLight position={[-10, -5, 5]} intensity={5} angle={10} color={ new THREE.Color('#f2709c') } />
				<pointLight position={[10, -5, 5]} intensity={5} angle={10} color={ new THREE.Color('#f2709c') } />
				<pointLight intensity={5} position={[0, 2.5, 0]} angle={1} color={ new THREE.Color('#f2709c') } />
			</group>
	)
})

export default Lights
