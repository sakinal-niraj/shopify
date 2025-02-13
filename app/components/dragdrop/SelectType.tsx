import { RootState } from "@/app/redux/store";
import React from "react";
import { useSelector } from "react-redux";

interface SlideHight {
  id: number;
  name: string;
  value:string;
}


interface SelectType {
  title?: string;
  options?: SlideHight[];
  onClick?: (sectionId: string, name: string,value:string) => void;
  sectionType?: string;
  sectionName?:string;
}
export const SelectType: React.FC<SelectType> = ({
  title,
  options,
  onClick,
  sectionType,
  sectionName
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
        if (sec.id === sectionType) {
          return (
            <div
              key={sec.id}
              className="mx-1 w-full bg-gray-200 flex p-1 rounded-md"
            >
              {options?.map((h) => (
                <p
                  key={h.id}
                  className={`px-4 py-3 rounded-md font-normal first-letter:uppercase ${
                    sectionName === h.name ? "bg-white" : "bg-none"
                  }`}
                  onClick={() => onClick && onClick(sectionType, h?.name,h?.value)}
                >
                  {h.name}
                </p>
              ))}
            </div>
          );
        }
      })}
    </div>
  );
};
