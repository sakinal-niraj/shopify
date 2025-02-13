"use client";

import React from "react";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";


interface ArrowProps {
  onClick?: () => void; 
}

export const NextArrow: React.FC<ArrowProps> = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 right-0 z-10 transform -translate-y-1/2 cursor-pointer p-2 rounded-full"
      onClick={onClick}
    >
      <IoIosArrowDroprightCircle className="text-white text-2xl" size={30} />

    </div>
  );
};

export const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 left-0 z-10 transform -translate-y-1/2 cursor-pointer p-2 rounded-full"
      onClick={onClick}
    >
      <IoIosArrowDropleftCircle className="text-white text-2xl" size={30} />

    </div>
  );
};
