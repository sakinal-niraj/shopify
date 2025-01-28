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
  // className?:string;
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
        <div className="absolute top-2 left-0 right-0 flex gap-2.5 text-[10px] text-gray-600">
          {sizes.map((item, index) => (
            <span key={index}>{item.value}</span>
          ))}
          {/* <span>1.0</span>
                  <span>1.1</span>
                  <span>1.2</span>
                  <span>1.3</span>
                  <span>1.4</span>
                  <span>1.5</span> */}
        </div>
      </div>
    </div>
  );
};

export default FontScale;
