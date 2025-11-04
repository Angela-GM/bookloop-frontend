"use client";

interface InputProps {
  type: string;
  placeholder: string;
  required?: boolean;
  value?: string;
  name?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
  type,
  placeholder,
  required,
  value,
  name,
  defaultValue,
  onChange,
}: InputProps) => {
  // If value is provided, it's a controlled component
  // If defaultValue is provided but no value, it's uncontrolled
  const isControlled = value !== undefined;
  
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`px-4 py-2 bg-input/30 outline-1 border border-border rounded-md outline-none focus:ring-2 ring-inset placeholder:text-muted-foreground text-sm`}
      required={required}
      name={name}
      {...(isControlled 
        ? { value: value, onChange: onChange }
        : { defaultValue: defaultValue || "" }
      )}
    />
  );
};
