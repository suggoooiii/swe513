import { Sky } from "@react-three/drei";
import { useControls } from "leva";

export default function Lights() {
  const {
    sunPosition,
    rayleigh,
    distance,
    mieDirectionalG,
    mieCoefficient,
    color,
    groundColor,
    lightPosition,
  } = useControls("Lights", {
    sunPosition: {
      value: [100, 200, 100],
    },
    rayleigh: {
      value: 1,
      min: 0,
      max: 10,
      step: 0.1,
    },
    distance: {
      value: 1,
      min: 0,
      max: 1000,
      step: 0.1,
    },
    mieDirectionalG: {
      value: 1,
      min: 0,
      max: 10,
      step: 0.1,
    },
    mieCoefficient: {
      value: 0.05,
      min: 0,
      max: 10,
      step: 0.1,
    },
    color: {
      value: "#ffffff",
    },
    groundColor: {
      value: "#ffffff",
    },
    lightPosition: {
      value: [0, 50, 0],
    },
  });

  return (
    <>
      <Sky
        sunPosition={sunPosition}
        distance={distance}
        mieDirectionalG={mieDirectionalG}
        mieCoefficient={mieCoefficient}
        rayleigh={rayleigh}
      />
      <hemisphereLight
        color={color}
        position={lightPosition}
        groundColor={groundColor}
        intensity={1}
      />
      <directionalLight
        position={[100, 200, 100]}
        castShadow
        shadow-mapSize={[4096, 4096]}
        shadow-camera-left={-22}
        shadow-camera-bottom={-22}
        shadow-camera-right={22}
        shadow-camera-top={22}
      />
    </>
  );
}
