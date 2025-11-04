"use client";
import React from "react";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}
export const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <button
      className="text-black hover:bg-green-700/20 hover:cursor-pointer p-2 rounded-md md:hidden z-50 "
      onClick={onClick}
    >
      {children}
    </button>
  );
};
