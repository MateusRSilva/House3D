const Rock = ({position}) => {
    return (
        <>
            {/* Ground */}
            <mesh position={position} castShadow receiveShadow>
                <dodecahedronGeometry args={[0.2, 0]} />
                <meshStandardMaterial color="#B0A9A2" />
            </mesh>
        </>
    );
}

export default Rock;