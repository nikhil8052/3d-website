'use client';
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
import React, { useRef, useEffect } from 'react';
import { Office } from './Live'; // Assuming Office is your 3D model
import gsap from 'gsap';
import LoadingScreen from '../components/Loading';

export default function GapsPage() {
  const [scrollOffset, setScrollOffset] = useState(0);
  const scrollContainerRef = useRef();

  // Scroll event handler to calculate the scroll position
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      setScrollOffset(scrollLeft);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div
      style={{
        height: '100vh',
        overflowX: 'scroll',
        overflowY: 'hidden',
        whiteSpace: 'nowrap',
      }}
    >
      <Canvas>
        {/* Lighting */}
        {/* <ambientLight intensity={1} /> */}
        <ambientLight intensity={2} />
        

        {/* Camera */}
        <PerspectiveCamera
          ref={cameraRef}
          makeDefault
          position={[0, 400, 1500]} // Keep camera position fixed for no zoom effect
          fov={50}
          near={0.9}
          far={10000}
        />

        {/* Orbit Controls */}
        <OrbitControls enableZoom={false} enablePan={true} enableRotate={false} />

        {/* 3D Content */}
        <group ref={modelRef}>
          <Office />
        </group>
      </Canvas>
      <div style={{ width: '300vw', height: '' }}>
        <Canvas>
          <ambientLight intensity={1} />
          <PerspectiveCamera
            makeDefault
            position={[scrollOffset / 1, 220, 1500]} // Move camera based on scroll
            fov={50}
            near={1}
            far={5000}
          />
          <Office />
        </Canvas>
      </div>
    </div>
  );
}