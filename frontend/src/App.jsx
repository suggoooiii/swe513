import { Canvas } from "@react-three/fiber";
import "./App.css";
import { useEffect, useRef } from "react";
import { Leva, useControls } from "leva";
import ModelShowcaseEnv from "./components/ModelShowcaseEnv";
import { Bloom, EffectComposer } from "@react-three/postprocessing";

function App() {
  const ref = useRef();
  useEffect(() => {}, []);
  return (
    <>
      <Leva collapsed />
      <Canvas
        gl={{
          antialias: true,
        }}
        camera={{ position: [0, 0, 5] }}
      >
        <ModelShowcaseEnv />
        <EffectComposer>
          <Bloom luminanceThreshold={1} intensity={1.22} />
        </EffectComposer>
      </Canvas>
    </>
  );
}

export default App;
