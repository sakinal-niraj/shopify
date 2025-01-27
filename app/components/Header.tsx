"use client";
import { CiLogout } from "react-icons/ci";
import { TiArrowSortedDown } from "react-icons/ti";
import { FiHome } from "react-icons/fi";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { CiMobile1 } from "react-icons/ci";
import { MdOutlineTablet } from "react-icons/md";
import { GrUndo } from "react-icons/gr";
import { GrRedo } from "react-icons/gr";
import React, { useEffect, useState } from "react";

export default function Header() {
  const [isDropOpen, setIsDropOpen] = useState(false);
  const [isPageSelected, setIsPageSelected] = useState<string>("Home Page");

  useEffect(()=>{
    const page = localStorage.getItem('currentPage');
    if(page){
      setIsPageSelected(page);
    }
  },[])

  // Toggle effect on onclick
  const handleToggle = ()=>{
    setIsDropOpen((prev)=> !prev);
  }

  // Selecting the value from the page selector
  const handlePageSelection = (event: React.MouseEvent<HTMLUListElement>)=>{
    const target = event.target as HTMLElement;
    if(target.tagName === 'LI'){
      const currentPage = target.textContent as string;
      setIsPageSelected(currentPage);
      localStorage.setItem('currentPage',currentPage);
      window.dispatchEvent(new CustomEvent("pageChange", { detail: currentPage }));
      setIsDropOpen(false);
    }
  }
  return (
    <header className="bg-white fixed top-0 z-50 w-full border-b border-gray-100">
      <nav className="w-full flex justify-between items-center px-3 py-1.5">
        {/* left side */}
        <div className="flex items-center rounded-lg bg-gray-100 px-3 gap-1.5 py-1 cursor-pointer">
          <CiLogout />
          <span>Exit</span>
        </div>

        {/* middle side */}
        <div className="relative">
          <span
          onClick={handleToggle}
          className="flex items-center gap-2 hover:bg-gray-100 px-2 py-1 rounded-md cursor-pointer"
          >
            <FiHome />
            {isPageSelected}
            <span className="pt-[4px]">
              <TiArrowSortedDown />
            </span>
          </span>
          {isDropOpen && (
            <ul
             onClick={handlePageSelection}
             className="absolute left-0 top-10 bg-[#f7f7f7] w-48 p-2 rounded-lg space-y-2">
              <li className="cursor-pointer hover:bg-[white]">Home Page</li>
              <li className="cursor-pointer hover:bg-[white]">Categories</li>
              <li className="cursor-pointer hover:bg-[white]">Product Details Page</li>
            </ul>
          )}
        </div>

        {/* right side */}
        <div className="flex items-center gap-2 cursor-pointer">
          {/* device screen changer */}
          <div className="flex items-center gap-2 bg-gray-100 px-2.5 py-1.5 rounded-sm">
            <HiOutlineComputerDesktop />
            <CiMobile1 />
            <MdOutlineTablet />
          </div>

          {/* undo & redo */}
          <div className="flex items-center gap-2">
            <GrUndo />
            <GrRedo />
          </div>

          {/* save btn*/}
          <button className="bg-black text-white px-5 py-1 rounded-lg">
            Save
          </button>
        </div>
      </nav>
    </header>
  );
}
