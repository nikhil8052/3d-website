'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { ScrollControls, useScroll, PerspectiveCamera, OrbitControls } from '@react-three/drei';
import React, { useRef } from 'react';
import { Office } from './Office';
import gsap from 'gsap';

export default function GapsPage() {
  return (
    <div style={{ height: 'calc(200vh)', overflow: 'hidden' }}>
      <Canvas>
        {/* Lighting */}
        <ambientLight intensity={1} />

        {/* Camera */}
        <PerspectiveCamera
          makeDefault
          position={[0, -60, 1300]}
          fov={50}
          near={1}
          far={10000}
        />

        {/* Scroll Controls */}
        <ScrollControls pages={2} damping={4}>
          <SceneContent />
        </ScrollControls>

        {/* Orbit Controls */}
        <OrbitControls enableZoom={false} enablePan={true} />
      </Canvas>
    </div>
  );
}

function SceneContent() {
  const modelRef = useRef();
  const scroll = useScroll();

  // Scroll-based animation
  useFrame(() => {
    if (modelRef.current) {
      const scrollOffset = scroll.offset; // Value between 0 and 1
      const targetPositionX = -scrollOffset * 18000; // Adjust horizontal movement range
      const targetPositionY = scrollOffset * 0; // Optional: Vertical parallax effect

      console.log(scrollOffset, 'scrollOffset ')
      console.log(targetPositionX, 'targetPositionX ')

      console.log(targetPositionY, 'targetPositionY ')

      // Smooth animation using GSAP
      gsap.to(modelRef.current.position, {
        x: targetPositionX,
        y: targetPositionY,
        duration: 0.5,
        ease: 'power1.out',
      });
    }
  });

  return (
    <group ref={modelRef}>
      {/* Office Model */}
      <Office />
    </group>
  );
}
