/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/cyborg.gltf -o src/components/Model.jsx -r public 
Author: PolyBoi (https://sketchfab.com/nikars)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/ghost-in-the-shell-cyborg-head-7a3ad0a509a746b5acaf206d638a2d8a
Title: Ghost in the Shell Cyborg Head
*/

import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations, shaderMaterial } from "@react-three/drei";
import { useFrame, extend } from "@react-three/fiber";
import * as THREE from "three";
import stripesVertex from "../glsl/stripes.vertex.glsl";
import stripesFragment from "../glsl/stripes.fragment.glsl";
import { useControls } from "leva";

const StripesShaderMaterial = shaderMaterial(
  {
    uAlpha: 0.5,
    uMultiplier: 42,
    uColorA: new THREE.Color(0x000000),
    uColorB: new THREE.Color(0x000000),
    uTime: 0,
  },
  stripesVertex,
  stripesFragment
);

extend({ StripesShaderMaterial });

export function Cyborg(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/cyborg.gltf");
  const { actions } = useAnimations(animations, group);
  const ref = useRef();

  // Get all the keys of the nodes object
  let keys = Object.keys(nodes);
  // Filter out the keys that correspond to meshes
  const meshKeys = keys.filter((key) => nodes[key] instanceof THREE.Mesh);

  const meshControls = meshKeys.reduce((acc, key) => {
    acc[key] = true; // default visibility to true
    return acc;
  }, {});
  const { debug } = useControls({ debug: false });

  // useEffect(() => console.log(debug), []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.uTime = state.clock.elapsedTime;
    }
    // if (actions.Scene) {
    //   actions.Scene.play();
    //   actions.Scene.setLoop(THREE.LoopOnce);
    //   actions.Scene.clampWhenFinished = true;
    //   actions.Scene.getClip().duration = 2;
    // }
    // group.current.rotation.y += delta / 2;
  });

  const controls = keys.reduce((acc, key) => {
    acc[key] = true; // default visibility to true
    return acc;
  }, {});

  const visibilityControls = useControls("model", controls);
  const meshVisibility = useControls("Mesh Visibility", meshControls);

  const stripesControls = useControls("stripes", {
    alpha: {
      min: 0,
      max: 1,
      value: 0.5,
    },
    multiplier: {
      min: 1,
      max: 142,
      value: 42,
    },
    colorA: "#FF0000",
    colorB: "#FFFF00",
  });

  // const modelControls = useControls("model", {});

  const DebugModel = () => {
    return (
      <group ref={group} {...props} dispose={null}>
        {meshKeys.map((key) => {
          const node = nodes[key];
          return (
            <mesh
              key={key}
              name={node.name}
              geometry={node.geometry}
              material={node.material}
              visible={visibilityControls[key]}
            />
          );
        })}
      </group>
    );
  };

  return debug ? (
    <DebugModel />
  ) : (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.005}
        >
          <group
            name="c80305373e16494482736b61b620e337fbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="SideRot001_low"
                  position={[-65.341, 111.463, 9.877]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="SideRot001_low_Head_0"
                    geometry={nodes.SideRot001_low_Head_0.geometry}
                    material={materials.Head}
                  />
                </group>
                <group
                  name="SideRot002_low"
                  position={[-65.341, 111.463, 9.877]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="SideRot002_low_Head_0"
                    geometry={nodes.SideRot002_low_Head_0.geometry}
                    material={materials.Head}
                  />
                </group>
                <group
                  name="SideRot003_low"
                  position={[-65.341, 111.463, 9.877]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="SideRot003_low_Head_0"
                    geometry={nodes.SideRot003_low_Head_0.geometry}
                    material={materials.Head}
                  />
                </group>
                <group
                  name="sideRight_low"
                  position={[65.341, 111.463, 9.877]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <group name="SideRot004_lowRight">
                    <mesh
                      name="SideRot004_lowRight_Head_0"
                      geometry={nodes.SideRot004_lowRight_Head_0.geometry}
                      material={materials.Head}
                    />
                  </group>
                  <mesh
                    name="sideRight_low_Head_0"
                    geometry={nodes.sideRight_low_Head_0.geometry}
                    material={materials.Head}
                  />
                </group>
                <group
                  name="side_low"
                  position={[-65.341, 111.463, 9.877]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <group name="SideRot004_low">
                    <mesh
                      name="SideRot004_low_Head_0"
                      geometry={nodes.SideRot004_low_Head_0.geometry}
                      material={materials.Head}
                    />
                  </group>
                  <mesh
                    name="side_low_Head_0"
                    geometry={nodes.side_low_Head_0.geometry}
                    material={materials.Head}
                  />
                </group>
                <group
                  name="SideRot001_lowRight"
                  position={[65.341, 111.463, 9.877]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="SideRot001_lowRight_Head_0"
                    geometry={nodes.SideRot001_lowRight_Head_0.geometry}
                    material={materials.Head}
                  />
                </group>
                <group
                  name="SideRot002_lowRight"
                  position={[65.341, 111.463, 9.877]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="SideRot002_lowRight_Head_0"
                    geometry={nodes.SideRot002_lowRight_Head_0.geometry}
                    material={materials.Head}
                  />
                </group>
                <group
                  name="SideRot003_lowRight"
                  position={[65.341, 111.463, 9.877]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="SideRot003_lowRight_Head_0"
                    geometry={nodes.SideRot003_lowRight_Head_0.geometry}
                    material={materials.Head}
                  />
                </group>
                <group
                  name="TopRot002_low"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="TopRot002_low_Head_0"
                    geometry={nodes.TopRot002_low_Head_0.geometry}
                    material={materials.Head}
                  />
                </group>
                <group
                  name="TopRot_low"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="TopRot_low_Head_0"
                    geometry={nodes.TopRot_low_Head_0.geometry}
                    material={materials.Head}
                  />
                </group>
                <group
                  name="Top_low"
                  position={[0, 65.478, 61.525]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <group name="TopInner_low" position={[0, 0.615, -0.655]}>
                    <mesh
                      name="TopInner_low_Head_0"
                      geometry={nodes.TopInner_low_Head_0.geometry}
                      material={materials.Head}
                    />
                  </group>
                  <group name="TopRot001_low" position={[0, 0.615, -0.655]}>
                    <mesh
                      name="TopRot001_low_Head_0"
                      geometry={nodes.TopRot001_low_Head_0.geometry}
                      material={materials.Head}
                    />
                  </group>
                  <group name="TopRot001_lowRigt" position={[0, 0.615, -0.655]}>
                    <mesh
                      name="TopRot001_lowRigt_Head_0"
                      geometry={nodes.TopRot001_lowRigt_Head_0.geometry}
                      material={materials.Head}
                    />
                  </group>
                  <mesh
                    name="Top_low_Head_0"
                    geometry={nodes.Top_low_Head_0.geometry}
                    material={materials.Head}
                  />
                </group>
                <group
                  name="TopRot002_lowRigt"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="TopRot002_lowRigt_Head_0"
                    geometry={nodes.TopRot002_lowRigt_Head_0.geometry}
                    material={materials.Head}
                  />
                </group>
                <group
                  name="TopRot_lowRigt"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="TopRot_lowRigt_Head_0"
                    geometry={nodes.TopRot_lowRigt_Head_0.geometry}
                    material={materials.Head}
                  />
                </group>
                <group
                  name="BottomSideRight_low"
                  position={[54.574, 46.296, 21]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <group name="BottomSideRot_lowRight">
                    <mesh
                      name="BottomSideRot_lowRight_Head_0"
                      geometry={nodes.BottomSideRot_lowRight_Head_0.geometry}
                      material={materials.Head}
                    />
                  </group>
                  <mesh
                    name="BottomSideRight_low_Head_0"
                    geometry={nodes.BottomSideRight_low_Head_0.geometry}
                    material={materials.Head}
                  />
                </group>
                <group
                  name="BottomSideRot001_low"
                  position={[-54.447, 46.468, 20.982]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="BottomSideRot001_low_Head_0"
                    geometry={nodes.BottomSideRot001_low_Head_0.geometry}
                    material={materials.Head}
                  />
                </group>
                <group
                  name="BottomSide_low"
                  position={[-54.574, 46.296, 21]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <group name="BottomSideRot_low">
                    <mesh
                      name="BottomSideRot_low_Head_0"
                      geometry={nodes.BottomSideRot_low_Head_0.geometry}
                      material={materials.Head}
                    />
                  </group>
                  <mesh
                    name="BottomSide_low_Head_0"
                    geometry={nodes.BottomSide_low_Head_0.geometry}
                    material={materials.Head}
                  />
                </group>
                <group
                  name="BottomSideRot001_lowRight"
                  position={[59.678, 39.345, 21.755]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="BottomSideRot001_lowRight_Head_0"
                    geometry={nodes.BottomSideRot001_lowRight_Head_0.geometry}
                    material={materials.Head}
                  />
                </group>
                <group
                  name="Eyes_low"
                  position={[0, 122.895, -23.015]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={8.159}
                >
                  <group name="EyesRot001_low" scale={12.256}>
                    <mesh
                      name="EyesRot001_low_Head_0"
                      geometry={nodes.EyesRot001_low_Head_0.geometry}
                      material={materials.Head}
                    />
                  </group>
                  <group name="EyesRot_low" scale={12.256}>
                    <mesh
                      name="EyesRot_low_Head_0"
                      geometry={nodes.EyesRot_low_Head_0.geometry}
                      material={materials.Head}
                    />
                  </group>
                  <mesh
                    name="Eyes_low_Head_0"
                    geometry={nodes.Eyes_low_Head_0.geometry}
                    // material={materials.Head}
                  >
                    <stripesShaderMaterial
                      ref={ref}
                      transparent
                      side={THREE.DoubleSide}
                      uAlpha={stripesControls.alpha}
                      uMultiplier={stripesControls.multiplier}
                      uColorA={stripesControls.colorA}
                      uColorB={stripesControls.colorB}
                    />
                  </mesh>
                </group>
                <group
                  name="EyesRot001_low001"
                  position={[-56.565, 122.733, -15.334]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="EyesRot001_low001_Head_0"
                    geometry={nodes.EyesRot001_low001_Head_0.geometry}
                    material={materials.Head}
                  />
                </group>
                <group
                  name="EyesRot001_low002"
                  position={[56.565, 122.733, -15.334]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="EyesRot001_low002_Head_0"
                    geometry={nodes.EyesRot001_low002_Head_0.geometry}
                    material={materials.Head}
                  />
                </group>
                <group
                  name="Brain_low"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="Brain_low_Head_0"
                    geometry={nodes.Brain_low_Head_0.geometry}
                    material={materials.Head}
                  />
                </group>
                <group
                  name="Plane002"
                  position={[0, 8.582, 4.912]}
                  rotation={[Math.PI, -Math.PI / 4, 0]}
                  scale={24.619}
                >
                  <mesh
                    name="Plane002_Holograms_0"
                    geometry={nodes.Plane002_Holograms_0.geometry}
                    material={materials.Holograms}
                  />
                </group>
                <group
                  name="Sphere002"
                  position={[0, 98.266, 19.255]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={335.261}
                >
                  <mesh
                    name="Sphere002_Holograms_0"
                    geometry={nodes.Sphere002_Holograms_0.geometry}
                    material={materials.Holograms}
                  />
                </group>
                <group
                  name="Plane003"
                  position={[0, 8.582, 4.912]}
                  rotation={[0, -Math.PI / 4, 0]}
                  scale={[24.619, 24.618, 24.619]}
                >
                  <mesh
                    name="Plane003_Holograms_0"
                    geometry={nodes.Plane003_Holograms_0.geometry}
                    material={materials.Holograms}
                  />
                </group>
                <group
                  name="SideRot_low"
                  position={[-65.341, 111.463, 9.877]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="SideRot_low_Head_0"
                    geometry={nodes.SideRot_low_Head_0.geometry}
                    material={materials.Head}
                  />
                </group>
                <group
                  name="SideRot_lowRight"
                  position={[65.341, 111.463, 9.877]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="SideRot_lowRight_Head_0"
                    geometry={nodes.SideRot_lowRight_Head_0.geometry}
                    material={materials.Head}
                  />
                </group>
                <group
                  name="Back_low"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="Back_low_Head_0"
                    geometry={nodes.Back_low_Head_0.geometry}
                    material={materials.Head}
                  />
                </group>
                <group
                  name="BackBottom_low"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="BackBottom_low_Head_0"
                    geometry={nodes.BackBottom_low_Head_0.geometry}
                    material={materials.Head}
                  />
                </group>
                <group
                  name="BrainHolder_low"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="BrainHolder_low_Head_0"
                    geometry={nodes.BrainHolder_low_Head_0.geometry}
                    material={materials.Head}
                  />
                </group>
                <group
                  name="BrainWireCon_low"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="BrainWireCon_low_Head_0"
                    geometry={nodes.BrainWireCon_low_Head_0.geometry}
                    material={materials.Head}
                  />
                </group>
                <group
                  name="BrainWiresFat_low"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="BrainWiresFat_low_Head_0"
                    geometry={nodes.BrainWiresFat_low_Head_0.geometry}
                    material={materials.Head}
                  />
                </group>
                <group
                  name="BrainWiresThin_low"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="BrainWiresThin_low_Head_0"
                    geometry={nodes.BrainWiresThin_low_Head_0.geometry}
                    material={materials.Head}
                  />
                </group>
                <group
                  name="Ear_low"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="Ear_low_Head_0"
                    geometry={nodes.Ear_low_Head_0.geometry}
                    material={materials.Head}
                  />
                </group>
                <group
                  name="Inside_face_low"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="Inside_face_low_Head_0"
                    geometry={nodes.Inside_face_low_Head_0.geometry}
                    material={materials.Head}
                  />
                </group>
                <group
                  name="Mouth_low"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={8.159}
                >
                  <mesh
                    name="Mouth_low_Head_0"
                    geometry={nodes.Mouth_low_Head_0.geometry}
                    material={materials.Head}
                  />
                </group>
                <group
                  name="inside_low"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="inside_low_Head_0"
                    geometry={nodes.inside_low_Head_0.geometry}
                    material={materials.Head}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/cyborg.gltf");
