import "../Custom.css";
import TopHeader from "../TopHeader/TopHeader.jsx";
import { useDispatch, useSelector } from "react-redux";
import formatToDate from "../../../utils/formatToData.js";
import { useEffect } from "react";
import toastify from "../../../utils/toastify.jsx";
import { setMessageEmpty } from "../../../features/Deposit/DepositSlice.js";
import SyncLoader from "react-spinners/SyncLoader";
import {
  getAllDeposit,
  statusDeposit,
} from "../../../features/Deposit/DepositApiSlice.js";
function Deposit() {
  //dispatch via call api
  const dispatch = useDispatch();
  const { isError, message, isLoading, deposit } = useSelector(
    (state) => state.deposit
  );

  //get all deposit
  useEffect(() => {
    //if user is login already
    dispatch(getAllDeposit());
  }, [dispatch]);

  const handleStatus = ({ id, status }) => {
    dispatch(statusDeposit({ id, status }));
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
    <div className="cashout mt-3 body">
      <SyncLoader
        color={"#4CAF50"}
        loading={isLoading}
        cssOverride={{ position: "fixed", top: "50%", left: "50%" }}
        size={15}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      <TopHeader name="Deposit"></TopHeader>
      <table>
        <thead>
          <tr>
            <th>SL</th>
            <th>method</th>
            <th>amount</th>
            <th>Ac.Number</th>
            <th>TRX</th>
            <th style={{ minWidth: "150px" }}>Date</th>
            <th style={{ minWidth: "150px" }}>Status</th>
            <th style={{ minWidth: "150px" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {deposit.length > 0 &&
            deposit
              ?.map((data, index) => {
                return (
                  <tr key={data._id}>
                    <td>{index + 1}</td>
                    <td>{data?.method}</td>
                    <td>{data?.amount} BDT</td>
                    <td>{data?.phone}</td>
                    <td>{data?.transactionID}</td>
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

export default Deposit;
