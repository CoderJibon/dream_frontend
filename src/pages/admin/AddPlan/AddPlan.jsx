import "../Custom.css";
import TopHeader from "../TopHeader/TopHeader.jsx";
//form handling for
import { useFormik } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import { Modal } from "react-responsive-modal";
import toastify from "../../../utils/toastify.jsx";
import SyncLoader from "react-spinners/SyncLoader";
import { useDispatch, useSelector } from "react-redux";
import {
  createPlan,
  deleteAPlan,
  getAllPlan,
} from "../../../features/Plan/PlanApiSlice.js";
import { setMessageEmpty } from "../../../features/Plan/PlanSlice.js";
import { BiEditAlt } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import swal from "sweetalert";

function AddPlan() {
  //modal
  const [open, setOpen] = useState(false);
  //dispatch via call api
  const dispatch = useDispatch();
  const { isError, message, isLoading, plan } = useSelector(
    (state) => state.plan
  );

  //get all plan
  useEffect(() => {
    dispatch(getAllPlan());
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
      dispatch(createPlan(value));
    },
  });

  // delete a plan
  const handleDeletePlan = (id) => {
    if (id) {
      swal({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          dispatch(deleteAPlan(id));
          // swal("Proof! Your Imaginary File Has Been Deleted", {
          //   icon: "success",
          // });
        } else {
          swal("Your Imaginary File Is Safe!");
        }
      });
    }
  };

  // message loading
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
    <>
      <SyncLoader
        color={"#4CAF50"}
        loading={isLoading}
        cssOverride={{ position: "fixed", top: "50%", left: "50%" }}
        size={15}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      <TopHeader name="Create a Plan"></TopHeader>
      <div id="buttonclient">
        <button onClick={() => setOpen(true)}>Add New Plan</button>
      </div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="mb-5 mt-4 adminLogin">
          <h4 className="title">Add new plan</h4>
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
      </Modal>
      <div className="cashout mt-3">
        <table>
          <thead>
            <tr>
              <th>SL</th>
              <th style={{ minWidth: "150px" }}>name</th>
              <th style={{ minWidth: "150px" }}>plan price</th>
              <th>dailyAds</th>
              <th>dailyIncome</th>
              <th>parAdsPrice</th>
              <th>validity</th>
              <th style={{ minWidth: "150px" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {plan?.length > 0 &&
              plan?.map((data, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{data?.name} </td>
                    <td>{data?.price} BDT</td>
                    <td>{data?.dailyAdvertisement}</td>
                    <td>{data?.dailyIncome} BDT</td>
                    <td>{data?.parAdsPrice} BDT</td>
                    <td>{data?.validity}</td>
                    <td>
                      <div className="actionbtn">
                        <Link to={`/admin/plan/${data?._id}`}>
                          <button id="edit">
                            <BiEditAlt />
                          </button>
                        </Link>
                        <button
                          id="delete"
                          onClick={() => handleDeletePlan(data?._id)}
                        >
                          <MdDelete />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default AddPlan;
