import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../store";


interface ColorState {
    headerFooter: string;
    bodyColor: string;
    iconsColor: string;
    iconTextColor: string;
    headTextColor: string;
    bodyTextColor: string;
    buttonColor: string,
    productBgColor: string,
    mrpTextColor: string,
}

interface TypographyState {
    fontHeadFamily: string,
    fontBodyFamily: string,
    headFontScaleSize: string,
    bodyFontSizeScale: string,
}

interface ButtonState {
    btnThickness: string,
    btnBorderStyle: string,
    btnBorderRadius: string,
    btnBorderColor: string,
    btnConstrastColor: string,
    btnHorizontalOffset: string,
    btnVerticalOffset: string,
    btnBlur: string,
    btnShadowColor: string,
}

interface ProductState {
    imgPadding: string,
    imgRadius: string,
    textAlignment: string,
    productBorderThickness: string,
    productBorderStyle: string,
    productBorderRadius: string,
    productBorderColor: string,
    productHorizontalOffset: string,
    productverticalOffeset: string,
    productBlur: string,
    productShadowColor: string,
}


interface AppStateSnapshot {
    color: ColorState;
    typography: TypographyState;
    button: ButtonState;
    product: ProductState;
}


interface HistoryState {
    past: AppStateSnapshot[];
    future: AppStateSnapshot[];
}


const initialState: HistoryState = {
    past: [],
    future: [],
};

const historySlice = createSlice({
    name: 'history',
    initialState,
    reducers: {
        addToPast: (state, action: PayloadAction<AppStateSnapshot>) => {
            if (state.past.length >= 5) {
                state.past.shift();
            }
            state.past.push(action.payload);
            state.future = [];
        },
        undo(state) {
            const previousDesign = state.past.pop()
            if (previousDesign) {
                state.future.push(previousDesign)
            }
        },
        redo(state) {
            const nextDesing = state.future.pop()
            if (nextDesing) {
                state.past.push(nextDesing)
            }
        }
    }
})




// Export actions
export const { addToPast, undo, redo } = historySlice.actions;

export const selectHistory = (state: RootState) => state.history;
// Export reducer
export default historySlice.reducer;