import { RootState } from "../store";

export const selectHeadFontFamily = (state:RootState) => state.typography.fontHeadFamily;
export const selectBodyFontFamily = (state:RootState) => state.typography.fontBodyFamily;
export const selectHeadFontScaleSize = (state:RootState) => state.typography.headFontScaleSize;
export const selectBodyFontSizeScale = (state:RootState) => state.typography.bodyFontSizeScale;
