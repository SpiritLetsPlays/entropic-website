import { Canvas } from "@react-three/fiber";
import Lights from "./Lights";
import Terrain from "./Terrain";
//import Controls from "./Controls";

export default function Scene() {
  return (
    <Canvas dpr={[1, 2]} camera={{ zoom: 70, position: [550, 450, 450] }}>
      <Lights />
      <Terrain />
    </Canvas>
  )
}