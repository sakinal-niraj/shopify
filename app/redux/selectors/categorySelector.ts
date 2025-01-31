import { RootState } from "../store";

export const selectStoreImg = (state:RootState) => state.category.storeImg;
export const selectStoreName = (state:RootState) => state.category.storeName;
export const selectStoreDetails = (state:RootState) => state.category.storeDetails;
export const selectStoreSocialMedia = (state:RootState) => state.category.storeSocialMedia;