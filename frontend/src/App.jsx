import { Canvas } from "@react-three/fiber";
import "./App.css";
import { useEffect, useRef } from "react";
import { Leva, useControls } from "leva";
import ModelShowcaseEnv from "./components/ModelShowcaseEnv";
import { Buildings } from "./components/Buildings";

function App() {
  const ref = useRef();
  useEffect(() => {
    console.log(ref);
  }, []);
  return (
    <>
      <Leva collapsed />
      <Canvas
        gl={{
          outputColorSpace: "srgb-linear",
          logarithmicDepthBuffer: true,
          antialias: false,
          alpha: false,
          powerPreference: "high-performance",
          stencil: false,
          
        }}
        camera={{ position: [0, 0, 15] }}
      >
        <color args={["black"]} attach="background" />
        <fog attach="fog" args={["black", 15, 20]} />

        <ModelShowcaseEnv />
      </Canvas>
    </>
  );
}

export default App;
