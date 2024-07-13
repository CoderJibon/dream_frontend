import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../utils/baseUrl.js";

// get All Support
export const getAllSupport = createAsyncThunk(
  "auth/getAllSupport",
  async () => {
    try {
      const response = await axios.get(`${baseUrl}/support`, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

//status update
export const statusSupport = createAsyncThunk(
  "auth/statusSupport",
  async ({ id, status }) => {
    try {
      const response = await axios.patch(
        `${baseUrl}/support/status/${id}`,
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
