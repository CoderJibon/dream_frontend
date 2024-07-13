import { Link } from "react-router-dom";
import "./Complaint.css";
import { useDispatch, useSelector } from "react-redux";
//form handling for
import { useFormik } from "formik";
import * as Yup from "yup";
import SyncLoader from "react-spinners/SyncLoader";
import toastify from "../../../utils/toastify.jsx";
import { useEffect } from "react";
import { setMessageEmpty } from "../../../features/Auth/AuthSlice.js";
import { createSupport } from "../../../features/Auth/AuthApiSlice.js";

const Complaint = () => {
  //dispatch via call api
  const dispatch = useDispatch();
  const { isError, message, user, isLoading } = useSelector(
    (state) => state.auth
  );

  //validation schema
  const schema = Yup.object().shape({
    subject: Yup.string().required("subject is required"),
    Priority: Yup.string().required("Priority is required"),
    Message: Yup.string().required("Message is required"),
  });
  // from handlers
  const formik = useFormik({
    initialValues: {
      name: user?.name,
      email: user?.email,
      subject: "",
      Priority: "",
      Message: "",
    },
    validationSchema: schema,
    onSubmit: (value) => {
      console.log(value);
      dispatch(createSupport(value));
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
    <div className="section">
      <SyncLoader
        color={"#4CAF50"}
        loading={isLoading}
        cssOverride={{ position: "fixed", top: "50%", left: "50%" }}
        size={15}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      <header className="diposits">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="diposit-header">
                <Link to="/support">
                  <i className="bi bi-chevron-left"></i>
                </Link>
                <h2>Complaint</h2>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="conplaintfrom">
        <form onSubmit={formik.handleSubmit}>
          <div className="complaintdiv1">
            <label>
              <span>Name</span>
              <input
                value={user.name}
                disabled
                className="complaininput"
                type="text"
              />
            </label>

            <label>
              <span>Email</span>
              <input
                value={user.email}
                disabled
                className="complaininput"
                type="email"
              />
            </label>
          </div>
          <div className="complaintdiv1">
            <label>
              <span>Subject</span>
              <input
                required
                className="complaininput"
                type="text"
                name="subject"
                onChange={formik.handleChange("subject")}
                value={formik.values.subject}
              />
            </label>

            <label>
              <span>Priority</span>
              <select
                onChange={formik.handleChange("Priority")}
                name="Priority"
                id="method"
                className="complaininput"
              >
                <option value="">--select--</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </label>
          </div>
          <label>
            <span className="complanspan">Massage</span>
            <textarea
              required
              onChange={formik.handleChange("Message")}
              value={formik.values.Message}
              className="complaintarea"
              name="Message"
            ></textarea>
          </label>
          <button
            style={{ marginTop: 10 }}
            type="submit"
            className="complainbutton"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Complaint;
