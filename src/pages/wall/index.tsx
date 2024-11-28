'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { ScrollControls, useScroll, PerspectiveCamera, OrbitControls, Html, Text } from '@react-three/drei';
import React, { useRef, Suspense } from 'react';
import { Office } from './Live';
// import { Office } from './Office';
// import { Office } from './Trailblazer';
import gsap from 'gsap';
import LoadingScreen from '../components/Loading';

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
          near={1}
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
  const modelRef = useRef();
  const scroll = useScroll();

  // Scroll-based animation
  useFrame(() => {
    if (modelRef.current) {
      const scrollOffset = scroll.offset; // Value between 0 and 1
      const targetPositionX = -scrollOffset * 18000; // Adjust horizontal movement range
      const targetPositionY = scrollOffset * 0; // Optional: Vertical parallax effect

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
      {/* Your 3D Office model */}
      <Office />

      {/* Add 3D Text */}
      {/* <Text
        position={[0, 200, 0]} 
        fontSize={30} 
        color="red"
        anchorX="center" 
        anchorY="middle"
      >
        Welcome to Gaps Page
      </Text> */}

      {/* Add an HTML Overlay */}
      {/* <Html position={[0, 100, 0]} transform>
        <div
              style={{
                background: 'transparent',
                height: '400rem',
                width: '400rem',
                position: 'fixed',  // Keep it fixed
                top: '50%',          // Adjust to keep it in the center vertically
                left: '50%',         // Adjust to center horizontally
                transform: 'translate(-50%, -50%)',  // Center the element exactly
              }}
            >
              <img
                src="./img/wow.png"
                alt=""
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                }}
              />
            </div>
      </Html> */}
    </group>
  );
}
