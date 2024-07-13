import React from "react";
import { Link } from "react-router-dom";
import "./Transection.css";
import { useSelector } from "react-redux";
import formatToDate from "../../../utils/formatToData.js";
const Transection = () => {
  //dispatch via call api
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="body">
      <header className="diposits">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="diposit-header">
                <Link to="/">
                  <i className="bi bi-chevron-left"></i>
                </Link>
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
            <th>Method</th>
            <th>Amount</th>
            <th>Ac.Number</th>
            <th>Note</th>
            <th style={{ minWidth: "150px" }}>Status</th>
            <th style={{ minWidth: "150px" }}>Date</th>
          </tr>
        </thead>
        <tbody>
          {user?.cashOut?.length > 0 &&
            user?.cashOut
              ?.map((data, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{data?.method}</td>
                    <td>{data?.amount} BDT</td>
                    <td>{data?.accountNumber}</td>
                    <td>{data?.note}</td>
                    <td id={data?.status}>{data?.status}</td>
                    <td>{formatToDate(data?.createdAt)}</td>
                  </tr>
                );
              })
              ?.reverse()}
        </tbody>
      </table>
      <h3 className="title mt-3">All deposit transaction here.</h3>
      <div className="cashout">
        <table>
          <thead>
            <tr>
              <th>SL</th>
              <th>method</th>
              <th>amount</th>
              <th>Ac.Number</th>
              <th>TRX</th>
              <th style={{ minWidth: "150px" }}>Status</th>
              <th style={{ minWidth: "150px" }}>Date</th>
            </tr>
          </thead>
          <tbody>
            {user?.deposit?.length > 0 &&
              user?.deposit
                ?.map((data, index) => {
                  return (
                    <tr key={data._id}>
                      <td>{index + 1}</td>
                      <td>{data?.method}</td>
                      <td>{data?.amount} BDT</td>
                      <td>{data?.phone}</td>
                      <td>{data?.transactionID}</td>
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
  );
};

export default Transection;
