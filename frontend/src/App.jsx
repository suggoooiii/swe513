import { Canvas } from "@react-three/fiber";
import "./App.css";
import { useEffect, useRef } from "react";
import { Leva, useControls } from "leva";
import ModelShowcaseEnv from "./components/ModelShowcaseEnv";

function App() {
  const ref = useRef();
  useEffect(() => {}, []);
  return (
    <>
      <Leva collapsed />
      <Canvas
        gl={{
          outputColorSpace: "srgb-linear",
        }}
        camera={{ position: [0, 0, 5] }}
      >
        <ModelShowcaseEnv />
      </Canvas>
    </>
  );
}

export default App;
