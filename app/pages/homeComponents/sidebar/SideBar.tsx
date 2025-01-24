"use client";
import { TbSection } from "react-icons/tb";
import { CiSettings } from "react-icons/ci";
import { TbCategoryPlus } from "react-icons/tb";
import { Buttons, Colors, ProductCard, Typography } from "./SideBarComponents";
// import Colors from "./SideBarComponents";



export default function SideBar() {
  return (
    <aside
      id="logo-sidebar"
      className="flex fixed top-0 left-0 z-40 h-screen pt-10 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0"
      aria-label="Sidebar"
    >
      {/* first sldebar */}
      <div className="h-full">
        <ul className="space-y-1 font-medium p-2">
          <li className="p-2 hover:bg-gray-100 rounded-md">
            <TbSection size={20} />
          </li>
          <li className="p-2 hover:bg-gray-100 rounded-md">
            <CiSettings size={20} />
          </li>
          <li className="p-2 hover:bg-gray-100 rounded-md">
            <TbCategoryPlus size={20} />
          </li>
        </ul>
      </div>

      {/* big sidebar */}
      <div className="h-full border-l border-gray-100">
        <ul className=" font-medium pt-[4px] min-w-72">
          <li className="border-b border-gray-100 hover:bg-gray-100 ">
            <button className=" p-4 w-full text-left">Themes settings</button>
          </li>
          <li className="">
            <Colors />
          </li>
          <li className="">
            <Typography />
          </li>
          <li className="">
            <Buttons />
          </li>
          <li className="">
            <ProductCard />
          </li>
        </ul>
      </div>
    </aside>
  );
}
