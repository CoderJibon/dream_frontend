import { createSlice } from "@reduxjs/toolkit";
import { getAllDeposit, statusDeposit } from "./DepositApiSlice.js";

// create a initialState
const initialState = {
  deposit: [],
  isLoading: false,
  isError: null,
  message: null,
};

//create slice
const DepositSlice = createSlice({
  name: "deposit",
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
      .addCase(getAllDeposit.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getAllDeposit.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message;
      })
      .addCase(getAllDeposit.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = null;
        state.deposit = action.payload.deposits;
      })
      //status update
      .addCase(statusDeposit.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(statusDeposit.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message;
      })
      .addCase(statusDeposit.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = action.payload.message;
        // Find the index of the deposit to update
        const index = state.deposit.findIndex(
          (dp) => dp._id === action.payload.deposit._id
        );

        // Check if the deposit exists
        if (index !== -1) {
          // Update the status of the deposit
          state.deposit[index] = action.payload.deposit;
        }
      });
  },
});

//action
export const { setMessageEmpty } = DepositSlice.actions;

//reducer
export default DepositSlice.reducer;
