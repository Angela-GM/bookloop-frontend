"use client";
import Link from "next/link";
import React from "react";
import { SearchBar } from "../molecules/search-bar";
import { UserAuth } from "../molecules/user-auth";
import { ButtonMenu } from "../molecules/button-menu";
import { ImageCompo } from "../atoms/image-compo";
import { AddBook } from "../atoms/add-book";
import { BadgeCoin } from "../atoms/badge.coin";

interface NavbarProps {
  userMenu: React.ReactNode;
}

export const Navbar = ({ userMenu }: NavbarProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleToggleHamburger = () => setIsOpen(!isOpen);

  return (
    <header className='bg-[#F9F7F5] flex justify-between sticky top-0 z-50 w-full py-1'>
      <div className='flex flex-1 items-center justify-between py-2 px-4'>
        <Link href={"/"}>
          <h1 className='text-2xl font-bold text-primary flex gap-2'>
            <ImageCompo
              routeImage={"/book-logo.svg"}
              width={32}
              height={32}
            />
            BookLoop
          </h1>
        </Link>
        <SearchBar />
        <UserAuth userMenu={userMenu} />
        <ButtonMenu
          isOpen={isOpen}
          onClick={handleToggleHamburger}
        />
      </div>
      <div
        className={`md:hidden fixed top-0 right-0 bg-[#F9F7F5] h-screen w-2/5  transform transition-transform duration-300 ease-in-out 
    ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Contenido del menú */}
        <nav className='flex flex-col mt-16 space-y-4 px-6'>
          <Link
            href='/catalog'
            className='text-lg font-medium text-primary'
            onClick={handleToggleHamburger}
          >
            Catálogo
          </Link>
          <Link
            href='/upload'
            className='text-lg font-medium text-primary'
            onClick={handleToggleHamburger}
          >
            Subir libro
          </Link>
          <section className='flex flex-col gap-y-4 items-start'>
            <BadgeCoin />
            <AddBook />
            {userMenu}
          </section>
        </nav>
      </div>
    </header>
  );
};
