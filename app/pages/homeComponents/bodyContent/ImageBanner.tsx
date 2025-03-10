import Image, { StaticImageData } from "next/image";
import React from "react";
import blueImg from "@/public/images/istockphoto-902957562-612x612.jpg";
import {motion} from 'framer-motion';

interface Section {
  id?: string;
  content?: string;
  type?: string;
  contentType?: string;
  heading?: string;
  visible?: boolean;
  description?: string;
  slideHight?: string;
  animation?: string;
  autoplay?: string;
  tagLine?: string;
  autoplaySpeed?: number;
  buttonText?: string;
  buttonLink?: string;
  buttonText1?: string;
  buttonLink1?: string;
  totalProduct?: number;
  imgAlignment?: string;
  img?: File | string | StaticImageData;
  alignment?: string;
}

interface ImageBannerProps {
  ImageBannerSection: Section;
}

export const ImageBanner: React.FC<ImageBannerProps> = ({
  ImageBannerSection,
}) => {
  
  return (
    <div
      className={`aspect-[9/4.5] relative z-20 overflow-x-hidden w-full
        ${ImageBannerSection.visible ? "block" : "hidden"}
        ${
          ImageBannerSection.slideHight === "Small"
            ? "aspect-[9/3.5]"
            : "aspect-[9/4.5]"
        }
        ${
          ImageBannerSection.slideHight === "Medium"
            ? "aspect-[9/4.5]"
            : "aspect-[9/4.5]"
        }
        ${
          ImageBannerSection.slideHight === "Large"
            ? "aspect-[9/6]"
            : "aspect-[9/4.5]"
        }
      `}
    >
      <Image
        src={
          ImageBannerSection.img instanceof File
            ? URL.createObjectURL(ImageBannerSection.img)
            : ImageBannerSection.img || blueImg
        }
        alt="Hero Slider"
        width={1200}
        height={600}
        className={`w-full h-full`}
        unoptimized
      />
      <div
        className={`
        absolute inset-0 bg-opacity-50 z-30 transition-all ease-out duration-300 flex 
        ${
          ImageBannerSection.imgAlignment === "Top Left" &&
          "items-start justify-start"
        }
        ${
          ImageBannerSection.imgAlignment === "Top Center" &&
          "items-start justify-center"
        }
        ${
          ImageBannerSection.imgAlignment === "Top Right" &&
          "items-start justify-end"
        }
        ${
          ImageBannerSection.imgAlignment === "Middle Left" &&
          "items-center justify-start"
        }
        ${
          ImageBannerSection.imgAlignment === "Middle Center" &&
          "items-center justify-center"
        }
        ${
          ImageBannerSection.imgAlignment === "Middle Right" &&
          "items-center justify-end"
        }
        ${
          ImageBannerSection.imgAlignment === "Bottom Left" &&
          "items-end justify-start"
        }
        ${
          ImageBannerSection.imgAlignment === "Bottom Center" &&
          "items-end justify-center"
        }
        ${
          ImageBannerSection.imgAlignment === "Bottom Right" &&
          "items-end justify-end"
        }
        `}
      >
        <motion.div
          initial={{opacity:0,scale:0}}
          whileInView={{opacity:1,scale:1,transition:{duration:0.6,delay:0.2}}}
          whileHover={{scale:1.07,transition:{duration:0.3}}}
          transition={{duration:0.1,delay:0}}
          viewport={{once:true}}
          className={`max-w-[800px] w-auto min-w-[200px]  bg-black h-auto rounded-lg text-white p-5 space-y-2 
          ${ImageBannerSection.alignment === "Start" && "text-start"}
          ${ImageBannerSection.alignment === "Center" && "text-center"}
          ${ImageBannerSection.alignment === "End" && "text-end"}
          `}
        >
          <h1 className="text-2xl font-semibold">
            {ImageBannerSection?.heading}
          </h1>
          <p className="text-sm">{ImageBannerSection?.description}</p>
          <div className="space-x-2">
            <a
              href={
                ImageBannerSection?.buttonLink?.startsWith("http")
                  ? ImageBannerSection.buttonLink
                  : `https://${ImageBannerSection.buttonLink}`
              }
              className={`${
                ImageBannerSection?.buttonText ? "visible" : "hidden"
              }`}
            >
              <motion.button
                whileHover={{scale:1.06,transition:{duration:0.4}}}
                whileTap={{scale:0.9}}
                
               className="text-base bg-white text-black px-3 py-1  rounded-md">
                {ImageBannerSection.buttonText}
              </motion.button>
            </a>
            <a
              href={
                ImageBannerSection?.buttonLink?.startsWith("http")
                  ? ImageBannerSection.buttonLink
                  : `https://${ImageBannerSection.buttonLink1}`
              }
              className={`${
                ImageBannerSection?.buttonText1 ? "visible" : "hidden"
              }`}
            >
              <motion.button
                whileHover={{scale:1.06,transition:{duration:0.4}}}
                whileTap={{scale:0.9}}
                
               className="text-base bg-white text-black px-3 py-1  rounded-md">
                {ImageBannerSection.buttonText1}
              </motion.button>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
