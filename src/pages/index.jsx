export default function Home() {
  return (
    <div className="w-full h-4/5 flex flex-row items-center absolute justify-center text-left z-30">
      <div className="w-fit flex flex-col xl:block text-center ">
        <span 
          className="text-4xl 2xs:text-5xl xs:text-6xl md:text-8xl bioweapon-font entropic relative mb-8 xl:mb-0 xl:mr-12"
          style={{ color: "#fff", fontWeight: "900", lineHeight: 1 }}
        >
          ENTROPIC
          <span className="font-mirror-layer" />
        </span>
        <span 
          className="text-4xl 2xs:text-5xl xs:text-6xl md:text-8xl bioweapon-font software relative"
          style={{ color: "#fff", fontWeight: "900", lineHeight: 1 }}
        >
          SOFTWARE
          <span className="font-mirror-layer" />
        </span>
      </div>
    </div>
  )
}
