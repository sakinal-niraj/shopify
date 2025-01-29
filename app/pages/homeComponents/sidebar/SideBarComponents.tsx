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
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import { selectBodyColor, selectBodyTextColor, selectButtonColor, selectHeaderFooterColor, selectHeadTextColor, selectIconsColor, selectIconTextColor, selectMrpTextColor, selectProdutBgColor } from "@/app/redux/selectors/colorSelectors";
import { setBodyColor, setBodyTextColor, setButtonColor, setHeaderFooter, setHeadTextColor, setIconsColor, setIconTextColor, setMrpTextColor, setProductBgColor } from "@/app/redux/slices/colorSlice";

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

  const dispatch = useAppDispatch();
  const headerFooterColor = useAppSelector(selectHeaderFooterColor);
  const bodyColor = useAppSelector(selectBodyColor);
  const iconsColor = useAppSelector(selectIconsColor);
  const iconTextColor = useAppSelector(selectIconTextColor);  
  const headTextColor = useAppSelector(selectHeadTextColor);
  const bodyTextColor = useAppSelector(selectBodyTextColor);
  const buttonColor = useAppSelector(selectButtonColor);
  const productBgColor = useAppSelector(selectProdutBgColor);
  const mrpTextColor = useAppSelector(selectMrpTextColor);
  

  useEffect(() => {
    // header and footer color
    document.documentElement.style.setProperty(
      "--headerFooter-Color",
      headerFooterColor
    );
    localStorage.setItem("header_footer", headerFooterColor);

    // body color
    document.documentElement.style.setProperty(
      "--pageBackground-Color",
      bodyColor
    );
    localStorage.setItem("body_color",bodyColor);

    // icons color
    document.documentElement.style.setProperty(
      "--icons-Color",
      iconsColor,
    );
    localStorage.setItem("iconsColor",iconsColor);

    // icon text color
    document.documentElement.style.setProperty(
      "--icons-Text-Color",
      iconTextColor,
    );
    localStorage.setItem('iconTextColor',iconTextColor);

    // head text color
    document.documentElement.style.setProperty(
      "--head-Text-Color",
      headTextColor,
    );
    localStorage.setItem('headTextColor',headTextColor);

    // body text color
    document.documentElement.style.setProperty(
      "--body-Text-Color",
      bodyTextColor,
    );
    localStorage.setItem('bodyTextColor',bodyTextColor);

    // button color
    document.documentElement.style.setProperty(
      "--button-Color",
      buttonColor,
    )
    localStorage.setItem('buttonColor',buttonColor);

    // product bg color
    document.documentElement.style.setProperty(
      '--product-Bg-Color',
      productBgColor,
    );
    localStorage.setItem('productBgColor',productBgColor);

    // mrp text color
    document.documentElement.style.setProperty(
      '--mrp-Text-Color',
      mrpTextColor,
    );
    localStorage.setItem('mrpTextColor',mrpTextColor);

  }, [headerFooterColor,bodyColor,iconsColor,iconTextColor,headTextColor,bodyTextColor,buttonColor,productBgColor,mrpTextColor]);


  // header footer color change evnt handler
  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setHeaderFooter(e.target.value));
  };

  // body color change evnt handler
  const handleBodyColorChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
    dispatch(setBodyColor(e.target.value));
  }

  // icons color change event handler
  const handleIconsColorChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
    dispatch(setIconsColor(e.target.value));
  }

  // icon text color change event handler
  const handleIconTextColorChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
    dispatch(setIconTextColor(e.target.value));
  }

  // head text color change event handler
  const handleHeadTextChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    dispatch(setHeadTextColor(e.target.value));
  }

  // body text color change event handler
  const handleBodyTextChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
    dispatch(setBodyTextColor(e.target.value));
  }

  // button text color
  const handleButtonChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
    dispatch(setButtonColor(e.target.value));
  }

  // product background color change event handler
  const handleProductBgColorChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
    dispatch(setProductBgColor(e.target.value));
  }

  //  Mrp text color change event handler
  const handleMrpTextColor = (e: React.ChangeEvent<HTMLInputElement>)=>{
    dispatch(setMrpTextColor(e.target.value));
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
            value={headerFooterColor}
            onChange={handleColorChange}
            icon={<IoMdArrowDropdown />}
            id="header-footer"
          />

          {/* Page Bacground Color */}
          <ColorSelector
            label="Page Background Color"
            value={bodyColor}
            onChange={handleBodyColorChange}
            icon={<IoMdArrowDropdown />}
            id="bodyColor"
          />

          {/* Icons Color */}
          <ColorSelector
            label="Icons Color"
            value={iconsColor}
            onChange={handleIconsColorChange}
            icon={<IoMdArrowDropdown />}
            id="iconColor"
          />

          {/* Icon text Color */}
          <ColorSelector
            label="Icons Text Color"
            value={iconTextColor}
            onChange={handleIconTextColorChange}
            icon={<IoMdArrowDropdown />}
            id="iconsTextColor"
          />

          {/* head text Color */}
          <ColorSelector
            label="Head Text Color"
            value={headTextColor}
            onChange={handleHeadTextChange}
            icon={<IoMdArrowDropdown />}
            id="headTextColor"
          />

          {/* Body text Color */}
          <ColorSelector
            label="Body Text Color"
            value={bodyTextColor}
            onChange={handleBodyTextChange}
            icon={<IoMdArrowDropdown />}
            id="bodyTextColor"
          />

          {/* Button Color */}
          <ColorSelector
            label="Button Color"
            value={buttonColor}
            onChange={handleButtonChange}
            icon={<IoMdArrowDropdown />}
            id="buttonTextColor"
          />

          {/* Button Color */}
          <ColorSelector
            label="Product Background Color"
            value={productBgColor}
            onChange={handleProductBgColorChange}
            icon={<IoMdArrowDropdown />}
            id="productBgColor"
          />

          {/* Button Color */}
          <ColorSelector
            label="Mrp Text Color"
            value={mrpTextColor}
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
  const handleBodyFontSizeScale = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
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

          {/* Body */}
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
  const [isBorderThickness, setIsBorderThickness] = useState("12");

  const fontSizes: fontSizeType[] = [
    { value: "1.0" },
    { value: "1.1" },
    { value: "1.2" },
    { value: "1.3" },
    { value: "1.4" },
    { value: "1.5" },
  ];

  useEffect(() => {
    const storedFontSize = localStorage.getItem("borderThickness");
    // head font size
    if (storedFontSize) {
      setIsBorderThickness(storedFontSize);
      document.documentElement.style.setProperty(
        "--btn-border-thickness",
        storedFontSize
      );
    }
  }, []);

  // head font size scale changer
  const handleBorderThickness = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const scaleSize = event.target.value;
    setIsBorderThickness(scaleSize);
    // localStorage.setItem("borderThickness", scaleSize + "px");
    document.documentElement.style.setProperty(
      "--btn-border-thickness",
      scaleSize + "px"
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
        Buttons
        <span className="pt-[3px] text-xl">
          {isDropdownOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
        </span>
      </button>
      {isDropdownOpen && (
        <div className="py-1 px-4 space-y-2 border-b border-gray-100">
          {/* Border */}
          <div className="font-normal mt-4 text-xs">
            {/* Heading */}
            <h1 className="pb-3 text-sm font-medium">Headings</h1>

            {/* font size scaler */}
            <FontScale
              label="Border thickness"
              min="0"
              max="10"
              step="2"
              onChange={handleBorderThickness}
              value={isBorderThickness}
              sizes={fontSizes}
            />
          </div>
        </div>
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
