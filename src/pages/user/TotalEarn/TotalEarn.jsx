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
    <div className="body">
      <header className="diposits">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="diposit-header">
                <Link to="/">
                  <i className="bi bi-chevron-left"></i>
                </Link>{" "}
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
