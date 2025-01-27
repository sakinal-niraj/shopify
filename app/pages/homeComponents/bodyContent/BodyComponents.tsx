"use client";
import { FiSearch } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa6";
import { LiaShoppingBagSolid } from "react-icons/lia";
// import { useSelector } from "react-redux";
// import { RootState } from "@/app/redux/store";
// import { useEffect, useState } from "react";

export function HomeBody() {

  return (
    <>
      {/* navbar */}
      <nav className="w-full rounded-lg">
        <div className={`flex items-center justify-between py-3 px-10 homeBody`}>
          {/* left side */}
          <div className="flex items-center">
            {/* logo */}
            <h1 className="mr-3 text-gray-700 text-xl hover:text-black">
              My store
            </h1>

            {/* links */}
            <ul className="flex ml-7 gap-6 text-sm">
              <li className="relative group cursor-pointer">
                Home
                <span className="absolute -bottom-1 left-0 bg-gray-600 group-hover:bg-black w-0 h-[2px] group-hover:w-full duration-700" />
              </li>
              <li className="relative group cursor-pointer">
                Catalog
                <span className="absolute -bottom-1 left-0 bg-gray-600 group-hover:bg-black w-0 h-[2px] group-hover:w-full duration-700" />
              </li>
              <li className="relative group cursor-pointer">
                Contact
                <span className="absolute -bottom-1 left-0 bg-gray-600 group-hover:bg-black w-0 h-[2px] group-hover:w-full duration-700" />
              </li>
            </ul>
          </div>

          {/* right side */}
          <div className="flex items-center gap-5">
            <span className="hover:scale-125 duration-300 cursor-pointer">
              <FiSearch />
            </span>
            <span className="hover:scale-125 duration-300 cursor-pointer">
              <FaRegUser />
            </span>
            <span className="hover:scale-125 duration-300 cursor-pointer">
              <LiaShoppingBagSolid size={19} />
            </span>
          </div>
        </div>
      </nav>

      {/* body */}
      
    </>
  );
}

export function Contact() {
  return <>contact</>;
}

export function About() {
  return <>about us</>;
}
