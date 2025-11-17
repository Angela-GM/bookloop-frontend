import Link from 'next/link'
import React from 'react'

interface LinkButtonProps {
  href: string;
  children: React.ReactNode;
  classProps?: string;
}

const stylesButton: Record<string, string> = {
    default: 'text-primary hover:text-primary/80 font-medium transition-colors',
    secondary: 'text-secondary hover:text-secondary/80 font-medium transition-colors',

}

export const LinkButton = ({ href, children, classProps }: LinkButtonProps) => {
  return (
    <Link href={href} className={`px-4 sm:px-6 md:px-8 py-2  rounded-xl gap-4 text-sm sm:text-md flex items-center  justify-center  ${stylesButton[classProps || 'default']} glass `}>{children}</Link>
  )
}
