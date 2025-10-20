import React from "react";
import { FiPlus } from "react-icons/fi";

export const AddBook = () => {
  return (
    <div className="items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 hidden sm:flex cursor-pointer">
      <FiPlus />
      Subir libro
    </div>
  );
};
