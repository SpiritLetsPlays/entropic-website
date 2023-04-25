import { useEffect, useLayoutEffect, useRef } from "react"
import { extend, useFrame } from "react-three-fiber";
import { UnrealBloomPass } from "three-stdlib";
import * as THREE from 'three';

import { MeshLine, MeshLineMaterial, MeshLineRaycast } from 'three.meshline';

import { noise } from "./perlin"
import { Effects, GradientTexture } from "@react-three/drei";

extend({ UnrealBloomPass });
extend({ MeshLine, MeshLineMaterial })

export default function Terrain() {
  const mesh = useRef();

  // Randomization used here from: https://codepen.io/ptc24/pen/BpXbOW?editors=1010
  const doUpdate = (({ geometry }) => {
    noise.seed(Math.random());
    let pos = geometry.getAttribute("position");
    let pa = pos.array;
    const hVerts = geometry.parameters.heightSegments + 1;
    const wVerts = geometry.parameters.widthSegments + 1;
    for (let j = 0; j < hVerts; j++) {
      for (let i = 0; i < wVerts; i++) {
        const ex = 1.1;
        pa[3 * (j * wVerts + i) + 2] =
          (noise.simplex2(i / 100, j / 100) +
            noise.simplex2((i + 200) / 50, j / 50) * Math.pow(ex, 1) +
            noise.simplex2((i + 400) / 25, j / 25) * Math.pow(ex, 2) +
            noise.simplex2((i + 600) / 12.5, j / 12.5) * Math.pow(ex, 3) +
            +(noise.simplex2((i + 800) / 6.25, j / 6.25) * Math.pow(ex, 4))) /
          2;
      }
    }

    pos.needsUpdate = true;
  });

  const createWireframeGeometry = () => {
    if(!mesh.current) return;
    const meshGeometry = mesh.current.geometry;
    const edgesGeometry = new THREE.EdgesGeometry(meshGeometry);
    const wireframeGeometry = new THREE.BufferGeometry().setFromPoints(
      edgesGeometry.attributes.position.array
    );
    
    return wireframeGeometry;
  };

  // Raf loop
  useFrame(() => {
    mesh.current.rotation.z += 0.001;
  });

  useEffect(() => {
    console.log(mesh.current.geometry.attributes.position.array);
    console.log(mesh.current.position);
  }, [mesh.current]);

  return (
    <>
      <Effects disableGamma>
        {/* threshhold has to be 1, so nothing at all gets bloom by default */}
        <unrealBloomPass threshold={2} strength={1} radius={0.4} />
      </Effects>
      <mesh ref={mesh} onUpdate={doUpdate} rotation={[-Math.PI / 2, 0, 0]}>
        <planeBufferGeometry attach="geometry" args={[25, 25, 75, 75]} />
        <meshPhongMaterial
          shininess={3}
          flatShading
          wireframe={true}
          wireframeLinewidth={2}
        >
          <GradientTexture
            stops={[0, 1]} // As many stops as you want
            colors={["#fc034e", "#33034d"]} // Colors need to match the number of stops
            size={1024} // Size is optional, default = 1024
          />
        </meshPhongMaterial>
      </mesh>
    </>
  );
}

// TODO: Figure out wireframe thickness, make galaxy background with particles