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

// update A Plan
export const updateAPlan = createAsyncThunk(
  "plan/updateAPlan",
  async (data) => {
    try {
      const response = await axios.put(
        `${baseUrl}/plan/${data.id}`,
        data.value,
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

// get single plan

export const getASinglePlan = createAsyncThunk(
  "plan/getASinglePlan",
  async (id) => {
    try {
      const response = await axios.get(
        `${baseUrl}/plan/${id}`,
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

// delete a plan

export const deleteAPlan = createAsyncThunk(
  "plan/deleteAPlan",
  async (id) => {
    try {
      const response = await axios.delete(
        `${baseUrl}/plan/${id}`,
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