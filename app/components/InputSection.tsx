import React, { ChangeEvent } from "react";

interface InputeDetails {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
export const InputSection: React.FC<InputeDetails> = ({
  label,
  placeholder,
  value,
  onChange
}) => {
  return (
    <div className="flex flex-col gap-y-1.5">
      <label htmlFor={label}>{label}</label>
      <input
        value={value}
        type="text"
        onChange={onChange}
        id={label}
        placeholder={placeholder}
        className="border p-1.5 rounded-lg placeholder:font-normal text-sm placeholder:text-black border-black"
      />
    </div>
  );
};
