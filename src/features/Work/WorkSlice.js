import { createSlice } from "@reduxjs/toolkit";
import { createWork, getAllWork } from "./WorkApiSlice.js";

// create a initialState
const initialState = {
  work: [],
  isLoading: false,
  isError: null,
  message: null,
};

//create slice
const workSlice = createSlice({
  name: "work",
  initialState: initialState,
  reducers: {
    setMessageEmpty: (state, action) => {
      state.isError = null;
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    //create a Plan
    builder
      .addCase(createWork.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(createWork.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message;
      })
      .addCase(createWork.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = action.payload.message;
        state.work.push(action.payload.work);
      })
      //get all plan
      .addCase(getAllWork.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getAllWork.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message;
      })
      .addCase(getAllWork.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = null;
        state.work = action.payload.works;
      });
  },
});

//action
export const { setMessageEmpty } = workSlice.actions;

//reducer
export default workSlice.reducer;
