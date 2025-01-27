 import { createSlice,PayloadAction } from "@reduxjs/toolkit";

 interface colorState{
    header_footer:string,
 }
 const initialState : colorState= {
    header_footer: localStorage.getItem('header_footer')||'#ffffff',
 };

 const colorSlice = createSlice({
    name:'header_footer',
    initialState,
    reducers:{
        setHeader_Footer:(state,action: PayloadAction<string>)=>{
            state.header_footer = action.payload;   
        }
    }
 });


 export const {setHeader_Footer} = colorSlice.actions;
 export default colorSlice.reducer;