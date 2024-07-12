import styles from "./Login.module.css";
import { Link, useParams } from "react-router-dom";
//form handling for
import { useFormik } from "formik";
import * as Yup from "yup";
import SyncLoader from "react-spinners/SyncLoader";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import toastify from "../../../utils/toastify.jsx";
import { setMessageEmpty } from "../../../features/Auth/AuthSlice.js";
import {
  mailVerification,
  userLogin,
} from "../../../features/Auth/AuthApiSlice.js";

const Login = () => {
  // get token form url
  const { token } = useParams();

  //dispatch via call api
  const dispatch = useDispatch();
  const { isError, message, isLoading } = useSelector((state) => state.auth);

  //verify token by email
  useEffect(() => {
    if (token) {
      dispatch(mailVerification({ token }));
    }
  }, [token]);

  //validation schema
  const schema = Yup.object().shape({
    email: Yup.string()
      .email("Email Should be valid")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });
  // from handlers
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (value) => {
      dispatch(userLogin(value));
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
          <h1 className={styles.signuph1}>Login</h1>
          <form onSubmit={formik.handleSubmit}>
            {formik.errors.email && formik.touched.email ? (
              <p className={styles.manualError}>{formik.errors.email}</p>
            ) : null}
            <label className={styles.labletag}>Email:</label>
            <input
              className={styles.loginInput}
              type="email"
              placeholder="Enter Your Email:"
              required
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
              placeholder="Enter Your Password:"
              required
              name="password"
              onChange={formik.handleChange("password")}
              value={formik.values.password}
            />
            <button className={styles.loginButton} type="submit">
              Login
            </button>
            <p className={styles.label}>
              Don't have an account? <Link to="/signup">Sign Up</Link> Or{" "}
              <Link to="/resend">Resend Mail</Link>
            </p>
          </form>
          <p className={styles.label}>
            <Link to="/forgot">Forgot your password?</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
