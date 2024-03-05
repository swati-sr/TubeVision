import { configureStore } from "@reduxjs/toolkit";
import sideMenuSlice from "./sideMenuSlice";

const store = configureStore({
  reducer: {
    sideMenu: sideMenuSlice,
  },
});

export default store;
