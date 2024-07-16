import React from "react";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./Support.css";
import { useSelector } from "react-redux";
import formatToDate from "../../../utils/formatToData.js";
const Support = () => {
  //dispatch via call api
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="section">
      <header className="diposits">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="diposit-header">
                <Link to="/">
                  <i className="bi bi-chevron-left"></i>
                </Link>
                <h2>Support</h2>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="complan1">
        <Link to="/complaint">
          <button className="complanbtn">
            <FiPlus size={20} />
            New Tricket
          </button>
        </Link>
      </div>
      <div>
        <div className="container">
          <div className="row justify-content-center mt-4">
            <div className="col-md-12">
              <div className="card" id="cardstyle">
                <div className="card-body p-0">
                  <div className="table-responsive--sm">
                    <table className="table">
                      <thead
                        className="thead"
                        style={{ backGround: "crimson" }}
                      >
                        <tr>
                          <th style={{ color: "#fff" }}>SL</th>
                          <th style={{ color: "#fff" }}>Name</th>
                          <th style={{ color: "#fff" }}>Email</th>
                          <th style={{ color: "#fff" }}>Subject</th>
                          <th style={{ color: "#fff" }}>Message</th>
                          <th style={{ color: "#fff" }}>Priority</th>
                          <th style={{ minWidth: "150px" }}>Status</th>
                          <th style={{ minWidth: "150px" }}>Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        {user?.support?.length > 0 &&
                          user?.support
                            ?.map((data, index) => {
                              data;
                              return (
                                <tr key={index}>
                                  <td>{index + 1}</td>
                                  <td>{data?.name}</td>
                                  <td>{data?.email}</td>
                                  <td>{data?.subject}</td>
                                  <td>{data?.Message}</td>
                                  <td>{data?.Priority}</td>
                                  <td id={data?.status}>{data?.status}</td>
                                  <td>{formatToDate(data?.createdAt)}</td>
                                </tr>
                              );
                            })
                            ?.reverse()}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
