import { createSlice,PayloadAction } from "@reduxjs/toolkit"

interface CategoryState{
    storeImg:string | null;
    storeName:string;
    storeDetails:string[];
    storeSocialMedia:string[];
}

const initialState:CategoryState = {
    storeImg:"",
    storeName:"My store",
    storeDetails: ["first"],
    storeSocialMedia:["niraj@gmail.com"],
}


const categorySlice = createSlice({
    name:'category',
    initialState,
    reducers:{
        setStoreImg:(state,action:PayloadAction<string>)=>{
            state.storeImg = action.payload;
        },
        setStoreName:(state,action:PayloadAction<string>)=>{
            state.storeName = action.payload;
        },
        setStoreDetails:(state,actoin:PayloadAction<string>)=>{
            state.storeDetails.push(actoin.payload);
        },
        setStoreSocialMedia:(state,action:PayloadAction<string>)=>{
            state.storeSocialMedia.push(action.payload);
        },
        removeStoreSocialMedia: (state, action: PayloadAction<string>) => {
            state.storeSocialMedia = state.storeSocialMedia.filter(
              (item) => item !== action.payload
            );
          },
          removeStoreDetails: (state, action: PayloadAction<string>) => {
            state.storeDetails = state.storeDetails.filter(
              (item) => item !== action.payload
            );
          },
    }
});


export const {setStoreImg,setStoreDetails,setStoreName,setStoreSocialMedia,removeStoreSocialMedia,removeStoreDetails} = categorySlice.actions;
export default categorySlice.reducer;