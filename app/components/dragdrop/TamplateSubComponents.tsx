import {
  tamplateSelectChanger,
  tamplateUpdateAnnouncementType,
} from "@/app/redux/slices/tamplateSlice";
import { RootState } from "@/app/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { SelectType } from "./SelectType";

interface SlideHight {
  id: number;
  height: string;
  size:number;
}
export const Slider = () => {
  const dispatch = useDispatch();
  const slideHight: SlideHight[] = [
    { id: 1, height: "Small", size:9/3.5 },
    { id: 2, height: "Medium", size: 9 / 5},
    { id: 3, height: "Large",size:9/6 },
  ];

  const handleSlideHeight = (sectionId: string, height: string,size:number) => {
    document.documentElement.style.setProperty(
        '--slider-Height',
        `${size}`
    )
    dispatch(tamplateSelectChanger({ sectionId, height }));
  };
  return (
    <div className="flex gap-2 mt-5 px-2 w-full">
        {/* Slide Show */}
      <SelectType
        title={"SlideShow"}
        slideHight={slideHight}
        onClick={handleSlideHeight}
        sectionType={"Slider"}
      />

    </div>
  );
};

export const FeaturedCollection = () => {
  const dispatch = useDispatch();
  const { tamplateSection } = useSelector(
    (state: RootState) => state.tamplateSection
  );
  const section = tamplateSection.find(
    (sec) => sec.type === "announcementbar"
  ) || { contentType: "", id: "" };
  return (
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
            tamplateUpdateAnnouncementType({
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
            tamplateUpdateAnnouncementType({
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
  );
};

// export const Featur
