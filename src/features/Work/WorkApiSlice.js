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

// update A work
export const updateAWork = createAsyncThunk(
  "Work/updateAWork",
  async (data) => {
    try {
      const response = await axios.put(
        `${baseUrl}/work/${data.id}`,
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

// get single work

export const getASingleWork = createAsyncThunk(
  "Work/getASingleWork",
  async (id) => {
    try {
      const response = await axios.get(`${baseUrl}/work/${id}`, {
        withCredentials: true,
      });

      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

// delete a work
export const deleteAWork = createAsyncThunk("Work/deleteAWork", async (id) => {
  try {
    const response = await axios.delete(`${baseUrl}/work/${id}`, {
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});
