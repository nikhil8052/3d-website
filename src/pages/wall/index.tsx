'use client';
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, useFrame } from '@react-three/drei';
import { useState, useRef, useEffect } from 'react';
import Office from './Office2';

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
      ref={scrollContainerRef}
      style={{
        height: '100vh',
        overflowX: 'scroll',
        overflowY: 'hidden',
        whiteSpace: 'nowrap',
      }}
    >
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
