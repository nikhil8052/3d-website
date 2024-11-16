'use client';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Office } from './Office'


export default function GapsPage() {
  return (
    <div style={{ height: '100vh', backgroundColor: '#f0f0f0' }}>
      <Canvas>
        <OrbitControls />
        <Office/>
        {/* <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshNormalMaterial />
        </mesh> */}
      </Canvas>
    </div>
  );
}


