import { useFrame } from "@react-three/fiber";
import React from "react";
import { easing } from "maath";

const Rig = () => {
  useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [
        5 + state.pointer.x,
        0 + +state.pointer.y,
        18 + Math.atan2(state.pointer.x, state.pointer.y) * 2,
      ],
      0.4,
      delta
    );
    state.camera.lookAt(0, 0, 0);
  });
};

const SketchwLights = () => {
  return (
    <>
      <spotLight
        position={[0, 15, 0]}
        angle={0.3}
        penumbra={1}
        castShadow
        intensity={2}
        shadow-bias={-0.0001}
      />
      <ambientLight intensity={0.5} />
    </>
  );
};

export default SketchwLights;
