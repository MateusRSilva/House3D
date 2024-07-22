import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const RightTriangle3D = ({ width, height, depth, cor, position }) => {
    const geometry = new THREE.BufferGeometry();
    const rotacionZ = useRef();
  
    useFrame(() => {
      if (rotacionZ.current) {
        rotacionZ.current.rotation.z = 1.58; // Rotaciona no eixo Z
      }
    });
  
    // Define the vertices for the right triangle in 3D
    const vertices = new Float32Array([
      0, 0, 0,         // Vertex 1
      width, 0, 0,     // Vertex 2
      0, height, 0,    // Vertex 3
      0, 0, -depth,    // Vertex 4
      width, 0, -depth,// Vertex 5
      0, height, -depth// Vertex 6
    ]);
  
    // Define the faces of the triangle
    const indices = [
      0, 1, 2,    // Front face
      3, 5, 4,    // Back face
      0, 2, 3,    // Side face
      2, 5, 3,    // Side face
      1, 4, 2,    // Side face
      4, 5, 2,     // Side face
    ];
  
    geometry.setIndex(indices);
    geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
    geometry.computeVertexNormals();
  
    const materials = [
      new THREE.MeshStandardMaterial({ color: '#864C2A' }),
      new THREE.MeshStandardMaterial({ color: cor }),
      new THREE.MeshStandardMaterial({ color: '#864C2A' }),
      new THREE.MeshStandardMaterial({ color: '#864C2A' }),
      new THREE.MeshStandardMaterial({ color: cor }),
      new THREE.MeshStandardMaterial({ color: cor })
    ];
  
    geometry.addGroup(0, 3, 0); // Front face
    geometry.addGroup(3, 3, 1); // Back face
    geometry.addGroup(6, 3, 2); // Side face 1
    geometry.addGroup(9, 3, 3); // Side face 2
    geometry.addGroup(12, 3, 4); // Side face 3
    geometry.addGroup(15, 3, 5); // Side face 4
  
    return (
      <mesh ref={rotacionZ} geometry={geometry} material={materials}
        position={position} castShadow receiveShadow />
    );
  };

  export default RightTriangle3D;