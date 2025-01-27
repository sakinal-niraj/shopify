"use client";
import React, { useEffect, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import ColorSelector from "@/app/components/ColorSelector";

// colors
export function Colors() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedHeadFootColor, setSelectedHeadFootColor] =
    useState<string>("#000000");
  const [selectedBodyColor, setSelectedBodyColor] = useState<string>("#000000");
  const [selectedIconsColor, setSelectedIconsColor] =
    useState<string>("#000000");
  const [selectedIconTextColor, setSelectedIconTextColor] =
    useState<string>("#000000");
  const [selectedHeadTextColor, setSelectedHeadTextColor] =
    useState<string>("#000000");
  const [selectedBodyTextColor, setSelectedBodyTextColor] =
    useState<string>("#000000");
  const [selectedButtonColor, setSelectedButtonColor] =
    useState<string>("#000000");
  const [selectedProductBgColor, setSelectedProductBgColor] =
    useState<string>("#000000");

  useEffect(() => {
    const storedHeadFootColor = localStorage.getItem("header_footer");
    const storedBodyColor = localStorage.getItem("bodyColor");
    const storedIconsColor = localStorage.getItem("iconsColor");
    const storedIconTextColor = localStorage.getItem("iconTextColor");
    const storedHeadTextColor = localStorage.getItem("headTextColor");
    const storedBodyTextColor = localStorage.getItem("bodyTextColor");
    const storedButtonColor = localStorage.getItem("buttonColor");
    const storedProductBgColor = localStorage.getItem("productBgColor");

    // Header and footer bg color
    if (storedHeadFootColor) {
      setSelectedHeadFootColor(storedHeadFootColor);
      document.documentElement.style.setProperty(
        "--headerFooter-Color",
        storedHeadFootColor
      );
    }

    // body bg color
    if (storedBodyColor) {
      setSelectedBodyColor(storedBodyColor);
      document.documentElement.style.setProperty(
        "--pageBackground-Color",
        storedBodyColor
      );
    }

    // icons color
    if (storedIconsColor) {
      setSelectedIconsColor(storedIconsColor);
      document.documentElement.style.setProperty(
        "--icons-Color",
        storedIconsColor
      );
    }

    // icon Text color
    if (storedIconTextColor) {
      setSelectedIconTextColor(storedIconTextColor);
      document.documentElement.style.setProperty(
        "--icon-TextColor",
        storedIconTextColor
      );
    }

    // Head text color
    if (storedHeadTextColor) {
      setSelectedHeadTextColor(storedHeadTextColor);
      document.documentElement.style.setProperty(
        "--head-Text-Color",
        storedHeadTextColor
      );
    }

    // body text color
    if (storedBodyTextColor) {
      setSelectedBodyTextColor(storedBodyTextColor);
      document.documentElement.style.setProperty(
        "--body-Text-Color",
        storedBodyTextColor
      );
    }

    // button color
    if (storedButtonColor) {
      setSelectedButtonColor(storedButtonColor);
      document.documentElement.style.setProperty(
        "--button-Color",
        storedButtonColor
      );
    }

    // Product Bg color
    if (storedProductBgColor) {
      setSelectedButtonColor(storedProductBgColor);
      document.documentElement.style.setProperty(
        "--button-Color",
        storedProductBgColor
      );
    }
  }, []);

  // head and footer event handler
  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const storedHeadFootColor = event.target.value;
    setSelectedHeadFootColor(storedHeadFootColor);
    localStorage.setItem("header_footer", storedHeadFootColor);
    document.documentElement.style.setProperty(
      "--headerFooter-Color",
      storedHeadFootColor
    );
  };

  // body event handler
  const handleBodyColorChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const storedBodyColor = event.target.value;
    setSelectedBodyColor(storedBodyColor);
    localStorage.setItem("bodyColor", storedBodyColor);
    document.documentElement.style.setProperty(
      "--pageBackground-Color",
      storedBodyColor
    );
  };

  // icons color event handler
  const handleIconsColorChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const storedIconsColor = event.target.value;
    setSelectedIconsColor(storedIconsColor);
    localStorage.setItem("iconsColor", storedIconsColor);
    document.documentElement.style.setProperty(
      "--icons-Color",
      storedIconsColor
    );
  };

  // handle Icons text change
  const handleIconTextColorChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const storedIconTextColor = event.target.value;
    setSelectedIconTextColor(storedIconTextColor);
    localStorage.setItem("iconTextColor", storedIconTextColor);

    document.documentElement.style.setProperty(
      "--icons-Text-Color",
      storedIconTextColor
    );
  };

  // handle head text change
  const handleHeadTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const storedHeadTextColor = event.target.value;
    setSelectedHeadTextColor(storedHeadTextColor);
    localStorage.setItem("headTextColor", storedHeadTextColor);
    document.documentElement.style.setProperty(
      "--head-Text-Color",
      storedHeadTextColor
    );
  };

  // handle body text change
  const handleBodyTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const storedBodyTextColor = event.target.value;
    setSelectedBodyTextColor(storedBodyTextColor);
    localStorage.setItem("bodyTextColor", storedBodyTextColor);
    document.documentElement.style.setProperty(
      "--body-Text-Color",
      storedBodyTextColor
    );
  };

  // handle Button change
  const handleButtonChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const storedButtonColor = event.target.value;
    setSelectedButtonColor(storedButtonColor);
    localStorage.setItem("buttonColor", storedButtonColor);
    document.documentElement.style.setProperty(
      "--button-Color",
      storedButtonColor
    );
  };

  // handle Products bg color change
  const handleProductBgColorChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const storedProductBgColor = event.target.value;
    setSelectedProductBgColor(storedProductBgColor);
    localStorage.setItem("productBgColor", storedProductBgColor);
    document.documentElement.style.setProperty(
      "--product-Bg-Color",
      storedProductBgColor
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
            value={selectedHeadFootColor}
            onChange={handleColorChange}
            icon={<IoMdArrowDropdown />}
            id="header-footer"
          />

          {/* Page Bacground Color */}
          <ColorSelector
            label="Page Background Color"
            value={selectedBodyColor}
            onChange={handleBodyColorChange}
            icon={<IoMdArrowDropdown />}
            id="bodyColor"
          />

          {/* Icons Color */}
          <ColorSelector
            label="Icons Color"
            value={selectedIconsColor}
            onChange={handleIconsColorChange}
            icon={<IoMdArrowDropdown />}
            id="iconColor"
          />

          {/* Icon text Color */}
          <ColorSelector
            label="Icons Text Color"
            value={selectedIconTextColor}
            onChange={handleIconTextColorChange}
            icon={<IoMdArrowDropdown />}
            id="iconsTextColor"
          />

          {/* head text Color */}
          <ColorSelector
            label="Head Text Color"
            value={selectedHeadTextColor}
            onChange={handleHeadTextChange}
            icon={<IoMdArrowDropdown />}
            id="headTextColor"
          />

          {/* Body text Color */}
          <ColorSelector
            label="Body Text Color"
            value={selectedBodyTextColor}
            onChange={handleBodyTextChange}
            icon={<IoMdArrowDropdown />}
            id="bodyTextColor"
          />

          {/* Button Color */}
          <ColorSelector
            label="Button Color"
            value={selectedButtonColor}
            onChange={handleButtonChange}
            icon={<IoMdArrowDropdown />}
            id="buttonTextColor"
          />

          {/* Button Color */}
          <ColorSelector
            label="Product Background Color"
            value={selectedProductBgColor}
            onChange={handleProductBgColorChange}
            icon={<IoMdArrowDropdown />}
            id="productBgColor"
          />
        </div>
      )}
    </>
  );
}

// typography
export function Typography() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isFontSize,setIsFontSize] = useState('1');

  useEffect(()=>{
    const storedFontSize = localStorage.getItem('fontSizeScale');
    if (storedFontSize) {
       setIsFontSize(storedFontSize);
       document.documentElement.style.setProperty(
         "--font-Scale-Size",
         storedFontSize
       );
     }
  },[])


  const handleFontSizeScale = (event:React.ChangeEvent<HTMLInputElement>)=>{
    const scaleSize = event.target.value;
    setIsFontSize(scaleSize);
    localStorage.setItem("fontSizeScale",scaleSize);
    document.documentElement.style.setProperty("--font-Scale-Size",scaleSize);
  }

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
        <div className="py-1 px-4 space-y-2 border-b border-gray-100">
          {/* Head */}
          <div className="font-normal text-xs">
            {/* Heading */}
            <h1 className="pb-3 text-sm font-medium">Headings</h1>

            {/* font selector */}
            <p className="flex justify-between">
              <label htmlFor="font">Font</label>
              <span>system UI</span>
            </p>

            <div className="flex justify-between items-center">
              <span className="w-[50%]">Font size scale</span>
              <div className="flex my-4 relative">
                <input
                  type="range"
                  min="1.0"
                  max="1.5"
                  step="0.1"
                  onChange={handleFontSizeScale}
                  value={isFontSize}
                  className={`w-full h-1 bg-gray-300 rounded-lg hover:cursor-grab  active:cursor-pointer relative`}
                />
                <div className="absolute top-2 left-0 right-0 flex gap-2.5 text-[10px] text-gray-600">
                  <span>1.0</span>
                  <span>1.1</span>
                  <span>1.2</span>
                  <span>1.3</span>
                  <span>1.4</span>
                  <span>1.5</span>
                </div>
              </div>
            </div>
          </div>
        </div>
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
