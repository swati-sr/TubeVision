import { createSlice } from "@reduxjs/toolkit";

const sideMenuSlice = createSlice({
  name: "sideMenu",
  initialState: {
    isSideMenuOpen: true,
  },
  reducers: {
    openSideMenu: (state) => {
      state.isSideMenuOpen = !state.isSideMenuOpen;
    },
    closeSideMenu: (state) => {
      state.isSideMenuOpen = false;
    },
  },
});

export const { openSideMenu, closeSideMenu } = sideMenuSlice.actions;
export default sideMenuSlice.reducer;
