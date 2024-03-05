import {
  ContactShadows,
  Environment,
  Float,
  OrbitControls,
} from "@react-three/drei";
import React from "react";

export default function ModelShowcaseEnv() {
  return (
    <>
      <OrbitControls
        makeDefault
        autoRotate
        minPolarAngle={Math.PI / 1.8}
        maxPolarAngle={Math.PI / 1.8}
      />
      <pointLight position={[10, 10, 5]} />
      <pointLight position={[-10, -10, -5]} />
      <ambientLight intensity={0.4} />
      <group position={[0, -1.5, 0]}>
        <Float
          position={[0, 2.15, 0]}
          speed={2}
          rotationIntensity={2}
          floatIntensity={2}
        >
          {/*---- replace with the actual model here ----*/}
          <mesh castShadow receiveShadow>
            <torusKnotGeometry args={[1, 0.25, 256, 24, 1, 3]} />
            <meshStandardMaterial
              color="white"
              roughness={0.1}
              metalness={0.925}
            />
          </mesh>
        </Float>
        <ContactShadows scale={10} blur={3} opacity={0.25} far={10} />
      </group>

      {/*---- STARRT ENV ----*/}
      <Environment background resolution={64} blur={1}>
        <Striplight position={[10, 2, 0]} scale={[1, 3, 10]} />
        <Striplight position={[-10, 2, 0]} scale={[1, 3, 10]} />
        <mesh scale={100}>
          {/*---- add the simulation frag here ----*/}
          <sphereGeometry args={[1, 64, 64]} />
          <meshBasicMaterial color={"pink"} />
        </mesh>
      </Environment>
    </>
  );
}

const Striplight = (props) => {
  return (
    <mesh {...props}>
      <boxGeometry />
      <meshBasicMaterial color="white" />
    </mesh>
  );
};
