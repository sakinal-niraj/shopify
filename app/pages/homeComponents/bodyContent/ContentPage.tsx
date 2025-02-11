"use client";
import React from "react";
import {
  Categories,
  HomeBody,
  NavBar,
  PageDetailsPage,
} from "../bodyContent/BodyComponents";
import { Footer } from "@/app/components/Footer";
import { useAppSelector } from "@/app/redux/hooks";
import { selectScreenType } from "@/app/redux/slices/screenSizeSlice";
import { selectPageName } from "@/app/redux/slices/pageSlice";
import { Anouncment } from "@/app/components/Anouncment";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";

export default function ContentPage() {
  const screenType = useAppSelector(selectScreenType);
  const pageName = useAppSelector(selectPageName);
  const { sections } = useSelector((state: RootState) => state.headerSection);

  // Get only the sections that are draggable (header and announcementbar)
  const dragSections = sections.filter(
    (s) => s.type === "announcementbar" || s.type === "header"
  );

 
  return (
    <main
      id="logo-sidebar"
      className={`p-0 m-0 fixed top-0 z-40 h-full max-h-[91vh] my-14 mx-10 rounded-xl transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 overflow-y-auto mainScrollBar
      ${
        screenType === "full screen"
          ? " w-[99.5%] -left-9 2xl:w-[98%] 2xl:flex flex-col items-center 2xl:-left-5"
          : ""
      } 
      ${
        screenType === "screen"
          ? "w-[76.5vw] left-[310px] 3xl:left-[18.5%]"
          : ""
      }
      ${screenType === "mobile" ? "w-[25vw] left-[40%]" : ""}`}
      aria-label="Sidebar"
    >
      {/* Drag-and-drop context for header and announcementbar */}
          {dragSections.map((section) => {
            if (section.type === "announcementbar") {
              return (
                <div key={section.id} >
                  <div className={section.visible ? "block" : "hidden"}>
                    <Anouncment
                      visible={section.subSections.some((s) => s.visible)}
                      section={[section]}
                    />
                  </div>
                </div>
              );
            } else if (section.type === "header") {
              return (
                <div key={section.id}>
                  <NavBar
                    visible={section.visible}
                    visible1={section.subSections[0]?.visible}
                  />
                </div>
              );
            } else {
              return null;
            }
          })}

      {/* Other content remains unchanged */}
      <div className="flex ">
        {pageName === "Home Page" && <HomeBody />}
        {pageName === "Categories" && <Categories />}
        {pageName === "Product Details Page" && <PageDetailsPage />}
      </div>
      <Footer />
    </main>
  );
}
