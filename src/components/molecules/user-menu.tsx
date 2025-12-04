import React from "react";
import { UserMenuButton } from "./user-menu-button";
import { cookies } from "next/headers";

export const UserMenu = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token_bookloop")?.value;
  return <UserMenuButton isToken={!!token} />;
};
