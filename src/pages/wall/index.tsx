'use client';

import React, { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import Office from './Office2'; 

export default function GapsPage() {
  const cameraRef = useRef();
  const controlsRef = useRef();
  const officeRef = useRef(); 

  const handleWheel = (event) => {
    const delta = event.deltaY;
 
    if (cameraRef.current) {
      cameraRef.current.position.x += delta * 0.125; 
   
      

    }

    if (officeRef.current) {
      officeRef.current.position.x += delta * 0.125; 
    }

    event.preventDefault(); 
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
        height: 'calc(100vh + 50vh)', 
        overflow: 'hidden',
        position: 'fixed',
      }}
    >
      <Canvas>
        <ambientLight intensity={3} />
        <PerspectiveCamera
          ref={cameraRef}
          makeDefault
          position={[0, 400, 1500]} 
          fov={50}
          near={1}
          far={10000}
        />
        <OrbitControls
          ref={controlsRef}
          enableZoom={false} 
          enablePan={false} 
          enableRotate={false} 
        />
        
        <Office ref={officeRef} />
      </Canvas>
    </div>
  );
}