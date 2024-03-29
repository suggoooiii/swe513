import { useTexture } from "@react-three/drei";
import { RepeatWrapping } from "three";

export function Floor() {
  const size = 100;
  const textureRepeat = 100 / 2 / 2;
  const tex = useTexture(
    "https://cdn.jsdelivr.net/gh/pmndrs/drei-assets@latest/prototype/light/texture_08.png",
    (t) => {
      t.wrapS = t.wrapT = RepeatWrapping;
      t.repeat.set(textureRepeat, textureRepeat);
    }
  );

  return (
    <mesh castShadow receiveShadow rotation-x={Math.PI / -2}>
      <planeGeometry args={[size, size]} />
      <meshStandardMaterial transparent map={tex} />
    </mesh>
  );
}
