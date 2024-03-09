import {
  ContactShadows,
  Environment,
  Float,
  Lightformer,
  OrbitControls,
  Reflector,
  useTexture,
} from "@react-three/drei";
import React from "react";

function Ground() {
  const [floor, normal] = useTexture([
    "/SurfaceImperfections003_1K_var1.jpg",
    "/SurfaceImperfections003_1K_Normal.jpg",
  ]);
  return (
    <Reflector
      blur={[400, 100]}
      resolution={512}
      args={[60, 60]}
      mirror={0.5}
      mixBlur={6}
      mixStrength={1.5}
      rotation={[-Math.PI / 2, 0, Math.PI / 2]}
    >
      {(Material, props) => (
        <Material
          color="#a0a0a0"
          metalness={0.4}
          roughness={0.1}
          roughnessMap={floor}
          normalMap={normal}
          normalScale={[2, 2]}
          {...props}
        />
      )}
    </Reflector>
  );
}

export default function ModelShowcaseEnv() {
  return (
    <>
      <OrbitControls
        autoRotate
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
        enablePan={false}
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
              metalness={0.75}
              roughness={0.1}
            />
          </mesh>
        </Float>
        <Ground />
        {/* <ContactShadows scale={10} blur={2} opacity={0.5} far={10} smooth /> */}
      </group>

      {/*---- STARRT ENV ----*/}
      <Environment background resolution={512} blur={0.4}>
        {/* Ceiling */}
        <Lightformer
          intensity={2}
          rotation-x={Math.PI / 2}
          position={[0, 4, -9]}
          scale={[10, 1, 1]}
        />
        <Lightformer
          intensity={2}
          rotation-x={Math.PI / 2}
          position={[0, 4, -6]}
          scale={[10, 1, 1]}
        />
        <Lightformer
          intensity={2}
          rotation-x={Math.PI / 2}
          position={[0, 4, -3]}
          scale={[10, 1, 1]}
        />
        <Lightformer
          intensity={2}
          rotation-x={Math.PI / 2}
          position={[0, 4, 0]}
          scale={[10, 1, 1]}
        />
        <Lightformer
          intensity={2}
          rotation-x={Math.PI / 2}
          position={[0, 4, 3]}
          scale={[10, 1, 1]}
        />
        <Lightformer
          intensity={2}
          rotation-x={Math.PI / 2}
          position={[0, 4, 6]}
          scale={[10, 1, 1]}
        />
        <Lightformer
          intensity={2}
          rotation-x={Math.PI / 2}
          position={[0, 4, 9]}
          scale={[10, 1, 1]}
        />
        {/* Sides */}
        <Lightformer
          intensity={2}
          rotation-y={Math.PI / 2}
          position={[-50, 2, 0]}
          scale={[100, 2, 1]}
        />
        <Lightformer
          intensity={2}
          rotation-y={-Math.PI / 2}
          position={[50, 2, 0]}
          scale={[100, 2, 1]}
        />
        {/* Key */}
        <Lightformer
          form="circle"
          color="red"
          intensity={2}
          scale={10}
          position={[10, 5, 10]}
          onUpdate={(self) => self.lookAt(0, 0, 0)}
        />

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
      <meshBasicMaterial color="pink" />
    </mesh>
  );
};
