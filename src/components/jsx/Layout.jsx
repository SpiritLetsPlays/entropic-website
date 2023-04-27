import { Suspense } from "react";
import Scene from "../threejs/Scene";
import MicroFooter from "./MicroFooter";

export default function Layout({ children }) {
  const SuspenseFallback = () => {
    return (
      <div className="w-full h-full bg-[#0A0A1B]" />
    )
  }

  return (
    <>
      <div 
        className="w-full h-full border fixed top-0 left-0 z-20 noise opacity-50 mix-blend-overlay pointer-events-none" 
        style={{ backgroundImage: "url('/noise.webp')" }}
      />
      <div className="w-full h-full absolute top-0 left-0 z-30 pointer-events-none">
        {children}
      </div>
      <MicroFooter />
      <Suspense fallback={SuspenseFallback}>
        <div className="h-full w-full opacity-70 fixed top-0 left-0">
          <Scene />
        </div>
      </Suspense>
    </>
  )
}