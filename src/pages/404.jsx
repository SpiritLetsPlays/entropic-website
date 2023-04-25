export default function Custom404() {
  return (
    <div className="w-full h-4/5 flex flex-row items-center absolute justify-center text-left z-30">
      <div className="w-fit flex flex-col text-center">
        <span 
          className="text-4xl 2xs:text-5xl xs:text-6xl md:text-8xl bioweapon-font error-404 relative mb-8"
          style={{ color: "#fff", fontWeight: "900", lineHeight: 1 }}
        >
          404
          <span className="font-mirror-layer" />
        </span>
        <span className="text-white 2xs:text-xl xs:text-2xl md:text-3xl mx-auto">Seems like you fell into the void. <br />Let's get you back on track.</span>
      </div>
    </div>
  )
}
