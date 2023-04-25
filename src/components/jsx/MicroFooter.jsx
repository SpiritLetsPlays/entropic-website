import Link from "next/link";

export default function MicroFooter() {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center absolute bottom-2 left-2 w-[calc(100%-1rem)] z-30">
      <div className="text-center mb-4 sm:mb-0 xs:text-left">© 2023 Entropic Software. All rights reserved.</div>
      <Link href={"/"}>
        <div className="relative top-0.5">
          <span 
            className="text-lg bioweapon-font relative mb-8 xl:mb-0 xl:mr-4"
            style={{ fontWeight: "900", lineHeight: 1 }}
          >
            ENTROPIC
            <span className="font-mirror-layer" />
          </span>
          <span 
            className="text-lg bioweapon-font relative"
            style={{ fontWeight: "900", lineHeight: 1 }}
          >
            SOFTWARE
            <span className="font-mirror-layer" />
          </span>
        </div>
      </Link>
    </div>
  )
}