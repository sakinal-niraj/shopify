"use client";
import { TbSection } from "react-icons/tb";
import { CiSettings } from "react-icons/ci";
import { TbCategoryPlus } from "react-icons/tb";
import {
  Buttons,
  Colors,
  ProductCard,
  StoreDetails,
  Typography,
} from "./SideBarComponents";
import { Tooltip } from "react-tooltip";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import {
  selectSidebarType,
  setSidebarType,
} from "@/app/redux/slices/sidebarSlice";
import { IconType } from "react-icons";
// import { useState } from "react";
// import { SidebarData } from "@/app/constant/type";
import HeaderDrag from "@/app/components/HeaderDrag";
// import { DndContext, DragEndEvent } from "@dnd-kit/core";
// import { arrayMove, SortableContext } from "@dnd-kit/sortable";
// import { reorderComponents, selectHeadComponent } from "@/app/redux/slices/layoutSlice";

interface SidebarItems {
  id: number;
  name: string;
  icon: IconType;
}

// const headSideData: SidebarData[] = [
//   { id: 1, name: "marquee" },
//   { id: 2, name: "header" },
// ];

export default function SideBar() {
  // const [headData, setHeadData] = useState<SidebarData[]>(headSideData);

  const dispatch = useAppDispatch();
  const sidebarType = useAppSelector(selectSidebarType);
  // const componentOrder = useAppSelector(selectHeadComponent);

  const sidebarItems: SidebarItems[] = [
    { id: 1, name: "Section", icon: TbSection },
    { id: 2, name: "Settings", icon: CiSettings },
    { id: 3, name: "Categories", icon: TbCategoryPlus },
  ];

  const handleSidebarChange = (name: string) => {
    dispatch(setSidebarType(name));
  };

  // const handleDragEnd = (event: DragEndEvent) => {
  //   const { active, over } = event;
  //   if (over && active.id !== over.id) {
  //     // Compute indexes from the current headData (assuming headData is in scope)
  //     const oldIndex = headData.findIndex(item => item.id === active.id);
  //     const newIndex = headData.findIndex(item => item.id === over.id);

  //     // Dispatch the Redux action first
  //     dispatch(reorderComponents({ oldIndex, newIndex }));

  //     // Then update the local state
  //     setHeadData(arrayMove(headData, oldIndex, newIndex));
  //   }
  // };

  // console.log(componentOrder)

  // console.log({headData})
  return (
    <aside
      id="logo-sidebar"
      className="flex-1 flex fixed top-0 left-0 z-40 h-screen max-w-[340px] 3xl:max-w-[400px] w-full pt-10 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0"
      aria-label="Sidebar"
    >
      {/* first sldebar */}
      <div className="h-full">
        <ul className="space-y-1 font-medium p-2 outline-none">
          {sidebarItems.map((item) => (
            <li
              onClick={() => {
                handleSidebarChange(item.name);
              }}
              className={`p-2 hover:bg-gray-200 ${
                sidebarType === item.name ? "bg-gray-200" : ""
              }  rounded-md`}
              data-tooltip-id={`${item.id}`}
              data-tooltip-content={item.name}
              key={item.id}
            >
              {<item.icon size={23} />}
              <Tooltip
                id={`${item.id}`}
                place="bottom"
                style={{
                  backgroundColor: "black",
                  color: "white",
                  fontSize: "14px",
                }}
              />
            </li>
          ))}
        </ul>
      </div>

      {/* big sidebars */}
      {/* Section */}
      {sidebarType === "Section" ? (
        <div className="h-full border-l pt-[4px] border-gray-100 mainScrollBar max-h-[800px] overflow-y-auto overflow-x-hidden ">
          <ul className=" font-medium min-w-72">
            <li className="border-b border-gray-100  ">
              <button className=" p-4 w-full text-left">Sections</button>
            </li>
            <li className="space-y-2 mx-2">
              {/* <DndContext
              onDragEnd={handleDragEnd}
              > */}
              {/* <SortableContext items={headData}> */}
              {/* {headData.map((item) => ( */}
              <HeaderDrag
              // sideHead={item} key={item.id}
              />
              {/* ))} */}
              {/* </SortableContext>
              </DndContext> */}
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}

      {/* Settings */}
      {sidebarType === "Settings" ? (
        <div className="h-full border-l pt-[4px]  border-gray-100 w-full max-w-full mainScrollBar 2xl:max-h-[90vh] max-h-[800px] overflow-y-auto overflow-x-hidden ">
          <ul className=" font-medium min-w-72">
            <li className="border-b border-gray-100">
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
      ) : (
        ""
      )}

      {/* Categories */}
      {sidebarType === "Categories" ? (
        <div className="h-full border-l pt-[4px] border-gray-100 mainScrollBar max-h-[800px] overflow-y-auto overflow-x-hidden ">
          <ul className=" font-medium min-w-72">
            <li className="border-b border-gray-100 hover:bg-gray-100 ">
              <button className=" p-4 w-full text-left">Categories</button>
            </li>
            <li>
              <StoreDetails />
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}
    </aside>
  );
}
