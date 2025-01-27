import React, { useState } from "react";

const RangeSlider = () => {
  const [value, setValue] = useState(1.0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseFloat(e.target.value));
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <label className="text-xl font-semibold">Custom Range Slider</label>
      <div className="relative w-64">
        <input
          type="range"
          min="1.0"
          max="1.5"
          step="0.1"
          value={value}
          onChange={handleChange}
          className="w-full h-2 bg-gray-300 rounded-lg cursor-grab active:cursor-grabbing"
        />
        <div className="absolute top-7 left-0 right-0 flex gap-[30px] text-sm text-gray-600">
          <span>1.0</span>
          <span>1.1</span>
          <span>1.2</span>
          <span>1.3</span>
          <span>1.4</span>
          <span>1.5</span>
        </div>
      </div>
      <div className="text-lg">Value: {value}</div>
    </div>
  );
};

export default RangeSlider;
