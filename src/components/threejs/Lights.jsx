export default function Lights() {
  const FakeSphere = () => {
    return (
      <mesh>
        <sphereBufferGeometry attach={"geometry"} args={[0.7, 30, 30]} />
        <meshBasicMaterial attach={"material"} color={0xfff1ef} />
      </mesh>
    )
  }

  return(
    <group>
      <FakeSphere />
      <ambientLight position={[0, 4, 0]} intensity={0.3} />
      <directionalLight intensity={0.5} position={[0, 0, 0]} color={0xffffff} />
      <pointLight
        intensity={1.9}
        position={[-6, 3, -6]}
        color={0xffcc77}
      />
      <pointLight
        intensity={1.9}
        position={[6, 3, 6]}
        color={0xffcc77}
      />
    </group>
  )
}