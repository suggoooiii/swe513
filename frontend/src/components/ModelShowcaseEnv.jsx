import {
  ContactShadows,
  Environment,
  Float,
  OrbitControls,
} from "@react-three/drei";
import React from "react";
import { Bloom, EffectComposer } from "@react-three/postprocessing";

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
      <ambientLight intensity={0.8} />

      {/*---- replace with the actual model here ----*/}
      <group position={[0, -1.5, 0]}>
        <Float
          position={[0, 2.15, 0]}
          speed={1}
          rotationIntensity={3}
          floatIntensity={3}
        >
          <mesh castShadow receiveShadow>
            <torusKnotGeometry args={[1, 0.25, 256, 24, 1, 3]} />
            <meshStandardMaterial
              color="blue"
              emissive={"purple"}
              emissiveIntensity={0.9}
              metalness={0.925}
              roughness={0.1}
              // wireframe
            />
          </mesh>
        </Float>
        {/* <ContactShadows scale={10} blur={3} opacity={0.25} far={10} smooth /> */}
      </group>

      {/*---- STARRT ENV ----*/}
      <Environment resolution={128} blur={0.3}>
        <Striplight position={[10, 2, 0]} scale={[1, 3, 10]} />
        <Striplight position={[-10, 2, 0]} scale={[1, 3, 10]} />

        {/*---- add the simulation frag here ----*/}
        <mesh scale={100}>
          <sphereGeometry args={[1, 64, 64]} />
          <meshBasicMaterial color={"hotpink"} />
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
