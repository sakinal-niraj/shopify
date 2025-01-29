import React, { ChangeEvent } from "react";

interface Option {
  value: string;
}

interface FontScaleProps {
  label?: string;
  min?: string;
  max?: string;
  step?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  className?:string;
  sizes: Option[];
}

const FontScale: React.FC<FontScaleProps> = ({
  label,
  min,
  max,
  step,
  onChange,
  value,
  sizes,
  className,
}) => {
  return (
    <div className="flex justify-between items-center">
      <span className="w-[50%]">{label}</span>
      <div className="flex my-4 relative">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          onChange={onChange}
          value={value}
          className={`w-full h-1 bg-gray-300 rounded-lg hover:cursor-grab  active:cursor-grabbing relative`}
        />
        <div className={className}>
          {sizes.map((item, index) => (
            <span key={index}>{item.value}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FontScale;
