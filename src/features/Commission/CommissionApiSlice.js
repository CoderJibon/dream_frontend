import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../utils/baseUrl.js";

// get All Commission
export const getAllDCommission = createAsyncThunk(
  "commission/getAllDCommission",
  async () => {
    try {
      const response = await axios.get(`${baseUrl}/commission`, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

// Update Commission
export const updateCommission = createAsyncThunk(
  "commission/updateCommission",
  async ({ id, data }) => {
    try {
      const response = await axios.put(`${baseUrl}/commission/${id}`, data, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
