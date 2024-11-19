'use client';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, ScrollControls, Scroll, PerspectiveCamera } from '@react-three/drei';
import { Office } from './Office';
import React from 'react';

export default function GapsPage() {
  return (
    <div style={{ height: '100vh', overflow: 'hidden' }}>
      <Canvas>
        <ambientLight intensity={1} />
        
        {/* The OrbitControls will let the user rotate around the model, but no zooming */}
        <OrbitControls enableZoom={false} enablePan={true} />

        {/* ScrollControls to handle the horizontal scrolling */}
        <ScrollControls pages={3} damping={0.5}>
          
          {/* Custom Camera for the Horizontal Scroll View */}
          <PerspectiveCamera
            makeDefault
            position={[0, 500, 1500]}  // Adjust the camera position to fit the scene well
            fov={50}
            near={1}
            far={10000}
            rotation={[0, Math.PI, 0]} // Align camera to face the model directly
          />
          
          {/* Here we enable the model to scroll horizontally */}
          <Scroll>
            <Office />
          </Scroll>
          
        </ScrollControls>
        
      </Canvas>
    </div>
  );
}
