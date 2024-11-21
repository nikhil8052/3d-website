'use client';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, ScrollControls, Scroll, PerspectiveCamera } from '@react-three/drei';
import { Office } from './Office';
import React from 'react';

export default function GapsPage() {
  return (
    <div style={{ height: 'calc(100vh + 90vh)', overflow: 'hidden' }}>
      <Canvas>
        <ambientLight intensity={1} />
        <OrbitControls enableZoom={false} enablePan={true} />
        <PerspectiveCamera
          makeDefault
          position={[0, 270, 1500]}
          fov={50}
          near={1}
          far={10000}
          rotation={[0, Math.PI, 0]}
        />
        <Office />
      </Canvas>
     
    </div>

  );
}
