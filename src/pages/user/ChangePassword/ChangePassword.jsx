import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SyncLoader from "react-spinners/SyncLoader";
import { useFormik } from "formik";
import * as Yup from "yup";
import { userPassChange } from "../../../features/Auth/AuthApiSlice.js";
import { setMessageEmpty } from "../../../features/Auth/AuthSlice.js";
import toastify from "../../../utils/toastify.jsx";
import styles from "../Login/Login.module.css";

const ChangePassword = () => {
  const dispatch = useDispatch();

  const { isError, message, isLoading, user } = useSelector(
    (state) => state.auth
  );

  const schema = Yup.object().shape({
    oldPassword: Yup.string().required("Old Password is required"),
    newPassword: Yup.string()
      .required("New Password is required")
      .min(6, "Password must be at least 6 characters long"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      if (values.newPassword != values.confirmPassword) {
        toastify("error", "Password not match");
      }
      const data = {
        oldPassword: values.oldPassword,
        newPassword: values.newPassword,
      };
      dispatch(userPassChange(data));
    },
  });

  useEffect(() => {
    if (isError) {
      toastify("error", isError);
      dispatch(setMessageEmpty());
    }
    if (message) {
      toastify("success", message);
      dispatch(setMessageEmpty());
    }
  }, [isError, message]);

  return (
    <>
      <SyncLoader
        color={"#4CAF50"}
        loading={isLoading}
        cssOverride={{ position: "fixed", top: "50%", left: "50%" }}
        size={15}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      <div className="section">
        <header className="diposits">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="diposit-header">
                  <Link to="/">
                    <i className="bi bi-chevron-left"></i>
                  </Link>
                  <h2>Change Password</h2>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="mb-5 mt-4 adminLogin">
          <h4 className="title">Create New Password</h4>
          <form onSubmit={formik.handleSubmit}>
            {formik.errors.oldPassword && formik.touched.oldPassword ? (
              <p className={styles.manualError}>{formik.errors.oldPassword}</p>
            ) : null}
            <label htmlFor="oldPassword">Old Password</label>
            <br />
            <input
              className="inputField"
              name="oldPassword"
              required
              type="password"
              placeholder="Enter Old Password"
              onChange={formik.handleChange("oldPassword")}
              value={formik.values.oldPassword}
            />
            <br />
            {formik.errors.newPassword && formik.touched.newPassword ? (
              <p className={styles.manualError}>{formik.errors.newPassword}</p>
            ) : null}
            <label htmlFor="newPassword">New Password</label>
            <br />
            <input
              className="inputField"
              name="newPassword"
              required
              type="password"
              placeholder="Enter New Password"
              onChange={formik.handleChange("newPassword")}
              value={formik.values.newPassword}
            />
            <br />
            {formik.errors.confirmPassword && formik.touched.confirmPassword ? (
              <p className={styles.manualError}>
                {formik.errors.confirmPassword}
              </p>
            ) : null}
            <label htmlFor="confirmPassword">Confirm Password</label>
            <br />
            <input
              className="inputField"
              name="confirmPassword"
              required
              type="password"
              placeholder="Enter Confirm Password"
              onChange={formik.handleChange("confirmPassword")}
              value={formik.values.confirmPassword}
            />
            <br />

            <button
              type="submit"
              className="btn-outline-light text-dark submitBtn"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
