import { createSlice,PayloadAction } from "@reduxjs/toolkit";

interface SideBar{
    sidebarType:string;
}

const initialState : SideBar = {
    sidebarType: 'Settings',
};

const sidebarSlice = createSlice({
    name:'sidebar',
    initialState,
    reducers:{
        setSidebarType:(state,action:PayloadAction<string>)=>{
            state.sidebarType = action.payload;
        }
    }
});

export const {setSidebarType} = sidebarSlice.actions;
export default sidebarSlice.reducer;
export const selectSidebarType = (state:{sidebar: SideBar}) => state.sidebar.sidebarType;