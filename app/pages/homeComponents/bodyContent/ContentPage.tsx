"use client";
import { useEffect, useState } from "react";
import {
  Categories,
  HomeBody,
  NavBar,
  PageDetailsPage,
} from "./BodyComponents";
import UndoRedoButtons from "@/app/components/UndoRedoButtons";
import { Footer } from "@/app/components/Footer";
import { useAppSelector } from "@/app/redux/hooks";
import { selectScreenType } from "@/app/redux/slices/screenSizeSlice";

export default function ContentPage() {
  const [isCurrentPage, setIsCurrentPage] = useState("Home Page");
  const screenType = useAppSelector(selectScreenType);

  useEffect(() => {
    const currentPage = localStorage.getItem("currentPage");
    setIsCurrentPage(currentPage || "Home Page");

    const handlePageChange = (event: Event) => {
      const detail = (event as CustomEvent).detail;
      setIsCurrentPage(detail);
    };

    window.addEventListener("pageChange", handlePageChange);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("pageChange", handlePageChange);
    };
  }, []);
  return (
    <main
      id="logo-sidebar"
      className={`p-0 m-0 fixed top-0 z-40 h-full max-h-[91vh] 
        my-14 mx-10 rounded-xl transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 overflow-y-auto mainScrollBar
        ${
          screenType === "full screen"
            ? "w-full -left-8"
            : ""
        } 

        ${screenType === 'screen' ?
          "w-[76.5vw] left-[310px]" : ""
        }

        ${screenType === 'mobile' ?
          "w-[50vw] left-[35%]": ""
        }
        `}
      aria-label="Sidebar"
    >
      <NavBar />
      <UndoRedoButtons />
      {isCurrentPage === "Home Page" && <HomeBody />}
      {isCurrentPage === "Categories" && <Categories />}
      {isCurrentPage === "Product Details Page" && <PageDetailsPage />}
      <Footer />
    </main>
  );
}
