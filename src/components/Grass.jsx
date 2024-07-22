import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const GrassBlades = ({ position, scale }) => {
  const rotateRight = useRef();
  const rotateLeft = useRef();
  const rotateBack = useRef();
  const rotateFront = useRef();
  // Rotate the blade slightly for a natural look
  useFrame(() => {
    rotateRight.current.rotation.x = 0.2;
    rotateLeft.current.rotation.x = -0.1;
    rotateBack.current.rotation.z = -0.2;
    rotateFront.current.rotation.z = 0.1;
  });

  return (
    <group position={position} scale={scale}>
      <group ref={rotateFront} position={[0,0,0]}>
        <mesh position={[0, 0, -0.05]} ref={rotateLeft} castShadow receiveShadow>
          <cylinderGeometry args={[0, 0.05, 0.5]} />
          <meshStandardMaterial color="#87B000" />
        </mesh>
        <mesh position={[0, 0, -0.1]} ref={rotateLeft} castShadow receiveShadow>
          <cylinderGeometry args={[0, 0.05, 0.5]} />
          <meshStandardMaterial color="#87B000" />
        </mesh>
        <mesh position={[0, -0.1, 0.05]} ref={rotateRight} castShadow receiveShadow>
          <cylinderGeometry args={[0, 0.05, 0.4]} />
          <meshStandardMaterial color="#87B000" />
        </mesh>
        <mesh position={[0.05, 0, 0]} ref={rotateBack} castShadow receiveShadow>
          <cylinderGeometry args={[0, 0.05, 0.5]} />
          <meshStandardMaterial color="#87B000" />
        </mesh>
        <mesh position={[0.05, 0, 0.1]} ref={rotateBack} castShadow receiveShadow>
          <cylinderGeometry args={[0, 0.05, 0.5]} />
          <meshStandardMaterial color="#87B000" />
        </mesh>
      </group>
      <group ref={rotateBack} position={[0.1, 0, 0]}>
        <mesh position={[0, 0, -0.05]} ref={rotateLeft} castShadow receiveShadow>
          <cylinderGeometry args={[0, 0.05, 0.5]} />
          <meshStandardMaterial color="#87B000" />
        </mesh>
        <mesh position={[0, 0, -0.1]} ref={rotateLeft} castShadow receiveShadow>
          <cylinderGeometry args={[0, 0.05, 0.5]} />
          <meshStandardMaterial color="#87B000" />
        </mesh>
        <mesh position={[0, -0.1, 0.05]} ref={rotateRight} castShadow receiveShadow>
          <cylinderGeometry args={[0, 0.05, 0.4]} />
          <meshStandardMaterial color="#87B000" />
        </mesh>
        <mesh position={[0.05, 0, 0]} ref={rotateBack} castShadow receiveShadow>
          <cylinderGeometry args={[0, 0.05, 0.5]} />
          <meshStandardMaterial color="#87B000" />
        </mesh>
        <mesh position={[0.05, 0, 0.1]} ref={rotateBack} castShadow receiveShadow>
          <cylinderGeometry args={[0, 0.05, 0.5]} />
          <meshStandardMaterial color="#87B000" />
        </mesh>
      </group>
    </group>
  );
};

export default GrassBlades;