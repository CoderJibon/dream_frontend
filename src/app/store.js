import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/Auth/AuthSlice.js";

//create a store
const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true,
});

//export the store
export default store;
