import { configureStore } from "@reduxjs/toolkit";
import sideMenuSlice from "./sideMenuSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";

const store = configureStore({
  reducer: {
    sideMenu: sideMenuSlice,
    searching: searchSlice,
    chat: chatSlice,
  },
});

export default store;
