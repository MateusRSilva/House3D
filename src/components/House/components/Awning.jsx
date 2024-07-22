const Awning = () => {
    return (
        <>
            <mesh position={[-5.4, 2.1, 4.3]} castShadow receiveShadow>
                <boxGeometry args={[0.3, 4, 0.3]} />
                <meshStandardMaterial color="#9B9791" />
            </mesh>
            <mesh position={[-5.4, 2.1, -4.3]} castShadow receiveShadow>
                <boxGeometry args={[0.3, 4, 0.3]} />
                <meshStandardMaterial color="#9B9791" />
            </mesh>
            <mesh position={[-5.4, 0.9, -1]} castShadow receiveShadow>
                <boxGeometry args={[0.3, 1.2, 0.3]} />
                <meshStandardMaterial color="#9B9791" />
            </mesh>
            <mesh position={[-5.4, 0.9, 1]} castShadow receiveShadow>
                <boxGeometry args={[0.3, 1.2, 0.3]} />
                <meshStandardMaterial color="#9B9791" />
            </mesh>
            <mesh position={[-5.4, 1, 2.5]} castShadow receiveShadow>
                <boxGeometry args={[0.25, 0.3, 3.3]} />
                <meshStandardMaterial color="#9B9791" />
            </mesh>
            <mesh position={[-5.4, 1, -2.5]} castShadow receiveShadow>
                <boxGeometry args={[0.25, 0.3, 3.3]} />
                <meshStandardMaterial color="#9B9791" />
            </mesh>
            <mesh position={[-2.8, 1, -4.3]} castShadow receiveShadow>
                <boxGeometry args={[5.3, 0.3, 0.23]} />
                <meshStandardMaterial color="#9B9791" />
            </mesh>
            <mesh position={[-2.8, 1, 4.3]} castShadow receiveShadow>
                <boxGeometry args={[5.3, 0.3, 0.23]} />
                <meshStandardMaterial color="#9B9791" />
            </mesh>
        </>
    );
}

export default Awning;