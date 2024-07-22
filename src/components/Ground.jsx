const Ground = () => {
    return (
        <>
            {/* Ground */}
            <mesh position={[0, -0.8, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                <boxGeometry args={[20, 18, 0.5]} />
                <meshStandardMaterial color="#A8C17F" />
            </mesh>
        </>
    );
}

export default Ground;