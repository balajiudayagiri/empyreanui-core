import { Button } from "empyreanui/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-dvh">
      <main className="relative h-[calc(100dvh-208px)] max-md:h-4/5 flex items-center justify-center overflow-y-auto p-8 max-lg:pt-32 md:p-24 bg-gradient-to-r from-yellow-400 to-yellow-600">
        <div className="h-full max-w-md md:max-w-xl space-y-6 flex text-black items-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight mb-5">
              Empyrean<span className="text-yellow-700 text-shadow">UI</span>
            </h1>
            <p className="text-lg md:text-xl font-medium mb-5">
              EmpyreanUI is a robust UI library offering a range of components,
              hooks, and animating wrappers to streamline development and ensure
              consistent, high-quality user interfaces.
            </p>
            <div className="flex flex-col md:flex-row gap-4 md:gap-6mb-5">
              <Link href="/core">
                <Button className="bg-black text-white px-5 py-3 md:px-7 md:py-4 text-lg rounded-md font-semibold hover:bg-yellow-600 hover:scale-105 transition-all duration-200 h-full">
                  Explore Components
                </Button>
              </Link>
              <Link href="/browse">
                <Button className="bg-black text-white px-5 py-3 md:px-7 md:py-4 text-lg rounded-md font-semibold hover:bg-yellow-600 hover:scale-105 transition-all duration-200 h-full">
                  Explore UI Gallery
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden md:flex h-full relative w-full md:w-1/2  items-center justify-center mt-10 md:mt-0"></div>
      </main>
      {/* bottom animated component */}
      <div
        className="relative bg-gradient-to-r from-yellow-400 to-yellow-600 h-52 max-md:h-1/5"
        style={{
          width: "100vw",
        }}>
        <svg
          className="md:h-full w-full max-md:absolute bottom-0"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto">
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="parallax">
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="#00000070" />
            <use xlinkHref="#gentle-wave" x="48" y="3" fill="#00000050" />
            <use xlinkHref="#gentle-wave" x="48" y="5" fill="#00000030" />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#000" />
          </g>
        </svg>
      </div>
    </div>
  );
}
