import React, { useEffect, useState } from "react";
import "../Custom.css";
import TopHeader from "../TopHeader/TopHeader.jsx";

function Deposit(props) {
  const [deposit, setDeposit] = useState([]);

  useEffect(() => {
    // axios.get('http://localhost:5000/api/deposit/allDeposit')
    //     .then((res) => {
    //         setDeposit(res.data.deposit);
    //     })
    //     .catch((err) => {
    //         setDeposit('Some problem please try later');
    //     });
  }, []);

  const handleDeposit = (data) => {
    // const id = data.id;
    // const userId = data.userId;
    // axios.post(
    //     "http://localhost:5000/api/deposit/approveAdmin",
    //     null,
    //     {
    //         headers: {
    //             "userid": userId, // Assuming you meant to use userId here
    //             "depositid": id
    //         }
    //     }
    // ).then((res) => {
    //     alert(res.data.message);
    // }).catch((err) => {
    //     alert(err.status);
    // });
  };

  return (
    <div className="cashout mt-3 body">
      <TopHeader name="Deposit"></TopHeader>
      <table>
        <thead>
          <tr>
            <th>SL</th>
            <th>Amount</th>
            <th>Method</th>
            <th>Ac.Number</th>
            <th>TRX</th>
            <th>Status</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
}

export default Deposit;
