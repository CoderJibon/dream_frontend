import React, { useEffect } from "react";
import styles from "../ForgetPassword/Foragte.module.css";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
//form handling for
import { useFormik } from "formik";
import * as Yup from "yup";
import SyncLoader from "react-spinners/SyncLoader";
import toastify from "../../../utils/toastify.jsx";
import { setMessageEmpty } from "../../../features/Auth/AuthSlice.js";
import { resetEmailMail } from "../../../features/Auth/AuthApiSlice.js";

const Resendmail = () => {
  //dispatch via call api
  const dispatch = useDispatch();
  const { isError, message, isLoading } = useSelector((state) => state.auth);
  //validation schema
  const schema = Yup.object().shape({
    email: Yup.string()
      .email("Email Should be valid")
      .required("Email is required"),
  });
  // from handlers
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: schema,
    onSubmit: (value) => {
      dispatch(resetEmailMail({ email: value.email }));
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
    <div className={styles.body}>
      <SyncLoader
        color={"#4CAF50"}
        loading={isLoading}
        cssOverride={{ position: "fixed", top: "50%", left: "50%" }}
        size={15}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      <div className={styles.body2}>
        <div className={styles.container}>
          <h1 className={styles.signuph1}>Resend Variation Email </h1>
          <form onSubmit={formik.handleSubmit}>
            <label className={styles.labletag}>Email:</label>
            <input
              className={styles.loginInput}
              type="email"
              placeholder="Enter Your Valid Email"
              required
              name="email"
              onChange={formik.handleChange("email")}
              value={formik.values.email}
            />
            <button className={styles.loginButton} type="submit">
              Login
            </button>
            <p className={styles.label}>
              Don't have an account? <Link to="/">Sign Up</Link> Or{" "}
              <Link to="/">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Resendmail;
