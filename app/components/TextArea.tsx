import React, { ChangeEvent } from "react";

interface InputeDetails {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}
export const TextArea: React.FC<InputeDetails> = ({
  label,
  placeholder,
  value,
  onChange
}) => {
  return (
    <div className="flex flex-col gap-y-1.5">
      <label htmlFor={label}>{label}</label>
      <textarea
        value={value}
        onChange={onChange}
        id={label}
        rows={4}
        placeholder={placeholder}
        className="border p-1.5 rounded-lg placeholder:font-normal text-sm placeholder:text-black border-black mainScrollBar"
      />
    </div>
  );
};
