const Brick = ({position, scale}) => {
    return (
        <>
            {/* Ground */}
            <mesh position={position} scale={scale} castShadow receiveShadow>
            <cylinderGeometry args={[0.96, 0.96, 0.15, 9]} />
                <meshStandardMaterial color="#ACB0A6" />
            </mesh>
        </>
    );
}

export default Brick;