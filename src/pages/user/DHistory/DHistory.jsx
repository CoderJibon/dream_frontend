import { useSelector } from "react-redux";
import "./DHistory.css";
import { Link } from "react-router-dom";
import formatToDate from "../../../utils/formatToData.js";

const DHistory = () => {
  //dispatch via call api
  const { user } = useSelector((state) => state.auth);

  return (
    <div>
      <div className="section">
        <header className="diposits">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="diposit-header">
                  <Link to="/">
                    <i className="bi bi-chevron-left"></i>
                  </Link>{" "}
                  <h2>Deposit History</h2>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="cashout">
          <table>
            <thead>
              <tr>
                <th>SL</th>
                <th>method</th>
                <th>amount</th>
                <th>Ac.Number</th>
                <th>TRX</th>
                <th style={{ minWidth: "150px" }}>Status</th>
                <th style={{ minWidth: "150px" }}>Date</th>
              </tr>
            </thead>
            <tbody>
              {user?.deposit?.length > 0 &&
                user?.deposit
                  ?.map((data, index) => {
                    return (
                      <tr key={data._id}>
                        <td>{index + 1}</td>
                        <td>{data?.method}</td>
                        <td>{data?.amount} BDT</td>
                        <td>{data?.phone}</td>
                        <td>{data?.transactionID}</td>
                        <td id={data?.status}>{data?.status}</td>
                        <td>{formatToDate(data?.createdAt)}</td>
                      </tr>
                    );
                  })
                  ?.reverse()}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DHistory;
