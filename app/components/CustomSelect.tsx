import React from "react";
import Select, { SingleValue, Options } from "react-select";

interface OptionType {
  label: string;
  value: string;
}

interface CustomSelectProps {
  label: string;
  value: SingleValue<OptionType>; // `SingleValue` is a type from react-select
  options: Options<OptionType>;   // `Options` is a type from react-select
  onChange: (selectedOption: SingleValue<OptionType>) => void; // Replace `any` with `SingleValue<OptionType>`
  className?: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  label,
  value,
  options,
  onChange,
  className,
}) => {
  return (
    <div className="flex justify-between items-center">
      <label htmlFor={label}>{label}</label>
      <Select
        value={value}
        options={options}
        onChange={onChange}
        className={className || "w-[50%]"}
      />
    </div>
  );
};

export default CustomSelect;
