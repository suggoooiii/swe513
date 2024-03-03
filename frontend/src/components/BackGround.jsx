/* eslint-disable react/prop-types */
import * as THREE from "three";
import React, { useRef, useMemo, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import Random from "canvas-sketch-util/random";
import { Instance, Instances } from "@react-three/drei";

// eslint-disable-next-line react/prop-types
export default function BackGround({ count }) {
  const mesh = useRef();
  const light = useRef();

  // Generate some random positions, speed factors and timings
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const time = Random.range(0, 100);
      const factor = Random.range(20, 120);
      const speed = Random.range(0.01, 0.015) / 2;
      const x = Random.range(-50, 50);
      const y = Random.range(-50, 50);
      const z = Random.range(-50, 50);

      temp.push({ time, factor, speed, x, y, z });
    }
    return temp;
  }, [count]);

  return (
    <>
      <Instances limit={count}>
        <dodecahedronGeometry args={[1, 2]} />
        <meshPhongMaterial color="#050505" />
        {particles.map((data, i) => (
          <InstancedParticles key={i} index={i} {...data} />
        ))}
      </Instances>
      {/* <instancedMesh ref={mesh} args={[null, null, count]}> */}
      {/* <dodecahedronGeometry args={[1, 2]} /> */}
      {/* <meshPhongMaterial color="#050505" /> */}
      {/* </instancedMesh> */}
    </>
  );
}

const InstancedParticles = (props) => {
  // console.log("🚀 ~ InstancedParticles ~ props:", props);
  const { factor, speed, x, y, z, index } = props;
  const ref = useRef();
  const dummy = useMemo(() => new THREE.Object3D(), []);

  let time = props.time;

  useEffect(() => {
    // console.log(ref.current);
  }, []);
  useFrame((state) => {
    // Run through the randomized data to calculate some movement

    // Update the particle time
    const t = (time += speed);

    // Update the particle position based on the time
    // This is mostly random trigonometry functions to oscillate around the (x, y, z) point
    dummy.position.set(
      x + Math.cos((time / 10) * factor) + (Math.sin(time * 1) * factor) / 10,
      y + Math.sin((time / 10) * factor) + (Math.cos(time * 2) * factor) / 10,
      z + Math.cos((time / 10) * factor) + (Math.sin(time * 3) * factor) / 10
    );

    // Derive an oscillating value which will be used
    // for the particle size and rotation
    const s = Math.cos(time);
    dummy.scale.set(s, s, s);
    dummy.rotation.set(s * 5, s * 5, s * 5);
    dummy.updateMatrix();

    // And apply the matrix to the instanced item

    ref.current.position.copy(dummy.position);
    ref.current.scale.copy(dummy.scale);
    ref.current.rotation.copy(dummy.rotation);
    // ref.current.setMatrixAt(index, dummy.matrix);
    // ref.current.instanceMatrix.needsUpdate = true;
  });
  return <Instance ref={ref} />;
};
