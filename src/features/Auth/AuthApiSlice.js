import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../utils/baseUrl.js";

// register new user
export const userRegistration = createAsyncThunk(
  "auth/userRegistration",
  async ({ ref, data }) => {
    try {
      let response = null;
      if (ref) {
        response = await axios.post(`${baseUrl}/auth/register/${ref}`, data, {
          withCredentials: true,
        });
      } else {
        response = await axios.post(`${baseUrl}/auth/register`, data, {
          withCredentials: true,
        });
      }
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

// user Login
export const userLogin = createAsyncThunk("auth/userLogin", async (data) => {
  try {
    const response = await axios.post(`${baseUrl}/auth/login`, data, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

//Logout
export const logout = createAsyncThunk("auth/logout", async () => {
  try {
    const response = await axios.get(`${baseUrl}/auth/logOut`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

// stay user Login
export const loggedInUser = createAsyncThunk("auth/loggedInUser", async () => {
  try {
    const response = await axios.get(`${baseUrl}/auth/loggedInUser`, {
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

// USER VERIFICATION BY EMAIL
export const mailVerification = createAsyncThunk(
  "auth/mailVerification",
  async ({ token }) => {
    try {
      const response = await axios.get(
        `http://localhost:5050/api/v1/auth/Login/${token}`,
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

// reset VERIFICATION BY EMAIL
export const resetEmailMail = createAsyncThunk(
  "auth/resendToken",
  async ({ email }) => {
    try {
      const response = await axios.post(
        `${baseUrl}/auth/resendToken`,
        {
          email,
        },
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

// password reset
export const forgotPassword = createAsyncThunk(
  "auth/forgotPassword",
  async ({ email }) => {
    try {
      const response = await axios.post(
        `${baseUrl}/auth/forgotPass`,
        {
          email,
        },
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

// reset password mail set
export const resetPassword = createAsyncThunk(
  "auth/resetPassword",
  async ({ token, password }) => {
    try {
      const response = await axios.post(
        `${baseUrl}/auth/resetPass/${token}`,
        { password },
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

// get All Orders
// export const getAllOrder = createAsyncThunk("order/getAllOrder", async () => {
//     try {
//       const response = await axios.get(`${baseUrl}/user/get-all-orders`, {
//         withCredentials: true,
//       });
//       return response.data;
//     } catch (error) {
//       throw new Error(error.response.data.message);
//     }
//   });

// delete order
//   export const DeleteOrder = createAsyncThunk("order/DeleteOrder", async (id) => {
//     try {
//       const response = await axios.delete(
//         `${baseUrl}/user/get-all-orders/order/${id}`,
//         {
//           withCredentials: true,
//         }
//       );
//       return response.data;
//     } catch (error) {
//       throw new Error(error.response.data.message);
//     }
//   });

//profileUpdate
export const ProfileUpdate = createAsyncThunk(
  "auth/ProfileUpdate",
  async ({ id, formData }) => {
    try {
      const response = await axios.put(`${baseUrl}/user/${id}`, formData, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

// add products wishlist
export const addWIshList = createAsyncThunk("user/addWIshList", async (id) => {
  try {
    const response = await axios.put(
      `${baseUrl}/user/wishlist`,
      {
        productId: id,
      },
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

// get all wishlist
export const getAllWishlist = createAsyncThunk(
  "user/getAllWishlist",
  async () => {
    try {
      const response = await axios.get(`${baseUrl}/user/wishlist`, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
