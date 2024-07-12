import { useDispatch, useSelector } from "react-redux";
import styles from "../ForgetPassword/Foragte.module.css";
import { Link, useParams } from "react-router-dom";
//form handling for
import { useFormik } from "formik";
import * as Yup from "yup";
import SyncLoader from "react-spinners/SyncLoader";
import toastify from "../../../utils/toastify.jsx";
import { setMessageEmpty } from "../../../features/Auth/AuthSlice.js";
import { resetPassword } from "../../../features/Auth/AuthApiSlice.js";
import { useEffect } from "react";

const ResedPassword = () => {
  //get token
  const { token } = useParams();

  //dispatch via call api
  const dispatch = useDispatch();
  const { isError, message, isLoading } = useSelector((state) => state.auth);
  //validation schema
  const schema = Yup.object().shape({
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string().required("Confirm Password is required"),
  });
  // from handlers
  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: schema,
    onSubmit: (value) => {
      if (token) {
        if (value.password == value.confirmPassword) {
          dispatch(resetPassword({ token, password: value.password }));
        } else {
          toastify("error", "password does not match!");
        }
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
          <h1 className={styles.signuph1}>Resent Password</h1>
          <form onSubmit={formik.handleSubmit}>
            <label className={styles.labletag}>New password:</label>
            <input
              className={styles.loginInput}
              type="password"
              placeholder="Enter Your New password"
              required
              name="password"
              onChange={formik.handleChange("password")}
              value={formik.values.password}
            />
            <label className={styles.labletag}>Confirm Password:</label>
            <input
              className={styles.loginInput}
              type="password"
              placeholder="Enter Your Confirm Passwords"
              required
              name="confirmPassword"
              onChange={formik.handleChange("confirmPassword")}
              value={formik.values.confirmPassword}
            />
            <button className={styles.loginButton} type="submit">
              Submit
            </button>
            <p className={styles.label}>
              Don't have an account? <Link to="/signup">Sign Up</Link> or{" "}
              <Link to="/login">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResedPassword;
