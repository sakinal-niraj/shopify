"use client";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import ColorSelector from "@/app/components/ColorSelector";
import { IoClose } from "react-icons/io5";
import logo from "@/public/images/t-shirt.jpg";

// import Select from "react-select";

import FontScale from "@/app/components/FontScaleBox";
// import Select from "react-select";
import CustomSelect from "@/app/components/CustomSelect";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import {
  selectBodyColor,
  selectBodyTextColor,
  selectButtonColor,
  selectButtonTextColor,
  selectHeaderFooterColor,
  selectHeadTextColor,
  selectIconsColor,
  selectIconTextColor,
  selectMrpTextColor,
  selectProdutBgColor,
} from "@/app/redux/selectors/colorSelectors";
import {
  setBodyColor,
  setBodyTextColor,
  setButtonColor,
  setButtonTextColor,
  setHeaderFooter,
  setHeadTextColor,
  setIconsColor,
  setIconTextColor,
  setMrpTextColor,
  setProductBgColor,
} from "@/app/redux/slices/colorSlice";
import {
  selectBodyFontFamily,
  selectBodyFontSizeScale,
  selectHeadFontFamily,
  selectHeadFontScaleSize,
} from "@/app/redux/selectors/typographySelectors";
import {
  setBodyFontFamily,
  setBodyFontScaleSize,
  setHeadFontFamily,
  setHeadFontScaleSize,
} from "@/app/redux/slices/typographySlice";
import {
  selectBtnBlur,
  selectBtnBorderColor,
  selectBtnBorderRadius,
  selectBtnBorderStyle,
  selectBtnConstrastColor,
  selectBtnHorizontalOffset,
  selectBtnThickness,
  selectBtnVerticalOffset,
  selectShadowColor,
} from "@/app/redux/selectors/buttonSelectors";
import {
  setBorderColor,
  setBorderRadius,
  setBtnBlur,
  setBtnBroderStyle,
  setBtnConstrastColor,
  setBtnHorizontalOffset,
  setBtnShadowColor,
  setBtnThickness,
  setBtnVerticalOffset,
} from "@/app/redux/slices/buttonSlice";
import {
  selectImgPadding,
  selectImgRadius,
  selectProductBlur,
  selectProductBorderColor,
  selectProductBorderRadius,
  selectProductBorderStyle,
  selectProductBorderThickness,
  selectProductHorizontalOffset,
  selectProductShadowColor,
  selectProductverticalOffeset,
  selectTextAlignment,
} from "@/app/redux/selectors/productSelectors";
import {
  setImgPadding,
  setImgRadius,
  setProductBlur,
  setProductBorderColor,
  setProductBorderRadius,
  setProductBorderStyle,
  setProductBorderThickness,
  setProductHorizontalOffset,
  setProductShadowColor,
  setProductverticalOffeset,
  setTextAlignment,
} from "@/app/redux/slices/productSlice";
import {
  setStoreDetails,
  setStoreImg,
  setStoreName,
  setStoreSocialMedia,
} from "@/app/redux/slices/categorySlice";
import Input from "@/app/components/Input";
import Image from "next/image";
import {
  selectStoreDetails,
  selectStoreName,
  selectStoreSocialMedia,
} from "@/app/redux/selectors/categorySelector";
// import { handleError } from "@/app/util/toast";
// import { ToastContainer } from "react-toastify";

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
  const buttonTextColor = useAppSelector(selectButtonTextColor);

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
    localStorage.setItem("body_color", bodyColor);

    // icons color
    document.documentElement.style.setProperty("--icons-Color", iconsColor);
    localStorage.setItem("iconsColor", iconsColor);

    // icon text color
    document.documentElement.style.setProperty(
      "--icons-Text-Color",
      iconTextColor
    );
    localStorage.setItem("iconTextColor", iconTextColor);

    // head text color
    document.documentElement.style.setProperty(
      "--head-Text-Color",
      headTextColor
    );
    localStorage.setItem("headTextColor", headTextColor);

    // body text color
    document.documentElement.style.setProperty(
      "--body-Text-Color",
      bodyTextColor
    );
    localStorage.setItem("bodyTextColor", bodyTextColor);

    // button color
    document.documentElement.style.setProperty("--button-Color", buttonColor);
    localStorage.setItem("buttonColor", buttonColor);

    // button text color
    document.documentElement.style.setProperty('--btn-text-color',buttonTextColor);
    // product bg color
    document.documentElement.style.setProperty(
      "--product-Bg-Color",
      productBgColor
    );
    localStorage.setItem("productBgColor", productBgColor);

    // mrp text color
    document.documentElement.style.setProperty(
      "--mrp-Text-Color",
      mrpTextColor
    );
    localStorage.setItem("mrpTextColor", mrpTextColor);
  }, [
    headerFooterColor,
    bodyColor,
    iconsColor,
    iconTextColor,
    headTextColor,
    bodyTextColor,
    buttonColor,
    productBgColor,
    mrpTextColor,
    buttonTextColor,
  ]);

  // header footer color change evnt handler
  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setHeaderFooter(e.target.value));
  };

  // body color change evnt handler
  const handleBodyColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setBodyColor(e.target.value));
  };

  // icons color change event handler
  const handleIconsColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setIconsColor(e.target.value));
  };

  // icon text color change event handler
  const handleIconTextColorChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(setIconTextColor(e.target.value));
  };

  // head text color change event handler
  const handleHeadTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setHeadTextColor(e.target.value));
  };

  // body text color change event handler
  const handleBodyTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setBodyTextColor(e.target.value));
  };

  // button color
  const handleButtonChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setButtonColor(e.target.value));
  };

  // button text color change
  const handleButtonTextColorChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    dispatch(setButtonTextColor(e.target.value));
  }

  // product background color change event handler
  const handleProductBgColorChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(setProductBgColor(e.target.value));
  };

  //  Mrp text color change event handler
  const handleMrpTextColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setMrpTextColor(e.target.value));
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

          {/* button text color */}
            <ColorSelector
            label="Button Text Color"
            value={buttonTextColor}
            onChange={handleButtonTextColorChange}
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

  // setter
  const dispatch = useAppDispatch();
  // selectors
  const headFontFamily = useAppSelector(selectHeadFontFamily);
  const bodyFontFamily = useAppSelector(selectBodyFontFamily);
  const headFontScaleSize = useAppSelector(selectHeadFontScaleSize);
  const bodyFontSizeScale = useAppSelector(selectBodyFontSizeScale);

  const fontFamiles: Options[] = [
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
    // Head font family
    document.documentElement.style.setProperty(
      "--font-head-family",
      headFontFamily
    );
    localStorage.setItem("fontHeadFamily", headFontFamily);

    // Body font family
    document.documentElement.style.setProperty(
      "--font-body-family",
      bodyFontFamily
    );
    localStorage.setItem("fontBodyFamily", bodyFontFamily);

    // head fonts scale size
    document.documentElement.style.setProperty(
      "--head-font-scale-size",
      headFontScaleSize + "px"
    );
    localStorage.setItem("headFontScaleSize", headFontScaleSize);

    // body fonts scale size
    document.documentElement.style.setProperty(
      "--body-font-scale-Size",
      bodyFontSizeScale + "px"
    );
    localStorage.setItem("bodyFontSizeScale", bodyFontSizeScale);
  }, [headFontFamily, bodyFontFamily, headFontScaleSize, bodyFontSizeScale]);

  // body font size scale changer
  const handleBodyFontSizeScale = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(setBodyFontScaleSize(event.target.value));
  };

  // head font scale size
  const handleHeadFontSizeScale = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(setHeadFontScaleSize(event.target.value));
  };

  // head font family onchange event handler
  const handleHeadFontFamily = (selected: Options | null) => {
    if (selected) {
      dispatch(setHeadFontFamily(selected.value));
      // localStorage.setItem("headFontScaleSize",selected.value);
    }
  };

  // body font family onchange event handler
  const handlebodyFontFamily = (selected: Options | null) => {
    if (selected) {
      dispatch(setBodyFontFamily(selected.value));
      // localStorage.setItem("bodyFontSizeScale",selected.value);
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
              className1="flex justify-between items-center"
              label="Font"
              value={
                fontFamiles.find(
                  (option) => option.value === headFontFamily
                ) ?? {
                  value: "sans-serif",
                  label: "Sans-Serif", // Default fallback
                }
              }
              options={fontFamiles}
              onChange={handleHeadFontFamily}
            />

            {/* font size scaler */}
            <FontScale
              className="absolute top-2 left-0 right-0 flex gap-2.5 text-[10px] text-gray-600"
              label="Font Size Scale"
              min="12"
              max="22"
              step="2"
              onChange={handleHeadFontSizeScale}
              value={headFontScaleSize}
              sizes={fontSizes}
            />
          </div>

          {/* Body */}
          <div className="font-normal text-xs">
            {/* Heading */}
            <h1 className="pb-3 text-sm font-medium">Body</h1>

            {/* font selector */}
            {/* <SelectBox label="Font" options={fontFamiles} /> */}
            <CustomSelect
              className1="flex justify-between items-center"
              label="Font"
              value={
                fontFamiles.find(
                  (option) => option.value === bodyFontFamily
                ) ?? {
                  value: "sans-serif",
                  label: "Sans-Serif", // Default fallback
                }
              }
              options={fontFamiles}
              onChange={handlebodyFontFamily}
            />

            {/* font size scaler */}
            <FontScale
              label="Font Size Scale"
              min="12"
              max="22"
              step="2"
              onChange={handleBodyFontSizeScale}
              value={bodyFontSizeScale}
              sizes={fontSizes}
              className="absolute top-2 left-0 right-0 flex gap-2.5 text-[10px] text-gray-600"
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

  // setter
  const dispatch = useAppDispatch();

  // btn border selectors
  const btnThickness = useAppSelector(selectBtnThickness);
  const btnBorderStyle = useAppSelector(selectBtnBorderStyle);
  const btnBorderRadius = useAppSelector(selectBtnBorderRadius);
  const btnBorderColor = useAppSelector(selectBtnBorderColor);
  const btnConstractColor = useAppSelector(selectBtnConstrastColor);
  const btnVerticalOffset = useAppSelector(selectBtnVerticalOffset);
  const btnBlur = useAppSelector(selectBtnBlur);
  const btnShadowColor = useAppSelector(selectShadowColor);

  // btn shadwo selectors
  const btnHorizontalOffset = useAppSelector(selectBtnHorizontalOffset);

  // border sizes
  const Sizes: fontSizeType[] = [
    { value: "0" },
    { value: "1" },
    { value: "2" },
    { value: "3" },
    { value: "4" },
    { value: "5" },
  ];

  const RadiusSizes: fontSizeType[] = [
    { value: "0" },
    { value: "2" },
    { value: "4" },
    { value: "6" },
    { value: "8" },
    { value: "10" },
  ];

  const blueSize: fontSizeType[] = [
    { value: "0" },
    { value: "5" },
    { value: "10" },
    { value: "15" },
    { value: "20" },
    { value: "25" },
  ];

  // shadow sizes
  const shadowOffset: fontSizeType[] = [
    { value: "-8" },
    { value: "-6" },
    { value: "-4" },
    { value: "-2" },
    { value: "0" },
    { value: "2" },
    { value: "4" },
    { value: "6" },
    { value: "8" },
  ];

  const borderTypes: Options[] = [
    { value: "dotted", label: "Dotted" },
    { value: "dashed", label: "Dashed" },
    { value: "solid", label: "Solid" },
    { value: "double", label: "Double" },
    { value: "groove", label: "Groove" },
    { value: "ridge", label: "Ridge" },
    { value: "inset", label: "Inset" },
    { value: "outset", label: "Outset" },
    { value: "none", label: "None" },
    { value: "hidden", label: "Hidden" },
  ];

  useEffect(() => {
    // btn border

    // btn border thickness
    document.documentElement.style.setProperty(
      "--btn-border-thickness",
      btnThickness + "px"
    );
    localStorage.setItem("btnThickness", btnThickness);

    // border style
    document.documentElement.style.setProperty(
      "--btn-border-style",
      btnBorderStyle
    );
    localStorage.setItem("btnBorderStyle", btnBorderStyle);

    // btn border radius
    document.documentElement.style.setProperty(
      "--btn-border-radius",
      btnBorderRadius + "px"
    );
    localStorage.setItem("btnBorderRadius", btnBorderRadius);

    // btn border color
    document.documentElement.style.setProperty(
      "--btn-border-color",
      btnBorderColor
    );
    localStorage.setItem("btnBorderColor", btnBorderColor);

    // btn constract color
    document.documentElement.style.setProperty(
      "--btn-constrast-border-color",
      btnConstractColor
    );

    // btn shadow
    // btnHorizontalOffset
    document.documentElement.style.setProperty(
      "--btn-horizontal-offset",
      btnHorizontalOffset + "px"
    );
    localStorage.setItem("btnHorizontalOffset", btnHorizontalOffset);

    // btnVerticalOffset
    document.documentElement.style.setProperty(
      "--btn-vertical-offset",
      btnVerticalOffset + "px"
    );
    localStorage.setItem("btnVerticalOffset", btnVerticalOffset);

    // btnBlur size
    document.documentElement.style.setProperty("--btn-blur", btnBlur + "px");
    localStorage.setItem("btnBlur", btnBlur);

    // shadow color
    document.documentElement.style.setProperty(
      "--btn-shadow-color",
      btnShadowColor
    );
    localStorage.setItem("btnShadowColor", btnShadowColor);
  }, [
    btnThickness,
    btnBorderStyle,
    btnBorderRadius,
    btnBorderColor,
    btnConstractColor,
    btnHorizontalOffset,
    btnVerticalOffset,
    btnBlur,
    btnShadowColor,
  ]);

  // handlers

  // btn border thickness handler
  const handleBtnBorderThickness = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setBtnThickness(e.target.value));
  };

  // Btn border style handler
  const handleBtnBorderStyle = (selected: Options | null) => {
    if (selected) {
      dispatch(setBtnBroderStyle(selected.value));
    }
  };

  // btn border radius handler
  const handleBtnBorderRadius = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setBorderRadius(e.target.value));
  };

  // btn border color handler
  const handleBtnBorderColor = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setBorderColor(e.target.value));
  };

  // btn constract color
  const handleBtnConstractColor = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setBtnConstrastColor(e.target.value));
  };

  // shadow

  // btn horizontal shadow handlers
  const handleBtnHorizontalOffset = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setBtnHorizontalOffset(e.target.value));
  };

  // btn vertical shadow handlers
  const handleBtnVerticalOffset = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setBtnVerticalOffset(e.target.value));
  };

  // btn blue handler
  const handleBtnBlue = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setBtnBlur(e.target.value));
  };

  const handleBtnShadowColor = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setBtnShadowColor(e.target.value));
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
        <div className="py-1 px-4 space-y-16 border-b border-gray-100">
          {/* Border */}
          <div className="font-normal mt-4 text-xs">
            {/* Border */}
            <h1 className="pb-3 text-sm font-medium">Border</h1>

            <div className="space-y-6 mb-2">
              {/* Border Width sizer */}
              <FontScale
                value={btnThickness}
                label="Thickness"
                min="0"
                max="5"
                step="1"
                sizes={Sizes}
                onChange={handleBtnBorderThickness}
                className="absolute top-2 left-[4px] right-0 flex gap-[17px] text-[10px] text-gray-600"
              />

              <CustomSelect
                className1="flex justify-between items-center"
                label="Border Style"
                options={borderTypes}
                onChange={handleBtnBorderStyle}
                value={
                  borderTypes.find(
                    (option) => option.value === btnBorderStyle
                  ) ?? {
                    value: "sans-serif",
                    label: "Sans-Serif", // Default fallback
                  }
                }
              />

              {/* btn border types */}
              <FontScale
                label="Border radius"
                min="0"
                max="10"
                step="2"
                sizes={RadiusSizes}
                onChange={handleBtnBorderRadius}
                value={btnBorderRadius}
                className="absolute top-2 left-[4.5px] right-0 flex gap-[16.9px] text-[10px] text-gray-600"
              />

              {/* btn border color */}
              <ColorSelector
                label="Border color"
                value={btnBorderColor}
                onChange={handleBtnBorderColor}
                icon={<IoMdArrowDropdown />}
                id="header-footer"
              />

              {/* btn constract border color */}
              <ColorSelector
                label="Constract Border Color"
                value={btnConstractColor}
                onChange={handleBtnConstractColor}
                icon={<IoMdArrowDropdown />}
                id="header-footer"
              />
            </div>
          </div>

          {/* Shadow */}
          <div className="font-normal mt-4 text-xs">
            {/* Border */}
            <h1 className="pb-3 text-sm font-medium">Shadow</h1>

            <div className="space-y-6 mb-2">
              {/* Border Width sizer */}
              <FontScale
                value={btnHorizontalOffset}
                label="Horizontal offset"
                min="-20"
                max="20"
                step="5"
                sizes={shadowOffset}
                onChange={handleBtnHorizontalOffset}
                className="absolute top-2 left-[0.2px] right-0 flex gap-[7px] text-[10px] text-gray-600"
              />

              {/* btn border types */}
              <FontScale
                label="Vertical offset"
                min="-20"
                max="20"
                step="2"
                sizes={shadowOffset}
                onChange={handleBtnVerticalOffset}
                value={btnVerticalOffset}
                className="absolute top-2 left-[0.2px] right-0 flex gap-[7px] text-[10px] text-gray-600"
              />

              {/* btn border types */}
              <FontScale
                label="Blur"
                min="0"
                max="20"
                step="5"
                sizes={blueSize}
                onChange={handleBtnBlue}
                value={btnBlur}
                className="absolute top-2 left-[3px] right-0 flex gap-[22px] text-[10px] text-gray-600"
              />

              {/* btn border color */}
              <ColorSelector
                label="Shadow color"
                value={btnShadowColor}
                onChange={handleBtnShadowColor}
                icon={<IoMdArrowDropdown />}
                id="header-footer"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// Product crads
export function ProductCard() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // setter
  const dispatch = useAppDispatch();

  // product img selectors
  const imgPadding = useAppSelector(selectImgPadding);
  const imgRadius = useAppSelector(selectImgRadius);
  const textAlignment = useAppSelector(selectTextAlignment);

  // product border selectors
  const productBorderThickness = useAppSelector(selectProductBorderThickness);
  const productBorderStyle = useAppSelector(selectProductBorderStyle);
  const productBorderRadius = useAppSelector(selectProductBorderRadius);
  const productBorderColor = useAppSelector(selectProductBorderColor);

  // product shadwo selectors
  const productHorizontalOffset = useAppSelector(selectProductHorizontalOffset);
  const productverticalOffeset = useAppSelector(selectProductverticalOffeset);
  const productBlur = useAppSelector(selectProductBlur);
  const productShadowColor = useAppSelector(selectProductShadowColor);

  // product img padding
  const imgPaddingSizes: fontSizeType[] = [
    { value: "0" },
    { value: "4" },
    { value: "8" },
    { value: "12" },
    { value: "16" },
    { value: "20" },
  ];

  // product img radius
  const imgRadiusSizes: fontSizeType[] = [
    { value: "0" },
    { value: "2" },
    { value: "4" },
    { value: "6" },
    { value: "8" },
    { value: "10" },
    { value: "12" },
  ];

  // border sizes
  const Sizes: fontSizeType[] = [
    { value: "0" },
    { value: "1" },
    { value: "2" },
    { value: "3" },
    { value: "4" },
    { value: "5" },
  ];

  const RadiusSizes: fontSizeType[] = [
    { value: "0" },
    { value: "4" },
    { value: "8" },
    { value: "12" },
    { value: "16" },
    { value: "20" },
  ];

  const blueSize: fontSizeType[] = [
    { value: "0" },
    { value: "5" },
    { value: "10" },
    { value: "15" },
    { value: "20" },
    { value: "25" },
  ];

  // shadow sizes
  const shadowOffset: fontSizeType[] = [
    { value: "-8" },
    { value: "-6" },
    { value: "-4" },
    { value: "-2" },
    { value: "0" },
    { value: "2" },
    { value: "4" },
    { value: "6" },
    { value: "8" },
  ];

  // border types
  const borderTypes: Options[] = [
    { value: "dotted", label: "Dotted" },
    { value: "dashed", label: "Dashed" },
    { value: "solid", label: "Solid" },
    { value: "double", label: "Double" },
    { value: "groove", label: "Groove" },
    { value: "ridge", label: "Ridge" },
    { value: "inset", label: "Inset" },
    { value: "outset", label: "Outset" },
    { value: "none", label: "None" },
    { value: "hidden", label: "Hidden" },
  ];

  // text alignment types
  const textAlignments: Options[] = [
    { value: "center", label: "Center" },
    { value: "start", label: "Start" },
    { value: "end", label: "End" },
  ];

  useEffect(() => {
    // product
    // img padding
    document.documentElement.style.setProperty(
      "--img-padding",
      imgPadding + "px"
    );
    localStorage.setItem("imgPadding", imgPadding);

    // imgRadius
    document.documentElement.style.setProperty(
      "--img-radius",
      imgRadius + "px"
    );
    localStorage.setItem("imgRadius", imgRadius);

    // textAlignment
    document.documentElement.style.setProperty(
      "--text-alignment",
      textAlignment
    );
    localStorage.setItem("textAlignment", textAlignment);

    // product btn border

    // product border thickness
    document.documentElement.style.setProperty(
      "--product-border-thickness",
      productBorderThickness + "px"
    );
    localStorage.setItem("productBorderThickness", productBorderThickness);

    // product border style
    document.documentElement.style.setProperty(
      "--product-border-style",
      productBorderStyle
    );
    localStorage.setItem("productBorderStyle", productBorderStyle);

    // product border radius
    document.documentElement.style.setProperty(
      "--product-border-radius",
      productBorderRadius + "px"
    );
    localStorage.setItem("productBorderRadius", productBorderRadius);

    // product border color
    document.documentElement.style.setProperty(
      "--product-border-color",
      productBorderColor
    );
    localStorage.setItem("productBorderColor", productBorderColor);

    // btn shadow
    // btnHorizontalOffset
    document.documentElement.style.setProperty(
      "--product-horizontal-offset",
      productHorizontalOffset + "px"
    );
    localStorage.setItem("productHorizontalOffset", productHorizontalOffset);

    // btnVerticalOffset
    document.documentElement.style.setProperty(
      "--product-vertical-offset",
      productverticalOffeset + "px"
    );
    localStorage.setItem("productverticalOffeset", productverticalOffeset);

    // btnBlur size
    document.documentElement.style.setProperty(
      "--product-blur",
      productBlur + "px"
    );
    localStorage.setItem("productBlur", productBlur);

    // shadow color
    document.documentElement.style.setProperty(
      "--product-shadow-color",
      productShadowColor
    );
    localStorage.setItem("btnShadowColor", productShadowColor);
  }, [
    productBorderThickness,
    productBorderStyle,
    productBorderRadius,
    productBorderColor,
    productHorizontalOffset,
    productverticalOffeset,
    productBlur,
    productShadowColor,
    imgPadding,
    imgRadius,
    textAlignment,
  ]);

  // handlers
  // product handler
  // img padding handler
  const handleProductImgPadding = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setImgPadding(e.target.value));
  };

  // img radius handler
  const hanldeProductImgRdius = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setImgRadius(e.target.value));
  };

  // text alignment handler
  const handleProductTextAlignment = (selected: Options | null) => {
    if (selected) {
      dispatch(setTextAlignment(selected.value));
    }
  };

  // border handlers

  // btn border thickness handler
  const handleProductBorderThickness = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setProductBorderThickness(e.target.value));
  };

  // Btn border style handler
  const handleProductBorderStyle = (selected: Options | null) => {
    if (selected) {
      dispatch(setProductBorderStyle(selected.value));
    }
  };

  // btn border radius handler
  const handleProductBorderRadius = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setProductBorderRadius(e.target.value));
  };

  // btn border color handler
  const handleProductBorderColor = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setProductBorderColor(e.target.value));
  };

  // shadow

  // btn horizontal shadow handlers
  const handleProductHorizontalOffset = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setProductHorizontalOffset(e.target.value));
  };

  // btn vertical shadow handlers
  const handleProductVerticalOffset = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setProductverticalOffeset(e.target.value));
  };

  // btn blue handler
  const handleProductBlue = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setProductBlur(e.target.value));
  };

  const handleProductShadowColor = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setProductShadowColor(e.target.value));
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
        Product cards
        <span className="pt-[3px] text-xl">
          {isDropdownOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
        </span>
      </button>
      {isDropdownOpen && (
        <div className="py-1 px-4 space-y-2 border-b border-gray-100">
          {/* Product */}
          <div className="font-normal mt-4 text-xs">
            {/* product */}
            <h1 className="pb-3 text-sm font-medium">Product</h1>
            <div className="space-y-6 mb-2">
              {/* Image padding sizer */}
              <FontScale
                value={imgPadding}
                label="Image Padding"
                min="0"
                max="20"
                step="4"
                sizes={imgPaddingSizes}
                onChange={handleProductImgPadding}
                className="absolute top-2 left-[2px] right-0 flex gap-[16px] text-[10px] text-gray-600"
              />

              {/* image radius */}
              <FontScale
                label="Image radius"
                min="0"
                max="12"
                step="2"
                sizes={imgRadiusSizes}
                onChange={hanldeProductImgRdius}
                value={imgRadius}
                className="absolute top-2 left-[0.2px] right-0 flex gap-[13.4px] text-[10px] text-gray-600"
              />

              {/* Text alignmetn */}
              <CustomSelect
                className1="flex justify-between items-center"
                label="Text Alignment"
                options={textAlignments}
                onChange={handleProductTextAlignment}
                value={
                  textAlignments.find(
                    (option) => option.value === textAlignment
                  ) ?? {
                    value: "sans-serif",
                    label: "Sans-Serif", // Default fallback
                  }
                }
              />
            </div>
          </div>

          {/* Border */}
          <div className="font-normal mt-4 text-xs">
            {/* Border */}
            <h1 className="pb-3 text-sm font-medium">Border</h1>

            <div className="space-y-6 mb-2">
              {/* Border Width sizer */}
              <FontScale
                value={productBorderThickness}
                label="Thickness"
                min="0"
                max="5"
                step="1"
                sizes={Sizes}
                onChange={handleProductBorderThickness}
                className="absolute top-2 left-[0.2px] right-0 flex gap-[19px] text-[10px] text-gray-600"
              />

              <CustomSelect
                className1="flex justify-between items-center"
                label="Border Style"
                options={borderTypes}
                onChange={handleProductBorderStyle}
                value={
                  borderTypes.find(
                    (option) => option.value === productBorderStyle
                  ) ?? {
                    value: "sans-serif",
                    label: "Sans-Serif", // Default fallback
                  }
                }
              />

              {/* btn border types */}
              <FontScale
                min="0"
                max="20"
                step="4"
                label="Border radius"
                sizes={RadiusSizes}
                onChange={handleProductBorderRadius}
                value={productBorderRadius}
                className="absolute top-2 left-[0.2px] right-0 flex gap-[15px] text-[10px] text-gray-600"
              />

              {/* btn border color */}
              <ColorSelector
                label="Border color"
                value={productBorderColor}
                onChange={handleProductBorderColor}
                icon={<IoMdArrowDropdown />}
                id="header-footer"
              />
            </div>
          </div>

          {/* Shadow */}
          <div className="font-normal mt-4 text-xs">
            {/* Border */}
            <h1 className="pb-3 text-sm font-medium">Shadow</h1>

            <div className="space-y-6 mb-2">
              {/* Border Width sizer */}
              <FontScale
                value={productHorizontalOffset}
                label="Horizontal offset"
                min="-8"
                max="8"
                step="2"
                sizes={shadowOffset}
                onChange={handleProductHorizontalOffset}
                className="absolute top-2 left-[0.2px] right-0 flex gap-[7px] text-[10px] text-gray-600"
              />

              {/* btn border types */}
              <FontScale
                label="Vertical offset"
                min="-8"
                max="8"
                step="2"
                sizes={shadowOffset}
                onChange={handleProductVerticalOffset}
                value={productverticalOffeset}
                className="absolute top-2 left-[0.2px] right-0 flex gap-[7px] text-[10px] text-gray-600"
              />

              {/* btn border types */}
              <FontScale
                label="Blur"
                min="0"
                max="20"
                step="5"
                sizes={blueSize}
                onChange={handleProductBlue}
                value={productBlur}
                className="absolute top-2 left-[0.2px] right-0 flex gap-[19px] text-[10px] text-gray-600"
              />

              {/* btn border color */}
              <ColorSelector
                label="Shadow color"
                value={productShadowColor}
                onChange={handleProductShadowColor}
                icon={<IoMdArrowDropdown />}
                id="header-footer"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

interface DropdownState {
  storeImg: boolean;
  storeName: boolean;
  storeDetails: boolean;
  storeSocialMedia: boolean;
}
// Category

export function StoreDetails() {
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [stName, setStName] = useState("");
  const [stDetails, setStDetails] = useState("");
  const [stSocialMedia, setStSocialMedia] = useState({
    google: "",
    whatsapp: "",
    instagram: "",
    pinterest: "",
    twitter: "",
  });
  const [isClicked, setIsClicked] = useState<DropdownState>({
    storeImg: false,
    storeName: false,
    storeDetails: false,
    storeSocialMedia: false,
  });

  const dispatch = useAppDispatch();
  const storeName = useAppSelector(selectStoreName);
  const storeSocialMedia = useAppSelector(selectStoreSocialMedia);
  const storeDetails = useAppSelector(selectStoreDetails);

  useEffect(() => {
    setStName(storeName);

    setStDetails(storeDetails);
    setStSocialMedia({
      google: storeSocialMedia[0],
      whatsapp: storeSocialMedia[1],
      instagram: storeSocialMedia[2],
      pinterest: storeSocialMedia[3],
      twitter: storeSocialMedia[4],
    });
  }, [storeName, storeDetails, storeSocialMedia]);
  // store file change
  const handlFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];

    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  // handle cancle button
  const handleImgClick = () => {
    setFile(null);
    dispatch(setStoreImg(""));
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // store name handler
  const handleStoreName = () => {
    if (stName.trim()) {
      dispatch(setStoreName(stName));
      // setStName("");
    }
  };

  // store details handler
  const handleStoreDetails = () => {
    if (stDetails.trim()) {
      dispatch(setStoreDetails(stDetails));
      // setStDetails("");
    }
  };

  // store social media
  const handleStoreSocialMedia = () => {
    dispatch(setStoreSocialMedia([
      stSocialMedia.google,
      stSocialMedia.whatsapp,
      stSocialMedia.instagram,
      stSocialMedia.pinterest,
      stSocialMedia.twitter
    ]));
};


  // file submit
  const handleFileSubmit = () => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        dispatch(setStoreImg(reader.result as string));
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className=" space-y-4  border-gray-100 w-full">
      {/* Store Image */}
      {/* // StoreDetails.tsx (image section) */}
      <div className="font-medium mt-2 text-sm space-y-1   border-b pb-2.5 py-1 pl-1">
        <div
          className="flex  items-center justify-between w-full px-3 "
          onClick={() => {
            setIsClicked((prev) => ({
              ...prev,
              storeImg: !prev.storeImg,
            }));
          }}
        >
          <h1 className="pb-1">Store Image</h1>
          <span
            className={`transition-transform ${
              isClicked.storeImg ? "rotate-180" : "rotate-0"
            } duration-300`}
          >
            <MdKeyboardArrowDown size={25} />
          </span>
        </div>
        {isClicked.storeImg && (
          <>
            <input
              type="file"
              ref={fileInputRef}
              accept="image/*"
              onChange={handlFileChange}
              className="border p-2 w-full outline-none rounded-md"
            />

            {/* Image Preview */}
            <div className={`mt-2 relative ${file ? "hidden" : "block"}`}>
              <Image
                src={logo}
                alt="Store preview"
                width={270}
                height={128}
                className="max-h-32 object-cover rounded-md"
              />
            </div>

            {file && (
              <div className="mt-2 relative ">
                <Image
                  src={URL.createObjectURL(file)}
                  alt="Store preview"
                  width={275}
                  height={128}
                  className="max-h-32 object-cover rounded-md"
                />
                <IoClose
                  onClick={handleImgClick}
                  className="absolute top-0 right-2 text-black text-2xl"
                />
              </div>
            )}

            <button
              onClick={handleFileSubmit}
              className="mt-2 p-2 bg-blue-300 text-white w-full hover:bg-blue-600 transition-colors"
            >
              Upload Store Image
            </button>
          </>
        )}
      </div>
      {/* Store Name */}
      <div
        className="border-b  pb-2.5 pl-1"
        onClick={() => {
          setIsClicked((prev) => ({
            ...prev,
            storeName: !prev.storeName,
          }));
        }}
      >
        <div className="flex items-center justify-between pr-2.5">
          <h1 className="pb-1 pl-2.5">Store Name</h1>
          <span
            className={`transition-transform ${
              isClicked.storeName ? "rotate-180" : "rotate-0"
            } duration-300`}
          >
            <MdKeyboardArrowDown size={25} />
          </span>
        </div>
        {isClicked.storeName && (
          <div>
            <Input
              value={stName}
              onChange={(e) => setStName(e.target.value)}
              onClick={handleStoreName}
              btnText="Submit"
              placeholder="My store name"
            />
          </div>
        )}
      </div>
      {/* Store detials */}
      <div
        className="border-b  pb-2.5 pl-1"
        onClick={() => {
          setIsClicked((prev) => ({
            ...prev,
            storeDetails: !prev.storeDetails,
          }));
        }}
      >
        <div className="flex items-center justify-between pr-2.5">
          <h1 className="pb-1 pl-2.5">Store details</h1>
          <span
            className={`transition-transform ${
              isClicked.storeDetails ? "rotate-180" : "rotate-0"
            } duration-300`}
          >
            <MdKeyboardArrowDown size={25} />
          </span>
        </div>
        {isClicked.storeDetails && (
          <Input
            value={stDetails}
            onChange={(e) => setStDetails(e.target.value)}
            onClick={handleStoreDetails}
            btnText="Submit"
            placeholder="address"
          />
        )}
      </div>
      {/* Store Social media */}
      <div className="border-b  pb-2.5 pl-1">
        <div
          className="flex items-center justify-between pr-2.5"
          onClick={() => {
            setIsClicked((prev) => ({
              ...prev,
              storeSocialMedia: !prev.storeSocialMedia,
            }));
          }}
        >
          <h1 className="pb-1 pl-2.5">Store Social Media</h1>
          <span
            className={`transition-transform ${
              isClicked.storeSocialMedia ? "rotate-180" : "rotate-0"
            } duration-300`}
          >
            <MdKeyboardArrowDown size={25} />
          </span>
        </div>
        {isClicked.storeSocialMedia && (
          <div>
            <Input
              value={stSocialMedia.google}
              onChange={(e) =>
                setStSocialMedia((prev) => ({
                  ...prev,
                  google: e.target.value,
                }))
              }
              placeholder="Facebook"
            />
            <Input
              value={stSocialMedia.whatsapp}
              onChange={(e) =>
                setStSocialMedia((prev) => ({
                  ...prev,
                  whatsapp: e.target.value,
                }))
              }
              placeholder="WhatsApp link"
            />
            <Input
              value={stSocialMedia.instagram}
              onChange={(e) =>
                setStSocialMedia((prev) => ({
                  ...prev,
                  instagram: e.target.value,
                }))
              }
              placeholder="Instagram link"
            />
            <Input
              value={stSocialMedia.pinterest}
              onChange={(e) =>
                setStSocialMedia((prev) => ({
                  ...prev,
                  pinterest: e.target.value,
                }))
              }
              placeholder="Pinterest link"
            />
            <Input
              value={stSocialMedia.twitter}
              onChange={(e) =>
                setStSocialMedia((prev) => ({
                  ...prev,
                  twitter: e.target.value,
                }))
              }
              placeholder="Twitter link"
            />
            <div className="pr-4">
              <button
                className="mt-2 p-2 bg-blue-500 text-white w-full"
                onClick={handleStoreSocialMedia}
              >
                Submit
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
