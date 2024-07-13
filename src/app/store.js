import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/Auth/AuthSlice.js";
import depositReducer from "../features/Deposit/DepositSlice.js";
import cashoutReducer from "../features/Cashout/CashoutSlice.js";
import supportReducer from "../features/Support/SupportSlice.js";
import planReducer from "../features/Plan/PlanSlice.js";
import workReducer from "../features/Work/WorkSlice.js";

//create a store
const store = configureStore({
  reducer: {
    auth: authReducer,
    deposit: depositReducer,
    cashout: cashoutReducer,
    support: supportReducer,
    plan: planReducer,
    work: workReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true,
});

//export the store
export default store;
