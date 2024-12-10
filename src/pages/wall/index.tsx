'use client';

import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
import React, { useRef, useEffect, useState } from 'react';
import { Office } from './Testing'; // Assuming Office is your 3D model
import gsap from 'gsap';

export default function GapsPage() {
  const modelRef = useRef();
  const cameraRef = useRef();
  const isDraggingRef = useRef(false); // Track drag state
  const startPosRef = useRef(0); // Track start position (X for desktop, Y for mobile)

  const scrollAmount = 500; // Controls scroll movement
  const damping = 0.9; // Animation damping
  const [isMobileView, setIsMobileView] = useState(false);
  const [boundaries, setBoundaries] = useState({ minX: -17200, maxX: 0 });

  // Update view mode and boundaries based on screen size
  const updateViewMode = () => {
    const isMobile = window.innerWidth <= 768;
    setIsMobileView(isMobile);
    setBoundaries(isMobile ? { minX: -17790, maxX: 200 } : { minX: -17200, maxX: 0 });
  };

  useEffect(() => {
    updateViewMode();
    window.addEventListener('resize', updateViewMode);
    return () => window.removeEventListener('resize', updateViewMode);
  }, []);

  // Move the model with boundary checks
  const moveModel = (delta) => {
    if (modelRef.current) {
      const targetPositionX = modelRef.current.position.x + delta;
      const clampedX = Math.max(boundaries.minX, Math.min(boundaries.maxX, targetPositionX));

      gsap.to(modelRef.current.position, {
        x: clampedX,
        duration: damping,
        ease: 'power1.out',
      });
    }
  };

  // Mobile: Touch Events
  const handleTouchStart = (e) => {
    if (isMobileView && e.touches.length === 1) {
      isDraggingRef.current = true;
      startPosRef.current = e.touches[0].clientY; // Start Y position for touch
    }
  };

  const handleTouchMove = (e) => {
    if (isMobileView && isDraggingRef.current) {
      // Calculate delta Y as the difference between the initial touch position and current touch position
      const deltaY = e.touches[0].clientY - startPosRef.current;

      // Reverse the movement direction so that scrolling up moves right and scrolling down moves left
      const scaleFactor = scrollAmount / 100;
      moveModel(deltaY * scaleFactor); // No negation needed here, because the direction is reversed naturally by deltaY calculation

      // Update the start position for next movement
      startPosRef.current = e.touches[0].clientY;
    }
  };

  const handleTouchEnd = () => {
    isDraggingRef.current = false;
  };

  // Desktop: Mouse Events
  const handleMouseDown = (e) => {
    if (!isMobileView) {
      isDraggingRef.current = true;
      startPosRef.current = e.clientX; // Track mouse down position
    }
  };

  const handleMouseMove = (e) => {
    if (!isMobileView && isDraggingRef.current) {
      const deltaX = e.clientX - startPosRef.current;

      const scaleFactor = scrollAmount / 100;
      moveModel(deltaX * scaleFactor); // Move the model with deltaX

      startPosRef.current = e.clientX; // Update start position
    }
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  // Desktop: Mouse Wheel Event
  const handleWheel = (e) => {
    if (!isMobileView) {
      // Reverse the wheel scroll direction so that scrolling up moves right and scrolling down moves left
      const delta = e.deltaY;
      const scaleFactor = scrollAmount / 100;
      moveModel(delta * scaleFactor);
    }
  };

  useEffect(() => {
    if (isMobileView) {
      // Mobile-specific event listeners
      window.addEventListener('touchstart', handleTouchStart);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleTouchEnd);
    } else {
      // Desktop-specific event listeners
      window.addEventListener('mousedown', handleMouseDown);
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('wheel', handleWheel); // Mouse wheel event listener
    }

    return () => {
      if (isMobileView) {
        // Clean up mobile-specific event listeners
        window.removeEventListener('touchstart', handleTouchStart);
        window.removeEventListener('touchmove', handleTouchMove);
        window.removeEventListener('touchend', handleTouchEnd);
      } else {
        // Clean up desktop-specific event listeners
        window.removeEventListener('mousedown', handleMouseDown);
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
        window.removeEventListener('wheel', handleWheel); // Clean up mouse wheel listener
      }
    };
  }, [isMobileView]);

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
