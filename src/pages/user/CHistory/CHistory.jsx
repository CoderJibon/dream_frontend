import "./DHistory.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import formatToDate from "../../../utils/formatToData.js";
const CHistory = () => {
  //dispatch via call api
  const { user } = useSelector((state) => state.auth);
  return (
    <div>
      <div className="body">
        <header className="diposits">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="diposit-header">
                  <Link to="/">
                    <i className="bi bi-chevron-left"></i>
                  </Link>{" "}
                  <h2>Cashout History</h2>
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
                <th>Method</th>
                <th>Amount</th>
                <th>Ac.Number</th>
                <th>Note</th>
                <th style={{ minWidth: "150px" }}>Status</th>
                <th style={{ minWidth: "150px" }}>Date</th>
              </tr>
            </thead>
            <tbody>
              {user?.cashOut?.length > 0 &&
                user?.cashOut
                  ?.map((data, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{data?.method}</td>
                        <td>{data?.amount} BDT</td>
                        <td>{data?.accountNumber}</td>
                        <td>{data?.note}</td>
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

export default CHistory;
