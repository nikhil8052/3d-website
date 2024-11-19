import React from 'react';
import { useGLTF } from '@react-three/drei';

function Office(props) {
  const { nodes, materials } = useGLTF('./models/WawaOffice.glb');  // Make sure the model path is correct
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes['01_office'].geometry} material={materials['01']} />
      <mesh geometry={nodes['02_library'].geometry} material={materials['02']} position={[0, 2.114, -2.23]} />
      <mesh geometry={nodes['03_attic'].geometry} material={materials['03']} position={[-1.97, 4.227, -2.199]} />
    </group>
  );
}

export default Office;  // Default export
