import { useRef } from "react"
import { extend, useFrame } from "@react-three/fiber";
import { EffectComposer, Bloom, SelectiveBloom } from "@react-three/postprocessing";
import * as THREE from "three";

import { noise } from "./perlin"
import { GradientTexture, Sparkles } from "@react-three/drei";

export default function Terrain() {
  const mesh = useRef();
  const geometryRef = useRef();

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

  useFrame((state) => {
    if(!geometryRef.current) return;
    const t = Math.sin(state.clock.getElapsedTime()) * 1.5
    const tc = Math.cos(state.clock.getElapsedTime()) * 1.5
    let pos = geometryRef.current.getAttribute("position")
    let pa = pos.array
    const hVerts = geometryRef.current.parameters.heightSegments + 1
    const wVerts = geometryRef.current.parameters.widthSegments + 1
    for (let j = 0; j < hVerts; j++) {
      for (let i = 0; i < wVerts; i++) {
        const ex = 1.05
        pa[3 * (j * wVerts + i) + 2] =
          (noise.simplex2(i / 100, j / 100) +
            noise.simplex2((i + 200) / 85, j / 85) * Math.pow(ex, 1) +
            noise.simplex2((i + 400) / 54, j / 54) * Math.pow(ex, 2) * tc +
            noise.simplex2((i + 600) / 21, j / 21) * Math.pow(ex, 3) * t +
            +(noise.simplex2((i + 800) / 9.25, j / 9.25) * Math.pow(ex, 4))) /
          2
      }
    }
    pos.needsUpdate = true
  });

  return (
    <>
      <EffectComposer>
        <SelectiveBloom selection={[mesh]} luminanceThreshold={0} intensity={20} luminanceSmoothing={0.9} height={300} />
        <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
      </EffectComposer>
      <Sparkles
        count={500}
        speed={0.05}
        opacity={0.75}
        color={new THREE.Color("#fc034e")}
        size={1}
        scale={65}
        noise={1}
        position={[0, 0, 0]}
        renderOrder={0}
      />
      <Sparkles
        count={500}
        speed={0.05}
        opacity={0.75}
        color={new THREE.Color("#54077d")}
        size={1}
        scale={65}
        noise={1}
        position={[0, 0, 0]}
        renderOrder={0}
      />
      <mesh position={[-12,-12,0]} ref={mesh} onUpdate={doUpdate} rotation={[-Math.PI / 2, 0, 0]} renderOrder={1} >
        <planeBufferGeometry ref={geometryRef} attach="geometry" args={[75, 30, 75, 75]} />
        <meshPhongMaterial
          shininess={3}
          flatShading
          color={"transparent"}
          wireframe
          transparent
          wireframeLinewidth={0.7}
        >
          <GradientTexture
            stops={[0, 1]} // As many stops as you want
            colors={["#fc034e", "#33034d"]} // Colors need to match the number of stops
            size={1024} // Size is optional, default = 1024
            minFilter={THREE.LinearFilter}
            magFilter={THREE.LinearFilter}
          />
        </meshPhongMaterial>
      </mesh>
    </>
  );
}

// TODO: Figure out wireframe thickness, make galaxy background with particles