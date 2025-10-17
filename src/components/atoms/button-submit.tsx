"use client";

interface ButtonSubmitProps {
  children: React.ReactNode;
}

export const ButtonSubmit = ({ children }: ButtonSubmitProps) => {
  return (
    <button
      type="submit"
      className="bg-primary hover:bg-primary/80 text-white font-semibold py-2 rounded-lg transition-colors shadow-md cursor-pointer"
    >
      {children}
    </button>
  );
};
