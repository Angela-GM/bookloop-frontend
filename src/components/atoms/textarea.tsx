"use client";

export interface TextAreaProps {
  placeholder?: string;
  requeired?: boolean;
  rows?: number;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  defaultValue?: string;
}

export const TextArea = ({
  placeholder,
  requeired,
  rows = 4,
  name,
  value,
  onChange,
  defaultValue,
}: TextAreaProps) => {
  return (
    <textarea
      id={name}
      name={name}
      rows={rows}
      className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      placeholder={placeholder}
      required={requeired}
      value={value}
      onChange={onChange}
      defaultValue={defaultValue}
    ></textarea>
  );
};
