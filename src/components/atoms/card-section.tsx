'use client';

interface CardSectionProps {
    children: React.ReactNode;
}
export const CardSection = ({children}:CardSectionProps) => {
  return (
    <section className="p-6 rounded-lg border-border bg-card text-card-foreground shadow-sm">{children}</section>
  )
}
