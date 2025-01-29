import { RootState } from "../store";

export const selectBtnThickness = (state: RootState)=> state.button.btnThickness;
export const selectBtnBorderStyle = (state: RootState)=> state.button.btnBorderStyle;
export const selectBtnBorderRadius = (state: RootState)=> state.button.btnBorderRadius;
export const selectBtnBorderColor = (state: RootState)=> state.button.btnBorderColor;
export const selectBtnConstrastColor = (state:RootState) => state.button.btnConstrastColor;
export const selectBtnHorizontalOffset = (state:RootState)=> state.button.btnHorizontalOffset;
export const selectBtnVerticalOffset = (state:RootState)=> state.button.btnVerticalOffset;
export const selectBtnBlur = (state:RootState)=> state.button.btnBlur;
export const selectShadowColor = (state:RootState) => state.button.btnShadowColor;