'use client';
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, ScrollControls } from '@react-three/drei';
import Office from './Office';  // Default import for Office component

export default function GapsPage() {
  return (
    <div style={{ height: '100vh', backgroundColor: '#f0f0f0' }}>
      <Canvas>
        <ambientLight intensity={1} />
        <OrbitControls enableZoom={false} />
        <ScrollControls pages={3} damping={0.5}>
          <Office />  {/* Render the Office 3D model */}
        </ScrollControls>
      </Canvas>
    </div>
  );
}
