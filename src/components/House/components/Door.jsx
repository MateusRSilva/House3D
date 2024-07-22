import React from 'react';
import * as THREE from 'three';

const Door = () =>{
    return(
        <group position={[-0.1, 1.8, 0]}>
          <mesh position={[0, 0, 0]} receiveShadow>
            <boxGeometry args={[0.3, 2.8, 1.8]} />
            <meshStandardMaterial color="#C3A488" />
          </mesh>
          <lineSegments position={[0, 0, 0]} >
                <edgesGeometry args={[new THREE.BoxGeometry(0.3, 2.8, 1.8)]} />
                <lineBasicMaterial color="black"/>
            </lineSegments>
          <mesh position={[-0.2, 0, 0.5]} castShadow receiveShadow>
            <sphereGeometry args={[0.1, 10, 3]} />
            <meshStandardMaterial color="#D4B982" />
          </mesh>
        </group>
    );
}

export default Door;