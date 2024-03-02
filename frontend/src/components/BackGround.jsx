import { useEffect, useMemo, useRef } from "react";
import { buffer, random } from "maath";
import Random from "canvas-sketch-util/random";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { Dodecahedron, Instance, Instances } from "@react-three/drei";

function BackGround() {
  const lightref = useRef();
  const mesh = useRef();
  const count = 10000;
  const ref = useRef();
  const instanceRef = useRef();

  const dummy = useMemo(() => new THREE.Object3D(), []);

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const key = count;
      const time = Random.range(0, 100);
      const factor = Random.range(20, 120);
      const speed = Random.range(0.01, 0.015) / 2;
      const x = Random.range(-50, 50);
      const y = Random.range(-50, 50);
      const z = Random.range(-50, 50);

      temp.push({ time, factor, speed, x, y, z, key });
    }
    return temp;
  }, [count]);

  useEffect(() => {
    console.log(
      "🚀 ~ BackGround ~ instanceRef:",
      instanceRef.current.setMatrixAt
    );
    console.log("🚀 ~ useEffect ~ dummy:", dummy);
  }, []);
  return (
    <>
      <pointLight
        ref={lightref}
        distance={40}
        intensity={8}
        color="lightblue"
      />
      {/* <instancedMesh ref={mesh} args={[null, null, count]}>
        <Dodecahedron args={[0.6, 1]} />
        <meshPhongMaterial color="#050505" />
      </instancedMesh> */}
      <Instances
        ref={mesh}
        limit={count} // Optional: max amount of items (for calculating buffer size)
        castShadow
        receiveShadow
      >
        <Dodecahedron args={[0.2, 2]} />
        <meshPhongMaterial color="#050505" />
        {particles.map((data, i) => (
          <Dust key={i} {...data} />
        ))}
      </Instances>
    </>
  );
}

import React from "react";

const Dust = (key, { data }) => {
  console.log("🚀 ~ Dust ~ data:", data);
  const { time, factor, speed, x, y, z } = data;
  return <Instance />;
};

export default BackGround;
