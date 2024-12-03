'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { ScrollControls, useScroll, PerspectiveCamera, OrbitControls, Html, Text } from '@react-three/drei';
import React, { useRef, Suspense } from 'react';
import { Office } from './Live'; // Your 3D Office model
import gsap from 'gsap';
import LoadingScreen from '../components/Loading';
import { Group } from 'three'; // Import Group from three.js

export default function GapsPage() {
  return (
    <div className="main-model-structure" style={{ height: 'calc(160vh)', overflow: 'hidden' }}>
      <Canvas>
        {/* Lighting */}
        <ambientLight intensity={1} />

        {/* Camera */}
        <PerspectiveCamera
          makeDefault
          position={[0, 400, 1500]}
          fov={50}
          near={0.9}
          far={10000}
        />

        {/* Scroll Controls */}
        <ScrollControls pages={30} damping={1}>
          <Suspense fallback={<LoadingScreen />}>
            <SceneContent />
          </Suspense>
        </ScrollControls>

        {/* Orbit Controls */}
        <OrbitControls enableZoom={false} enablePan={true} enableRotate={false} />
      </Canvas>
    </div>
  );
}

function SceneContent() {
  const modelRef = useRef<Group | null>(null); // Ref for your 3D model
  const scroll = useScroll();

  // Ensure no content moves along -y axis
  useFrame(() => {
    if (modelRef.current) {
      const scrollOffset = scroll.offset; // Value between 0 and 1
      const targetPositionX = -scrollOffset * 18000; // Horizontal movement
      // Prevent y-axis movement by setting it to a fixed value
      gsap.to(modelRef.current.position, {
        x: targetPositionX,
        y: 0, // Keep y constant
        duration: 0.5,
        ease: 'power1.out',
      });
    }
  });

  return (
    <group ref={modelRef}>
      <Office />
    </group>
  );
}
