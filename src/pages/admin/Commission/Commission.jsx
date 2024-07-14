import React, { useEffect, useState } from "react";
import TopHeader from "../TopHeader/TopHeader.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllDCommission,
  updateCommission,
} from "../../../features/Commission/CommissionApiSlice.js";
import { BiEditAlt } from "react-icons/bi";
import { Modal } from "react-responsive-modal";
import toastify from "../../../utils/toastify.jsx";
import SyncLoader from "react-spinners/SyncLoader";
//form handling for
import { useFormik } from "formik";
import * as Yup from "yup";
import { setMessageEmpty } from "../../../features/Commission/CommissionSlice.js";

const Commission = () => {
  //modal
  const [open, setOpen] = useState(false);
  const [currentCommission, setCurrentCommission] = useState(null);

  //dispatch via call api
  const dispatch = useDispatch();
  const { isError, message, isLoading, commission } = useSelector(
    (state) => state.commission
  );

  //get all commission
  useEffect(() => {
    dispatch(getAllDCommission());
  }, [dispatch]);

  //validation schema
  const schema = Yup.object().shape({
    reference: Yup.string(),
    commission: Yup.string().required("Commission is required"),
    status: Yup.string().required("Status is required"),
  });
  // from handlers
  const formik = useFormik({
    initialValues: {
      id: "",
      reference: "",
      commission: "",
      status: "",
    },
    validationSchema: schema,
    onSubmit: (value) => {
      if (value) {
        const id = value.id;
        const data = {
          reference: value.reference,
          commission: value.commission,
          status: value.status,
        };

        dispatch(updateCommission({ id, data }));
      }
    },
  });

  // Function to handle the opening of the modal and setting Formik values
  const handleOpenModal = (data) => {
    setCurrentCommission(data);

    formik.setValues({
      id: data._id,
      reference: data.reference,
      commission: data.commission,
      status: data.status,
    });
    setOpen(true);
  };

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
      <div className="Commission">
        <TopHeader name="Commission"></TopHeader>
      </div>
      <table>
        <thead>
          <tr>
            <th>SL</th>
            <th>Reference</th>
            <th>New User</th>
            <th>Commission</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {commission?.length > 0 &&
            commission
              ?.map((data, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{data?.reference}</td>
                    <td>{data?.newUser} </td>
                    <td>{data?.commission} BDT</td>
                    <td id={data?.status}>{data?.status}</td>
                    <td>
                      <Modal open={open} onClose={() => setOpen(false)}>
                        <div className="mb-5 mt-4 adminLogin">
                          <h4 className="title">Update Commission</h4>
                          <form onSubmit={formik.handleSubmit}>
                            <label htmlFor="adminUser">Reference</label>
                            <br />
                            <input
                              className="inputField"
                              name="reference"
                              type="text"
                              disabled
                              readOnly
                              value={formik.values.reference}
                            />
                            <input
                              className="inputField"
                              name="reference"
                              type="text"
                              hidden
                              readOnly
                              value={formik.values.id}
                            />
                            <br />
                            <label htmlFor="adminUser">Commission BDT</label>
                            <br />
                            <input
                              className="inputField"
                              name="commission"
                              required
                              type="number"
                              placeholder="Enter commission TK"
                              onChange={formik.handleChange}
                              value={formik.values.commission}
                            />
                            <br />
                            <label htmlFor="adminUser">Update status</label>
                            <br />
                            <select
                              name="status"
                              id=""
                              onChange={formik.handleChange}
                              value={formik.values.status}
                            >
                              <option value="">--select--</option>
                              <option value="pending">pending</option>
                              <option value="rejected">rejected</option>
                              <option value="success">success</option>
                            </select>
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
                      <div className="actionbtn">
                        <button onClick={() => handleOpenModal(data)} id="edit">
                          <BiEditAlt />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })
              ?.reverse()}
        </tbody>
      </table>
    </>
  );
};

export default Commission;
