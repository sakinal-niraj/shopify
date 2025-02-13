
'use client';
import React from "react";
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from "../constant/Arrows";


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

interface AnnouncementBarProps {
  visible?: boolean;
  //   subSections: SubSection[];
  section: Section[];
}

export const Anouncment: React.FC<AnnouncementBarProps> = ({
  visible,
  section,
}) => {
 const sliderSettings = {
    dots: false, 
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,         
    autoplaySpeed: 3000,    
    pauseOnHover: true,
    nextArrow:<NextArrow />,
    prevArrow:<PrevArrow />,
  };

  return (
    <div
    className={`bg-black text-white w-full overflow-hidden font-semibold p-1 ${
      visible ? "block" : "hidden"
    }`}
  >
    {section.map((sec) => {
      if (sec.contentType === "marquee") {
        return (
          <h1 key={sec.id} className="animate-marquee flex gap-x-10 whitespace-nowrap">
            {sec.subSections.map((sub) => (
              <span key={sub.id} className={sub.visible ? "block" : "hidden"}>
                {sub.content}
              </span>
            ))}
          </h1>
        );
      } else {
        if(sec.subSections.length > 1){
          return (
            <div key={sec.id} className="">
              <Slider {...sliderSettings}>
                {sec.subSections.map((sub) => (
                  <div key={sub.id} className="px-2">
                    {sub.visible && (
                      <span className="block text-center">{sub.content}</span>
                    )}
                  </div>
                ))}
              </Slider>
            </div>
          );
        }else{
          return(
            <div key={sec.id}>
              {sec.subSections.map((sub) => (
                  <div key={sub.id} className="px-2">
                    {sub.visible && (
                      <span className="block text-center">{sub.content}</span>
                    )}
                  </div>
                ))}
            </div>
          )
        }
      }
    })}
  </div>
  );
};
