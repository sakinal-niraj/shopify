"use client";
import React, { useEffect, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import ColorSelector from "@/app/components/ColorSelector";
// import Select from "react-select";

import FontScale from "@/app/components/FontScaleBox";
// import Select from "react-select";
import CustomSelect from "@/app/components/CustomSelect";

interface Options {
  value: string;
  label: string;
}

interface fontSizeType {
  value: string;
}

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
  const [selectedMrpTextColor, setSelectedMrpTextColor] =
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
    const storedMrpTextColor = localStorage.getItem("mrpTextColor");

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

    // Mrp text color
    if (storedMrpTextColor) {
      setSelectedMrpTextColor(storedMrpTextColor);
      document.documentElement.style.setProperty(
        "--mrp-Text-Color",
        storedMrpTextColor
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

  // handle Mrp text color change
  const handleMrpTextColor = (event: React.ChangeEvent<HTMLInputElement>) => {
    const storedMrpTextColor = event.target.value;
    setSelectedMrpTextColor(storedMrpTextColor);
    localStorage.setItem("mrpTextColor", storedMrpTextColor);
    document.documentElement.style.setProperty(
      "--mrp-Text-Color",
      storedMrpTextColor
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

          {/* Button Color */}
          <ColorSelector
            label="Mrp Text Color"
            value={selectedMrpTextColor}
            onChange={handleMrpTextColor}
            icon={<IoMdArrowDropdown />}
            id="MrpTextColor"
          />
        </div>
      )}
    </>
  );
}

// typography
export function Typography() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isHeadFontSize, setIsHeadFontSize] = useState("12");
  const [isBodyFontSize, setIsBodyFontSize] = useState("12");
  const [isHeadFontFamily, setIsHeadFontFamily] = useState<Options | null>(
    null
  );
  const [isBoyFontFamily, setIsBodyFontFamily] = useState<Options | null>(null);

  const headFontFamily: Options[] = [
    { value: "serif", label: "Serif" },
    { value: "sans-serif", label: "Sans-Serif" },
    { value: "monospace", label: "Monospace" },
    { value: "cursive", label: "Cursive" },
    { value: "fantasy", label: "Fantasy" },
    { value: "system-ui", label: "System UI" },
    { value: "ui-sans-serif", label: "UI Sans-Serif" },
    { value: "ui-serif", label: "UI Serif" },
    { value: "ui-monospace", label: "UI Monospace" },
    { value: "ui-rounded", label: "UI Rounded" },
    { value: "emoji", label: "Emoji" },
    { value: "math", label: "Math" },
    { value: "fangsong", label: "Fangsong" },
  ];

  const fontSizes: fontSizeType[] = [
    { value: "1.0" },
    { value: "1.1" },
    { value: "1.2" },
    { value: "1.3" },
    { value: "1.4" },
    { value: "1.5" },
  ];

  useEffect(() => {
    const storedFontSize = localStorage.getItem("fontSizeScale");
    const storedBodyFontSize = localStorage.getItem("bodyFontSizeScale");
    const storedHeadFontFamily = localStorage.getItem("fontHeadFamily");
    const storedBodyFontFamily = localStorage.getItem("fontBodyFamily");

    // head font size
    if (storedFontSize) {
      setIsHeadFontSize(storedFontSize);
      document.documentElement.style.setProperty(
        "--font-Scale-Size",
        storedFontSize
      );
    }

    // body font size
    if (storedBodyFontSize) {
      setIsBodyFontSize(storedBodyFontSize);
      document.documentElement.style.setProperty(
        "--font-body-Scale-Size",
        storedBodyFontSize
      );
    }

    // Head font famyli
    if (storedHeadFontFamily) {
      // Find the matching font option from the list
      const fontOption = headFontFamily.find(
        (font) => font.value === storedHeadFontFamily
      );

      // If found, update the state and apply it to the document
      if (fontOption) {
        setIsHeadFontFamily(fontOption);
        document.documentElement.style.setProperty(
          "--font-head-family",
          fontOption.value
        );
      }
    }

    // Body Font Famyli
    if (storedBodyFontFamily) {
      // Find the matching font option from the list
      const fontOption = headFontFamily.find(
        (font) => font.value === storedBodyFontFamily
      );

      // If found, update the state and apply it to the document
      if (fontOption) {
        setIsBodyFontFamily(fontOption);
        document.documentElement.style.setProperty(
          "--font-body-family",
          fontOption.value
        );
      }
    }
  }, []);

  // head font size scale changer
  const handleFontSizeScale = (event: React.ChangeEvent<HTMLInputElement>) => {
    const scaleSize = event.target.value;
    setIsHeadFontSize(scaleSize);
    localStorage.setItem("fontSizeScale", scaleSize + "px");
    document.documentElement.style.setProperty(
      "--font-Scale-Size",
      scaleSize + "px"
    );
  };


  // body font size scale changer
  const handleBodyFontSizeScale = (event: React.ChangeEvent<HTMLInputElement>) => {
    const scaleSize = event.target.value;
    setIsBodyFontSize(scaleSize);
    localStorage.setItem("bodyFontSizeScale", scaleSize + "px");
    document.documentElement.style.setProperty(
      "--font-body-Scale-Size",
      scaleSize + "px"
    );
  };

  // head font change handler
  const handleFontFamily = (selected: Options | null) => {
    setIsHeadFontFamily(selected);

    if (selected) {
      // Save the selected font family to localStorage
      localStorage.setItem("fontHeadFamily", selected.value);
      document.documentElement.style.setProperty(
        "--font-head-family",
        selected.value
      );
    }
  };

  // body font change handler
  const handleBodyFontFamily = (selected: Options | null) => {
    setIsBodyFontFamily(selected);

    if (selected) {
      // Save the selected font family to localStorage
      localStorage.setItem("fontBodyFamily", selected.value);
      document.documentElement.style.setProperty(
        "--font-body-family",
        selected.value
      );
    }
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
        Typography
        <span className="pt-[3px] text-xl">
          {isDropdownOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
        </span>
      </button>
      {isDropdownOpen && (
        <div className="py-1 px-4 space-y-8 border-b border-gray-100">
          {/* Head */}
          <div className="font-normal mt-4 text-xs">
            {/* Heading */}
            <h1 className="pb-3 text-sm font-medium">Headings</h1>

            {/* font selector */}
            <CustomSelect
              label="Font"
              value={isHeadFontFamily}
              options={headFontFamily}
              onChange={handleFontFamily}
            />
            {/* <SelectBox label="Font" options={headFontFamily} /> */}

            {/* font size scaler */}
            <FontScale
              label="Font Size Scale"
              min="12"
              max="22"
              step="2"
              onChange={handleFontSizeScale}
              value={isHeadFontSize}
              sizes={fontSizes}
            />
          </div>

          <div className="font-normal text-xs">
            {/* Heading */}
            <h1 className="pb-3 text-sm font-medium">Body</h1>

            {/* font selector */}
            {/* <SelectBox label="Font" options={headFontFamily} /> */}
            <CustomSelect
              label="Font"
              value={isBoyFontFamily}
              options={headFontFamily}
              onChange={handleBodyFontFamily}
            />

            {/* font size scaler */}
            {/* font size scaler */}
            <FontScale
              label="Font Size Scale"
              min="12"
              max="22"
              step="2"
              onChange={handleBodyFontSizeScale}
              value={isBodyFontSize}
              sizes={fontSizes}
            />
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
