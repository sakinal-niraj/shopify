"use client";
import React, { useEffect, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";

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
      storedColor,
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
          <div className=" flex items-center justify-between">
            <span className="font-normal text-xs">
              Header & Footer <br /> Background
            </span>
            <p className="flex items-center justify-between text-[10px] bg-gray-200 pr-1 pl-0.5 rounded-sm w-24">
              <input
                type="color"
                id="heade&foot"
                className="outline-none min-w-[23px] max-w-[23px] bg-none"
                value={selectedColor}
                onChange={handleColorChange}
              />
              <label
                htmlFor="heade&foot"
                className="flex items-center gap-3 uppercase"
              >
                {selectedColor}{" "}
                <IoMdArrowDropdown className="pt-[1px]" size={17} />
              </label>
            </p>
          </div>
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
