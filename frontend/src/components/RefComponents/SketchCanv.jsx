import React from "react";
import Experience from "../Experience";
import { OrbitControls } from "@react-three/drei";

const SketchCanv = () => {
  return (
    <>
      <ambientLight intensity={0.01} />
      <pointLight distance={60} intensity={4} color="lightblue" />
      <spotLight
        intensity={1.5}
        position={[0, 0, 2000]}
        penumbra={1}
        color="red"
      />

      <Experience />
      <OrbitControls minPolarAngle={0} maxPolarAngle={Math.PI / 2} />
    </>
  );
};

export default SketchCanv;
