import { Button } from "empyreanui/components/ui/button";
import Link from "next/link";
import CopyableCode from "./CopyableCode";

export default function Home() {
  return (
    <main className="relative h-[calc(100dvh-80px)] flex items-center justify-center overflow-y-auto p-8 md:p-24">
      <div className="h-full max-w-md md:max-w-xl space-y-6 flex items-center">
        <div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight mb-5">
            Empyrean<span className="text-yellow-500">UI</span>
          </h1>
          <p className="text-lg md:text-xl font-medium mb-5">
            EmpyreanUI is a robust UI library offering a range of components,
            hooks, and animating wrappers to streamline development and ensure
            consistent, high-quality user interfaces.
          </p>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6mb-5">
            <Link href="/empyreanuicomponents">
              <Button className="bg-yellow-500 text-gray-800 px-5 py-3 md:px-7 md:py-4 text-lg rounded-md font-semibold hover:bg-yellow-600 hover:scale-105 transition-all duration-200 h-full">
                Explore Components
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden md:flex h-full relative w-full md:w-1/2  items-center justify-center mt-10 md:mt-0">
        <img
          src="/path-to-your-image.png"
          alt="EmpyreanUI Preview"
          className="w-full h-auto max-w-xs md:max-w-md rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-400 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-yellow-400 rounded-full opacity-20 blur-xl"></div>
      </div>
    </main>
  );
}
