import React, { useEffect, useState } from "react";
import "./DHistory.css";
import { Link } from "react-router-dom";

const CHistory = () => {
  const [cashout, setCashout] = useState([]);

  useEffect(() => {
    // axios.get("http://localhost:5000/api/cashout/cashoutHistory", {
    //     headers: {
    //         'userid': userId
    //     }
    // })
    //     .then(res => {
    //         setCashout(res.data.cashout);
    //         console.log(res.data);
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     });
  }, []);

  return (
    <div>
      <div class="body">
        <header class="diposits">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div class="diposit-header">
                  <Link to="/">
                    <i class="bi bi-chevron-left"></i>
                  </Link>{" "}
                  <h2>Cashout History</h2>
                </div>
              </div>
            </div>
          </div>
        </header>

        <table class="commisiontable">
          <thead>
            <tr>
              <th>SL</th>
              <th>Amount</th>
              <th>Method</th>
              <th>Ac.Number</th>
              <th>Note</th>
              <th>Status</th>
              <th>DATE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>amount</td>
              <td>method</td>
              <td>account_number</td>
              <td>note</td>
              <td>False</td>
              <td>data</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CHistory;
