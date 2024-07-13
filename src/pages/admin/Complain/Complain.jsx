import "../Custom.css";
import TopHeader from "../TopHeader/TopHeader.jsx";
import { useDispatch, useSelector } from "react-redux";
import formatToDate from "../../../utils/formatToData.js";
import { useEffect } from "react";
import toastify from "../../../utils/toastify.jsx";
import SyncLoader from "react-spinners/SyncLoader";
import { setMessageEmpty } from "../../../features/Support/SupportSlice.js";
import {
  getAllSupport,
  statusSupport,
} from "../../../features/Support/SupportApiSlice.js";

function Complain() {
  //dispatch via call api
  const dispatch = useDispatch();
  const { isError, message, isLoading, support } = useSelector(
    (state) => state.support
  );

  //get all deposit
  useEffect(() => {
    dispatch(getAllSupport());
  }, [dispatch]);

  const handleStatus = ({ id, status }) => {
    dispatch(statusSupport({ id, status }));
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
    <div className="cashout mt-3">
      <SyncLoader
        color={"#4CAF50"}
        loading={isLoading}
        cssOverride={{ position: "fixed", top: "50%", left: "50%" }}
        size={15}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      <TopHeader name="Complain by Support Team"></TopHeader>
      <table>
        <thead>
          <tr>
            <th>SL</th>
            <th>Name</th>
            <th>Email</th>
            <th>Subject</th>
            <th>Priority</th>
            <th style={{ minWidth: "200px" }}>Message</th>
            <th style={{ minWidth: "150px" }}>Date</th>
            <th style={{ minWidth: "150px" }}>Status</th>
            <th style={{ minWidth: "150px" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {support.length > 0 &&
            support
              ?.map((data, index) => {
                return (
                  <tr key={data._id}>
                    <td>{index + 1}</td>
                    <td>{data?.name}</td>
                    <td>{data?.email} BDT</td>
                    <td>{data?.subject}</td>
                    <td>{data?.Priority}</td>
                    <td>{data?.Message}</td>
                    <td>{formatToDate(data?.createdAt)}</td>
                    <td id={data?.status}>{data?.status}</td>
                    <td>
                      <select
                        onChange={(e) =>
                          handleStatus({ id: data._id, status: e.target.value })
                        }
                        name="status"
                        id=""
                      >
                        <option value="">--select--</option>
                        <option value="pending">pending</option>
                        <option value="rejected">rejected</option>
                        <option value="success">success</option>
                      </select>
                    </td>
                  </tr>
                );
              })
              .reverse()}
        </tbody>
      </table>
    </div>
  );
}

export default Complain;
