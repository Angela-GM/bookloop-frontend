import Link from 'next/link'
import React from 'react'

interface LinkButtonProps {
  href: string;
  children: React.ReactNode;
  classProps?: string;
  styleButton?: 'primary' | 'secondary';
}

const stylesButton: Record<string, string> = {
    primary: 'bg-primary text-primary-foreground hover:bg-primary/80  transition-colors',
    secondary: 'hover:bg-button-secondary/30 text-primary border border-border bg-primary-foreground  transition-colors',

}

export const LinkButton = ({ href, children, classProps, styleButton = 'primary' }: LinkButtonProps) => {
  return (
    <Link href={href} className={`px-4  py-2  rounded-lg gap-4 text-sm sm:text-md flex items-center  justify-center font-medium cursor-pointer ${stylesButton[styleButton]} ${classProps || ''} `}>{children}</Link>
  )
}
