import React from "react";
import { Label } from "../atoms/label";
import { TextArea, TextAreaProps } from "../atoms/textarea";

interface TextareaLabelProps extends TextAreaProps {
  label: string;
}

export const TextareaLabel = ({
  label,
  defaultValue,
  name,
  onChange,
  placeholder,
  requeired,
  rows,
  value,
}: TextareaLabelProps) => {
  return (
    <div className="flex flex-col gap-2">
      <Label name={name}> {label}</Label>
      <TextArea
        defaultValue={defaultValue}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        requeired={requeired}
        rows={rows}
        value={value}
      />
    </div>
  );
};
