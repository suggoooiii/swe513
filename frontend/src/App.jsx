import { Canvas } from "@react-three/fiber";
import "./App.css";
import { useEffect, useRef } from "react";
import { folder, Leva, useControls } from "leva";
import Experience from "./components/Experience";

function App() {
  const ref = useRef();
  useEffect(() => {
    console.log("🚀 ~ useEffect ~ ref.current:", ref.current);
  }, []);

  const Opts = useControls({
    Fog: folder({
      Fog_enbled: {
        label: "Enable",
        value: true,
      },
      Fog_color: {
        label: "Color",
        value: "#ffffff",
      },
      Fog_density: {
        label: "Density",
        min: 0,
        max: 1,
        step: 0.01,
        value: 0.3,
      },
      Fog_speed: {
        label: "Speed",
        min: 0,
        max: 10,
        step: 0.1,
        value: 1.7,
      },
      Fog_distortion: {
        label: "Distortion",
        min: 0,
        max: 2,
        step: 0.01,
        value: 1.3,
      },
      Fog_scale: {
        label: "Scale",
        min: 0,
        max: 100,
        step: 1,
        value: [100, 2.5, 100],
      },
      Fog_position: {
        label: "Position",
        min: 0,
        max: 100,
        step: 1,
        value: [0, 0, 0],
      },
    }),
    AutoRotate: {
      value: true,
    },
  });

  return (
    <Canvas shadows camera={{ position: [0, 3, 9], fov: 42 }}>
      <color attach="background" args={["#20ef46"]} />
      <fogExp2 ref={ref} density={Opts.Fog_density} color={Opts.Fog_color} />
      <Experience />
    </Canvas>
  );
}

export default App;
