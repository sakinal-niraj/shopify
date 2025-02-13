import {
  tamplateSelectChanger,
  tamplateSlideAnimation,
  tamplateSlideAutoplay,
  tamplateSlideAutoplaySpeed,
} from "@/app/redux/slices/tamplateSlice";
import { RootState } from "@/app/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { SelectType } from "./SelectType";
import { useState } from "react";

const slideHight = [
  { id: 1, name: "Small", value: "9/3.5" },
  { id: 2, name: "Medium", value: "9 / 5" },
  { id: 3, name: "Large", value: "9/6" },
];

const slideAnimation = [
  { id: 1, name: "none", value: "none" },
  { id: 2, name: "slide", value: "slide" },
  { id: 3, name: "fade", value: "fade" },
];

const slideAutoplay = [
  { id: 1, name: "on", value: "on" },
  { id: 2, name: "off", value: "off" },
];

export const Slider = ({ secId }: { secId: string }) => {
  const dispatch = useDispatch();
  // const dispatch = useDispatch();
  const { tamplateSection } = useSelector(
    (state: RootState) => state.tamplateSection
  );
  const section = tamplateSection.find((sec) => sec.id === secId);

  // state for the autoplay speed
  const [speed, setSpeed] = useState(1000);

  // slider height handler
  const handleSlideHeight = (
    sectionId: string,
    height: string,
    size: string
  ) => {
    document.documentElement.style.setProperty("--slider-Height", size);
    dispatch(tamplateSelectChanger({ sectionId, height }));
  };

  // slider animation type handler
  const handleAnimate = (sectionId: string, animate: string) => {
    dispatch(tamplateSlideAnimation({ sectionId, animate }));
  };

  // slider autoplay hanlder
  const handleAutoplay = (sectionId: string, autoplay: string) => {
    dispatch(tamplateSlideAutoplay({ sectionId, autoplay }));
  };

  console.log(section?.autoplaySpeed)
  return (
    <div className="flex gap-2 mt-5 px-2 w-full flex-col gap-y-5">
      {/* Slide Show */}
      <SelectType
        title={"SlideShow"}
        options={slideHight}
        onClick={handleSlideHeight}
        sectionType={section?.id}
        sectionName={section?.slideHight}
      />

      {/* Animation style */}
      <SelectType
        title={"Animation style"}
        options={slideAnimation}
        onClick={handleAnimate}
        sectionType={section?.id}
        sectionName={section?.animation}
      />

      {/* Autoplay */}
      <SelectType
        title={"Autoplay"}
        options={slideAutoplay}
        onClick={handleAutoplay}
        sectionType={section?.id}
        sectionName={section?.autoplay}
      />

      {/* Auto speed */}
      <div className="flex justify-between items-center">
        <span className="w-[50%]">Autoplay speed</span>
        <div className="flex my-4 relative flex-col">
          <input
            type="range"
            min={1000}
            max={5000}
            step={1000}
            onChange={(e) => {
              const newSpeed = parseInt(e.target.value, 10);
              setSpeed(newSpeed);
              if (section?.id) {
                dispatch(tamplateSlideAutoplaySpeed({ sectionId: section.id, autoplaySpeed: newSpeed }));
              }
            }}
            value={speed}
            className={`w-full h-1 bg-gray-300 rounded-lg hover:cursor-grab  active:cursor-grabbing relative`}
          />
          <div className={"flex  w-full top-1 absolute left-1"}>
            <span className="">1</span>
            <span className="pl-[21px]">2</span>
            <span className="pl-[19.5px]">3</span>
            <span className="pl-[18.8px]">4</span>
            <span className="pl-[20px]">5</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const FeaturedCollection = ({ secId }: { secId: string }) => {
  // const dispatch = useDispatch();
  const { tamplateSection } = useSelector(
    (state: RootState) => state.tamplateSection
  );
  const section = tamplateSection.find((sec) => sec.id === secId) || {
    contentType: "",
    id: "hdk",
  };
  return <div className="flex gap-2 mt-5 px-2 w-full">{section.id}</div>;
};
