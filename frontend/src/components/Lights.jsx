import { Sky } from "@react-three/drei";
import { useControls } from "leva";

export default function Lights() {
  const { sunPosition, rayleigh, distance, mieDirectionalG, mieCoefficient } =
    useControls({
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
        args={[0xffffff, 0xffffff, 1.0]}
        color={0x7095c1}
        position={[0, 50, 0]}
        groundColor={0xcbc1b2}
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
