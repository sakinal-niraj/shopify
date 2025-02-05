// import { arrayMove } from "@dnd-kit/sortable";
// import { createSlice,PayloadAction } from "@reduxjs/toolkit";
// import { RootState } from "../store";

// interface LayoutState {
//     componentOrder: number[];
// }

// const initialState: LayoutState = {
//     componentOrder: [1, 2],
// }

// const layoutSlice = createSlice({
//     name: 'layout',
//     initialState,
//     reducers: {
//         reorderComponents: (state, action: PayloadAction<{ oldIndex: number; newIndex: number }>) => {
//             const { oldIndex, newIndex } = action.payload;
//             state.componentOrder = arrayMove(state.componentOrder, oldIndex, newIndex);
//         },
//     },
// });


// export const { reorderComponents } = layoutSlice.actions;
// export default layoutSlice.reducer;
// export const selectHeadComponent = (state:RootState) => state.layout.componentOrder;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const num = 0;
interface SubSection {
  id: string;
  type: string;
  visible: boolean;
  content?: string;
}

interface Section {
  id: string;
  type: string;
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
      type: "header",
      visible: true,
      subSections: [
        {
          id: "menu-links",
          type: "menu-links",
          visible: true,
        },
      ],
    },
    {
      id: "Announcement bar",
      type: "announcementbar",
      visible: true,
      subSections: [
        {
          id: "Add your content",
          type: "text",
          visible: true,
          content:"welcome to the website",
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
        id: `Announcement bar ${num + 1}`,
        type: action.payload.type,
        visible: true,
        subSections: [
          {
            id: `Add your content ${num +1}`,
            type: "text",
            content:'Welcome to the hood',
            visible: true,
          }
        ],
      });
    },
    deleteSection: (state, action: PayloadAction<string>) => {
      state.sections = state.sections.filter((s) => s.id !== action.payload);
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
  },
});


export const { addSection, deleteSection, toggleVisiblity, toggleSubSectoinVisiblity,updateSubSectionContent } = headerSectionSlice.actions;
export default headerSectionSlice.reducer;
