"use client";
import React, { useEffect, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import ColorSelector from "@/app/components/ColorSelector";

// colors
export function Colors() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState<string>("#000000");

  useEffect(() => {
    const storedColor = localStorage.getItem("header_footer");
    if (storedColor) {
      setSelectedColor(storedColor);
      document.documentElement.style.setProperty(
        "--headerFooter-Color",
        storedColor
      );
    }
  }, []);

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const storedColor = event.target.value;
    setSelectedColor(storedColor);
    localStorage.setItem("header_footer", storedColor);
    document.documentElement.style.setProperty(
      "--headerFooter-Color",
      storedColor
    );
  };
  return (
    <>
      <button
        type="button"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className={`hover:bg-gray-100 flex justify-between items-center w-full text-base p-3.5 text-gray-900 transition duration-75 group  ${
          isDropdownOpen ? "" : "border-b"
        }`}
      >
        Colors
        <span className="pt-[3px] text-xl">
          {isDropdownOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
        </span>
      </button>
      {isDropdownOpen && (
        <div className="py-1 px-4 space-y-2 border-b border-gray-100 w-full">
          {/* Header & Footer Backround */}
          <ColorSelector
            label="Header & Footer Background"
            value={selectedColor}
            onChange={handleColorChange}
            icon={<IoMdArrowDropdown />}
          />

          {/* Page Bacground Color */}
          {/* <ColorSelector 
          label="Page Background Color"
          value={selectedColor}
          onChange={handleColorChange}
          icon={<IoMdArrowDropdown />}
          /> */}
        </div>
      )}
    </>
  );
}

// typography
export function Typography() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className={`hover:bg-gray-100 flex justify-between items-center w-full text-base p-3.5 text-gray-900 transition duration-75 group  ${
          isDropdownOpen ? "" : "border-b"
        }`}
      >
        Typography
        <span className="pt-[3px] text-xl">
          {isDropdownOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
        </span>
      </button>
      {isDropdownOpen && (
        <div className="py-1 px-4 space-y-2 border-b border-gray-100">hell</div>
      )}
    </>
  );
}

// Buttons
export function Buttons() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className={`hover:bg-gray-100 flex justify-between items-center w-full text-base p-3.5 text-gray-900 transition duration-75 group  ${
          isDropdownOpen ? "" : "border-b"
        }`}
      >
        Buttons
        <span className="pt-[3px] text-xl">
          {isDropdownOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
        </span>
      </button>
      {isDropdownOpen && (
        <div className="py-1 px-4 space-y-2 border-b border-gray-100">hell</div>
      )}
    </>
  );
}

// Product crads
export function ProductCard() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className={`hover:bg-gray-100 flex justify-between items-center w-full text-base p-3.5 text-gray-900 transition duration-75 group  ${
          isDropdownOpen ? "" : "border-b"
        }`}
      >
        Product cards
        <span className="pt-[3px] text-xl">
          {isDropdownOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
        </span>
      </button>
      {isDropdownOpen && (
        <div className="py-1 px-4 space-y-2 border-b border-gray-100">hell</div>
      )}
    </>
  );
}
