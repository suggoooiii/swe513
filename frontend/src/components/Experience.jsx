import React from "react";
import { Canvas } from "@react-three/fiber";
import { Cyborg } from "./Cyborg";
import { Environment, OrbitControls } from "@react-three/drei";
function Experience() {
  return (
    <>
      <OrbitControls minPolarAngle={0} maxPolarAngle={Math.PI / 2} />

      <Cyborg />
      <Environment
        preset="city"
        resolution={256}
        background
        blur={0.8}
      ></Environment>
    </>
  );
}

export default Experience;
