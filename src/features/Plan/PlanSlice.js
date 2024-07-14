import { createSlice } from "@reduxjs/toolkit";
import {
  createPlan,
  deleteAPlan,
  getAllPlan,
  getASinglePlan,
  updateAPlan,
} from "./PlanApiSlice.js";

// create a initialState
const initialState = {
  plan: [],
  isLoading: false,
  isError: null,
  message: null,
  singlePlan: null,
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
      })
      // get single plan
      .addCase(getASinglePlan.pending, (state) => {
        state.isLoading = true;
        state.singlePlan = null;
      })
      .addCase(getASinglePlan.rejected, (state, action) => {
        state.isError = action.error.message;
        state.isLoading = false;
        state.singlePlan = null;
      })
      .addCase(getASinglePlan.fulfilled, (state, action) => {
        state.singlePlan = action.payload;
        state.isLoading = false;
      })
      // update a plan
      .addCase(updateAPlan.fulfilled, (state, action) => {
        state.loader = false;

        const updatedPlanIndex = state.plan.findIndex(
          (item) => item._id === action.payload.plan?._id
        );

        if (updatedPlanIndex !== -1) {
          state.plan[updatedPlanIndex] = action.payload.plan;
        }

        state.message = action.payload.message;
      })
      // delete a plan
      .addCase(deleteAPlan.fulfilled, (state, action) => {
        state.plan = state.plan.filter(
          (data) => data._id !== action.payload.plan._id
        );

        state.message = action.payload.message;
      });
  },
});

//action
export const { setMessageEmpty } = planSlice.actions;

//reducer
export default planSlice.reducer;
