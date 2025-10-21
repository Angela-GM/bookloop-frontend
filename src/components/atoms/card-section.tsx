"use client";

interface CardSectionProps {
  children: React.ReactNode;
}
export const CardSection = ({ children }: CardSectionProps) => {
  return (
    <section className="rounded-lg text-card-foreground shadow-sm p-6 bg-background/90 backdrop-blur border-0 shadow-card">
      {children}
    </section>
  );
};
