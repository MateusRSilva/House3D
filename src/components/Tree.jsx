import React from 'react';
import * as THREE from 'three';

const Tree = ({ position, scale }) => {
    return (
        <group position={position} scale={scale}>
            <mesh position={[0, 0, 0]} castShadow receiveShadow>
                <cylinderGeometry args={[0.2, 0.2, 3, 5]} />
                <meshStandardMaterial color="#997E4D" />
            </mesh>
            <mesh position={[0, 2.5, 0]} castShadow receiveShadow>
                <icosahedronGeometry args={[1.3, 0]} />
                <meshStandardMaterial color="#91AB62" />
            </mesh>
            <lineSegments position={[0, 2.5, 0]} >
                <edgesGeometry args={[new THREE.IcosahedronGeometry(1.3,0)]} />
                <lineBasicMaterial color="#91AB62" />
            </lineSegments>
        </group>
    );
}

export default Tree;