import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  const scale = isMobile ? 0.6 : 0.75;
  const position = isMobile ? [0, -3, -1.9] : [0, -3.55, -1.5];
  return (
    <mesh>
    {/* Ambient Light to provide base light */}
    <ambientLight intensity={0.3} /> 

    {/* Hemisphere Light to simulate sky light */}
    <hemisphereLight intensity={0.5} groundColor='black' /> 

    {/* SpotLight for focused lighting on the computer */}
    <spotLight
      position={[-2, 4, 2]}
      angle={0.3}
      penumbra={1}
      intensity={1.5}
      castShadow
      shadow-mapSize={1024}
    />

    {/* Point Light to add general lighting */}
    <pointLight
      position={[0, 5, 0]}
      intensity={0.8}
      color="#ffffff"
    />

    {/* Additional Light for better visibility */}
    <directionalLight
      position={[-5, 5, 5]}
      intensity={0.5}
      castShadow
      shadow-mapSize={1024}
    />

    <primitive
      object={computer.scene}
      scale={scale}
      position={position}
      rotation={[-0.01, -0.2, -0.1]}
    />
  </mesh>

  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;