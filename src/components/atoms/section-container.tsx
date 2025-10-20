interface containerProps {
  children: React.ReactNode;
  classProps?: string;
}

export const SectionContainer = ({ children, classProps }: containerProps) => {
  return (
    <section className={`${classProps && classProps} container mx-auto px-10`}>
      {children}
    </section>
  );
};
