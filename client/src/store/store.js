import { configureStore } from "@reduxjs/toolkit";

import portalSlice from "./portal-slice";
import userSlice from "./user-slice";

const store = configureStore({
  reducer:{
    user: userSlice.reducer,
    portal: portalSlice.reducer,
  }
})

export default store;