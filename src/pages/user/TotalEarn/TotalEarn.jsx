import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./TotalEarn.css";

const TotalEarn = () => {
  const [userEarn, setUserEarn] = useState(null);
  useEffect(() => {
    // axios.get("http://localhost:5000/api/user/earn",{
    //     headers:{
    //         "userid":userId,
    //     }
    // }).then((res)=>{
    //     setUserEarn(res.data.newUser);
    //     console.log(res.data.newUser);
    // }).catch((err)=>{
    //     alert("Try later.");
    // })
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
                <h2>Total Earn</h2>
              </div>
            </div>
          </div>
        </div>
      </header>

      <table class="earntable">
        <thead>
          <tr>
            <th>SL NO:</th>
            <th>Total Deposit</th>
            <th>Total Cashout</th>
            <th>Not approve</th>
            <th>Total Earn</th>
            <th>Current Balance</th>
          </tr>
        </thead>
        <tbody>
          {userEarn && (
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TotalEarn;
