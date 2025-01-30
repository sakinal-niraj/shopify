import { configureStore } from "@reduxjs/toolkit";
import colorReducer from './slices/colorSlice';
import typographyReducer from './slices/typographySlice';
import buttonReducer from './slices/buttonSlice';
import productReducer from './slices/productSlice';
import historyReducer from './slices/historySlice';
import { historyMiddleware } from "./middleware/historyMiddleware";
import pageReducer from './slices/pageSlice';
import screenReducer from './slices/screenSizeSlice';
import sidebarReducer from './slices/sidebarSlice';
import categoryReducer from './slices/categorySlice';

const store = configureStore({
    reducer:{
        color: colorReducer,
        typography: typographyReducer,
        button: buttonReducer,
        product:productReducer,
        history: historyReducer,
        page:pageReducer,
        screen:screenReducer,
        sidebar:sidebarReducer,
        category:categoryReducer,
    },
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware().concat(historyMiddleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;