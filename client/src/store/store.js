import { configureStore } from "@reduxjs/toolkit";

import portalSlice from "./portal-slice";

const store = configureStore({
  reducer:{
    portal: portalSlice.reducer,
  }
})

export default store;