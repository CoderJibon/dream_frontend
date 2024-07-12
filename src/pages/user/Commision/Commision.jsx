import React from "react";
import "./Commision.css";
import { Link } from "react-router-dom";
const Commision = () => {
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
                  <h2>Commision</h2>
                </div>
              </div>
            </div>
          </div>
        </header>

        <table class="commisiontable">
          <thead>
            <tr>
              <th>SL NO:</th>
              <th>TRX</th>
              <th>BONUS FROM</th>
              <th>AMOUNT</th>
              <th>FINAL BALANCE</th>
              <th>REMARKS</th>
              <th>DATE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Apple</td>
              <td>Red</td>
              <td>$1.00</td>
              <td>Apple</td>
              <td>Red</td>
              <td>$1.00</td>
              <td>$1.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Commision;
