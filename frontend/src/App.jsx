import { Canvas } from "@react-three/fiber";
import "./App.css";
import { useEffect, useRef } from "react";
import { Leva, useControls } from "leva";
import ModelShowcaseEnv from "./components/ModelShowcaseEnv";
import { Stats, StatsGl } from "@react-three/drei";

function App() {
  const ref = useRef();
  useEffect(() => {
    console.log(ref);
  }, []);
  return (
    <>
      <Leva isRoot titleBar={{ title: "Leva" }} />
      <Canvas
        gl={{
          outputColorSpace: "srgb-linear",
          autoClear: true,
          autoClearColor: true,
          autoClearDepth: true,
          logarithmicDepthBuffer: true,
          // antialias: true,
        }}
        camera={{ position: [0, 0, 15] }}
      >
        {/* <color args={["black"]} attach="background" /> */}
        {/* <fog attach="fog" args={["black", 15, 20]} /> */}

        <ModelShowcaseEnv />
        <Stats />
        <StatsGl gpuPanel={true} />
      </Canvas>
    </>
  );
}

export default App;
