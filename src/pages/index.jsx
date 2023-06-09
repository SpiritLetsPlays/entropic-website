export default function Home() {
  return (
    <>
      <div className="w-full h-4/5 flex flex-col items-center justify-center text-left z-30">
        <div className="w-fit flex flex-col xl:block text-center pointer-events-auto">
          <span 
            className="text-4xl 2xs:text-5xl xs:text-6xl md:text-8xl entropic relative mb-8 xl:mb-0 xl:mr-12"
            style={{ color: "#fff", fontWeight: "900", lineHeight: 1 }}
          >
            ENTROPIC SOFTWARE
          </span>
        </div>
      </div>
      <div className="w-full h-full flex flex-col items-center justify-center text-left z-30">
        <div className="w-5/6 flex flex-col xl:block text-center pointer-events-auto">
          <span className="text-2xl sm:text-3xl block font-bold text-gray-300 mb-2">
            We're a small team based in Central Europe, bringing websites and software to life.
          </span>
          <span className="text-2xl sm:text-3xl block font-bold text-gray-300 mb-2">Like necromancy, just cooler.</span>
          <span className="block text-xl sm:text-2xl font-semibold mb-1.5 text-gray-400">And with less dead people.</span>
          <span className="block text-lg sm:text-xl font-medium mb-1 text-gray-500">And less magic.</span>
          <span className="block text-md sm:text-lg font-normal mb-0.5 text-gray-600">And more code.</span>
        </div>
      </div>
      <div className={`flex flex-col sm:hidden justify-between pb-4 mb-2 items-center w-full z-30`}>
        <div
          className={`text-center sm:mb-0 xs:text-left sm:mr-auto`}
        >
          <span>© 2023 Entropic Software. All rights reserved.</span>
        </div>
      </div>
    </>
  )
}
