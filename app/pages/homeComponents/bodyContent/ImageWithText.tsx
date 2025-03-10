import Image, { StaticImageData } from "next/image";
import React from "react";
import hero2 from "@/public/images/t-shirt.jpg";
import { selectScreenType } from "@/app/redux/slices/screenSizeSlice";
import { useAppSelector } from "@/app/redux/hooks";
import { motion } from "framer-motion";

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

interface ImageWithTextProps {
  imageWithTextSection: Section;
}

export const ImageWithText: React.FC<ImageWithTextProps> = ({
  imageWithTextSection,
}) => {
  const screenType = useAppSelector(selectScreenType);

  return (
    <div
      className={`${
        screenType === "mobile" ? "flex flex-col h-[450px]" : "flex h-[500px]"
      }  w-full text-center  px-10 my-5 overflow-x-hidden overflow-y-hidden
        ${imageWithTextSection.visible ? "block" : "hidden"}
    ${
      imageWithTextSection.alignment === "Image First" ? "" : "flex-row-reverse"
    }
    `}
    >
      {/* Image data */}
      <div
        className={`${screenType === "mobile" ? "max-h-[300px] h-full mb-5" : ""} w-full hover:scale-105 duration-300 transform ease-linear`}
      >
        <Image
          src={
            imageWithTextSection.img instanceof File
              ? URL.createObjectURL(imageWithTextSection.img)
              : imageWithTextSection.img || hero2
          }
          alt="T-shirt image"
          width={100}
          height={100}
          className={`w-full h-full bg-cover rounded-md`}
          unoptimized
        />
      </div>

      {/* text content  */}
      <div
        className={`w-full flex flex-col
        ${
          imageWithTextSection.imgAlignment === "Top Left" &&
          "items-start justify-start"
        }
        ${
          imageWithTextSection.imgAlignment === "Top Center" &&
          "items-center justify-start"
        }
        ${
          imageWithTextSection.imgAlignment === "Top Right" &&
          "items-end justify-start"
        }
        ${
          imageWithTextSection.imgAlignment === "Middle Left" &&
          "items-start justify-center"
        }
        ${
          imageWithTextSection.imgAlignment === "Middle Center" &&
          "items-center justify-center"
        }
        ${
          imageWithTextSection.imgAlignment === "Middle Right" &&
          "items-end justify-center"
        }
        ${
          imageWithTextSection.imgAlignment === "Bottom Left" &&
          "items-start justify-end"
        }
        ${
          imageWithTextSection.imgAlignment === "Bottom Center" &&
          "items-center justify-end"
        }
        ${
          imageWithTextSection.imgAlignment === "Bottom Right" &&
          "items-end justify-end"
        }
        space-y-2 `}
      >
        <h1 className="text-3xl font-semibold">
          {imageWithTextSection.heading}
        </h1>
        <p className="text-xs">{imageWithTextSection.description}</p>
        <div>
          <a
            href={
              !imageWithTextSection?.buttonLink ||
              imageWithTextSection?.buttonLink === ""
                ? "#"
                : imageWithTextSection?.buttonLink?.startsWith("http")
                ? imageWithTextSection.buttonLink
                : `https://${imageWithTextSection.buttonLink}`
            }
            className={`${
              imageWithTextSection.buttonText ? "block" : "hidden"
            }`}
          >
            <motion.button
              whileTap={{ scale: 0.8 }}
              whileHover={{scale:1.1}}
              transition={{ duration: 0.2 }}
              className="text-base px-3 py-1 bg-black text-white rounded-md"
            >
              {imageWithTextSection.buttonText}
            </motion.button>
          </a>
        </div>
      </div>
    </div>
  );
};
