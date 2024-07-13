import { createSlice } from "@reduxjs/toolkit";
import { getAllSupport, statusSupport } from "./SupportApiSlice.js";

// create a initialState
const initialState = {
  support: [],
  isLoading: false,
  isError: null,
  message: null,
};

//create slice
const SupportSlice = createSlice({
  name: "support",
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
      .addCase(getAllSupport.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getAllSupport.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message;
      })
      .addCase(getAllSupport.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = null;
        state.support = action.payload.supports;
      })
      //status update
      .addCase(statusSupport.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(statusSupport.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message;
      })
      .addCase(statusSupport.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = action.payload.message;
        // Find the index of the deposit to update
        const index = state.support.findIndex(
          (dp) => dp._id === action.payload.support._id
        );
        // Check if the deposit exists
        if (index !== -1) {
          // Update the status of the deposit
          state.support[index] = action.payload.support;
        }
      });
  },
});

//action
export const { setMessageEmpty } = SupportSlice.actions;

//reducer
export default SupportSlice.reducer;
