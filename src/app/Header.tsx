import React from "react";
import dynamic from "next/dynamic";
import HeaderMenu from "kodebloxui/customComponents/HeaderMenu";
import MobileNav from "../customComponents/MobileNav";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import KBUI from "kodebloxui/utils/logo/KBUI";
const montserrat = Montserrat({ subsets: ["latin"] });

const HeaderNavLink = dynamic(
  () => import("kodebloxui/customComponents/HeaderNav"),
  { ssr: false }
);

function Header() {
  return (
    <header className="h-14 border-b flex items-center px-5 md:px-9 justify-between bg-background/70 backdrop-blur-lg backdrop-blur-safari fixed w-full top-0 z-50">
      <div className="flex">
        <Link href="/">
          <KBUI size={32} className="mr-2" />
          <h1
            className={`text-2xl font-extrabold leading-tight tracking-tight ${montserrat.className}`}>
            KodeBlox<span className="text-yellow-500">UI</span>
          </h1>
        </Link>
      </div>

      <HeaderMenu />
      <MobileNav />
    </header>
  );
}

export default Header;
