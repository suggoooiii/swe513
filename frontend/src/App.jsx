import { Canvas, useFrame } from "@react-three/fiber";
import "./App.css";
import { useEffect, useRef } from "react";
import Experience from "./components/Experience";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { useControls } from "leva";
import ModelShowcaseEnv from "./components/ModelShowcaseEnv";

// eg for instancing meshes with r3f
/* <Bvh firstHitOnly> */

/* <Shoes data={data} range={range} /> */
/* </Bvh> */

// function Shoes({ data, range }) {
//   const { nodes, materials } = useGLTF('/shoe.glb')
//   return (
//     <Instances range={range} material={materials.phong1SG} geometry={nodes.Shoe.geometry}>
//       {data.map((props, i) => (
//         <Shoe key={i} {...props} />
//       ))}
//     </Instances>
//   )
// }

// function Shoe({ random, color = new THREE.Color(), ...props }) {
//   const ref = useRef()
//   const [hovered, setHover] = useState(false)
//   useFrame((state) => {
//     const t = state.clock.getElapsedTime() + random * 10000
//     ref.current.rotation.set(Math.cos(t / 4) / 2, Math.sin(t / 4) / 2, Math.cos(t / 1.5) / 2)
//     ref.current.position.y = Math.sin(t / 1.5) / 2
//     ref.current.scale.x = ref.current.scale.y = ref.current.scale.z = THREE.MathUtils.lerp(ref.current.scale.z, hovered ? 1.4 : 1, 0.1)
//     ref.current.color.lerp(color.set(hovered ? 'red' : 'white'), hovered ? 1 : 0.1)
//   })
//   return (
//     <group {...props}>
//       <Instance ref={ref} onPointerOver={(e) => (e.stopPropagation(), setHover(true))} onPointerOut={(e) => setHover(false)} />
//     </group>
//   )
// }

function App() {
  const { count } = useControls({
    range: { value: 100, min: 0, max: 300, step: 10 },
  });

  const ref = useRef();
  useEffect(() => {}, []);
  return (
    <Canvas
      gl={{
        antialias: true,
      }}
      camera={{ position: [0, 0, 5] }}
    >
      <ModelShowcaseEnv />
    </Canvas>
  );
}

export default App;
