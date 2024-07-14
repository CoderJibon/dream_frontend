import "../Custom.css";
import TopHeader from "../TopHeader/TopHeader.jsx";
//form handling for
import { useFormik } from "formik";
import * as Yup from "yup";
import { useEffect } from "react";
import toastify from "../../../utils/toastify.jsx";
import SyncLoader from "react-spinners/SyncLoader";
import { useDispatch, useSelector } from "react-redux";
import { setMessageEmpty } from "../../../features/Plan/PlanSlice.js";
import { useNavigate, useParams } from "react-router-dom";
import {
  getASinglePlan,
  updateAPlan,
} from "../../../features/Plan/PlanApiSlice.js";
function UpdatePlan() {
  //get id
  const { id } = useParams();

  //dispatch via call api
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { isError, message, isLoading, singlePlan } = useSelector(
    (state) => state.plan
  );

  //get all plan
  useEffect(() => {
    //dispatch(getAllPlan());
  }, [dispatch]);

  //validation schema
  const schema = Yup.object().shape({
    name: Yup.string().required("name is required"),
    price: Yup.number().required("price is required"),
    dailyAdvertisement: Yup.number().required("dailyAds is required"),
    dailyIncome: Yup.number().required("dailyIncome is required"),
    parAdsPrice: Yup.number().required("parAdsPrice is required"),
    validity: Yup.number().required("validity is required"),
  });

  // from handlers
  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      dailyAdvertisement: "",
      dailyIncome: "",
      parAdsPrice: "",
      validity: "",
    },
    validationSchema: schema,
    onSubmit: (value) => {
      dispatch(updateAPlan({ id, value }));
    },
  });

  // set previous values

  useEffect(() => {
    if (singlePlan) {
      formik.setValues({
        ...formik.values,
        name: singlePlan?.name || "",
        price: singlePlan?.price || "",
        dailyAdvertisement: singlePlan?.dailyAdvertisement || "",
        dailyIncome: singlePlan?.dailyIncome || "",
        parAdsPrice: singlePlan?.parAdsPrice || "",
        validity: singlePlan?.validity || "",
      });
    }
  }, [singlePlan, formik.setValues]);
  

  // get single plan
  useEffect(() => {
    dispatch(getASinglePlan(id));
  }, [dispatch, id]);

  // message loading
  useEffect(() => {
    if (isError) {
      toastify("error", isError);
      dispatch(setMessageEmpty());
    }
    if (message) {
      toastify("success", message);
      dispatch(setMessageEmpty());
      if (message == "Plan updated successfully") {
        navigate("/admin/plan");
      }
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
      <TopHeader name="Update Plan" link="/admin/plan"></TopHeader>

      <div className="mb-5 mt-4 adminLogin">
        <h4 className="title">Update plan</h4>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="adminUser">Plan name</label>
          <br />
          <input
            className="inputField"
            name="name"
            required
            type="text"
            placeholder="Enter title"
            onChange={formik.handleChange("name")}
            value={formik.values.name}
          />
          <label htmlFor="adminUser">Plan price</label>
          <br />
          <input
            className="inputField"
            name="price"
            required
            type="number"
            placeholder="Enter price"
            onChange={formik.handleChange("price")}
            value={formik.values.price}
          />

          <label htmlFor="adminPassword">Number of ads</label>
          <br />
          <input
            className="inputField"
            name="dailyAdvertisement"
            required
            type="number"
            placeholder="Enter number of ads"
            onChange={formik.handleChange("dailyAdvertisement")}
            value={formik.values.dailyAdvertisement}
          />
          <br />
          <label htmlFor="adminPassword">Daily income</label>
          <br />
          <input
            className="inputField"
            name="dailyIncome"
            required
            type="number"
            placeholder="Enter daily income"
            onChange={formik.handleChange("dailyIncome")}
            value={formik.values.dailyIncome}
          />
          <br />
          <label htmlFor="adminPassword">parAdsPrice</label>
          <br />
          <input
            className="inputField"
            name="parAdsPrice"
            required
            type="number"
            placeholder="Enter par Ads Price"
            onChange={formik.handleChange("parAdsPrice")}
            value={formik.values.parAdsPrice}
          />
          <br />

          <label htmlFor="adminPassword">Validity</label>
          <br />
          <input
            className="inputField"
            name="validity"
            required
            type="number"
            placeholder="Enter validity"
            onChange={formik.handleChange("validity")}
            value={formik.values.validity}
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
    </>
  );
}

export default UpdatePlan;
