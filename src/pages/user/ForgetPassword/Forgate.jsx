import { useDispatch, useSelector } from "react-redux";
import styles from "./Foragte.module.css";
import { Link } from "react-router-dom";
//form handling for
import { useFormik } from "formik";
import * as Yup from "yup";
import SyncLoader from "react-spinners/SyncLoader";
import toastify from "../../../utils/toastify.jsx";
import { setMessageEmpty } from "../../../features/Auth/AuthSlice.js";
import { forgotPassword } from "../../../features/Auth/AuthApiSlice.js";
import { useEffect } from "react";

const Forgate = () => {
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
      dispatch(forgotPassword({ email: value.email }));
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
          <h1 className={styles.signuph1}>Forgot Password</h1>
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
              Submit
            </button>
            <p className={styles.label}>
              Don't have an account? <Link to="/signup">Sign Up</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Forgate;
