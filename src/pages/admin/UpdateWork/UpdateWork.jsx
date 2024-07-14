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
  getASingleWork,
  updateAWork,
} from "../../../features/Work/WorkApiSlice.js";
const UpdateWork = () => {
  //get id
  const { id } = useParams();

  //dispatch via call api
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { isError, message, isLoading, singleWork } = useSelector(
    (state) => state.work
  );

  //validation schema
  const schema = Yup.object().shape({
    name: Yup.string().required("name is required"),
  });

  // from handlers
  const formik = useFormik({
    initialValues: {
      name: "",
    },
    validationSchema: schema,
    onSubmit: (value) => {
      dispatch(updateAWork({ id, value }));
    },
  });

  // set previous values

  useEffect(() => {
    if (singleWork) {
      formik.setValues({
        ...formik.values,
        name: singleWork?.name || "",
      });
    }
  }, [singleWork, formik.setValues]);

  // get single work
  useEffect(() => {
    dispatch(getASingleWork(id));
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
      if (message == "Work updated successfully") {
        navigate("/admin/work");
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
      <div className="">
        <TopHeader name="Update Advertisement" link="/admin/work"></TopHeader>
      </div>
      <div className="mb-5 mt-4 adminLogin">
        <h4 className="title">Update Advertisement</h4>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="adminUser">Advertisement name</label>
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
};

export default UpdateWork;
