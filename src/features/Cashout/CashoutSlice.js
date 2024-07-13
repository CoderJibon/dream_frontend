import { createSlice } from "@reduxjs/toolkit";
import { getAllCashout, statusCashout } from "./CashoutApiSlice.js";

// create a initialState
const initialState = {
  cashout: [],
  isLoading: false,
  isError: null,
  message: null,
};

//create slice
const CashoutSlice = createSlice({
  name: "cashout",
  initialState: initialState,
  reducers: {
    setMessageEmpty: (state, action) => {
      state.isError = null;
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    // get all deposit
    builder
      .addCase(getAllCashout.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getAllCashout.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message;
      })
      .addCase(getAllCashout.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = null;
        state.cashout = action.payload.cashOuts;
      })
      //status update
      .addCase(statusCashout.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(statusCashout.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message;
      })
      .addCase(statusCashout.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = action.payload.message;
        // Find the index of the deposit to update
        const index = state.cashout.findIndex(
          (co) => co._id === action.payload.cashOut._id
        );

        // Check if the deposit exists
        if (index !== -1) {
          // Update the status of the deposit
          state.cashout[index] = action.payload.cashOut;
        }
      });
  },
});

//action
export const { setMessageEmpty } = CashoutSlice.actions;

//reducer
export default CashoutSlice.reducer;
