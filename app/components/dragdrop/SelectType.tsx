import { RootState } from "@/app/redux/store";
import React from "react";
import { useSelector } from "react-redux";

interface SlideHight {
  id: number;
  height: string;
  size:number;
}


interface SelectType {
  title?: string;
  slideHight?: SlideHight[];
  onClick?: (sectionId: string, height: string,size:number) => void;
  sectionType?: string;
}

export const SelectType: React.FC<SelectType> = ({
  title,
  slideHight,
  onClick,
  sectionType,
}) => {
  const { tamplateSection } = useSelector(
    (state: RootState) => state.tamplateSection
  );
  return (
    <div className="flex flex-col w-full max-w-[245px] ">
      {/* Heading */}
      <h1 className=" w-full text-left mb-1.5">{title}</h1>

      {/* Changer */}
      {tamplateSection.map((sec) => {
        if (sec.type === sectionType) {
          return (
            <div
              key={sec.id}
              className="mx-1 w-full bg-gray-200 flex p-1 rounded-md"
            >
              {slideHight?.map((h) => (
                <p
                  key={h.id}
                  className={`px-4 py-3 rounded-md font-normal ${
                    sec.slideHight == h.height ? "bg-white" : "bg-none"
                  }`}
                  onClick={() => onClick && onClick(sec.id, h.height,h.size)}
                >
                  {h.height}
                </p>
              ))}
            </div>
          );
        }
      })}
    </div>
  );
};
