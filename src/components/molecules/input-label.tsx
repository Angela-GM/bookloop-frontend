"use client";

import { Input } from "../atoms/input";
import { Label } from "../atoms/label";

interface LabelInputProps {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  value?: string | number ;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputLabel = ({
  name,
  label,
  type = "text",
  placeholder = "",
  required = false,
  value,
  onChange,
}: LabelInputProps) => {
  return (
    <div className="flex flex-col gap-2">
      <Label name={name}>{label}</Label>
      <Input
        type={type}
        placeholder={placeholder}
        required={required}
        value={value == null ? undefined : String(value)}
        onChange={onChange}
        name={name}
      />
    </div>
  );
};
