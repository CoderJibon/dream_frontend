import TopHeader from "../TopHeader/TopHeader.jsx";
//form handling for
import { useFormik } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import { Modal } from "react-responsive-modal";
import toastify from "../../../utils/toastify.jsx";
import SyncLoader from "react-spinners/SyncLoader";
import { useDispatch, useSelector } from "react-redux";
import { BiEditAlt } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import {
  createWork,
  deleteAWork,
  getAllWork,
} from "../../../features/Work/WorkApiSlice.js";
import { setMessageEmpty } from "../../../features/Plan/PlanSlice.js";
import { Link } from "react-router-dom";
import swal from "sweetalert";
const Work = () => {
  //modal
  const [open, setOpen] = useState(false);
  //dispatch via call api
  const dispatch = useDispatch();
  const { isError, message, isLoading, work } = useSelector(
    (state) => state.work
  );

  //get all work
  useEffect(() => {
    dispatch(getAllWork());
  }, [dispatch]);

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
      dispatch(createWork(value));
    },
  });

  // delete a work
  const handleDeleteWork = (id) => {
    if (id) {
      swal({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          dispatch(deleteAWork(id));
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
      <div className="">
        <TopHeader name="Create a Advertisement"></TopHeader>
      </div>
      <div id="buttonclient">
        <button onClick={() => setOpen(true)}>Add New Advertisement</button>
      </div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="mb-5 mt-4 adminLogin">
          <h4 className="title">Add new Advertisement</h4>
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
      </Modal>
      <div className="cashout mt-3">
        <table>
          <thead>
            <tr>
              <th>SL</th>
              <th>Advertisement Name</th>
              <th>Advertisement ID</th>
              <th style={{ minWidth: "150px" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {work?.length > 0 &&
              work?.map((data, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{data?.name} </td>
                    <td>{data?._id}</td>
                    <td>
                      <div className="actionbtn">
                        <Link to={`/admin/work/${data?._id}`}>
                          <button id="edit">
                            <BiEditAlt />
                          </button>
                        </Link>
                        <button
                          id="delete"
                          onClick={() => handleDeleteWork(data?._id)}
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
};

export default Work;
