import { createSlice } from "@reduxjs/toolkit";
import { createPlan, getAllPlan } from "./PlanApiSlice.js";

// create a initialState
const initialState = {
  plan: [],
  isLoading: false,
  isError: null,
  message: null,
};

//create slice
const planSlice = createSlice({
  name: "plan",
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
      .addCase(createPlan.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(createPlan.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message;
      })
      .addCase(createPlan.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = action.payload.message;
        state.plan.push(action.payload.plan);
      })
      //get all plan
      .addCase(getAllPlan.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getAllPlan.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message;
      })
      .addCase(getAllPlan.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = null;
        state.plan = action.payload.plans;
      });
  },
});

//action
export const { setMessageEmpty } = planSlice.actions;

//reducer
export default planSlice.reducer;
