import React, { useEffect, useState } from "react";
import "./DHistory.css";
import { Link } from "react-router-dom";

const DHistory = () => {
  const [deposit, setDeposit] = useState([]);

  useEffect(() => {
    // axios.get("http://localhost:5000/api/deposit/depositHistory", {
    //     headers: {
    //         'userid': userId
    //     }
    // })
    //     .then(res => {
    //         setDeposit(res.data.deposits);
    //         console.log(res.data);
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     });
  }, []);

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
                <th>Amount</th>
                <th>Method</th>
                <th>Ac.Number</th>
                <th>TRX</th>
                <th>Status</th>
                <th>DATE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>SL</td>
                <td>Amount</td>
                <td>Method</td>
                <td>Ac.Number</td>
                <td>TRX</td>
                <td>Status</td>
                <td>DATE</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DHistory;
