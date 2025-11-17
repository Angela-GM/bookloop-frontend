"use client";

interface CardSectionProps {
  children: React.ReactNode;
  classProps?: string;
}
export const CardSection = ({ children, classProps }: CardSectionProps) => {
  return (
    <section className={`rounded-lg text-card-foreground shadow-sm py-6 bg-background/90 backdrop-blur border-1 shadow-card border-border ${classProps}`}>
      {children}
    </section>
  );
};
