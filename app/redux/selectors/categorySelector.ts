import { RootState } from "../store";

export const selectStoreDetails = (state:RootState) => state.category.storeDetails;
export const selectStoreName = (state:RootState) => state.category.storeName;
export const selectStoreSocialMedia = (state:RootState) => state.category.storeSocialMedia;