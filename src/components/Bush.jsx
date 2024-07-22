const Bush = ({position, color, scale}) => {
    return (
        <>
            {/* Ground */}
            <mesh position={position} scale={scale} castShadow receiveShadow>
                <icosahedronGeometry args={[0.2, 0]} />
                <meshStandardMaterial color={color} />
            </mesh>
        </>
    );
}

export default Bush;