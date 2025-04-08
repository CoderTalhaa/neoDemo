import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger, useGSAP);

export function Logo(props) {
  const { nodes, materials } = useGLTF("/models/logo.glb");

  const ref = useRef();

  useGSAP(() => {
    gsap.to(ref.current.position, {
      x: 10,
      y: 5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".logo",
        start: "top+=20% top",
        end: "bottom center-=40%",
        scrub: 1,
        // markers: true,
      },
    });
  });

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

// export function Logo(props) {
//   const { nodes, materials } = useGLTF("/models/technoLogo.glb");

//   const ref = useRef();

//   useGSAP(() => {
//     gsap.to(ref.current.position, {
//       x: 10,
//       y: 5,
//       ease: "power3.out",
//       scrollTrigger: {
//         trigger: ".logo",
//         start: "top+=20% top",
//         end: "bottom center-=40%",
//         scrub: 1,
//         // markers: true,
//       },
//     });
//   });

//   return (
//     <group {...props} dispose={null} ref={ref}>
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.polySurface70008.geometry}
//         material={materials["Material_0.003"]}
//         position={[0.064, 0.614, -0.062]}
//       />
//     </group>
//   );
// }

// useGLTF.preload("/models/technoLogo.glb");
