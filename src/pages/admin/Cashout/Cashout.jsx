import React, { useEffect, useState } from "react";
import "../Custom.css";
import TopHeader from "../TopHeader/TopHeader.jsx";
function Cashout(props) {
  const [cashout, setCashout] = useState([]);

  useEffect(() => {
    // axios.get("http://localhost:5000/api/cashout/allCashout").then((res)=>{
    //     setCashout(res.data.cashout);
    // }).catch((err)=>{
    //     setCashout("Some problem please try later");
    // })
  }, []);

  const handleCashout = (data) => {
    // const id = data.id;
    // const userId = data.userId;
    // axios.post(
    //     "http://localhost:5000/api/cashout/update",
    //     null,
    //     {
    //         headers: {
    //             "userid": userId, // Assuming you meant to use userId here
    //             "cashoutid": id
    //         }
    //     }
    // ).then((res) => {
    //     alert(res.data.message);
    // }).catch((err) => {
    //     alert(err.status);
    // });
  };

  return (
    <div className="cashout mt-3">
      <TopHeader name="Cashout"></TopHeader>
      <table>
        <thead>
          <tr>
            <th>SL</th>
            <th>Amount</th>
            <th>Method</th>
            <th>Ac.Number</th>
            <th>Status</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* {
                   Array.isArray(cashout) && cashout && cashout.map((data,idx)=>(
                       <tr>
                           <td>{idx+1}</td>
                           <td>{data.amount}</td>
                           <td>{data.method}</td>
                           <td>{data.account_number}</td>
                           <td>{data.status?"True":"False"}</td>
                           <td>{data.createdAt}</td>
                           <td><button onClick={()=>handleCashout(data)} className="submitBtn">Complete</button></td>
                       </tr>
                   ))
               } */}
        </tbody>
      </table>
    </div>
  );
}

export default Cashout;
