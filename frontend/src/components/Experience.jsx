import React, { useEffect, useRef } from "react";
import { Cyborg } from "./Cyborg";
import { Center, Environment, OrbitControls } from "@react-three/drei";
import Lights from "./Lights";
import { Floor } from "./Floor";
import { Color, MeshPhysicalMaterial } from "three";
import { folder, Leva, useControls } from "leva";
import { useFrame, useThree } from "@react-three/fiber";
import { Buildings } from "./Buildings";

function Experience() {
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

  useEffect(
    () => console.log("🚀 ~ Experience ~ ref.current:", ref.current),
    []
  );

  useFrame((state, delta) => {});
  const ref = useRef();
  const fogRef = useRef();

  return (
    <mesh ref={ref}>
      <fogExp2 ref={fogRef} attach="fog" density={Opts.Fog_density} />
      <Lights />
      <Buildings />
      <Floor />
    </mesh>
  );
}

export default Experience;
