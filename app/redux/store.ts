import { configureStore } from "@reduxjs/toolkit";
import colorSlice from './colorSlice';


const store = configureStore({
    reducer:{
        header_footer: colorSlice,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;