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
  sections: Section[];
}

const initialState: InitialState = {
  sections: [
    {
      id: "header",
      content: "header",
      type: "header",
      visible: true,
      contentType: "",
      subSections: [
        {
          id: "Img-Name",
          visible: true,
        },
        {
          id: "Menu-links",
          visible: true,
        },
        {
          id: "Icons",
          visible: true,
        },
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
          content: "welcome to the website",
        },
      ],
    },
  ],
};

const headerSectionSlice = createSlice({
  name: "headerSection",
  initialState,
  reducers: {
    addSection: (state, action: PayloadAction<{ type: string }>) => {
      if (
        action.payload.type === "header" &&
        state.sections.some((s) => s.type === "header")
      ) {
        return;
      }

      state.sections.push({
        id: `Announcement bar ${Date.now()}`,
        content: 'Announcement Bar',
        contentType: "marquee",
        type: action.payload.type,
        visible: true,
        subSections: [
          {
            id: `Add your content ${Date.now()}`,
            content: 'Welcome to the hood',
            visible: true,
          }
        ],
      });
    },
    addsubSection: (state, action: PayloadAction<{ sectionId: string }>) => {

      const section = state.sections.find((s) => s.id === action.payload.sectionId);

      if (section) {
        section.subSections.push({
          id: `Add your content ${Date.now()}`,
          content: 'Welcome to the hood',
          visible: true,
        })
      }
    },
    deleteSection: (state, action: PayloadAction<string>) => {
      state.sections = state.sections.filter((s) => s.id !== action.payload);
    },
    deleteSubSection: (state, action: PayloadAction<{
      sectionId: string;
      subSectionId: string;
    }>) => {
      const section = state.sections.find((s) => s.id === action.payload.sectionId);
      if (section) {
        section.subSections = section.subSections.filter((sub) => sub.id !== action.payload.subSectionId);
      }
    },
    toggleVisiblity: (state, action: PayloadAction<string>) => {
      const section = state.sections.find((s) => s.id === action.payload);
      if (section) {
        section.visible = !section.visible;
      }
    },
    toggleSubSectoinVisiblity: (state, action: PayloadAction<{ sectionId: string; subSectionId: string }>) => {
      const section = state.sections.find((s) => s.id === action.payload.sectionId);
      if (section) {
        const subSection = section.subSections.find((s) => s.id === action.payload.subSectionId);

        if (subSection) {
          subSection.visible = !subSection.visible;
        }
      }
    },
    updateSubSectionContent: (state, action: PayloadAction<{
      sectionId: string;
      subSectionId: string;
      content: string;
    }>) => {
      const section = state.sections.find(s => s.id === action.payload.sectionId);
      if (section) {
        const subSection = section.subSections.find(ss => ss.id === action.payload.subSectionId);
        if (subSection) {
          subSection.content = action.payload.content;
        }
      }
    },
    updateAnnouncementType: (state, action: PayloadAction<{
      sectionId: string;
      type: string;
    }>) => {
      const section = state.sections.find(s => s.id === action.payload.sectionId);
      if (section) {
        section.contentType = action.payload.type;
      }
    },
    reorderSections: (
      state,
      action: PayloadAction<{ oldIndex: number; newIndex: number }>
    ) => {
      state.sections = arrayMove(state.sections, action.payload.oldIndex, action.payload.newIndex);
    },
  },
});


export const { addSection, addsubSection, deleteSection, deleteSubSection, toggleVisiblity, toggleSubSectoinVisiblity, updateSubSectionContent, updateAnnouncementType, reorderSections } = headerSectionSlice.actions;
export default headerSectionSlice.reducer;
