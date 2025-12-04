import React from "react";
import { BadgeCoin } from "../atoms/badge.coin";
import { AddBook } from "../atoms/add-book";

interface UserAuthProps {
  userMenu: React.ReactNode;
}

export const UserAuth = ({ userMenu }: UserAuthProps) => {
  return (
    <div className='items-center gap-2 lg:gap-4 hidden md:flex'>
      <BadgeCoin />
      <AddBook />
      {userMenu}
    </div>
  );
};
