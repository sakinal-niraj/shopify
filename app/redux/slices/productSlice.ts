import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const getInitialProduct = (storageKey: string, defaultValue: string): string => {
    if (typeof window === 'undefined') return defaultValue;
    return localStorage.getItem(storageKey) || defaultValue;
}

interface productState {
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
    productShadowColor:string,
}

const initialState: productState = {
    imgPadding: getInitialProduct("imgPadding", "2px"),
    imgRadius: getInitialProduct("imgRadius", "2px"),
    textAlignment: getInitialProduct("textAlignment", "left"),
    productBorderThickness: getInitialProduct('productBorderThickness', '2px'),
    productBorderStyle: getInitialProduct("productBorderStyle", 'none'),
    productBorderRadius: getInitialProduct("productBorderRadius", "2px"),
    productBorderColor: getInitialProduct("productBorderColor", "#000000"),
    productHorizontalOffset: getInitialProduct("productHorizontalOffset", "2px"),
    productverticalOffeset: getInitialProduct("productverticalOffeset", "2px"),
    productBlur: getInitialProduct("productBlur", "2px"),
    productShadowColor:getInitialProduct("productShadowColor","#000000"),
}


const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setImgPadding: (state, action: PayloadAction<string>) => {
            state.imgPadding = action.payload;
        },
        setImgRadius: (state, action: PayloadAction<string>) => {
            state.imgRadius = action.payload;
        },
        setTextAlignment: (state, action: PayloadAction<string>) => {
            state.textAlignment = action.payload;
        },
        setProductBorderThickness: (state, action: PayloadAction<string>) => {
            state.productBorderThickness = action.payload;
        },
        setProductBorderStyle: (state, action: PayloadAction<string>) => {
            state.productBorderStyle = action.payload;
        },
        setProductBorderRadius: (state, action: PayloadAction<string>) => {
            state.productBorderRadius = action.payload;
        },
        setProductBorderColor: (state, action: PayloadAction<string>) => {
            state.productBorderColor = action.payload;
        },
        setProductHorizontalOffset: (state, action: PayloadAction<string>) => {
            state.productHorizontalOffset = action.payload;
        },
        setProductverticalOffeset: (state, action: PayloadAction<string>) => {
            state.productverticalOffeset = action.payload;
        },
        setProductBlur: (state, action: PayloadAction<string>) => {
            state.productBlur = action.payload;
        },
        setProductShadowColor: (state,action:PayloadAction<string>) =>{
            state.productShadowColor = action.payload;
        }
    }
});

export const { setImgPadding, setImgRadius, setTextAlignment, setProductBorderThickness, setProductBorderStyle, setProductBorderRadius, setProductBorderColor, setProductHorizontalOffset, setProductverticalOffeset, setProductBlur ,setProductShadowColor} = productSlice.actions;
export default productSlice.reducer;