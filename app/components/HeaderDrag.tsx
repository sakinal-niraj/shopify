"use client";

// import React, { useState } from "react";
// import { SidebarData } from "../constant/type";
// import { useSortable } from "@dnd-kit/sortable";
// import { CSS } from "@dnd-kit/utilities";
import Swal from "sweetalert2";
// import 'sweetalert2/src/sweetalert2.scss'
import { MdKeyboardArrowRight } from "react-icons/md";
import { RiLayoutTopFill } from "react-icons/ri";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { MdKeyboardArrowDown } from "react-icons/md";
import { PiDotsSixVerticalBold } from "react-icons/pi";
import { LuSquareDashed } from "react-icons/lu";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { IoTrashOutline } from "react-icons/io5";
import { FiPlusCircle } from "react-icons/fi";

import { useState } from "react";
import { InputSection } from "./InputSection";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import {
  addSection,
  deleteSection,
  toggleSubSectoinVisiblity,
  toggleVisiblity,
  updateSubSectionContent,
} from "../redux/slices/layoutSlice";

// interface DropdownState {
//   header: boolean;
//   announcement: boolean;
// }

function HeaderDrag() {
  // dispatch
  const dispatch = useDispatch();
  // selector
  const { sections } = useSelector((state: RootState) => state.headerSection);

  const [headerDropDown, setHeaderDropDown] = useState(false);
  const [announcementDropDown, setAnnouncementDropDown] = useState<
    Record<string, boolean>
  >({});

  const [isheaderMenubar, setIsHeaderMenubar] = useState(false);
  // const [isAnnouncementMenubar , setIsAnnouncementMenubar] = useState<Record<string,boolean>>)
  // const [activeMenu, setActiveMenu] = 
  const [isMenubar, setIsMenubar] = useState<{
    sectionId?: string;
    subSectionId?: string;
  }>({});

  // finding announcement and header sections
  const headerSection = sections.find((s) => s.type === "header");

  const handleAnnouncementDelete = (sectionId: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete the announcement bar?",
      showCancelButton: true,
      confirmButtonText: "Delete",
      confirmButtonColor: "#dc3545",
      // denyButtonText: `No`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        dispatch(deleteSection(sectionId));
      }
    });
  };

  // const handleAnnouncementInput = (e: React.ChangeEvent<HTMLInputElement>) => {

  //   };
  return (
    <div>
      <h1 className="text-[#222222] text-sm font-medium pb-1">Header</h1>
      {/* Header */}
      {headerSection && (
        <div className="flex items-center justify-between px-1 hover:bg-gray-100 rounded-lg group">
          <div className="flex items-center gap-0.5 cursor-pointer w-full">
            <span
              className=" hover:bg-gray-200 rounded-xl text-gray-800  "
              onClick={() => setHeaderDropDown(!headerDropDown)}
            >
              {headerDropDown ? (
                <MdKeyboardArrowDown className="mb-0.5" size={20} />
              ) : (
                <MdKeyboardArrowRight size={20} className="" />
              )}
            </span>
            <span className="flex items-center gap-1 cursor-grab text-sm w-full">
              <span className="py-2 px-1 hover:bg-gray-200 rounded-2xl text-gray-800 pt-2">
                <PiDotsSixVerticalBold className=" group-hover:block hidden" />{" "}
                <RiLayoutTopFill className="group-hover:hidden block" />
              </span>
              Header
            </span>
          </div>

          <span
            onClick={() => {
              dispatch(toggleVisiblity(headerSection.id));
            }}
            className="hover:bg-gray-200 p-1 rounded-lg cursor-pointer"
          >
            {headerSection.visible ? (
              <LuEye className="hidden group-hover:block" />
            ) : (
              <LuEyeOff className=" hidden group-hover:block" />
            )}
          </span>
        </div>
      )}
      {headerDropDown &&
        headerSection?.subSections.map((subSection) => (
          <div key={subSection.id}>
            <div className=" p-1 ml-6 rounded-lg hover:bg-gray-100 flex items-center justify-between w-[80%] gap-1.5 font-normal cursor-pointer text-sm group">
              <p className="flex items-center gap-1 ">
                <span className="hover:bg-gray-200 p-1 rounded-lg cursor-pointer">
                  <LuSquareDashed className="block group-hover:hidden " />
                  <PiDotsSixVerticalBold className="hidden group-hover:block" />
                </span>
                <span
                  className="text-xs w-fit"
                  onClick={() => setIsHeaderMenubar(true)}
                >
                  Menu links
                </span>
              </p>

              <div className="flex items-center justify-between">
                <span
                  onClick={() =>
                    dispatch(
                      toggleSubSectoinVisiblity({
                        sectionId: headerSection.id,
                        subSectionId: subSection.id,
                      })
                    )
                  }
                  className="hover:bg-gray-200 p-1 rounded-lg cursor-pointer"
                >
                  {subSection.visible ? (
                    <LuEye className="hidden group-hover:block" />
                  ) : (
                    <LuEyeOff className=" hidden group-hover:block" />
                  )}
                </span>
              </div>
            </div>
            <div
              className={`fixed top-12 right-0 z-40 h-screen  overflow-y-auto transition-transform bg-white w-[83%] duration-500 ${
                isheaderMenubar ? "block" : "hidden"
              }`}
              role="dialog"
              aria-labelledby="drawer-right-label"
            >
              <div className="flex items-center font-semibold text-base mt-4">
                <span
                  onClick={() => setIsHeaderMenubar(false)}
                  className="cursor-pointer "
                >
                  <MdKeyboardArrowLeft size={23} className="pt-0.5" />
                </span>
                Menu Links
              </div>

              {/* Input boxes and Menu links */}
              <div className="mt-8 mx-2">
                {/* input boxes */}
                <div className="flex flex-col gap-y-6">
                  <InputSection label="Text" placeholder="Enter Link Name" />
                  <InputSection label={"Link"} placeholder="Pase link" />
                </div>

                {/* menu links */}
                <div className="mt-6">
                  <ul className="space-y-2">
                    <li>Home</li>
                    <li>Cateories</li>
                    <li>Product Details</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}

      {/* Anouncment bar */}
      {sections
        .filter((s) => s.type === "announcementbar")
        .map((section) => (
          <div key={section.id}>
            <div className="flex items-center justify-between px-1 hover:bg-gray-100 rounded-lg group">
              <div className="flex items-center gap-0.5 cursor-pointer w-full">
                <span
                  className="py-1.5 hover:bg-gray-200 rounded-xl text-gray-800"
                  onClick={() =>
                    setAnnouncementDropDown((prev) => ({
                      ...prev,
                      [section.id]: !prev[section.id],
                    }))
                  }
                >
                  {announcementDropDown[section.id] ? (
                    <MdKeyboardArrowDown className="mb-0.5" size={20} />
                  ) : (
                    <MdKeyboardArrowRight size={20} />
                  )}
                </span>
                <span className="flex items-center gap-1 cursor-grab text-sm w-full">
                  <span className="py-2 px-1 hover:bg-gray-200 rounded-2xl text-gray-800">
                    <PiDotsSixVerticalBold className="group-hover:block hidden" />
                    <RiLayoutTopFill className="group-hover:hidden block" />
                  </span>
                  <span
                    onClick={() => {
                      setIsMenubar({ sectionId: section.id });
                    }}
                  >
                    {section.id}
                  </span>
                </span>
              </div>

              <p className="flex items-center">
                <span
                  onClick={() => handleAnnouncementDelete(section.id)}
                  // dispatch(deleteSection(section.id))
                  className="group-hover:block hidden cursor-pointer"
                >
                  <IoTrashOutline />
                </span>
                <span
                  onClick={() => dispatch(toggleVisiblity(section.id))}
                  className="hover:bg-gray-200 p-1 rounded-lg cursor-pointer"
                >
                  {section.visible ? (
                    <LuEye className="hidden group-hover:block" />
                  ) : (
                    <LuEyeOff className="hidden group-hover:block" />
                  )}
                </span>
              </p>
            </div>

            {announcementDropDown[section.id] &&
              section.subSections.map((subSection) => (
                <div key={subSection.id}>
                  <div className=" p-1 ml-6 rounded-lg hover:bg-gray-100 flex items-center justify-between w-[80%] gap-1.5 font-normal cursor-pointer text-sm group">
                    <p className="flex items-center gap-1 ">
                      <span className="hover:bg-gray-200 p-1 rounded-lg cursor-pointer">
                        <LuSquareDashed className="block group-hover:hidden " />
                        <PiDotsSixVerticalBold className="hidden group-hover:block" />
                      </span>
                      <span
                        className="text-xs w-fit"
                        onClick={() => setIsMenubar({ 
                          sectionId: section.id, 
                          subSectionId: subSection.id 
                        })}
                      >
                        {subSection.id}
                      </span>
                    </p>

                    <div className="flex items-center justify-between">
                      <span
                        onClick={() => {
                          dispatch(
                            toggleSubSectoinVisiblity({
                              sectionId: section.id,
                              subSectionId: subSection.id,
                            })
                          );
                        }}
                        className="hover:bg-gray-200 p-1 rounded-lg cursor-pointer"
                      >
                        {subSection.visible ? (
                          <LuEye className="hidden group-hover:block" />
                        ) : (
                          <LuEyeOff className=" hidden group-hover:block" />
                        )}
                      </span>
                    </div>
                  </div>
                  <div
                    className={`fixed top-12 right-0 z-40 h-screen  overflow-y-auto transition-transform bg-white w-[83%] duration-500 ${
                      (isMenubar.sectionId === section.id || 
                        isMenubar.subSectionId === subSection.id) 
                       ? "block" : "hidden"
                     }`}
                    role="dialog"
                    aria-labelledby="drawer-right-label"
                  >
                    <div className="flex items-center font-semibold text-base mt-4">
                      <span
                        onClick={() => setIsMenubar({})}
                        className="cursor-pointer "
                      >
                        <MdKeyboardArrowLeft size={23} className="pt-0.5" />
                      </span>
                      {section.id}
                    </div>

                    {/* Input boxes and Menu links */}
                    <div className="mt-8 mx-2">
                      {/* input boxes */}
                      <div
                        className={`flex gap-2 w-full ${
                          isMenubar.sectionId === section.id && 
                  !isMenubar.subSectionId ? "block" : "hidden"
                }`}>
                        <button className="w-full flex items-center bg-black text-white justify-center cursor-pointer transition-transform active:translate-y-0.5 h-20 border border-black rounded-md">
                          Marquee
                        </button>
                        <button className="w-full flex items-center justify-center cursor-pointer transition-transform active:translate-y-0.5 h-20 bg-white border border-black rounded-md">
                          Slide
                        </button>
                      </div>
                      <div
                        className={`${
                          isMenubar.subSectionId === subSection.id ? "block" : "hidden"
                        }`}
                      >
                        <div className="flex flex-col gap-y-4">
                          <InputSection
                            key={subSection.id}
                            label="Text"
                            value={subSection.content}
                            onChange={(e) => {
                              dispatch(
                                updateSubSectionContent({
                                  sectionId: section.id,
                                  subSectionId: subSection.id,
                                  content: e.target.value,
                                })
                              );
                            }}
                            placeholder="Change Announcementbar text"
                          />
                        </div>
                        {/* menu links */}
                        {/* <div className="mt-6">
                          <ul className="space-y-2">
                            <li>{subSection.id}</li>
                          </ul>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        ))}
      {/* add new anouncement bar */}
      <div
        className="pt-2 flex items-center justify-center w-full px-1 hover:bg-gray-100 rounded-lg group"
        onClick={() => {
          dispatch(addSection({ type: "announcementbar" }));
        }}
      >
        <div className="text-blue-600 text-sm  flex items-center ml-6 text-center gap-1 font-normal cursor-pointer w-full">
          <span className="pt-[1px]">
            <FiPlusCircle className="" />
          </span>
          Add section
        </div>
      </div>
    </div>
  );
}

export default HeaderDrag;
