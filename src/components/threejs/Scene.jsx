import { Canvas } from "@react-three/fiber";
import Lights from "./Lights";
import Terrain from "./Terrain";
import Controls from "./Controls";

export default function Scene() {
  return (
    <Canvas camera={{ zoom: 40, position: [0, 0, 500]}}>
      <Lights />
      <Terrain />
      <Controls />
    </Canvas>
  )
}