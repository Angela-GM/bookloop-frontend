import React from 'react'
import { RxCross2, RxHamburgerMenu } from 'react-icons/rx';
import { Button } from '../atoms/button';

interface ButtonMenuProps {
  isOpen: boolean;
  onClick: () => void
}

export const ButtonMenu = ({isOpen, onClick}: ButtonMenuProps) => {
  return (
    <Button onClick={onClick}>
        {!isOpen ? <RxHamburgerMenu size={20}  /> : <RxCross2 size={20}  />}
    </Button>
  )
}
