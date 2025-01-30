import { configureStore } from "@reduxjs/toolkit";
import colorReducer from './slices/colorSlice';
import typographyReducer from './slices/typographySlice';
import buttonReducer from './slices/buttonSlice';
import productReducer from './slices/productSlice';
import historyReducer from './slices/historySlice';
import { historyMiddleware } from "./middleware/historyMiddleware";

const store = configureStore({
    reducer:{
        color: colorReducer,
        typography: typographyReducer,
        button: buttonReducer,
        product:productReducer,
        history: historyReducer,
    },
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware().concat(historyMiddleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;