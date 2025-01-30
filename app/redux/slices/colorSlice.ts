import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Helper function for SSR-safe localStorage access
const getInitialColor = (storageKey: string, defaultValue: string): string => {
  if (typeof window === 'undefined') return defaultValue;
  return localStorage.getItem(storageKey) || defaultValue;
};

interface ColorState {
  headerFooter: string;
  bodyColor: string;
  iconsColor: string;
  iconTextColor: string;
  headTextColor: string;
  bodyTextColor: string;
  buttonColor: string,
  productBgColor: string,
  mrpTextColor: string,
}

const initialState: ColorState = {
  headerFooter: getInitialColor('header_footer', '#9c9c9c'),
  bodyColor: getInitialColor('body_color', '#d2d0d0'),
  iconsColor: getInitialColor('iconsColor', '#000000'),
  iconTextColor: getInitialColor('iconTextColor', '#ffffff'),
  headTextColor: getInitialColor('headTextColor', '#000000'),
  bodyTextColor: getInitialColor('bodyTextColor', '#000000'),
  buttonColor: getInitialColor('buttonColor', '#000000'),
  productBgColor: getInitialColor('productBgColor', '#ffffff'),
  mrpTextColor: getInitialColor('mrpTextColor', '#000000'),
};

const colorSlice = createSlice({
  name: 'color',
  initialState,
  reducers: {
    setHeaderFooter: (state, action: PayloadAction<string>) => {
      state.headerFooter = action.payload;
    },
    setBodyColor: (state, action: PayloadAction<string>) => {
      state.bodyColor = action.payload;
    },
    setIconsColor: (state, action: PayloadAction<string>) => {
      state.iconsColor = action.payload;
    },
    setIconTextColor: (state, action: PayloadAction<string>) => {
      state.iconTextColor = action.payload;
    },
    setHeadTextColor: (state, action: PayloadAction<string>) => {
      state.headTextColor = action.payload;
    },
    setBodyTextColor: (state, action: PayloadAction<string>) => {
      state.bodyTextColor = action.payload;
    },
    setButtonColor: (state, action: PayloadAction<string>) => {
      state.buttonColor = action.payload;
    },
    setProductBgColor: (state, action: PayloadAction<string>) => {
      state.productBgColor = action.payload;
    },
    setMrpTextColor: (state, action: PayloadAction<string>) => {
      state.mrpTextColor = action.payload;
    },
    resetColorState: (state, action: PayloadAction<ColorState>) => {
      return action.payload;
    },
  }
});

export const { setHeaderFooter, setBodyColor, setIconsColor, setIconTextColor, setHeadTextColor, setBodyTextColor, setButtonColor, setProductBgColor, setMrpTextColor ,resetColorState} = colorSlice.actions;
export default colorSlice.reducer;