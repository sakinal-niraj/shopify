import { arrayMove } from "@dnd-kit/sortable";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SubSection {
  id: string;
  visible: boolean;
  content?: string;
}

interface Section {
  id: string;
  content: string;
  type: string;
  contentType: string;
  visible: boolean;
  subSections: SubSection[];
}

interface InitialState {
  footerSections: Section[];
}

const initialState: InitialState = {
  footerSections: [
    {
      id: "footer",
      content: "footer",
      type: "footer",
      visible: true,
      contentType: "",
      subSections: [
      ],
    },
    {
      id: "Announcement bar",
      type: "announcementbar",
      content: "Announcement bar",
      contentType: "marquee",
      visible: true,
      subSections: [
        {
          id: "Add your content",
          visible: true,
          content: "Footer",
        },
      ],
    },
  ],
};

const footerSectionSlice = createSlice({
  name: "footerSection",
  initialState,
  reducers: {
    addFooterSection: (state, action: PayloadAction<{ type: string }>) => {
      if (
        action.payload.type === "footer" &&
        state.footerSections.some((s) => s.type === "footer")
      ) {
        return;
      }

      state.footerSections.push({
        id: `Announcement bar ${Date.now()}`,
        content: 'Announcement Bar',
        contentType: "marquee",
        type: action.payload.type,
        visible: true,
        subSections: [
          {
            id: `Add your content ${Date.now()}`,
            content: 'Footer content',
            visible: true,
          }
        ],
      });
    },
    addFooterSubSection: (state, action: PayloadAction<{ sectionId: string }>) => {

      const section = state.footerSections.find((s) => s.id === action.payload.sectionId);

      if (section) {
        section.subSections.push({
          id: `Add your content ${Date.now()}`,
          content: 'Footer',
          visible: true,
        })
      }
    },
    deleteFooterSection: (state, action: PayloadAction<string>) => {
      state.footerSections = state.footerSections.filter((s) => s.id !== action.payload);
    },
    deleteFooterSubSection: (state, action: PayloadAction<{
      sectionId: string;
      subSectionId: string;
    }>) => {
      const section = state.footerSections.find((s) => s.id === action.payload.sectionId);
      if (section) {
        section.subSections = section.subSections.filter((sub) => sub.id !== action.payload.subSectionId);
      }
    },
    footerToggleVisiblity: (state, action: PayloadAction<string>) => {
      const section = state.footerSections.find((s) => s.id === action.payload);
      if (section) {
        section.visible = !section.visible;
      }
    },
    footerToggleSubSectoinVisiblity: (state, action: PayloadAction<{ sectionId: string; subSectionId: string }>) => {
      const section = state.footerSections.find((s) => s.id === action.payload.sectionId);
      if (section) {
        const subSection = section.subSections.find((s) => s.id === action.payload.subSectionId);

        if (subSection) {
          subSection.visible = !subSection.visible;
        }
      }
    },
    footerUdateSubSectionContent: (state, action: PayloadAction<{
      sectionId: string;
      subSectionId: string;
      content: string;
    }>) => {
      const section = state.footerSections.find(s => s.id === action.payload.sectionId);
      if (section) {
        const subSection = section.subSections.find(ss => ss.id === action.payload.subSectionId);
        if (subSection) {
          subSection.content = action.payload.content;
        }
      }
    },
    footerUpdateAnnouncementType: (state, action: PayloadAction<{
      sectionId: string;
      type: string;
    }>) => {
      const section = state.footerSections.find(s => s.id === action.payload.sectionId);
      if (section) {
        section.contentType = action.payload.type;
      }
    },
    footerReorderSections: (
      state,
      action: PayloadAction<{ oldIndex: number; newIndex: number }>
    ) => {
      state.footerSections = arrayMove(state.footerSections, action.payload.oldIndex, action.payload.newIndex);
    },
  },
});


export const { addFooterSection, addFooterSubSection, deleteFooterSection, deleteFooterSubSection, footerToggleVisiblity, footerToggleSubSectoinVisiblity, footerUpdateAnnouncementType, footerUdateSubSectionContent, footerReorderSections } = footerSectionSlice.actions;
export default footerSectionSlice.reducer;
