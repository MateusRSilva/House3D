import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import House from '../components/House/House';
import Lights from '../components/Lights';
import Plane from '../components/Plane';
import Ground from '../components/Ground';
import GrassBlades from '../components/Grass';
import MailBox from '../components/MailBox';
import Tree from '../components/Tree';
import Flower from '../components/Flower';
import Rock from '../components/Rock';
import Bush from '../components/Bush';
import Brick from '../components/Brick';


const grassBladesPositions = [
  { position: [-5, -0.25, 4], scale: 1.1 },
  { position: [-6, -0.25, 2], scale: 1.2 },
  { position: [-2, -0.25, 6.9], scale: 1.1 },
  { position: [-8, -0.25, 6.9], scale: 1.2 },
  { position: [-5, -0.25, -2.5], scale: 1.2 },
  { position: [-7, -0.25, -3], scale: 1.1 },
  { position: [-7.5, -0.25, -6], scale: 1.2 },
  { position: [-3.9, -0.25, -5], scale: 1.1 },
];

const rockPositions = [
  { position: [-5, -0.4, -4.3] },
  { position: [-6, -0.4, 5] },
  { position: [-3, -0.4, 4] },
];

const treePositions = [
  { position: [-6, 0.7, -5] },
  { position: [-3, 0.7, 5], scale: 0.85 },
];

const bushPositions = [
  { position: [-1, -0.2, -2.8], scale: 3, color: '#C0E093' },
  { position: [-1.5, -0.3, -2.3], scale: 2, color: '#B5D54B' },
  { position: [-1.5, -0.35, -2.8], scale: 1.5, color: '#B5D54B' },
  { position: [-0.7, -0.26, 2.4], scale: 2, color: '#C0E093' },
  { position: [-0.7, -0.29, 3.05], scale: 1.8, color: '#B5D54B' },
];

const brickPositions = [
  { position: [-8, -0.55, -1], scale: 0.7 },
  { position: [-6, -0.55, -1], scale: 1.1 },
  { position: [-3.6, -0.55, -1], scale: 0.9 },
  { position: [-8, -0.55, 1], scale: 1 },
  { position: [-6, -0.55, 1], scale: 0.7 },
  { position: [-3.6, -0.55, 1], scale: 0.9 },
];

const Scene = () => {
  return (
    <Canvas shadows camera={{ position: [-16, 6, 6], fov: 50 }}>
      <Suspense fallback={null}>
        <OrbitControls enablePan={false} enableZoom={false} minPolarAngle={0} maxPolarAngle={Math.PI / 2} />
        <Lights />
        <House />
        <Ground />
        <MailBox position={[-8.5, 0.3, 3]} scale={0.3} />
        <Flower position={[-8, -0.8, 3.2]} scale={0.4} />
        {grassBladesPositions.map((props, index) => (
          <GrassBlades key={index} {...props} />
        ))}
        {rockPositions.map((props, index) => (
          <Rock key={index} {...props} />
        ))}
        {treePositions.map((props, index) => (
          <Tree key={index} {...props} />
        ))}
        {bushPositions.map((props, index) => (
          <Bush key={index} {...props} />
        ))}
        {brickPositions.map((props, index) => (
          <Brick key={index} {...props} />
        ))}
        <Plane />
      </Suspense>
    </Canvas>
  );
};

export default Scene;
