import Link from "next/link";
import React from "react";
import { BiBookOpen } from "react-icons/bi";

interface Props {
  children: React.ReactNode;
}
export const AuthForms = ({ children }: Props) => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-[#F9F7F5]">
      <Link href={"/"}>
        <h1 className="text-3xl font-bold text-primary mb-2 text-center flex items-center gap-2">
          <BiBookOpen size={40} /> BookLoop
        </h1>
      </Link>
      <p className="text-primary/80 mb-6 text-center">
        Intercambia libros y comparte mundos!
      </p>
      <div className="bg-white/80 rounded-xl shadow-sm ring-1 ring-border p-6 w-full max-w-md flex flex-col">
        <h2 className="text-2xl font-semibold text-primary mb-2 text-left">
          Únete a la comunidad
        </h2>
        <p className="text-primary/80 mb-5 text-left text-sm">
          Descubre, intercambia y disfruta de miles de libros
        </p>
        {children}
      </div>
    </section>
  );
};
