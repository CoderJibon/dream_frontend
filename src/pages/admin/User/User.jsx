import React from "react";
import TopHeader from "../TopHeader/TopHeader.jsx";

const User = () => {
  return (
    <>
      <div className="">
        <TopHeader name="User List"></TopHeader>
      </div>
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
    </>
  );
};

export default User;
