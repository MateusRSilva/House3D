const Window = ({ position }) => {
    return (
      <group position={position}>
        {/* WINDOW */}
        <mesh position={[0, 0, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.1, 1.5, 0.1]} />
          <meshStandardMaterial color="#AFB9C5" />
        </mesh>
        <mesh position={[0, 0, 1.5]} castShadow receiveShadow>
          <boxGeometry args={[0.1, 1.5, 0.1]} />
          <meshStandardMaterial color="#AFB9C5" />
        </mesh>
        <mesh position={[0, -0.7, 0.75]} castShadow receiveShadow>
          <boxGeometry args={[0.1, 0.1, 1.5]} />
          <meshStandardMaterial color="#AFB9C5" />
        </mesh>
        <mesh position={[0, 0.7, 0.75]} castShadow receiveShadow>
          <boxGeometry args={[0.1, 0.1, 1.5]} />
          <meshStandardMaterial color="#AFB9C5" />
        </mesh>
        <mesh position={[0, 0, 0.75]} castShadow receiveShadow>
          <boxGeometry args={[0.1, 0.1, 1.5]} />
          <meshStandardMaterial color="#AFB9C5" />
        </mesh>
        <mesh position={[0, 0, 0.75]} castShadow receiveShadow>
          <boxGeometry args={[0.1, 1.5, 0.1]} />
          <meshStandardMaterial color="#AFB9C5" />
        </mesh>
      </group>
    );
  }

  export default Window;