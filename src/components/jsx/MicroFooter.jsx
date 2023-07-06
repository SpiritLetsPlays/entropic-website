import Link from "next/link";
import { useRouter } from "next/router";

export default function MicroFooter() {
  const router = useRouter();

  return (
    <div className={`flex flex-col sm:flex-row justify-between items-center ${router.asPath === "/" && "hidden sm:flex"} fixed bottom-4 left-2 w-[calc(100%-1rem)] z-30`}>
      <div
        className={`text-center ${
          router.asPath !== "/" && "mb-2"
        } sm:mb-0 xs:text-left sm:mr-auto relative`}
      >
        <span className={`block sm:transform sm:w-96 sm:-rotate-90 sm:absolute ${
          router.asPath !== "/" ? "sm:bottom-[11rem]" : "sm:bottom-[11.5rem]"
        } sm:-left-44`}>
          © 2023 Entropic Software. All rights reserved.
        </span>
      </div>
      {/* <Link href={"/"} className={router.asPath === "/" && "hidden"}>
        <div className="relative top-0.5">
          <span
            className={`text-lg relative xl:mb-0 mr-4`}
            style={{ fontWeight: "900", lineHeight: 1 }}
          >
            ENTROPIC SOFTWARE
            <span className="font-mirror-layer" />
          </span>
        </div>
      </Link> */}
    </div>
  );
}
