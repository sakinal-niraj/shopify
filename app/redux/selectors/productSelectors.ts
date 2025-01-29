import { RootState } from "../store";

export const selectImgPadding = (state:RootState) => state.product.imgPadding;
export const selectImgRadius = (state:RootState) => state.product.imgRadius;
export const selectTextAlignment = (state:RootState) => state.product.textAlignment;
export const selectProductBorderThickness = (state:RootState) => state.product.productBorderThickness;
export const selectProductBorderStyle = (state:RootState) => state.product.productBorderStyle;
export const selectProductBorderRadius = (state:RootState) => state.product.productBorderRadius;
export const selectProductBorderColor = (state:RootState) => state.product.productBorderColor;
export const selectProductHorizontalOffset = (state:RootState) => state.product.productHorizontalOffset;
export const selectProductverticalOffeset = (state:RootState) => state.product.productverticalOffeset;
export const selectProductBlur = (state:RootState) => state.product.productBlur;
export const selectProductShadowColor = (state:RootState) => state.product.productShadowColor;