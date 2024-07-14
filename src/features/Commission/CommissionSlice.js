import { createSlice } from "@reduxjs/toolkit";
import { getAllDCommission, updateCommission } from "./CommissionApiSlice.js";

// create a initialState
const initialState = {
  commission: [],
  isLoading: false,
  isError: null,
  message: null,
};

//create slice
const CommissionSlice = createSlice({
  name: "commission",
  initialState: initialState,
  reducers: {
    setMessageEmpty: (state, action) => {
      state.isError = null;
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    // get all Commission
    builder
      .addCase(getAllDCommission.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getAllDCommission.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message;
      })
      .addCase(getAllDCommission.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = null;
        state.commission = action.payload.commissions;
      })
      // update Commission
      .addCase(updateCommission.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(updateCommission.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message;
      })
      .addCase(updateCommission.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = action.payload.message;
        console.log(action.payload.commission);
        // Find the index of the deposit to update
        const index = state.commission.findIndex(
          (dp) => dp._id === action.payload.commission._id
        );

        // Check if the deposit exists
        if (index !== -1) {
          // Update the status of the deposit
          state.commission[index] = action.payload.commission;
        }
      });
  },
});

//action
export const { setMessageEmpty } = CommissionSlice.actions;

//reducer
export default CommissionSlice.reducer;
