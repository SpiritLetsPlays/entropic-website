export default function Custom500() {
  return (
    <div className="w-full h-4/5 flex flex-row items-center absolute justify-center text-left z-30">
      <div className="w-fit flex flex-col text-center">
        <span 
          className="text-4xl 2xs:text-5xl xs:text-6xl md:text-8xl bioweapon-font error-500 relative mb-8"
          style={{ color: "#fff", fontWeight: "900", lineHeight: 1 }}
        >
          500
          <span className="font-mirror-layer" />
        </span>
        <span className="text-white 2xs:text-xl xs:text-2xl md:text-3xl mx-auto">Looks like our servers were consumed by a black hole.<br />Don't worry, we're working on it.</span>
      </div>
    </div>
  )
}
