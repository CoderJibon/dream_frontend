import React, { useEffect } from "react";
import TopHeader from "../TopHeader/TopHeader.jsx";
import formatToDate from "../../../utils/formatToData.js";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser } from "../../../features/Auth/AuthApiSlice.js";
const User = () => {
  //dispatch via call api
  const dispatch = useDispatch();
  //dispatch via call api
  const { users } = useSelector((state) => state.auth);

  //get all users
  useEffect(() => {
    //if user is login already
    dispatch(getAllUser());
  }, [dispatch]);

  return (
    <>
      <div className="">
        <TopHeader name="User List"></TopHeader>
      </div>
      <div className="cashout mt-3">
        <table>
          <thead>
            <tr>
              <th>SL</th>
              <th style={{ minWidth: "150px" }}>name</th>
              <th style={{ minWidth: "150px" }}>userName</th>
              <th style={{ minWidth: "150px" }}>email</th>
              <th style={{ minWidth: "150px" }}>mobile</th>
              <th style={{ minWidth: "150px" }}>Balance</th>
              <th style={{ minWidth: "150px" }}>join Date</th>
              <th style={{ minWidth: "150px" }}>user ID</th>
            </tr>
          </thead>
          <tbody>
            {users?.length > 0 &&
              users
                ?.map((data, index) => {
                  return (
                    <tr key={data._id}>
                      <td>{index + 1}</td>
                      <td>{data?.name}</td>
                      <td>{data?.userName}</td>
                      <td>{data?.email}</td>
                      <td>{data?.mobile}</td>
                      <td>{data?.myBalance} BDT</td>
                      <td>{formatToDate(data?.createdAt)}</td>
                      <td>{data?._id}</td>
                    </tr>
                  );
                })
                ?.reverse()}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default User;
