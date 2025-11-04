'use client'

interface H2TitleProps {
    children: React.ReactNode;
}
export const H2Title = ({children}:H2TitleProps) => {
  return (
    <h2 className="text-3xl font-bold text-foreground mb-2">{children}</h2>
  )
}
