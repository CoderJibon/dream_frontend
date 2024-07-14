import { createSlice } from "@reduxjs/toolkit";
import {
  createWork,
  deleteAWork,
  getAllWork,
  getASingleWork,
  updateAWork,
} from "./WorkApiSlice.js";

// create a initialState
const initialState = {
  work: [],
  isLoading: false,
  isError: null,
  message: null,
  singleWork: null,
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
    //create a work
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
      //get all work
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
      })
      // get single work
      .addCase(getASingleWork.pending, (state) => {
        state.isLoading = true;
        state.singleWork = null;
      })
      .addCase(getASingleWork.rejected, (state, action) => {
        state.isError = action.error.message;
        state.isLoading = false;
        state.singleWork = null;
      })
      .addCase(getASingleWork.fulfilled, (state, action) => {
        state.singleWork = action.payload;
        state.isLoading = false;
      })
      // update a work
      .addCase(updateAWork.fulfilled, (state, action) => {
        state.loader = false;

        const updatedWorkIndex = state.work.findIndex(
          (item) => item._id === action.payload.work?._id
        );

        if (updatedWorkIndex !== -1) {
          state.work[updatedWorkIndex] = action.payload.work;
        }

        state.message = action.payload.message;
      })
      // delete a work
      .addCase(deleteAWork.fulfilled, (state, action) => {
        state.work = state.work.filter(
          (data) => data._id !== action.payload.work._id
        );

        state.message = action.payload.message;
      });
  },
});

//action
export const { setMessageEmpty } = workSlice.actions;

//reducer
export default workSlice.reducer;
