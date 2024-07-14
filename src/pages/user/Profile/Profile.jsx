import { useEffect, useState } from "react";
import "./Profile.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import toastify from "../../../utils/toastify.jsx";
import { setMessageEmpty } from "../../../features/Auth/AuthSlice.js";
import { ProfileUpdate } from "../../../features/Auth/AuthApiSlice.js";
import SyncLoader from "react-spinners/SyncLoader";
import { rootUrl } from "../../../utils/baseUrl.js";

const Profile = () => {
  //dispatch via call api
  const dispatch = useDispatch();

  const { isError, message, isLoading, user } = useSelector(
    (state) => state.auth
  );

  // Validation schema using Yup
  const schema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    mobile: Yup.string().required("Mobile is required"),
    address: Yup.string().required("Address is required"),
    photo: Yup.mixed().required("Photo is required"),
  });

  // Form state and handlers using useFormik
  const formik = useFormik({
    initialValues: {
      name: "",
      mobile: "",
      address: "",
      photo: null,
    },
    validationSchema: schema,
    onSubmit: (values) => {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("mobile", values.mobile);
      formData.append("address", values.address);
      formData.append("userPhoto", values.photo);

      dispatch(ProfileUpdate({ id: user?._id, formData }));
    },
  });
  // State to manage single image for profile photo
  const [singleImage, setSingleImage] = useState(null);

  // Handle change for single image upload
  const handleChangeSingleImage = (e) => {
    setSingleImage(e.target.files[0]);
    formik.setFieldValue("photo", e.target.files[0]);
  };

  // Effect to update form values when user data changes
  useEffect(() => {
    if (user) {
      formik.setValues({
        ...formik.values,
        name: user.name || "",
        mobile: user.mobile || "",
        address: user.address || "",
      });
    }
  }, [user]);

  // message loading
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

  // Cleanup for object URL when component unmounts
  useEffect(() => {
    return () => {
      if (singleImage) {
        URL.revokeObjectURL(URL.createObjectURL(singleImage));
      }
    };
  }, [singleImage]);
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
                  <h2>Profile</h2>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="profilecontainer">
          <div className="profilelogo">
            <div className="thumbnils-img">
              {user && user?.photo ? (
                <img src={`${rootUrl}/UsersPhoto/${user?.photo}`} alt="" />
              ) : (
                <img
                  src="https://cdn-icons-png.flaticon.com/512/147/147140.png"
                  alt=""
                />
              )}
            </div>
          </div>
          <div className="profiledata">
            <h1>Name : {user.name}</h1>
            <h1>Email : {user.email}</h1>
            <h1>Username : {user.userName}</h1>
            <h1>Mobile : {user.mobile}</h1>
            <h1>Address : {user.address}</h1>
          </div>
        </div>
        <div className="mb-5 mt-4 adminLogin">
          <h4 className="title">Update User Profile</h4>

          <form onSubmit={formik.handleSubmit}>
            <label htmlFor="name">Name</label>
            <br />
            <input
              className="inputField"
              name="name"
              required
              type="text"
              placeholder="Enter name"
              onChange={formik.handleChange("name")}
              value={formik.values.name}
            />

            <br />

            <label htmlFor="mobile">Mobile</label>
            <br />
            <input
              className="inputField"
              name="mobile"
              required
              type="text"
              placeholder="Enter mobile"
              onChange={formik.handleChange("mobile")}
              value={formik.values.mobile}
            />

            <br />

            <label htmlFor="address">Address</label>
            <br />
            <input
              className="inputField"
              name="address"
              required
              type="text"
              placeholder="Enter address"
              onChange={formik.handleChange("address")}
              value={formik.values.address}
            />

            <br />

            <label htmlFor="userPhoto">Upload Photo</label>
            <br />
            <input
              type="file"
              id="userPhoto"
              required
              name="userPhoto"
              onChange={handleChangeSingleImage}
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

export default Profile;
