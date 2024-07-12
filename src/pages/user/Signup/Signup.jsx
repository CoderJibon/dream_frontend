import React, { useEffect, useState } from "react";
import styles from "./Signup.module.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userRegistration } from "../../../features/Auth/AuthApiSlice.js";
//form handling for
import { useFormik } from "formik";
import * as Yup from "yup";
import toastify from "../../../utils/toastify.jsx";
import { setMessageEmpty } from "../../../features/Auth/AuthSlice.js";
import SyncLoader from "react-spinners/SyncLoader";

//signUp Form
const Signup = () => {
  //dispatch via call api
  const dispatch = useDispatch();
  const { ref } = useParams();
  const { isError, message, isLoading } = useSelector((state) => state.auth);

  //validation schema
  const schema = Yup.object().shape({
    email: Yup.string()
      .email("Email Should be valid")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string().required("Confirm Password is required"),
    name: Yup.string().required("Name is required"),
    userName: Yup.string().required("userName is required"),
  });
  // from handlers
  const formik = useFormik({
    initialValues: {
      name: "",
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: schema,
    onSubmit: (value) => {
      if (value.password !== value.confirmPassword) {
        toastify("error", "Password Does not match!");
      } else {
        const data = {
          name: value.name,
          email: value.email,
          userName: value.userName,
          password: value.password,
        };

        dispatch(userRegistration({ref, data}));
      }
    },
  });

  useEffect(() => {
    if (isError) {
      toastify("error", isError);
      dispatch(setMessageEmpty());
    }
    if (message) {
      toastify("success", message);
      formik.resetForm();
      dispatch(setMessageEmpty());
    }
  }, [isError, message]);

  return (
    <div>
      <SyncLoader
        color={"#4CAF50"}
        loading={isLoading}
        cssOverride={{ position: "fixed", top: "50%", left: "50%" }}
        size={15}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      <div className={styles.body}>
        <div className={styles.body2}>
          <div className={styles.container}>
            <h1 className={styles.signuph1}>SignUp</h1>

            {/* //form */}
            <form onSubmit={formik.handleSubmit}>
              {formik.errors.name && formik.touched.name ? (
                <p className={styles.manualError}>{formik.errors.name}</p>
              ) : null}
              <label className={styles.labletag}>Name:</label>
              <input
                className={styles.loginInput}
                type="text"
                required
                placeholder="Enter Your Name:"
                name="name"
                onChange={formik.handleChange("name")}
                value={formik.values.name}
              />
              {formik.errors.userName && formik.touched.userName ? (
                <p className={styles.manualError}>{formik.errors.userName}</p>
              ) : null}
              <label className={styles.labletag}>User Name:</label>
              <input
                className={styles.loginInput}
                type="text"
                required
                name="userName"
                onChange={formik.handleChange("userName")}
                placeholder="Enter Your User name:"
                value={formik.values.userName}
              />
              {formik.errors.email && formik.touched.email ? (
                <p className={styles.manualError}>{formik.errors.email}</p>
              ) : null}
              <label className={styles.labletag}>Email:</label>
              <input
                className={styles.loginInput}
                type="email"
                id="email"
                required
                placeholder="Enter Your Email:"
                name="email"
                onChange={formik.handleChange("email")}
                value={formik.values.email}
              />
              {formik.errors.password && formik.touched.password ? (
                <p className={styles.manualError}>{formik.errors.password}</p>
              ) : null}
              <label className={styles.labletag}>Password:</label>
              <input
                className={styles.loginInput}
                type="password"
                required
                placeholder="Enter Your Password:"
                name="password"
                onChange={formik.handleChange("password")}
                value={formik.values.password}
              />
              {formik.errors.confirmPassword &&
              formik.touched.confirmPassword ? (
                <p className={styles.manualError}>
                  {formik.errors.confirmPassword}
                </p>
              ) : null}
              <label className={styles.labletag}>Confirm Password:</label>
              <input
                className={styles.loginInput}
                type="password"
                required
                placeholder="Enter Your Confirm Password:"
                name="confirmPassword"
                onChange={formik.handleChange("confirmPassword")}
                value={formik.values.confirmPassword}
              />
              <button className={styles.loginButton} type="submit">
                SignUp
              </button>
              <p className="label-text">
                You have only an account? <Link to="/login">Login</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
