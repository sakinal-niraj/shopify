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
import {
  addSection,
  addsubSection,
  deleteSection,
  deleteSubSection,
  toggleSubSectoinVisiblity,
  toggleVisiblity,
  updateAnnouncementType,
  updateSubSectionContent,
  reorderSections,
} from "../../redux/slices/layoutSlice";
import { InputSection } from "../InputSection";

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

export default function HeaderDrag() {
  const dispatch = useDispatch();
  const { sections } = useSelector((state: RootState) => state.headerSection);

  // Set up a sensor with an activation constraint to require a small movement before dragging starts
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    })
  );

  // Local state for dropdowns and menus
  const [headerDropDown, setHeaderDropDown] = useState(false);
  const [announcementDropDown, setAnnouncementDropDown] = useState<
    Record<string, boolean>
  >({});
  const [isheaderMenubar, setIsHeaderMenubar] = useState(false);
  const [isSubMenubar, setIsSubMenubar] = useState<{
    sectionId?: string;
    subSectionId?: string;
  }>({});
  const [isSectoinMenubar, setIsSectoinMenubar] = useState<{
    sectionId?: string;
  }>({});

  const handleAnnouncementDelete = (sectionId: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete the announcement bar?",
      showCancelButton: true,
      confirmButtonText: "Delete",
      confirmButtonColor: "#dc3545",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteSection(sectionId));
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
        dispatch(deleteSubSection({ sectionId, subSectionId }));
      }
    });
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (active.id !== over?.id) {
      const oldIndex = sections.findIndex((s) => s.id === active.id);
      const newIndex = sections.findIndex((s) => s.id === over?.id);
      dispatch(reorderSections({ oldIndex, newIndex }));
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={sections.map((s) => s.id)}
        strategy={verticalListSortingStrategy}
      >
        <div>
          <h1 className="text-[#222222] text-sm font-medium pb-1">Header</h1>
          {sections.map((section) => {
            if (section.type === "header") {
              return (
                <SortableSection key={section.id} section={section}>
                  <div className="flex items-center justify-between px-1 hover:bg-gray-100 rounded-lg group">
                    <div className="flex items-center gap-0.5 cursor-pointer w-full">
                      <span
                        className="hover:bg-gray-200 rounded-xl text-gray-800"
                        onClick={(e) => {
                          e.stopPropagation();
                          setHeaderDropDown(!headerDropDown);
                        }}
                        onMouseDown={(e) => e.stopPropagation()}
                      >
                        {headerDropDown ? (
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
                        Header
                      </span>
                    </div>
                    <span
                      onClick={(e) => {
                        e.stopPropagation();
                        dispatch(toggleVisiblity(section.id));
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
                  {headerDropDown &&
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
                              // onClick={(e) => {
                              //   e.stopPropagation();
                              //   setIsHeaderMenubar(true);
                              // }}
                              onMouseDown={(e) => e.stopPropagation()}
                            >
                              {subSection.id}
                            </span>
                          </p>
                          <div className="flex items-center justify-between">
                            <span
                              onClick={(e) => {
                                e.stopPropagation();
                                dispatch(
                                  toggleSubSectoinVisiblity({
                                    sectionId: section.id,
                                    subSectionId: subSection.id,
                                  })
                                );
                              }}
                              className="hover:bg-gray-200 p-1 rounded-lg cursor-pointer"
                              onMouseDown={(e) => e.stopPropagation()}
                            >
                              {subSection.visible ? (
                                <LuEye className="hidden group-hover:block" />
                              ) : (
                                <LuEyeOff className="hidden group-hover:block" />
                              )}
                            </span>
                          </div>
                        </div>
                        <div
                          className={`fixed top-12 right-0 z-40 h-screen overflow-y-auto transition-transform bg-white w-[83%] duration-500 ${
                            isheaderMenubar ? "block" : "hidden"
                          }`}
                          role="dialog"
                          aria-labelledby="drawer-right-label"
                        >
                          <div className="flex items-center font-semibold text-base mt-4">
                            <span
                              onClick={(e) => {
                                e.stopPropagation();
                                setIsHeaderMenubar(false);
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
                </SortableSection>
              );
            } else if (section.type === "announcementbar") {
              return (
                <SortableSection key={section.id} section={section}>
                  <div>
                    <div className="flex items-center justify-between px-1 hover:bg-gray-100 rounded-lg group">
                      <div className="flex items-center gap-0.5 cursor-pointer w-full">
                        <span
                          className="py-1.5 hover:bg-gray-200 rounded-xl text-gray-800"
                          onClick={(e) => {
                            e.stopPropagation();
                            setAnnouncementDropDown((prev) => ({
                              ...prev,
                              [section.id]: !prev[section.id],
                            }));
                          }}
                          onMouseDown={(e) => e.stopPropagation()}
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
                            dispatch(toggleVisiblity(section.id));
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
                    {announcementDropDown[section.id] &&
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
                                  setIsSubMenubar({
                                    sectionId: section.id,
                                    subSectionId: subSection.id,
                                  });
                                }}
                                onMouseDown={(e) => e.stopPropagation()}
                              >
                                {subSection.content}
                              </span>
                            </p>
                            <div className="flex items-center justify-between">
                              {section.subSections.length > 1 && (
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
                              )}
                              <span
                                onClick={(e) => {
                                  e.stopPropagation();
                                  dispatch(
                                    toggleSubSectoinVisiblity({
                                      sectionId: section.id,
                                      subSectionId: subSection.id,
                                    })
                                  );
                                }}
                                className="hover:bg-gray-200 p-1 rounded-lg cursor-pointer"
                                onMouseDown={(e) => e.stopPropagation()}
                              >
                                {subSection.visible ? (
                                  <LuEye className="hidden group-hover:block" />
                                ) : (
                                  <LuEyeOff className="hidden group-hover:block" />
                                )}
                              </span>
                            </div>
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
                                <MdKeyboardArrowLeft
                                  size={23}
                                  className="pt-0.5"
                                />
                              </span>
                              {section.content}
                            </div>
                            <div className="flex gap-2 mt-5 px-2 w-full">
                              <button
                                className={`${
                                  section.contentType === "marquee"
                                    ? "bg-black text-white"
                                    : "bg-white text-black"
                                } w-full flex items-center justify-center cursor-pointer transition-transform active:translate-y-0.5 h-20 border border-black rounded-md`}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  dispatch(
                                    updateAnnouncementType({
                                      sectionId: section.id,
                                      type: "marquee",
                                    })
                                  );
                                }}
                                onMouseDown={(e) => e.stopPropagation()}
                              >
                                Marquee
                              </button>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  dispatch(
                                    updateAnnouncementType({
                                      sectionId: section.id,
                                      type: "slider",
                                    })
                                  );
                                }}
                                className={`${
                                  section.contentType === "slider"
                                    ? "bg-black text-white"
                                    : "bg-white text-black"
                                } w-full flex items-center justify-center cursor-pointer transition-transform active:translate-y-0.5 h-20 border border-black rounded-md`}
                                onMouseDown={(e) => e.stopPropagation()}
                              >
                                Slider
                              </button>
                            </div>
                          </div>
                          <div
                            className={`fixed top-12 right-0 z-40 h-screen overflow-y-auto transition-transform bg-white w-[83%] duration-500 ${
                              isSubMenubar.sectionId === section.id &&
                              isSubMenubar.subSectionId === subSection.id
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
                                  setIsSubMenubar({});
                                }}
                                className="cursor-pointer"
                                onMouseDown={(e) => e.stopPropagation()}
                              >
                                <MdKeyboardArrowLeft
                                  size={23}
                                  className="pt-0.5"
                                />
                              </span>
                              {subSection.content}
                            </div>
                            <div className="mt-8 mx-2">
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
                            </div>
                          </div>
                        </div>
                      ))}
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        dispatch(addsubSection({ sectionId: section.id }));
                      }}
                      className={`${
                        announcementDropDown[section.id] ? "block" : "hidden"
                      } text-blue-600 text-sm flex items-center ml-[52px] text-center gap-1 font-normal cursor-pointer w-full`}
                      onMouseDown={(e) => e.stopPropagation()}
                    >
                      <span className="pt-[1px]">
                        <FiPlusCircle />
                      </span>
                      Add section
                    </div>
                  </div>
                </SortableSection>
              );
            } else {
              return null;
            }
          })}
          <div
            className="pt-2 flex items-center justify-center w-full px-1 hover:bg-gray-100 rounded-lg group"
            onClick={(e) => {
              e.stopPropagation();
              dispatch(addSection({ type: "announcementbar" }));
            }}
            onMouseDown={(e) => e.stopPropagation()}
          >
            <div className="text-blue-600 text-sm flex items-center ml-6 text-center gap-1 font-normal cursor-pointer w-full">
              <span className="pt-[1px]">
                <FiPlusCircle />
              </span>
              Add section
            </div>
          </div>
        </div>
      </SortableContext>
    </DndContext>
  );
}
