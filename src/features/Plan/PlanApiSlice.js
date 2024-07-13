import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../utils/baseUrl.js";

// create Plan
export const createPlan = createAsyncThunk("plan/createPlan", async (data) => {
  try {
    const response = await axios.post(`${baseUrl}/plan`, data, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

// get All Plan
export const getAllPlan = createAsyncThunk("plan/getAllPlan", async () => {
  try {
    const response = await axios.get(`${baseUrl}/plan`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});
