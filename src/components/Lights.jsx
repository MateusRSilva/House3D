const Lights = () => {
    return (
      <>
        <ambientLight intensity={0.45} />
        <directionalLight
          castShadow
          position={[-15, 4, -8]}
          intensity={3}
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-camera-far={45}
          shadow-camera-left={-20}
          shadow-camera-right={20}
          shadow-camera-top={20}
          shadow-camera-bottom={-20}
        />
      </>
    );
  };

  export default Lights;