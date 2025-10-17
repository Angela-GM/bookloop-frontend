"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SearchBar } from "../molecules/search-bar";
import { UserAuth } from "../molecules/user-auth";
import { ButtonMenu } from "../molecules/button-menu";

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleToggleHamburger = () => setIsOpen(!isOpen);

  return (
    <header className="bg-[#F9F7F5] flex justify-center sticky top-0 z-50 w-full">
      <div className="flex flex-1 max-w-7xl items-center justify-between py-2 px-4">
        <Link href="/">
          <Image src={"/next.svg"} alt="logo" width={100} height={100} />
        </Link>
        <SearchBar />
        <UserAuth />
        <ButtonMenu isOpen={isOpen} onClick={handleToggleHamburger} />
      </div>
      <div
        className={`md:hidden fixed top-0 right-0 bg-[#F9F7F5] h-screen w-2/3 transform transition-transform duration-300 ease-in-out 
    ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Contenido del menú */}
      </div>
    </header>
  );
};
