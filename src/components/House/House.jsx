import React from 'react';
import RightTriangle3D from './components/Roof';
import Window from './components/Window';
import Structure from './components/Structure';
import Awning from './components/Awning';
import Door from './components/Door';
import Stairs from './components/Stairs';

const House = () => {
  return (
    <>
      {/* House */}
      <group position={[5.5, 0, 0]}>
        {/* Base */}
        <mesh position={[-0.9, -0.1, 0]} receiveShadow>
          <boxGeometry args={[10, 1, 11]} />
          <meshStandardMaterial color="#c9a87a" />
        </mesh>
        {/* walls */}
        <mesh position={[1.8, 2.5, 0]} receiveShadow castShadow>
          <boxGeometry args={[4, 6, 9.5]} />
          <meshStandardMaterial color="#C6C7CB" />
        </mesh>
        <Structure />
        {/* awning */}
        <RightTriangle3D width={1.5} height={5.5} depth={9.3} cor={'#CA7968'}
          position={[-0.32, 4.1, 4.65]} />
        <Awning />
        {/* DOOR */}
        <Door />
        <Window position={[-0.3, 2.45, 2]} />
        <Window position={[-0.3, 2.45, -3.6]} />
        {/* STAIRS */}
        <Stairs />
      </group>
    </>
  );
};

export default House;