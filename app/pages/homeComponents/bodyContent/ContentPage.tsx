"use client";
import {
  Categories,
  HomeBody,
  NavBar,
  PageDetailsPage,
} from "../bodyContent/BodyComponents";
// import UndoRedoButtons from "@/app/components/UndoRedoButtons";
import { Footer } from "@/app/components/Footer";
import { useAppSelector } from "@/app/redux/hooks";
import { selectScreenType } from "@/app/redux/slices/screenSizeSlice";
import { selectPageName } from "@/app/redux/slices/pageSlice";
// import { selectHeadComponent } from "@/app/redux/slices/layoutSlice";
// import { componentsConfig } from "@/app/constant/componentsConfig";
import { Anouncment } from "@/app/components/Anouncment";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";

export default function ContentPage() {
  const screenType = useAppSelector(selectScreenType);

  const pageName = useAppSelector(selectPageName);
  // const componentOrder = useAppSelector(selectHeadComponent);

  // selector
  const { sections } = useSelector((state: RootState) => state.headerSection);

  const headerSection = sections.find((s) => s.type === "header");
  // const announcementSection = sections.find(
  //   (s) => s.type === "announcementbar"
  // );
  
  return (
    <main
      id="logo-sidebar"
      className={`p-0 m-0 fixed top-0 z-40 h-full max-h-[91vh]
        my-14 mx-10 rounded-xl transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 overflow-y-auto mainScrollBar
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

        ${screenType === "mobile" ? "w-[25vw] left-[40%]" : ""}
        `}
      aria-label="Sidebar"
    >
      {sections
  .filter((s) => s.type === "announcementbar")
  .map((section) => (
    <div key={section.id} className={section.visible ? 'block' : 'hidden'}>
      <Anouncment
       visible={section.subSections.some((s) => s.visible)} 
       content={section.subSections.find((s)=>s.id)?.content}
       />
    </div>
  ))
}

      <div className="">
        {/* {componentOrder.map((id:number) => {
          const Component = componentsConfig[id]?.component;
          return <Component key={id} />;
        })} */}
        <NavBar
          visible={headerSection?.visible}
          visible1={headerSection?.subSections[0]?.visible}
        />
      </div>
      <div className="flex ">
        {pageName === "Home Page" && <HomeBody />}
        {pageName === "Categories" && <Categories />}
        {pageName === "Product Details Page" && <PageDetailsPage />}
      </div>
      <Footer />
    </main>
  );
}
