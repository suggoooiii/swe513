import React from "react";
import { Instance, Instances } from "@react-three/drei";
import { Color, Euler, Vector3 } from "three";
import { MathUtils } from "three/src/math/MathUtils";

const arr = new Array(800).fill(0).map((_, i) => {
  const scale = [
    MathUtils.randFloat(0.1, 1), //
    MathUtils.randFloat(2, 10),
    MathUtils.randFloat(0.1, 0.5),
  ];


  const size = 100;
  const pos = new Vector3().random().multiplyScalar(size);
  pos.x -= size / 2;
  pos.y = scale[1] / 2;
  pos.z -= size / 2;

  const col = new Color("#a1bccf");
  col.multiplyScalar(Math.random() + 0.5);

  const rot = new Euler();
  rot.y = MathUtils.randFloat(-Math.PI, Math.PI);

  return (
    <Instance
      key={`building-${i}`}
      color={col}
      position={pos}
      scale={scale}
      rotation={rot}
    />
  );
});
export function Buildings() {
  return (
    <Instances castShadow receiveShadow limit={arr.length} count={arr.length}>
      <boxGeometry />
      <meshPhysicalMaterial color={new Color("#a1bccf")} roughness={0} />
      {arr}
    </Instances>
  );
}
