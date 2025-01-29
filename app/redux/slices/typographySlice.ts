import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Helper function for SSR-safe localStorage access
const getInitialTypography = (storageKey:string, defaultValue: string)=>{
    if(typeof window === 'undefined') return defaultValue;
    return localStorage.getItem(storageKey) || defaultValue;
}

interface TypographyState{
    fontHeadFamily: string,
    fontBodyFamily: string,
    headFontScaleSize: string,
    bodyFontSizeScale: string,
}
const initialState: TypographyState = {
    fontHeadFamily:getInitialTypography("fontHeadFamily","sans-serif"),
    fontBodyFamily:getInitialTypography("fontBodyFamily","sans-serif"),
    headFontScaleSize: getInitialTypography("headFontScaleSize","12px"),
    bodyFontSizeScale: getInitialTypography("bodyFontSizeScale","12px"),
}


const typographySlice = createSlice({
    name: 'typography',
    initialState,
    reducers:{
        setHeadFontFamily(state,action: PayloadAction<string>){
            state.fontHeadFamily = action.payload;
        },
        setBodyFontFamily(state,action:PayloadAction<string>){
            state.fontBodyFamily = action.payload;
        },
        setHeadFontScaleSize(state,action: PayloadAction<string>){
            state.headFontScaleSize = action.payload;
        },
        setBodyFontScaleSize(state,action: PayloadAction<string>){
            state.bodyFontSizeScale = action.payload;
        }
    }
});

export const {setHeadFontFamily,setBodyFontFamily,setHeadFontScaleSize, setBodyFontScaleSize} = typographySlice.actions;
export default typographySlice.reducer;