import React from "react";
import TopHeader from "../TopHeader/TopHeader.jsx";

const Work = () => {
  return (
    <>
      <div className="">
        <TopHeader name="Create a Work"></TopHeader>
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

export default Work;
