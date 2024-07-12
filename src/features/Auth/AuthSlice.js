import { createSlice } from "@reduxjs/toolkit";
import {
  forgotPassword,
  loggedInUser,
  logout,
  mailVerification,
  resetEmailMail,
  resetPassword,
  userLogin,
  userRegistration,
} from "./AuthApiSlice.js";

// create a initialState
const initialState = {
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
  isLoading: false,
  isError: null,
  message: null,
};

//create slice
const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setMessageEmpty: (state, action) => {
      state.isError = null;
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    //create a use register
    builder
      .addCase(userRegistration.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(userRegistration.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message;
      })
      .addCase(userRegistration.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.message = action.payload.message;
      })
      //  user login
      .addCase(userLogin.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.isError = action.error.message;
        state.message = null;
        state.isLoading = false;
        state.user = null;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.isError = null;
        state.message = action.payload.message;
        state.isLoading = false;
        state.user = action.payload.user;
        if (action.payload.user) {
          localStorage.setItem("user", JSON.stringify(action.payload.user));
        }
      })
      // logout administration
      .addCase(logout.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = action.payload.message;
        state.user = null;
        localStorage.removeItem("user");
      }) // loggedInUser
      .addCase(loggedInUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(loggedInUser.rejected, (state, action) => {
        state.isLoading = false;
        state.user = null;
        //state.isError = action.error.message;
        localStorage.removeItem("user");
      })
      .addCase(loggedInUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.message = null;
        if (action.payload) {
          localStorage.setItem("user", JSON.stringify(action.payload));
        }
      }) // resend activation
      .addCase(mailVerification.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(mailVerification.rejected, (state, action) => {
        state.isError = action.error.message;
        state.isLoading = false;
      })
      .addCase(mailVerification.fulfilled, (state, action) => {
        state.message = action.payload.message;
        state.isLoading = false;
      }) // resend mail verification
      .addCase(resetEmailMail.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(resetEmailMail.rejected, (state, action) => {
        state.isError = action.error.message;
        state.isLoading = false;
      })
      .addCase(resetEmailMail.fulfilled, (state, action) => {
        state.message = action.payload.message;
        state.isLoading = false;
      })
      // resend mail verification
      .addCase(forgotPassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.isError = action.error.message;
        state.isLoading = false;
      })
      .addCase(forgotPassword.fulfilled, (state, action) => {
        state.message = action.payload.message;
        state.isLoading = false;
      })
      // Forgot Password
      .addCase(resetPassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.isError = action.error.message;
        state.isLoading = false;
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.message = action.payload.message;
        state.isLoading = false;
      });
  },
});

//action
export const { setMessageEmpty } = authSlice.actions;

//reducer
export default authSlice.reducer;
