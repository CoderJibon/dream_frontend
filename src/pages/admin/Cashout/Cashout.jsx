import "../Custom.css";
import TopHeader from "../TopHeader/TopHeader.jsx";
import { useDispatch, useSelector } from "react-redux";
import formatToDate from "../../../utils/formatToData.js";
import { useEffect } from "react";
import toastify from "../../../utils/toastify.jsx";
import SyncLoader from "react-spinners/SyncLoader";
import {
  getAllCashout,
  statusCashout,
} from "../../../features/Cashout/CashoutApiSlice.js";
import { setMessageEmpty } from "../../../features/Cashout/CashoutSlice.js";
function Cashout() {
  //dispatch via call api
  const dispatch = useDispatch();
  const { isError, message, isLoading, cashout } = useSelector(
    (state) => state.cashout
  );

  //get all cashout
  useEffect(() => {
    dispatch(getAllCashout());
  }, [dispatch]);

  const handleStatus = ({ id, status }) => {
    dispatch(statusCashout({ id, status }));
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
      <TopHeader name="Cashout"></TopHeader>
      <table>
        <thead>
          <tr>
            <th>SL</th>
            <th>Method</th>
            <th>withdrawal Amount</th>
            <th>Ac.Number</th>
            <th style={{ minWidth: "150px" }}>Date</th>
            <th style={{ minWidth: "150px" }}>Status</th>
            <th style={{ minWidth: "150px" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {cashout.length > 0 &&
            cashout
              ?.map((data, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{data?.method} </td>
                    <td>{data?.amount} BDT</td>
                    <td>{data?.accountNumber}</td>
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

export default Cashout;
