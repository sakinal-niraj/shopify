import { createSlice,PayloadAction } from "@reduxjs/toolkit"

interface CategoryState{
    storeName:string;
    storeDetails:string[];
    storeSocialMedia:string[];
}

const initialState:CategoryState = {
    storeName:"My store",
    storeDetails: ["first"],
    storeSocialMedia:["niraj@gmail.com"],
}


const categorySlice = createSlice({
    name:'category',
    initialState,
    reducers:{
        setStoreName:(state,action:PayloadAction<string>)=>{
            state.storeName = action.payload;
        },
        setStoreDetails:(state,actoin:PayloadAction<string>)=>{
            state.storeDetails.push(actoin.payload);
        },
        setStoreSocialMedia:(state,action:PayloadAction<string>)=>{
            state.storeSocialMedia.push(action.payload);
        },
    }
});


export const {setStoreDetails,setStoreName,setStoreSocialMedia} = categorySlice.actions;
export default categorySlice.reducer;