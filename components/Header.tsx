"use client";
import Image from "next/image";
import { RiMenuLine } from "@remixicon/react";
import { navigationData } from "@/data";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <nav className="section-container padding-header sticky top-0 z-30 bg-gray-100 xl:rounded-full">
      <div className="flex-between">
        <Image src="assets/logo.svg" width={170} height={70} alt="logo" />
        <div
          className="lg:hidden rounded-lg bg-accent text-white group hover:bg-primary w-8 h-8 flex justify-center items-center cursor-pointer"
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
        >
          <RiMenuLine size={12} />
        </div>
        {mobileNavOpen && <MobileNav />}
        <Nav />
      </div>
    </nav>
  );
};

const Nav = () => {
  return (
    <ul className="hidden lg:flex-between lg:gap-12">
      {navigationData.map((nd, i) => (
        <Link key={i} href={nd.href}>
          {nd.name}
        </Link>
      ))}
    </ul>
  );
};

const MobileNav = () => {
  return (
    <div className="lg:hidden absolute top-[80px] left-0 right-0 bg-accent">
      <ul className="flex flex-col px-6 py-8 gap-y-4">
        {navigationData.map((nd, i) => (
          <Link key={i} className="text-white" href={nd.href}>
            {nd.name}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Header;
