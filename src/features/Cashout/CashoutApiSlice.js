import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../utils/baseUrl.js";

// get All Cashout
export const getAllCashout = createAsyncThunk(
  "auth/getAllCashout",
  async () => {
    try {
      const response = await axios.get(`${baseUrl}/cashOut`, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

//status update
export const statusCashout = createAsyncThunk(
  "auth/statusCashout",
  async ({ id, status }) => {
    try {
      const response = await axios.patch(
        `${baseUrl}/cashOut/status/${id}`,
        { status: status },
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
