'use client';

import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
import React, { useRef, useEffect } from 'react';
import { Office } from './Live'; // Assuming Office is your 3D model
import gsap from 'gsap';
import LoadingScreen from '../components/Loading';
import { Group } from 'three'; // Import Group from three.js

export default function GapsPage() {
  const modelRef = useRef();
  const cameraRef = useRef();
  const isDraggingRef = useRef(false); // Track mouse drag state
  const startXRef = useRef(0); // Track the starting X position for dragging

  const scrollAmount = 500; // Controls the distance for each scroll step
  const damping = 0.9; // Damping factor for animations

  // Define min and max X position for the model
  const minX = -17200; // Minimum X position
  const maxX = 0;  // Maximum X position

  // Function to move the model with boundary checks
  const moveModel = (deltaX) => {
    if (modelRef.current) {
      const targetPositionX = modelRef.current.position.x + deltaX;
      const clampedX = Math.max(minX, Math.min(maxX, targetPositionX));
  
      gsap.to(modelRef.current.position, {
        x: clampedX,
        duration: damping,
        ease: 'power1.out',
      });
    }
  };
  

  // Wheel scroll handler (reversed direction)
  // Wheel scroll handler (reversed direction and scaled to match scrollAmount)
const handleWheel = (e) => {
  e.preventDefault(); // Prevent default scrolling behavior
  const scaleFactor = scrollAmount / 100; // Adjust scale for smoother scrolling
  moveModel(-e.deltaY * scaleFactor); // Reversed and scaled
};

// Mouse drag handlers (scaled to match scrollAmount)
const handleMouseMove = (e) => {
  if (isDraggingRef.current) {
    const deltaX = e.clientX - startXRef.current;
    const scaleFactor = scrollAmount / 100; // Adjust scale for consistent drag distance
    moveModel(deltaX * scaleFactor); // Natural drag direction with scaling
    startXRef.current = e.clientX; // Update start position
  }
};


  // Arrow key handler (reversed direction)
  const handleKeyDown = (e) => {
    const keyMap = {
      ArrowLeft: scrollAmount, // Opposite direction
      ArrowRight: -scrollAmount, // Opposite direction
    };
    if (keyMap[e.key]) {
      moveModel(keyMap[e.key]);
    }
  };

  // Mouse drag handlers
  const handleMouseDown = (e) => {
    isDraggingRef.current = true;
    startXRef.current = e.clientX; // Record starting position
  };

  // const handleMouseMove = (e) => {
  //   if (isDraggingRef.current) {
  //     const deltaX = e.clientX - startXRef.current;
  //     moveModel(deltaX); // Natural drag direction
  //     startXRef.current = e.clientX; // Update start position
  //   }
  // };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  // Attach event listeners
  useEffect(() => {
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div
      style={{
        width: '100vw',
        height: '170vh', // Adjust height for multi-page scrolling
        overflow: 'hidden',
        position: 'relative',
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
          {/*  <LoadingScreen /> */}
        </group>
      </Canvas>
    </div>
  );
}
