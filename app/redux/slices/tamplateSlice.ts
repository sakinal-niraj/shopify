import { arrayMove } from "@dnd-kit/sortable";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StaticImageData } from "next/image";
import hero1 from '@/public/images/hero1.jpg';
import hero2 from '@/public/images/t-shirt.jpg';

interface SubSection {
  id: string;
  visible: boolean;
  sliderImg?: string | StaticImageData;
  content?: string;
  description?:string;
}

interface Section {
  id: string;
  content: string;
  type: string;
  contentType: string;
  visible: boolean;
  slideHight?: string;
  animation?: string;
  autoplay?: string;
  autoplaySpeed?: number;
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
      autoplaySpeed: 1000,
      subSections: [
        {
          id: "slider",
          visible: true,
          content: "slider",
          description:"hello world",
          sliderImg: hero1,
        },
      ],
    },
    {
      id: "Featured Collection",
      type: "Featured Collection",
      content: "Featured Collection",
      contentType: "marquee",
      visible: true,
      subSections: [
      ],
    },
    {
      id: "Featured Product",
      type: "Featured Product",
      content: "Featured Product",
      contentType: "marquee",
      visible: true,
      subSections: [
      ],
    },
    {
      id: "Rich Text",
      type: "Rich Text",
      content: "Rich Text",
      contentType: "marquee",
      visible: true,
      subSections: [
      ],
    },
    {
      id: "Image banner",
      type: "Image banner",
      content: "Image banner",
      contentType: "marquee",
      visible: true,
      subSections: [
      ],
    },
    {
      id: "Image with text",
      type: "Image with text",
      content: "Image with text",
      contentType: "marquee",
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
        slideHight:'Medium',
        animation:'slide',
        autoplay:'on',
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
          id: `slider ${Date.now()}`,
          content: `slider ${slider = slider + 1}`,
          description:'Sldier description',
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
      }
    },
    tamplateSlideAnimation: (state, action: PayloadAction<{ sectionId: string; animate: string }>) => {
      const section = state.tamplateSection.find((s) => s.id === action.payload.sectionId);
      if (section) {
        section.animation = action.payload.animate;
      }
    },
    tamplateSlideAutoplay: (state,action:PayloadAction<{sectionId:string; autoplay:string}>)=>{
      const section = state.tamplateSection.find((s)=> s.id === action.payload.sectionId);
      if(section){
        section.autoplay = action.payload.autoplay;
      }
    },
    tamplateSlideAutoplaySpeed: (state,action:PayloadAction<{sectionId:string; autoplaySpeed:number;}>)=>{
      const section = state.tamplateSection.find((s)=> s.id === action.payload.sectionId);
      if(section){
        section.autoplaySpeed = action.payload.autoplaySpeed;
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
} = tamplateSectionSlice.actions;

export default tamplateSectionSlice.reducer;