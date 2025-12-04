"use client";

interface ButtonSubmitProps {
  children: React.ReactNode;
  disabled?: boolean;
  classProps?: string;
}



export const ButtonSubmit = ({ children, disabled = false, classProps = "" }: ButtonSubmitProps) => {
  return (
    <button
      type="submit"
      disabled={disabled}
      className={`font-semibold py-2 rounded-lg transition-colors shadow-md ${
        disabled 
          ? "bg-gray-400 cursor-not-allowed" 
          : "bg-primary hover:bg-primary/80 cursor-pointer"
      } text-white ${classProps}`}
    >
      {children}
    </button>
  );
};
