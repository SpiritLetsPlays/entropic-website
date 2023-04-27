import Link from "next/link";
import { useRouter } from "next/router";

export default function MicroFooter() {
  const router = useRouter();

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center fixed bottom-2 left-2 w-[calc(100%-1rem)] z-30">
      <div
        className={`text-center ${
          router.asPath !== "/" && "mb-2"
        } sm:mb-0 xs:text-left sm:mr-auto`}
      >
        © 2023 Entropic Software. All rights reserved.
      </div>
      <Link href={"/"} className={router.asPath === "/" && "hidden"}>
        <div className="relative top-0.5">
          <span
            className={`text-lg bioweapon-font relative xl:mb-0 mr-4`}
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
  );
}
