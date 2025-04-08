import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Logo2(props) {
  const { nodes, materials } = useGLTF("/models/logo.glb");

  const ref = useRef();

  return (
    <group {...props} dispose={null} ref={ref}>
      <group position={[-0.075, 0.363, 0.011]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["polySurface51-mesh-mesh"].geometry}
          material={materials.Material_2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["polySurface51-mesh-mesh_1"].geometry}
          material={materials.Material_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["polySurface51-mesh-mesh_2"].geometry}
          material={materials.Material_0}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/logo.glb");
