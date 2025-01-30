import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ScreenSize {
    screenType: string;
};

const initialState: ScreenSize = {
    screenType:"screen",
};


const screenSizeSlice = createSlice({
    name: "screen",
    initialState,
    reducers: {
        setScreenSize: (state, action: PayloadAction<string>) => {
          state.screenType = action.payload;
        },
      },
});


export const {setScreenSize} = screenSizeSlice.actions;
export default screenSizeSlice.reducer;
export const selectScreenType = (state: { screen: ScreenSize}) => state.screen.screenType;