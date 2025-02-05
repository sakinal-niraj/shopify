import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface CategoryState {
    storeImg: string | null;
    storeName: string;
    storeDetails: string;
    storeSocialMedia: string[];
}

const initialState: CategoryState = {
    storeImg: "",
    storeName: "My store",
    storeDetails: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    storeSocialMedia: [
        "facebook.com",
        "whatsapp.com",
        "instagram.com",
        "pintrest.com",
        "x.com"
    ],
}


const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        setStoreImg: (state, action: PayloadAction<string>) => {
            state.storeImg = action.payload;
        },
        setStoreName: (state, action: PayloadAction<string>) => {
            state.storeName = action.payload;
        },
        setStoreDetails: (state, actoin: PayloadAction<string>) => {
            state.storeDetails = actoin.payload;
        },
        setStoreSocialMedia: (state, action: PayloadAction<string[]>) => {
            state.storeSocialMedia = action.payload;
        },
    }
});


export const { setStoreImg, setStoreDetails, setStoreName, setStoreSocialMedia } = categorySlice.actions;
export default categorySlice.reducer;