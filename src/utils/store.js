import { configureStore } from "@reduxjs/toolkit";
import sideMenuSlice from "./sideMenuSlice";
import searchSlice from "./searchSlice";

const store = configureStore({
  reducer: {
    sideMenu: sideMenuSlice,
    searching: searchSlice,
  },
});

export default store;
