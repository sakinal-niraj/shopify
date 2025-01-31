import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PageState {
  currentPage: string;
  productId:number;
}

const initialState: PageState = {
  currentPage: "Home Page",
  productId:1,
};

const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    setPageName: (state, action: PayloadAction<string>) => {
      state.currentPage = action.payload;
    },
    setProductId: (state, action: PayloadAction<number>) => {
      state.productId = action.payload;
    },
  },
});

export const { setPageName,setProductId } = pageSlice.actions;
export default pageSlice.reducer;
export const selectPageName = (state: { page: PageState }) => state.page.currentPage;
export const selectProductId = (state: { page: PageState }) => state.page.productId;
