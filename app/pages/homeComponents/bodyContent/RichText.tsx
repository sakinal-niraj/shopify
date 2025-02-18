import React from "react";
import {motion} from 'framer-motion';

interface Section {
    id?: string;
    content?: string;
    type?: string;
    contentType?: string;
    heading?:string;
    visible?: boolean;
    description?:string;
    slideHight?: string;
    animation?: string;
    autoplay?: string;
    tagLine?:string;
    autoplaySpeed?: number;
    buttonText?:string,
    buttonLink?:string,
    buttonText1?:string,
    buttonLink1?:string,
    totalProduct?:number,
    alignment?:string,
  }

  interface RichTextProps{
    RichTextSection:Section
  }
  
export const RichText:React.FC<RichTextProps> = ({RichTextSection}) => {
  return (
    <div className={`my-10 mx-10 text-center flex flex-col gap-y-2 
        ${RichTextSection.alignment === 'start' ? 'text-start': 'text-center'}
        ${RichTextSection.alignment === 'center' ? 'text-center': 'text-center'}
        ${RichTextSection.alignment === 'end' ? 'text-end': 'text-center'}
    `}>
      <h1 className="font-semibold text-4xl">{RichTextSection.heading}</h1>
      <span className="text-base font-semibold">{RichTextSection.tagLine}</span>
      <p className="text-base">{RichTextSection.description}</p>
      <div className="space-x-2">
        <motion.button
        whileTap={{scale:0.9}}
        whileHover={{scale:1.05}}
        transition={{duration:0.3}}
         className={`bg-black text-white rounded-sm uppercase text-lg font-medium ${RichTextSection.buttonText ? 'px-4 py-2' : 'px-0 py-0'}`}>
          <a href={RichTextSection.buttonLink?.startsWith('http') ? RichTextSection.buttonLink : `https://${RichTextSection.buttonLink}`}>{RichTextSection.buttonText}</a>
        </motion.button>
        <button className={`bg-black text-white  rounded-sm uppercase text-lg font-medium ${RichTextSection.buttonText1 ? 'px-4 py-2': 'px-0 py-0'}`}>
          <a href={RichTextSection.buttonLink1?.startsWith('http') ? RichTextSection.buttonLink1 : `https://${RichTextSection.buttonLink1}`}>{RichTextSection.buttonText1}</a>
        </button>
      </div>
    </div>
  );
};
