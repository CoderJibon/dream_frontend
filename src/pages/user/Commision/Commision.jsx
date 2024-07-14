import React from "react";
import "./Commision.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Commision = () => {
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
                  <h2>Commision</h2>
                </div>
              </div>
            </div>
          </div>
        </header>

        <table className="commisiontable">
          <thead>
            <tr>
              <th>SL NO:</th>
              <th>New User</th>
              <th>Commission</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {user?.commission?.length > 0 &&
              user?.commission
                ?.map((data, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{data?.newUser}</td>
                      <td>{data?.commission} BDT</td>
                      <td id={data?.status}>{data?.status}</td>
                    </tr>
                  );
                })
                ?.reverse()}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Commision;
