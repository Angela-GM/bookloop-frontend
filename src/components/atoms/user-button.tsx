import Link from "next/link";
import React from "react";
import { FiUser } from "react-icons/fi";

export const UserButton = () => {
  return (
    <Link
      href={"/auth"}
      className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3"
    >
      <FiUser size={18} />
    </Link>
  );
};
