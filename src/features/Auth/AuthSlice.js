import { createSlice } from "@reduxjs/toolkit";
import {
  buyPlan,
  createCashout,
  createDeposit,
  createSupport,
  forgotPassword,
  getAllUser,
  loggedInUser,
  logout,
  mailVerification,
  ProfileUpdate,
  resetEmailMail,
  resetPassword,
  userEarning,
  userLogin,
  userPassChange,
  userRegistration,
} from "./AuthApiSlice.js";

// create a initialState
const initialState = {
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
  users: [],
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
        state.message = null;
        state.user = action.payload;
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
      })
      //create deposit
      .addCase(createDeposit.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(createDeposit.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message;
      })
      .addCase(createDeposit.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = action.payload.message;
        state.user.deposit.push(action.payload.deposit);
      }) //create cashout
      .addCase(createCashout.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(createCashout.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message;
      })
      .addCase(createCashout.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = action.payload.message;
        state.user.cashOut.push(action.payload.cashOut);
      })
      //create cashout
      .addCase(createSupport.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(createSupport.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message;
      })
      .addCase(createSupport.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = action.payload.message;
        state.user.support.push(action.payload.support);
      })
      //get all users
      .addCase(getAllUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getAllUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message;
      })
      .addCase(getAllUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = null;
        state.users = action.payload.users;
      })
      // update profile
      .addCase(ProfileUpdate.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(ProfileUpdate.rejected, (state, action) => {
        state.isError = action.error.message;
        state.message = null;
        state.isLoading = false;
      })
      .addCase(ProfileUpdate.fulfilled, (state, action) => {
        state.isError = null;
        state.message = action.payload.message;
        state.isLoading = false;
        state.user = action.payload.user;
        if (action.payload.user) {
          localStorage.setItem("user", JSON.stringify(action.payload.user));
        }
      }) //buy plan
      .addCase(buyPlan.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(buyPlan.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message;
      })
      .addCase(buyPlan.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = action.payload.message;
        state.user = action.payload.plan;
      })
      //userEarning
      .addCase(userEarning.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(userEarning.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message;
      })
      .addCase(userEarning.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = action.payload.message;
        state.user.myBalance += action.payload.earn;
        state.user.totalEarning = action.payload.totalEarning;
      })
      // user change password
      .addCase(userPassChange.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(userPassChange.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message;
        
      })
      .addCase(userPassChange.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = action.payload.message;
      });
  },
});

//action
export const { setMessageEmpty } = authSlice.actions;

//reducer
export default authSlice.reducer;
