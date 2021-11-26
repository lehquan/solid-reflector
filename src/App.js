import React, { Suspense } from 'react'
import { softShadows, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber'
import Lights from './components/Lights';
import Environment from './components/Environment';
import Model from './components/Model';
import Ground from './components/Ground';

// Inject soft shadow shader
softShadows()

const App = () => {
  return (
      <Suspense fallback={<span>loading...</span>}>
        <Canvas shadows camera={{ position: [-6, 4, 10], fov: 60 }}>
          <color attach="background" args={['#FFC0CB']} />
          <Lights/>
          <Environment/>
          <Model scale={3} position={[0, 0, 0]} rotation={[0, Math.PI/180 * -120, 0]}/>
          {/*Reflector*/}
          <Ground />
          {/*shadow plane*/}
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.75, 0]} receiveShadow>
            <planeBufferGeometry attach='geometry' args={[100, 100]} />
            <shadowMaterial attach='material' transparent={true} opacity={0.6} />
          </mesh>
        </Canvas>
      </Suspense>
  );
}

export default App;
