import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../utils/baseUrl.js";

// create work
export const createWork = createAsyncThunk("Work/createWork", async (data) => {
  try {
    const response = await axios.post(`${baseUrl}/work`, data, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

// get All Work
export const getAllWork = createAsyncThunk("Work/getAllWork", async () => {
  try {
    const response = await axios.get(`${baseUrl}/work`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});
