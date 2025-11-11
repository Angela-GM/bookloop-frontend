"use client";

interface InputProps {
  type: string;
  placeholder?: string;
  required?: boolean;
  value?: string;
  name?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  multiple?: boolean;
  accept?: string;
  className?: string;
  id?: string;
}

export const Input = ({
  type,
  placeholder,
  required,
  value,
  name,
  defaultValue,
  onChange,
  multiple,
  accept,
  className = "",
  id,
}: InputProps) => {
  // If value is provided, it's a controlled component
  // If defaultValue is provided but no value, it's uncontrolled
  const isControlled = value !== undefined;
  
  return (
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      className={` px-4 py-2 bg-input/30 outline-1 border border-border rounded-md outline-none focus:ring-2 ring-inset placeholder:text-muted-foreground text-sm ${className}`}
      required={required}
      multiple={multiple}
      name={name}
      accept={accept}
      {...(isControlled
        ? { value: value, onChange: onChange }
        : { defaultValue: defaultValue || "" }
      )}
    />
  );
};
