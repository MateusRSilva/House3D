const Stairs = () => {
    return (
        <group position={[-7, 0, 0]}>
            <mesh position={[0.61, -0.1001, 0]} castShadow receiveShadow>
                <boxGeometry args={[1, 1, 4]} />
                <meshStandardMaterial color="#c9a87a" />
            </mesh>
            <mesh position={[-0.39, -0.4, 0]} castShadow receiveShadow>
                <boxGeometry args={[1, 0.7, 3.999]} />
                <meshStandardMaterial color="#c9a87a" />
            </mesh>
        </group>
    );
}

export default Stairs;