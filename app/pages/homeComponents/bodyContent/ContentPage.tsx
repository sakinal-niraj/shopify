"use client";
import { useEffect, useState } from "react";
import { About, Contact, HomeBody, NavBar } from "./BodyComponents";
import UndoRedoButtons from "@/app/components/UndoRedoButtons";

export default function ContentPage() {
  const [isCurrentPage, setIsCurrentPage] = useState("Home Page");

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
      className="p-0 m-0 fixed top-0 left-[310px] z-40 h-full max-h-[91vh] w-[76.5vw] my-14 mx-10 rounded-xl transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 overflow-y-auto mainScrollBar"
      aria-label="Sidebar"
    >
      <NavBar />
      <UndoRedoButtons />
      {isCurrentPage === "Home Page" && <HomeBody /> }
      {isCurrentPage === "Contact Page" && <Contact /> }
      {isCurrentPage === "About Page" && <About /> }
    </main>
  );
}
