'use client';

import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
import React, { useRef, useEffect } from 'react';
import { Office } from './Live'; // Assuming Office is your 3D model
import gsap from 'gsap';

export default function GapsPage() {
  const modelRef = useRef();
  const cameraRef = useRef();

  // Scroll-based animation to move the model left or right based on scroll direction
  const handleWheel = (e) => {
    e.preventDefault(); // Prevent default scrolling behavior

    const delta = e.deltaY; // Get the vertical scroll delta (positive for down, negative for up)

    // Move the model based on the wheel direction
    if (modelRef.current) {
      const targetPositionX = modelRef.current.position.x + delta * 1; // Increased multiplier for even faster movement
      gsap.to(modelRef.current.position, {
        x: targetPositionX,
        duration: 0.3,
        ease: 'power1.out',
      });
    }

    // Keep the camera position fixed (no zoom effect)
    if (cameraRef.current) {
      gsap.to(cameraRef.current.position, {
        z: 1500, // Keep the camera's z-position fixed to avoid zooming
        duration: 0.1,
        ease: 'power1.out',
      });
    }
  };

  useEffect(() => {
    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div
      style={{
        width: '100vw',
        height: '170vh',
        overflow: 'hidden', // Disable all scrolling for the page
        position: 'relative',
      }}
    >
      <Canvas>
        {/* Lighting */}
        <ambientLight intensity={1} />

        {/* Camera */}
        <PerspectiveCamera
          ref={cameraRef}
          makeDefault
          position={[0, 400, 1500]} // Keep camera position fixed for no zoom effect
          fov={50}
          near={1}
          far={10000}
        />

        {/* Orbit Controls */}
        <OrbitControls enableZoom={false} enablePan={true} enableRotate={false} />

        {/* 3D Content */}
        <group ref={modelRef}>
          <Office />
        </group>
      </Canvas>
    </div>
  );
}
