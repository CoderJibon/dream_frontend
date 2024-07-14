import { Link } from "react-router-dom";
import "./TotalEarn.css";
import formatToDate from "../../../utils/formatToData.js";
import { useSelector } from "react-redux";
const TotalEarn = () => {
  //dispatch via call api
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="body">
      <header className="diposits">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="diposit-header">
                <Link to="/">
                  <i className="bi bi-chevron-left"></i>
                </Link>
                <h2>Total Earn</h2>
              </div>
            </div>
          </div>
        </div>
      </header>

      <table className="earntable">
        <thead>
          <tr>
            <th>SL NO:</th>
            <th>Name</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {user?.totalEarning?.length > 0 &&
            user?.totalEarning
              ?.map((data, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{data?.name}</td>
                    <td>{data?.amount} BDT</td>
                    <td>{formatToDate(data?.date)}</td>
                  </tr>
                );
              })
              ?.reverse()}
        </tbody>
      </table>
    </div>
  );
};

export default TotalEarn;
