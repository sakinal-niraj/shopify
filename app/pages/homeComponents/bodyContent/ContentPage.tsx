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
  const { footerSections } = useSelector(
    (state: RootState) => state.footerSection
  );

  // Get only the sections that are draggable (header and announcementbar)
  const dragSections = sections.filter(
    (s) => s.type === "announcementbar" || s.type === "header"
  );

  const footerDragSections = footerSections.filter(
    (s) => s.type === "announcementbar" || s.type === "footer"
  );

  return (
    <main
      id="logo-sidebar"
      className={`p-0 m-0 fixed top-0 z-40 h-full max-h-[91vh] my-14 mx-10 rounded-xl transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 overflow-y-auto mainScrollBar
      ${
        screenType === "full screen" &&
        " w-[99.5%] -left-9 2xl:w-[98%] 2xl:flex flex-col items-center 2xl:-left-5"
      } 
      ${screenType === "screen" && "w-[76.5vw] left-[310px] 3xl:left-[20%]"}
      ${screenType === "mobile" ? "w-[25vw] left-[40%]" : ""}`}
      aria-label="Sidebar"
    >
      <div className="w-full">
        {/* Drag-and-drop context for header and announcementbar */}
        {dragSections.map((section) => {
          if (section.type === "announcementbar") {
            return (
              <div key={section.id} className="w-full">
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
              <div key={section.id} className="w-full">
                <NavBar
                  visible={section.visible}
                  visible1={section.subSections[0]?.visible}
                  visible2={section.subSections[1]?.visible}
                  visible3={section.subSections[2]?.visible}
                />
              </div>
            );
          } else {
            return null;
          }
        })}

        {/* Other content remains unchanged */}
        <div className="w-full overflow-x-hidden ">
          {pageName === "Home Page" && <HomeBody />}
          {pageName === "Categories" && <Categories />}
          {pageName === "Product Details Page" && <PageDetailsPage />}
        </div>

        {footerDragSections.map((section) => {
          if (section.type === "announcementbar") {
            return (
              <div key={section.id} className="w-full">
                <div
                  className={`w-full ${section.visible ? "block" : "hidden"}`}
                >
                  <Anouncment
                    visible={section.subSections.some((s) => s.visible)}
                    section={[section]}
                  />
                </div>
              </div>
            );
          } else if (section.type === "footer") {
            return (
              <div
                key={section.id}
                className={`w-full ${
                  screenType === "mobile" ? "hidden" : "block"
                }`}
              >
                <Footer
                  visible={section.visible}
                  visible1={section.subSections[0]?.visible}
                  visible2={section.subSections[1]?.visible}
                  visible3={section.subSections[2]?.visible}
                />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </main>
  );
}
