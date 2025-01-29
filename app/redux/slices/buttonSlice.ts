import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const getInitialButton = (storageKey: string, defaultValue: string): string => {
    if (typeof window === 'undefined') return defaultValue;
    return localStorage.getItem(storageKey) || defaultValue;
}


interface ButtonState {
    btnThickness: string,
    btnBorderStyle: string,
    btnBorderRadius: string,
    btnBorderColor: string,
    btnConstrastColor: string,
    btnHorizontalOffset:string,
    btnVerticalOffset:string,
    btnBlur:string,
    btnShadowColor:string,
};

const initialState: ButtonState = {
    btnThickness: getInitialButton('btnThickness', "2px"),
    btnBorderStyle: getInitialButton('btnBorderStyle', 'none'),
    btnBorderRadius: getInitialButton('btnBorderRadius', '2px'),
    btnBorderColor: getInitialButton('btnBorderColor', '#000000'),
    btnConstrastColor: getInitialButton('btnConstrastColor', '#000000'),
    btnHorizontalOffset:getInitialButton('btnHorizontalOffset','2px'),
    btnVerticalOffset:getInitialButton('btnVerticalOffset','2px'),
    btnBlur:getInitialButton('btnBlur','2px'),
    btnShadowColor:getInitialButton('btnShadowColor','#000000'),
};

const buttonSlice = createSlice({
    name: 'button',
    initialState,
    reducers: {
        setBtnThickness: (state, action: PayloadAction<string>) => {
            state.btnThickness = action.payload;
        },
        setBtnBroderStyle:(state,action:PayloadAction<string>)=>{
            state.btnBorderStyle=action.payload;
        },
        setBorderRadius:(state,action:PayloadAction<string>)=>{
            state.btnBorderRadius = action.payload;
        },
        setBorderColor:(state,action:PayloadAction<string>)=>{
            state.btnBorderColor = action.payload;
        },
        setBtnConstrastColor:(state,action:PayloadAction<string>)=>{
            state.btnConstrastColor = action.payload;
        },
        setBtnHorizontalOffset:(state,action:PayloadAction<string>)=>{
            state.btnHorizontalOffset = action.payload;
        },
        setBtnVerticalOffset:(state,action:PayloadAction<string>)=>{
            state.btnVerticalOffset = action.payload;
        },
        setBtnBlur:(state,action:PayloadAction<string>)=>{
            state.btnBlur = action.payload;
        },
        setBtnShadowColor:(state,action:PayloadAction<string>)=>{
            state.btnShadowColor = action.payload;
        }
    },
});

export const { setBtnThickness,setBtnBroderStyle,setBorderRadius,setBorderColor,setBtnConstrastColor,setBtnHorizontalOffset,setBtnVerticalOffset,setBtnBlur,setBtnShadowColor} = buttonSlice.actions;
export default buttonSlice.reducer;