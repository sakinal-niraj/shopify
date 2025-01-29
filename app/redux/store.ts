import { configureStore } from "@reduxjs/toolkit";
import colorReducer from './slices/colorSlice';
import typographyReducer from './slices/typographySlice';
import buttonReducer from './slices/buttonSlice';
import productReducer from './slices/productSlice';

const store = configureStore({
    reducer:{
        color: colorReducer,
        typography: typographyReducer,
        button: buttonReducer,
        product:productReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;