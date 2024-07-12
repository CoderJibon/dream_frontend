import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Transection.css";
const Transection = () => {
  const [deposit, setDeposit] = useState([]);
  const [cashout, setCashout] = useState([]);

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
    <div class="body">
      <header class="diposits">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="diposit-header">
                <Link to="/">
                  <i class="bi bi-chevron-left"></i>
                </Link>{" "}
                <h2>Transection</h2>
              </div>
            </div>
          </div>
        </div>
      </header>
      <h3 className="title mt-3">All cashout transaction here.</h3>
      <table className="cashout">
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
          {/* {
                    cashout && cashout.map((data, idx) => (
                        <tr key={idx}>
                            <td>{idx + 1}</td>
                            <td>{data.amount}</td>
                            <td>{data.method}</td>
                            <td>{data.account_number}</td>
                            <td>{data.note}</td>
                            <td>{data.status ? "True" : "False"}</td>
                            <td>{data.createdAt}</td>
                        </tr>
                    ))
                } */}
        </tbody>
      </table>
      <h3 className="title mt-3">All deposit transaction here.</h3>
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
            {/* {
                        deposit && deposit.map((data, idx) => (
                            <tr key={idx}>
                                <td>{idx + 1}</td>
                                <td>{data.amount}</td>
                                <td>{data.type}</td>
                                <td>{data.number}</td>
                                <td>{data.transaction_id}</td>
                                <td>{data.status ? "True" : "False"}</td>
                                <td>{data.createdAt}</td>
                            </tr>
                        ))
                    } */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transection;
