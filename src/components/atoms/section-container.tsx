interface containerProps {
  children: React.ReactNode;
  classProps?: string;
}

export const SectionContainer = ({ children, classProps }: containerProps) => {
  return (
    <section className={`container px-4 mx-auto ${classProps && classProps}  `}>
      {children}
    </section>
  );
};
