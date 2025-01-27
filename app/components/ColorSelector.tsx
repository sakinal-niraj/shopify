"use client";

import React, { ChangeEvent } from "react";

interface ColorSelectorProps {
  label: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  icon: React.ReactNode;
  id:string,
}

const ColorSelector: React.FC<ColorSelectorProps> = ({ label, value, onChange, icon,id }) => {
  return (
    <div className="flex items-center justify-between">
      <span className="font-normal text-xs w-[150px]">{label}</span>
      <p className="flex items-center justify-between text-[10px] bg-gray-200 pr-1 pl-0.5 rounded-sm w-24">
        <input
          type="color"
          id={id} 
          className="outline-none min-w-[23px] max-w-[23px] bg-none"
          value={value} 
          onChange={onChange} 
        />
        <label htmlFor={id} className="flex items-center gap-3 uppercase">
          {value}
          {icon}
        </label>
      </p>
    </div>
  );
};

export default ColorSelector;
