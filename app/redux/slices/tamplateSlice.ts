import { arrayMove } from "@dnd-kit/sortable";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StaticImageData } from "next/image";
import hero1 from '@/public/images/hero1.jpg';
import hero2 from '@/public/images/t-shirt.jpg';
import blueImg from '@/public/images/istockphoto-902957562-612x612.jpg';

interface SubSection {
  id: string;
  visible: boolean;
  sliderImg?: string | File | StaticImageData;
  content?: string;
  description?: string;
}

interface Section {
  id: string;
  content: string;
  type: string;
  contentType: string;
  heading?: string;
  visible: boolean;
  description?: string;
  slideHight?: string;
  animation?: string;
  autoplay?: string;
  autoplaySpeed?: number;
  buttonText?: string,
  buttonLink?: string,
  buttonText1?: string,
  buttonLink1?: string,
  tagLine?: string,
  totalProduct?: number,
  imgAlignment?:string,
  alignment?: string,
  img?: string | File | StaticImageData;
  subSections: SubSection[];
}

interface InitialState {
  tamplateSection: Section[];
}

const initialState: InitialState = {
  tamplateSection: [
    {
      id: "slider",
      content: "Slider",
      type: "Slider",
      visible: true,
      contentType: "",
      slideHight: "Medium",
      animation: "slide",
      autoplay: "on",
      autoplaySpeed: 3000,
      subSections: [
        {
          id: "subslider",
          visible: true,
          content: "slider",
          description: "hello world",
          sliderImg: hero1,
        },
      ],
    },
    {
      id: "Featured Collection",
      type: "Featured Collection",
      content: "Featured Collection",
      description: "this is featured collection description",
      buttonText: "first",
      totalProduct: 4,
      contentType: "marquee",
      visible: true,
      subSections: [
      ],
    },
    {
      id: "Featured Product",
      type: "Featured Product",
      content: "Featured Product",
      description: "this is featured product description",
      contentType: "marquee",
      totalProduct: 1,
      visible: true,
      subSections: [
      ],
    },
    {
      id: "Rich Text",
      type: "Rich Text",
      content: "Rich Text",
      description: "this is rich text description",
      heading: "Talk about you brand",
      buttonText: "Simple button",
      buttonLink: "",
      buttonText1: "",
      buttonLink1: "",
      contentType: "Talk about you brand",
      tagLine: "Add a tag line",
      alignment: 'center',
      visible: true,
      subSections: [
      ],
    },
    {
      id: "Image banner",
      type: "Image banner",
      content: "Image banner",
      description: "this is Image banner description",
      contentType: "marquee",
      alignment:"Center",
      imgAlignment:"Middle Center",
      slideHight:"Medium",
      heading:'Image banner',
      img:blueImg,
      visible: true,
      buttonText:'hello',
      buttonText1:'hello',
      subSections: [
      ],
    },
    {
      id: "Image with text",
      type: "Image with text",
      content: "Image with text",
      description: "this is Image with text description",
      contentType: "marquee",
      heading:'Image With Text',
      buttonText:'hello',
      imgAlignment:"Middle Center",
      alignment:"Image First",
      visible: true,
      subSections: [
      ],
    },

  ],
};

let slider = 0;

const tamplateSectionSlice = createSlice({
  name: "tamplateSection",
  initialState,
  reducers: {
    addTamplateSection: (state, action: PayloadAction<{ type: string }>) => {
      state.tamplateSection.push({
        id: `${action.payload.type} ${Date.now()}`,
        content: `${action.payload.type} ${slider = slider + 1}`,
        contentType: "marquee",
        type: action.payload.type,
        slideHight: 'Medium',
        animation: 'slide',
        heading: 'Give any heading',
        autoplay: 'on',
        totalProduct: 4,
        description: "hello world",
        buttonText: "hello",
        buttonLink: "",
        buttonText1: "",
        buttonLink1: "",
        tagLine: 'add new tag line',
        img:blueImg,
        alignment: 'center',
        imgAlignment:"Middle Center",
        visible: true,
        subSections: [
          {
            id: `Add your content ${Date.now()}`,
            content: "Tamplate content",
            visible: true,
          },
        ],
      });
    },


    addTamplateSubSection: (state, action: PayloadAction<{ sectionId: string }>) => {
      const section = state.tamplateSection.find((s) => s.id === action.payload.sectionId);
      if (section) {
        section.subSections.push({
          id: `subslider ${Date.now()}`,
          content: `slider ${slider = slider + 1}`,
          description: 'Sldier description',
          sliderImg: hero2,
          visible: true,
        });
      }
    },

    deleteTamplateSection: (state, action: PayloadAction<string>) => {
      state.tamplateSection = state.tamplateSection.filter((s) => s.id !== action.payload);
    },

    deleteTamplateSubSection: (
      state,
      action: PayloadAction<{ sectionId: string; subSectionId: string }>
    ) => {
      const section = state.tamplateSection.find((s) => s.id === action.payload.sectionId);
      if (section) {
        section.subSections = section.subSections.filter(
          (sub) => sub.id !== action.payload.subSectionId
        );
      }
    },

    tamplateToggleVisibility: (state, action: PayloadAction<string>) => {
      const section = state.tamplateSection.find((s) => s.id === action.payload);
      if (section) {
        section.visible = !section.visible;
      }
    },

    tamplateToggleSubSectionVisibility: (
      state,
      action: PayloadAction<{ sectionId: string; subSectionId: string }>
    ) => {
      const section = state.tamplateSection.find((s) => s.id === action.payload.sectionId);
      if (section) {
        const subSection = section.subSections.find(
          (s) => s.id === action.payload.subSectionId
        );
        if (subSection) {
          subSection.visible = !subSection.visible;
        }
      }
    },

    tamplateUpdateSubSectionContent: (
      state,
      action: PayloadAction<{ sectionId: string; subSectionId: string; content: string }>
    ) => {
      const section = state.tamplateSection.find((s) => s.id === action.payload.sectionId);
      if (section) {
        const subSection = section.subSections.find(
          (ss) => ss.id === action.payload.subSectionId
        );
        if (subSection) {
          subSection.content = action.payload.content;
        }
      }
    },


    tamplateReorderSections: (
      state,
      action: PayloadAction<{ oldIndex: number; newIndex: number }>
    ) => {
      state.tamplateSection = arrayMove(
        state.tamplateSection,
        action.payload.oldIndex,
        action.payload.newIndex
      );
    },
    // slider height updater
    tamplateSelectChanger: (state, action: PayloadAction<{ sectionId: string; height: string }>) => {
      const section = state.tamplateSection.find((s) => s.id === action.payload.sectionId);
      if (section) {
        section.slideHight = action.payload.height;
            console.log("img banner height",action.payload.height);
      }
      console.log("img banner height",action.payload.height, section?.slideHight);
    },
    tamplateSlideAnimation: (state, action: PayloadAction<{ sectionId: string; animate: string }>) => {
      const section = state.tamplateSection.find((s) => s.id === action.payload.sectionId);
      if (section) {
        section.animation = action.payload.animate;
      }
    },
    tamplateSlideAutoplay: (state, action: PayloadAction<{ sectionId: string; autoplay: string }>) => {
      const section = state.tamplateSection.find((s) => s.id === action.payload.sectionId);
      if (section) {
        section.autoplay = action.payload.autoplay;
      }
    },
    tamplateSlideAutoplaySpeed: (state, action: PayloadAction<{ sectionId: string; autoplaySpeed: number; }>) => {
      const section = state.tamplateSection.find((s) => s.id === action.payload.sectionId);
      if (section) {
        section.autoplaySpeed = action.payload.autoplaySpeed;
      }
    },
    tamplateSlideContent: (state, action: PayloadAction<{ sectionId: string; subSectionId: string; content: string }>) => {
      const section = state.tamplateSection.find((s) => s.id === action.payload.sectionId);
      if (section) {
        const subSection = section.subSections.find((sub) => sub.id === action.payload.subSectionId);
        if (subSection) {
          subSection.content = action.payload.content;
        }
      }
    },
    tamplateSlideDesc: (state, action: PayloadAction<{ sectionId: string; subSectionId: string; description: string }>) => {
      const section = state.tamplateSection.find((s) => s.id === action.payload.sectionId);
      if (section) {
        const subSection = section.subSections.find((sub) => sub.id === action.payload.subSectionId);
        if (subSection) {
          subSection.description = action.payload.description;
        }
      }
    },
    tamplateSlideImage: (
      state,
      action: PayloadAction<{ sectionId: string; subSectionId: string; image: File | string }>
    ) => {
      const section = state.tamplateSection.find(
        (s) => s.id === action.payload.sectionId
      );
      if (section) {
        const subSection = section.subSections.find(
          (sub) => sub.id === action.payload.subSectionId
        );
        if (subSection) {
          subSection.sliderImg = action.payload.image;
        }
      }
    },

    tamplateImage:(state,action:PayloadAction<{secId:string; img:File | string}>)=>{
      console.log("reduc",action.payload.secId);
      const section = state.tamplateSection.find((s)=> s.id === action.payload.secId);
      if(section){
        section.img = action.payload.img;
      }
    },

    tamplateFeaturedCollectionContent: (state, action: PayloadAction<{ sectoinId: string; content: string }>) => {
      const section = state.tamplateSection.find((s) => s.id === action.payload.sectoinId);
      if (section) {
        section.content = action.payload.content;
      }
    },
    tamplateFeaturedCollectionDescription: (state, action: PayloadAction<{ sectionId: string; description: string }>) => {
      const section = state.tamplateSection.find((sec) => sec.id === action.payload.sectionId);
      if (section) {
        section.description = action.payload.description;
      }
    },
    tamplateFeaturedCollectionButtonText: (state, action: PayloadAction<{ sectionId: string; buttonText: string }>) => {
      const section = state.tamplateSection.find((sec) => sec.id === action.payload.sectionId);
      if (section) {
        section.buttonText = action.payload.buttonText;
      }
    },
    tamplateFeaturedCollectionTotalProduct: (state, action: PayloadAction<{ sectionId: string; totalProduct: number }>) => {
      const section = state.tamplateSection.find((sec) => sec.id === action.payload.sectionId);
      if (section) {
        section.totalProduct = action.payload.totalProduct;
      }
    },
    tamplateRicthTextAlignment: (state, action: PayloadAction<{ sectionId: string; alignment: string }>) => {
      const section = state.tamplateSection.find((sec) => sec.id === action.payload.sectionId);
      if (section) {
        section.alignment = action.payload.alignment;
      }
    },
    tamplateImgAlignment: (state, action: PayloadAction<{ sectionId: string; imgAlignment: string }>) => {
      const section = state.tamplateSection.find((sec) => sec.id === action.payload.sectionId);
      if (section) {
        section.imgAlignment = action.payload.imgAlignment;
      }
    },
    tamplateRicthTextHeading: (state, action: PayloadAction<{ sectionId: string; heading: string }>) => {
      const section = state.tamplateSection.find((sec) => sec.id === action.payload.sectionId);
      if (section) {
        section.heading = action.payload.heading;
      }
    },
    tamplateRicthTextTagline: (state, action: PayloadAction<{ sectionId: string; tagline: string }>) => {
      const section = state.tamplateSection.find((s) => s.id === action.payload.sectionId);
      if (section) {
        section.tagLine = action.payload.tagline;
      }
    },
    tamplateRicthTextDesc: (state, action: PayloadAction<{ sectionId: string; desc: string }>) => {
      const section = state.tamplateSection.find((s) => s.id === action.payload.sectionId);
      if (section) {
        section.description = action.payload.desc;
      }
    },
    tamplateRicthTextFirstButton: (state, action: PayloadAction<{ sectionId: string, firstButtonText: string }>) => {
      const section = state.tamplateSection.find((s) => s.id === action.payload.sectionId);
      if (section) {
        section.buttonText = action.payload.firstButtonText;
      }
    },
    tamplateRicthTextSecondButton: (state, action: PayloadAction<{ sectionId: string, secondButtonText: string }>) => {
      const section = state.tamplateSection.find((s) => s.id === action.payload.sectionId);
      if (section) {
        section.buttonText1 = action.payload.secondButtonText;
      }
    },
    tamplateRicthTextFirstButtonLink: (state, action: PayloadAction<{ sectionId: string; firstButtonLink: string }>) => {
      const section = state.tamplateSection.find((s) => s.id === action.payload.sectionId);
      if (section) {
        section.buttonLink = action.payload.firstButtonLink;
      }
    },
    tamplateRicthTextSecondButtonLink: (state, action: PayloadAction<{ sectionId: string; secButtonLink: string }>) => {
      const section = state.tamplateSection.find((s) => s.id === action.payload.sectionId);
      if (section) {
        section.buttonLink1 = action.payload.secButtonLink;
      }
    }
  },

});

export const {
  addTamplateSection,
  addTamplateSubSection,
  deleteTamplateSection,
  deleteTamplateSubSection,
  tamplateToggleVisibility,
  tamplateToggleSubSectionVisibility,
  tamplateUpdateSubSectionContent,
  tamplateReorderSections,
  tamplateSelectChanger,
  tamplateSlideAnimation,
  tamplateSlideAutoplay,
  tamplateSlideAutoplaySpeed,
  tamplateSlideContent,
  tamplateSlideDesc,
  tamplateSlideImage,
  tamplateFeaturedCollectionContent,
  tamplateFeaturedCollectionDescription,
  tamplateFeaturedCollectionButtonText,
  tamplateFeaturedCollectionTotalProduct,
  tamplateRicthTextAlignment,
  tamplateRicthTextHeading,
  tamplateRicthTextTagline,
  tamplateRicthTextDesc,
  tamplateRicthTextFirstButton,
  tamplateRicthTextSecondButton,
  tamplateRicthTextFirstButtonLink,
  tamplateRicthTextSecondButtonLink,
  tamplateImage,
  tamplateImgAlignment,
} = tamplateSectionSlice.actions;


export default tamplateSectionSlice.reducer;