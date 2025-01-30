import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PageState {
  currentPage: string;
}

const initialState: PageState = {
  currentPage: "Contact Page",
};

const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    setPageName: (state, action: PayloadAction<string>) => {
      state.currentPage = action.payload;
    },
  },
});

export const { setPageName } = pageSlice.actions;
export default pageSlice.reducer;
export const selectPageName = (state: { page: PageState }) => state.page.currentPage;
