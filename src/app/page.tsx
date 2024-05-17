import { Button } from "empyreanui/components/ui/button";
import Link from "next/link";
import CopyableCode from "./CopyableCode";

export default function Home() {
  return (
    <main className="h-[calc(100vh-80px)]  p-24 md:flex ">
      <div className="w-1/2 flex flex-col items-center justify-center">
        <div className="flex flex-col">
          <h1 className="text-8xl font-bold mb-4">EmpyreanUi</h1>
          <p className="text-sm mb-7 font-semibold">
            EmpyreanUi is a robust UI library offering a range of components,
            hooks, and animating wrappers to streamline development and ensure
            consistent, high-quality user interfaces.
          </p>
          <div className="flex gap-6">
            <CopyableCode code="npm i @empyreanui/core" />
            <Link href="/core">
              <Button className="bg-blue-600 px-7 py-7 text-white rounded-md font-semibold text-lg hover:scale-105 transition-all duration-200">
                Explore Components
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-1/2 flex items-center justify-center"></div>
    </main>
  );
}
