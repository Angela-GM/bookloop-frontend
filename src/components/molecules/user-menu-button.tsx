'use client';
import Link from "next/link";
import React from "react";
import { FiUser } from "react-icons/fi";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { logoutAction } from "@/src/app/actions/logout.action";

interface UserMenuButtonProps {
  isToken: boolean;
}

const menuItems = [
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'Settings', href: '#' },
];


export const UserMenuButton = ({ isToken }: UserMenuButtonProps) => {


  if (!isToken) {
    return (
      <Link
        href="/auth" 
        className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3"
      >
        <FiUser size={18} />
        <span>Login</span>
      </Link>
    );
  }
 
 

  return (
     <Menu as="div" className="relative inline-block">
      <MenuButton className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
        
      
      <FiUser size={18} />
    
        <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
      </MenuButton>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-card outline-1 -outline-offset-1 outline-border transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in overflow-hidden"
      >
        <div className="py">
          {menuItems.map((item) => (
            <MenuItem key={item.label}>
              <Link
                href={item.href}
                className="block px-4 py-2 text-sm text-foreground data-focus:bg-secondary data-focus:text-secondary-foreground data-focus:outline-hidden"
              >
                {item.label}
              </Link>
            </MenuItem>
          ))}
          
          <form action={logoutAction}method="POST">
            <MenuItem>

              <button
                type="submit"
                className="block px-4 py-2 w-full text-left text-sm text-foreground data-focus:bg-secondary data-focus:text-secondary-foreground data-focus:outline-hidden border-t border-border"
              >
                Sign out
              </button>
            </MenuItem>
          </form>
        </div>
      </MenuItems>
    </Menu>
  );
};
