import React, { useEffect } from 'react';
import { useGLTF } from '@react-three/drei';

const Flower = ({ scale, position }) => {
  const { scene } = useGLTF('/scene.gltf');

  useEffect(() => {
    scene.traverse((object) => {
      if (object.isMesh) {
        object.castShadow = true;
        object.receiveShadow = true;
      }
    });
  }, [scene]);

  return (
    <primitive
      object={scene}
      scale={scale}
      position={position}
      rotation={[0.6, 0.5, 0]}
    />
  );
};

useGLTF.preload('/scene.gltf');

export default Flower;
