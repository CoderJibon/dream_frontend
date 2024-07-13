import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../utils/baseUrl.js";

// get All deposit
export const getAllDeposit = createAsyncThunk(
  "auth/getAllDeposit",
  async () => {
    try {
      const response = await axios.get(`${baseUrl}/deposit`, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

//status update
export const statusDeposit = createAsyncThunk(
  "auth/statusDeposit",
  async ({ id, status }) => {
    try {
      const response = await axios.patch(
        `${baseUrl}/deposit/status/${id}`,
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
