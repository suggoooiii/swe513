import { Canvas, useFrame } from "@react-three/fiber";
import "./App.css";
import { useEffect, useRef } from "react";
import Experience from "./components/Experience";
import { OrbitControls } from "@react-three/drei";

function App() {
  const ref = useRef();
  useEffect(() => {
  }, []);

  return (
    <Canvas shadows camera={{ position: [0, 3, 9], fov: 42 }}>
      {/* <color attach="background" args={["#2b2b2b"]} /> */}
      <OrbitControls minPolarAngle={0} maxPolarAngle={Math.PI / 2} />
      <Experience />
    </Canvas>
  );
}

export default App;
