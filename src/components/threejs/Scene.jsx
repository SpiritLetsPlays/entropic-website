import { Canvas, useFrame } from "@react-three/fiber";
import Lights from "./Lights";
import Terrain from "./Terrain";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
//import Controls from "./Controls";

function Camera({ pos }) {
  useFrame((state) => {
    state.camera.position.lerp(new THREE.Vector3(pos[0], pos[1], pos[2]), 0.1);
  });

  return (
    <perspectiveCamera
      makeDefault
      position={[550, 450, 450]}
      rotation={[0, 0, 0]}
    />
  );
}

export default function Scene() {
  const [ pos, setPos ] = useState([550, 450, 450]);
  const [ clicked, setClicked ] = useState(false);

  useEffect(() => {
    async function handleScroll() {
      const scroll = window.scrollY;
      const newPos = [550, 450, 450 + scroll / 30];
      console.log(newPos);
      setPos(newPos);
    }
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Canvas onClick={() => setClicked(true)} dpr={[1, 2]} camera={{ zoom: 70, position: [550, 450, 450] }}>
      <Lights />
      <Terrain clicked={clicked} />
      <Camera pos={pos} />
    </Canvas>
  )
}