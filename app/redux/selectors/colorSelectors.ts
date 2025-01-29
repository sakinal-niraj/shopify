import { RootState } from "../store";

export const selectHeaderFooterColor = (state: RootState) => state.color.headerFooter;
export const selectBodyColor = (state: RootState) => state.color.bodyColor;
export const selectIconsColor = (state: RootState) => state.color.iconsColor;
export const selectIconTextColor = (state: RootState) => state.color.iconTextColor;
export const selectHeadTextColor = (state: RootState) => state.color.headTextColor;
export const selectBodyTextColor = (state: RootState) => state.color.bodyTextColor;
export const selectButtonColor = (state: RootState) => state.color.buttonColor;
export const selectProdutBgColor = (state: RootState) => state.color.productBgColor;
export const selectMrpTextColor = (state: RootState) => state.color.mrpTextColor;
