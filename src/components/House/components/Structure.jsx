const Structure = () => {
    return (
        < group position={[0, 0, 0]} >
            {/* gutter */}
            <mesh position={[-0.2, 5.5, 0]} receiveShadow>
                <boxGeometry args={[0.3, 0.6, 9.5]} />
                <meshStandardMaterial color="#9D968C" />
            </mesh>
            <mesh position={[1.65, 5.5, 4.7]} receiveShadow>
                <boxGeometry args={[4, 0.6, 0.3]} />
                <meshStandardMaterial color="#9D968C" />
            </mesh>
            <mesh position={[3.7, 5.5, 0]} receiveShadow>
                <boxGeometry args={[0.3, 0.6, 9.7]} />
                <meshStandardMaterial color="#9D968C" />
            </mesh>
            <mesh position={[1.65, 5.5, -4.7]} receiveShadow>
                <boxGeometry args={[4, 0.6, 0.3]} />
                <meshStandardMaterial color="#9D968C" />
            </mesh>
            {/* ribband */}
            <mesh position={[-0.2, 2.75, 4.7]} receiveShadow>
                <boxGeometry args={[0.3, 5, 0.3]} />
                <meshStandardMaterial color="#9D968C" />
            </mesh>
            <mesh position={[-0.2, 2.75, -4.7]} receiveShadow>
                <boxGeometry args={[0.3, 5, 0.3]} />
                <meshStandardMaterial color="#9D968C" />
            </mesh>
            <mesh position={[3.7, 2.75, 4.7]} receiveShadow>
                <boxGeometry args={[0.3, 5, 0.3]} />
                <meshStandardMaterial color="#9D968C" />
            </mesh>
            <mesh position={[3.7, 2.75, -4.7]} receiveShadow>
                <boxGeometry args={[0.3, 5, 0.3]} />
                <meshStandardMaterial color="#9D968C" />
            </mesh>
        </group >
    );
}

export default Structure;