'use client';

import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
import React, { useRef, useEffect, useState } from 'react';
import { Office } from './Testing'; // Assuming Office is your 3D model
import gsap from 'gsap';

export default function GapsPage() {
  const modelRef = useRef();
  const cameraRef = useRef();
  const isDraggingRef = useRef(false); // Track mouse drag state
  const startXRef = useRef(0); // Track the starting X position for dragging

  const scrollAmount = 500; // Controls the distance for each scroll step
  const damping = 0.9; // Damping factor for animations

  const [boundaries, setBoundaries] = useState({ minX: -17200, maxX: 0 });

  // Function to update boundaries based on screen size
  const updateBoundaries = () => {
    if (window.innerWidth <= 768) {
      // Mobile boundaries
      setBoundaries({ minX: -17790, maxX: 200 });
    } else {
      // Default boundaries
      setBoundaries({ minX: -17200, maxX: 0 });
    }
  };

  useEffect(() => {
    // Set initial boundaries
    updateBoundaries();

    // Update boundaries on resize
    window.addEventListener('resize', updateBoundaries);
    return () => window.removeEventListener('resize', updateBoundaries);
  }, []);

  // Function to move the model with boundary checks
  const moveModel = (deltaX) => {
    if (modelRef.current) {
      const targetPositionX = modelRef.current.position.x + deltaX;
      const clampedX = Math.max(boundaries.minX, Math.min(boundaries.maxX, targetPositionX));

      gsap.to(modelRef.current.position, {
        x: clampedX,
        duration: damping,
        ease: 'power1.out',
      });
    }
  };

  // Event handlers for scrolling and dragging remain unchanged
  const handleWheel = (e) => {
    e.preventDefault();
    const scaleFactor = scrollAmount / 100;
    moveModel(-e.deltaY * scaleFactor);
  };

  const handleMouseDown = (e) => {
    isDraggingRef.current = true;
    startXRef.current = e.clientX;
  };

  const handleMouseMove = (e) => {
    if (isDraggingRef.current) {
      const deltaX = e.clientX - startXRef.current;
      const scaleFactor = scrollAmount / 100;
      moveModel(deltaX * scaleFactor);
      startXRef.current = e.clientX;
    }
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  const handleTouchStart = (e) => {
    if (e.touches.length === 1) {
      isDraggingRef.current = true;
      startXRef.current = e.touches[0].clientX;
    }
  };

  const handleTouchMove = (e) => {
    if (isDraggingRef.current) {
      const deltaX = e.touches[0].clientX - startXRef.current;
      const scaleFactor = scrollAmount / 100;
      moveModel(deltaX * scaleFactor);
      startXRef.current = e.touches[0].clientX;
    }
  };

  const handleTouchEnd = () => {
    isDraggingRef.current = false;
  };

  useEffect(() => {
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <div
      style={{
        width: '100vw',
        height: '170vh',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <Canvas>
        <ambientLight intensity={2} />
        <PerspectiveCamera
          ref={cameraRef}
          makeDefault
          position={[0, 400, 1500]}
          fov={50}
          near={0.9}
          far={10000}
        />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
        <group ref={modelRef}>
          <Office />
        </group>
      </Canvas>
    </div>
  );
}
