"use client";
import React, { useState } from "react";
import {
  DndContext,
  closestCenter,
  DragEndEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Swal from "sweetalert2";
import {
  MdKeyboardArrowRight,
  MdKeyboardArrowDown,
  MdKeyboardArrowLeft,
} from "react-icons/md";
import { RiLayoutTopFill } from "react-icons/ri";
import { LuEye, LuEyeOff, LuSquareDashed } from "react-icons/lu";
import { PiDotsSixVerticalBold } from "react-icons/pi";
import { IoTrashOutline } from "react-icons/io5";
import { FiPlusCircle } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { InputSection } from "../InputSection";
import {
  addTamplateSection,
  addTamplateSubSection,
  deleteTamplateSection,
  deleteTamplateSubSection,
  tamplateReorderSections,
  // tamplateToggleSubSectionVisibility,
  tamplateToggleVisibility,
} from "@/app/redux/slices/tamplateSlice";
import { FeaturedCollection, Slider } from "./TamplateSubComponents";

interface SubSection {
  id: string;
  visible?: boolean;
  content?: string;
  type?: string;
}

interface Section {
  id: string;
  content: string;
  type: string;
  visible: boolean;
  contentType: string;
  subSections: SubSection[];
}

interface DraggableSectionProps {
  section: Section;
  children: React.ReactNode;
}

function SortableSection({ section, children }: DraggableSectionProps) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: section.id,
    });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {children}
    </div>
  );
}

export default function TamplateDrag() {
  const dispatch = useDispatch();
  const { tamplateSection } = useSelector(
    (state: RootState) => state.tamplateSection
  );

  // Set up a sensor with an activation constraint to require a small movement before dragging starts
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    })
  );

  // Local state for dropdowns and menus
  const [tamplateDropDown, setTamplateDropDown] = useState(false);
  // const [announcementDropDown, setAnnouncementDropDown] = useState<
  //   Record<string, boolean>
  // >({});

  // Slider
  const [isSliderMenubar, setIsSliderMenubar] = useState(false);
  const [isSectoinMenubar, setIsSectoinMenubar] = useState<{
    sectionId?: string;
  }>({});

  // Suggestion box for the adding section
  const [isAddSection, setIsAddSection] = useState(false);

  const handleAnnouncementDelete = (sectionId: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete the announcement bar?",
      showCancelButton: true,
      confirmButtonText: "Delete",
      confirmButtonColor: "#dc3545",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteTamplateSection(sectionId));
      }
    });
  };

  const handleSubSectionAnnouncementDelete = (
    sectionId: string,
    subSectionId: string
  ) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete the announcement bar?",
      showCancelButton: true,
      confirmButtonText: "Delete",
      confirmButtonColor: "#dc3545",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteTamplateSubSection({ sectionId, subSectionId }));
      }
    });
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (active.id !== over?.id) {
      const oldIndex = tamplateSection.findIndex((s) => s.id === active.id);
      const newIndex = tamplateSection.findIndex((s) => s.id === over?.id);
      dispatch(tamplateReorderSections({ oldIndex, newIndex }));
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={tamplateSection.map((s) => s.id)}
        strategy={verticalListSortingStrategy}
      >
        <div>
          <h1 className="text-[#222222] text-sm font-medium pb-1">Tamplate</h1>
          {tamplateSection.map((section) => {
            if (section.type === "Slider") {
              return (
                <SortableSection key={section.id} section={section}>
                  <div className="flex items-center justify-between px-1 hover:bg-gray-100 rounded-lg group">
                    <div className="flex items-center gap-0.5 cursor-pointer w-full">
                      <span
                        className="hover:bg-gray-200 rounded-xl text-gray-800"
                        onClick={(e) => {
                          e.stopPropagation();
                          setTamplateDropDown(!tamplateDropDown);
                        }}
                        onMouseDown={(e) => e.stopPropagation()}
                      >
                        {tamplateDropDown ? (
                          <MdKeyboardArrowDown className="mb-0.5" size={20} />
                        ) : (
                          <MdKeyboardArrowRight size={20} />
                        )}
                      </span>

                      <span className="flex items-center gap-1 cursor-grab text-sm w-full">
                        <span className="py-2 px-1 hover:bg-gray-200 rounded-2xl text-gray-800 pt-2">
                          <PiDotsSixVerticalBold className="group-hover:block hidden" />
                          <RiLayoutTopFill className="group-hover:hidden block" />
                        </span>
                        <span
                          onClick={(e) => {
                            e.stopPropagation();
                            setIsSectoinMenubar({ sectionId: section.id });
                          }}
                          onMouseDown={(e) => e.stopPropagation()}
                        >
                          {section.content}
                        </span>
                      </span>
                    </div>
                    <span
                      onClick={(e) => {
                        e.stopPropagation();
                        dispatch(tamplateToggleVisibility(section.id));
                      }}
                      className="hover:bg-gray-200 p-1 rounded-lg cursor-pointer"
                      onMouseDown={(e) => e.stopPropagation()}
                    >
                      {section.visible ? (
                        <LuEye className="hidden group-hover:block" />
                      ) : (
                        <LuEyeOff className="hidden group-hover:block" />
                      )}
                    </span>
                  </div>
                  <div
                    className={`fixed top-12 right-0 z-40 h-screen overflow-y-auto transition-transform bg-white w-[83%] duration-500 ${
                      isSectoinMenubar.sectionId === section.id
                        ? "block"
                        : "hidden"
                    }`}
                    role="dialog"
                    aria-labelledby="drawer-right-label"
                  >
                    <div className="flex items-center font-semibold text-base mt-4">
                      <span
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsSectoinMenubar({});
                        }}
                        className="cursor-pointer"
                        onMouseDown={(e) => e.stopPropagation()}
                      >
                        <MdKeyboardArrowLeft size={23} className="pt-0.5" />
                      </span>
                      {section.content}
                    </div>
                    <Slider />
                  </div>
                  {tamplateDropDown &&
                    section.subSections.map((subSection: SubSection) => (
                      <div key={subSection.id}>
                        <div className="p-1 ml-6 rounded-lg hover:bg-gray-100 flex items-center justify-between w-[80%] gap-1.5 font-normal cursor-pointer text-sm group">
                          <p className="flex items-center gap-1">
                            <span
                              className="hover:bg-gray-200 p-1 rounded-lg cursor-pointer"
                              onMouseDown={(e) => e.stopPropagation()}
                            >
                              <LuSquareDashed className="block group-hover:hidden" />
                              <PiDotsSixVerticalBold className="hidden group-hover:block" />
                            </span>
                            <span
                              className="text-xs w-fit"
                              onClick={(e) => {
                                e.stopPropagation();
                                setIsSliderMenubar(true);
                              }}
                              onMouseDown={(e) => e.stopPropagation()}
                            >
                              {subSection.content}
                            </span>
                          </p>
                          <div className="flex items-center justify-between">
                            {section.id === "slider" &&
                              section.subSections.length > 1 && (
                                <>
                                  <span
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleSubSectionAnnouncementDelete(
                                        section.id,
                                        subSection.id
                                      );
                                    }}
                                    className="group-hover:block hidden cursor-pointer"
                                    onMouseDown={(e) => e.stopPropagation()}
                                  >
                                    <IoTrashOutline />
                                  </span>
                                </>
                              )}
                          </div>
                        </div>
                        <div
                          className={`fixed top-12 right-0 z-40 h-screen overflow-y-auto transition-transform bg-white w-[83%] duration-500 ${
                            isSliderMenubar ? "block" : "hidden"
                          }`}
                          role="dialog"
                          aria-labelledby="drawer-right-label"
                        >
                          <div className="flex items-center font-semibold text-base mt-4">
                            <span
                              onClick={(e) => {
                                e.stopPropagation();
                                setIsSliderMenubar(false);
                              }}
                              className="cursor-pointer"
                              onMouseDown={(e) => e.stopPropagation()}
                            >
                              <MdKeyboardArrowLeft
                                size={23}
                                className="pt-0.5"
                              />
                            </span>
                            Menu Links
                          </div>
                          <div className="mt-8 mx-2">
                            <div className="flex flex-col gap-y-6">
                              <InputSection
                                label="Text"
                                placeholder="Enter Link Name"
                              />
                              <InputSection
                                label="Link"
                                placeholder="Paste link"
                              />
                            </div>
                            <div className="mt-6">
                              <ul className="space-y-2">
                                <li>Home</li>
                                <li>Categories</li>
                                <li>Product Details</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      dispatch(
                        addTamplateSubSection({ sectionId: section.id })
                      );
                    }}
                    className={`${
                      tamplateDropDown ? "block" : "hidden"
                    } text-blue-600 text-sm flex items-center ml-[52px] text-center gap-1 font-normal cursor-pointer w-full`}
                    onMouseDown={(e) => e.stopPropagation()}
                  >
                    <span className="pt-[1px]">
                      <FiPlusCircle />
                    </span>
                    Add section
                  </div>
                </SortableSection>
              );
            } else if (section.type !== "Slider") {
              return (
                <SortableSection key={section.id} section={section}>
                  <div>
                    <div className="flex items-center justify-between px-1 hover:bg-gray-100 rounded-lg group">
                      <div className="flex items-center gap-0.5 cursor-pointer w-full">
                        {/* <span
                          className="py-1.5 pl-5"
                          onClick={(e) => {
                            e.stopPropagation();
                            setAnnouncementDropDown((prev) => ({
                              ...prev,
                              [section.id]: !prev[section.id],
                            }));
                          }}
                          onMouseDown={(e) => e.stopPropagation()}
                        > 

                        </span> */}
                        <div className="flex items-center gap-1  text-sm w-full ml-5">
                          <div className="py-2 px-1 hover:bg-gray-200 rounded-2xl text-gray-800">
                            <PiDotsSixVerticalBold className="group-hover:block hidden hover:cursor-grab" />
                            <RiLayoutTopFill className="group-hover:hidden block" />
                          </div>
                          <div
                            onClick={(e) => {
                              e.stopPropagation();
                              setIsSectoinMenubar({ sectionId: section.id });
                              console.log("Updated isSectoinMenubar:", {
                                sectionId: section.id,
                              });
                            }}
                          >
                            {section.content}
                          </div>
                        </div>
                      </div>
                      <p className="flex items-center">
                        <span
                          onClick={(e) => {
                            e.stopPropagation();
                            handleAnnouncementDelete(section.id);
                          }}
                          className="group-hover:block hidden cursor-pointer"
                          onMouseDown={(e) => e.stopPropagation()}
                        >
                          <IoTrashOutline />
                        </span>
                        <span
                          onClick={(e) => {
                            e.stopPropagation();
                            dispatch(tamplateToggleVisibility(section.id));
                          }}
                          className="hover:bg-gray-200 p-1 rounded-lg cursor-pointer"
                          onMouseDown={(e) => e.stopPropagation()}
                        >
                          {section.visible ? (
                            <LuEye className="hidden group-hover:block" />
                          ) : (
                            <LuEyeOff className="hidden group-hover:block" />
                          )}
                        </span>
                      </p>
                    </div>
                    {/* section menu bar */}
                    <div
                      className={`fixed top-12 right-0 z-40 h-screen overflow-y-auto transition-transform bg-white w-[83%] duration-500 ${
                        isSectoinMenubar.sectionId === section.id
                          ? "block"
                          : "hidden"
                      }`}
                      role="dialog"
                      aria-labelledby="drawer-right-label"
                    >
                      <div className="flex items-center font-semibold text-base mt-4">
                        <span
                          onClick={(e) => {
                            e.stopPropagation();
                            setIsSectoinMenubar({});
                          }}
                          className="cursor-pointer"
                          onMouseDown={(e) => e.stopPropagation()}
                        >
                          <MdKeyboardArrowLeft size={23} className="pt-0.5" />
                        </span>
                        {section.content}
                      </div>
                      {section.type === "Featured Collection" && (
                        <FeaturedCollection />
                      )}
                    </div>
                  </div>
                </SortableSection>
              );
            } else {
              return null;
            }
          })}
          <div className="pt-2 flex items-center justify-center w-full px-1 hover:bg-gray-100 rounded-lg group">
            {isAddSection && (
              <div
                className="fixed inset-0  bg-opacity-50 z-0  transition-all ease-out duration-300"
                onClick={() => {
                  setIsAddSection(false);
                }}
              />
            )}
            <div
              className="text-blue-600 text-sm flex items-center ml-6 text-center gap-1 font-normal cursor-pointer w-full relative"
              onClick={() => {
                setIsAddSection(true);
              }}
            >
              <span className="pt-[1px]">
                <FiPlusCircle />
              </span>
              Add section
              {isAddSection && (
                <div className="absolute top-5 -left-2 rounded-md bg-white border border-gray-200 max-w-[400px] w-full text-left">
                  {tamplateSection.map((sec) => (
                    <div key={sec.id} className="p-1">
                      <span
                        onClick={(e) => {
                          e.stopPropagation();
                          dispatch(addTamplateSection({ type: sec.type }));
                          setIsAddSection(false);
                        }}
                        className="w-full"
                      >
                        {sec.type}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </SortableContext>
    </DndContext>
  );
}
