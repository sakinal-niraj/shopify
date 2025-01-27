"use client";
import { HomeBody, NavBar } from "./BodyComponents";

export default function ContentPage() {
  return (
    <main
      id="logo-sidebar"
      className="p-0 m-0 fixed top-0 left-[310px] z-40 h-full max-h-[91vh] w-[76.5vw] my-14 mx-10 rounded-xl transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 overflow-y-auto mainScrollBar"
      aria-label="Sidebar"
    >
     <NavBar />
     <HomeBody />
    </main>
  );
}
