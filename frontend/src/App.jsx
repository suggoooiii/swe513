import { Canvas, useFrame } from "@react-three/fiber";
import "./App.css";
import { useEffect, useRef } from "react";
import Experience from "./components/Experience";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function App() {
  const ref = useRef();
  useEffect(() => {}, []);

  return (
    <Canvas
      linear
      flat
      legacy
      dpr={1}
      camera={{ fov: 100, position: [0, 0, 30] }}
    >
      <ambientLight intensity={0.01} />
      <pointLight distance={60} intensity={4} color="lightblue" />
      <spotLight
        intensity={1.5}
        position={[0, 0, 2000]}
        penumbra={1}
        color="red"
      />
      <mesh>
        <planeGeometry args={[1000, 1000]} />
        <meshStandardMaterial
          color="#00ffff"
          roughness={0.5}
          depthTest={false}
        />
      </mesh>
      <OrbitControls minPolarAngle={0} maxPolarAngle={Math.PI / 2} />
      <Experience />
    </Canvas>
  );
}

export default App;
