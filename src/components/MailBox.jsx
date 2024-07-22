import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const MailBox = ({ position, scale }) => {
    const mailBoxRotate = useRef();
    // Rotate the blade slightly for a natural look
    useFrame(() => {
        mailBoxRotate.current.rotation.z = 1.57;
    });

    return (
        <group position={position} scale={scale}>
            <mesh position={[0, 2.3, 0]} ref={mailBoxRotate} castShadow >
                <cylinderGeometry args={[0.96, 0.96, 2.5, 20]} />
                <meshStandardMaterial color="#9A9488" />
            </mesh>
            <mesh position={[0, 1.8, 0]} castShadow >
                <boxGeometry args={[2.51, 1.1, 1.9]} />
                <meshStandardMaterial color="#9A9488" />
            </mesh>
            <mesh position={[0, -0.7, 0]} castShadow >
                <cylinderGeometry args={[0.3, 0.3, 4, 5]} />
                <meshStandardMaterial color="#C48671" />
            </mesh>
        </group>
    );
};

export default MailBox;