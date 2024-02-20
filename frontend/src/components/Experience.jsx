import React from "react";
import { Cyborg } from "./Cyborg";
import { Center, Environment, OrbitControls } from "@react-three/drei";
import Lights from "./Lights";
import { Floor } from "./Floor";
function Experience() {
  return (
    <>
      <OrbitControls minPolarAngle={0} maxPolarAngle={Math.PI / 2} />

      {/* <Lights /> */}
      <Center top>
        <directionalLight
          position={[100, 200, 100]}
          castShadow
          shadow-mapSize={[4096, 4096]}
          shadow-camera-left={-22}
        />
        <Cyborg />
      </Center>

      {/* <Floor /> */}
      {/* <Environment preset="city" resolution={256} background blur={0.8} /> */}
    </>
  );
}

export default Experience;
