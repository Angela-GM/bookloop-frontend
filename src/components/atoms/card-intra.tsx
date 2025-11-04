interface CardIntraProps {
  children: React.ReactNode;
}
export const CardIntra = ({ children }: CardIntraProps) => {
  return (
    <section className="rounded-xl border-2 border-gray-200 bg-card text-card-foreground shadow-md p-6">
      {children}
    </section>
  );
};
