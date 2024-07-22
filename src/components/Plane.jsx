const Plane = () => {
    return (
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
        <planeGeometry args={[500, 500]} />
        <shadowMaterial opacity={0.4} />
      </mesh>
    );
  };

  export default Plane;